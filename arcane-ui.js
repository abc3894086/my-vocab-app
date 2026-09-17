(() => {
  'use strict';

  const ARC = {
    sprite: 'assets/arcane/icons.svg',
    focusPages: new Set(['page-flashcard', 'page-quiz']),
    pageMap: {
      'page-landing': 'home',
      'page-arcane-codex': 'codex',
      'page-arcane-trials': 'trials',
      'page-dungeon-select': 'atlas',
      'page-dungeon-toefl-sub': 'atlas',
      'page-adventure': 'atlas',
      'page-arcane-profile': 'profile'
    }
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function icon(name, cls = '') {
    return `<svg class="arcane-icon ${cls}" aria-hidden="true"><use href="${ARC.sprite}#${name}"></use></svg>`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function getFavoritesSafe() {
    try {
      return typeof getFavorites === 'function' ? getFavorites() : JSON.parse(localStorage.getItem('vocabPro_favorites')) || [];
    } catch (_) { return []; }
  }

  function getMistakesSafe() {
    try {
      if (typeof mistakeDB !== 'undefined' && Array.isArray(mistakeDB)) return mistakeDB;
      return (JSON.parse(localStorage.getItem('vocabPro_rpg')) || {}).mistakes || [];
    } catch (_) { return []; }
  }

  function vocabCount() {
    try {
      let total = 0;
      if (typeof vocabDB === 'undefined' || !vocabDB) return 0;
      total += Array.isArray(vocabDB.TOEIC) ? vocabDB.TOEIC.length : 0;
      if (vocabDB.TOEFL) Object.values(vocabDB.TOEFL).forEach(v => { if (Array.isArray(v)) total += v.length; });
      return total;
    } catch (_) { return 0; }
  }

  function masteredStageCount() {
    let total = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith('vocabRPG_mastery_')) continue;
        const data = JSON.parse(localStorage.getItem(key)) || {};
        Object.values(data).forEach(record => { if ((record?.count || 0) >= 5) total++; });
      }
    } catch (_) {}
    return total;
  }

  function userInfo() {
    try {
      const user = typeof auth !== 'undefined' ? auth.currentUser : null;
      if (!user) return { name: 'Scholar', initial: 'A', signedIn: false };
      const name = user.displayName || user.email?.split('@')[0] || 'Scholar';
      return { name, initial: name.trim().charAt(0).toUpperCase() || 'A', signedIn: true };
    } catch (_) {
      return { name: 'Scholar', initial: 'A', signedIn: false };
    }
  }

  function categoryCount(main, sub) {
    try {
      if (typeof vocabDB === 'undefined') return 0;
      if (main === 'TOEIC') return vocabDB.TOEIC?.length || 0;
      return vocabDB.TOEFL?.[sub]?.length || 0;
    } catch (_) { return 0; }
  }

  function createPage(id) {
    let page = document.getElementById(id);
    if (!page) {
      page = document.createElement('div');
      page.id = id;
      page.className = 'page';
      $('.app-container')?.appendChild(page);
    }
    return page;
  }

  function buildBottomNav() {
    if ($('.arcane-bottom-nav')) return;
    const nav = document.createElement('nav');
    nav.className = 'arcane-bottom-nav';
    nav.setAttribute('aria-label', '主要導覽');
    nav.innerHTML = [
      ['home', 'home', '首頁'],
      ['codex', 'codex', '卡庫'],
      ['trials', 'trials', '試煉'],
      ['atlas', 'atlas', '星圖'],
      ['profile', 'profile', '我的']
    ].map(([key, ico, label]) => `
      <button class="arcane-nav-item" data-arcane-nav="${key}" type="button">
        ${icon(ico)}<span>${label}</span>
      </button>`).join('');
    $('.app-container')?.appendChild(nav);
    nav.addEventListener('click', e => {
      const btn = e.target.closest('[data-arcane-nav]');
      if (!btn) return;
      const key = btn.dataset.arcaneNav;
      if (key === 'home') showPage('page-landing');
      if (key === 'codex') { refreshCodex(); showPage('page-arcane-codex'); }
      if (key === 'trials') { refreshTrials(); showPage('page-arcane-trials'); }
      if (key === 'atlas') selectMode('dungeon');
      if (key === 'profile') { refreshProfile(); showPage('page-arcane-profile'); }
    });
  }

  function miniCard(word) {
    const meaning = word?.details?.[0]?.cn || word?.cn || '尚未記錄';
    return `<button class="arcane-mini-card" type="button" data-word="${escapeHtml(word?.en || '')}">
      <span class="mini-star">✦</span>
      <strong>${escapeHtml(word?.en || 'Unknown')}</strong>
      <span>${escapeHtml(meaning)}</span>
    </button>`;
  }

  function getFeaturedCards() {
    const favs = getFavoritesSafe();
    if (favs.length) return { title: '最近珍藏', cards: favs.slice(-3).reverse() };
    try {
      return { title: '今日推薦', cards: (vocabDB?.TOEIC || []).slice(0, 3) };
    } catch (_) {
      return { title: '今日推薦', cards: [] };
    }
  }

  function buildHome() {
    const page = $('#page-landing');
    if (!page) return;
    const user = userInfo();
    const featured = getFeaturedCards();
    const mistakes = getMistakesSafe().length;
    const favs = getFavoritesSafe().length;

    page.innerHTML = `<div class="arcane-home">
      <header class="arcane-brand-row">
        <div class="arcane-brand">
          <img src="assets/arcane/emblem.svg" alt="Arcane Library">
          <div class="arcane-brand-name"><strong>ARCANE LIBRARY</strong><span>星象魔法圖書館</span></div>
        </div>
        <button class="arcane-account-pill" type="button" data-go-profile aria-label="我的帳號">${escapeHtml(user.initial)}</button>
      </header>

      <section class="arcane-panel arcane-hero">
        <span class="arcane-kicker">Today's discovery</span>
        <h1 class="arcane-display">讓今天的知識<br>成為新的星光</h1>
        <p>從一組十張奧術卡開始。每一次探索、試煉與複習，都會讓你的星圖更加完整。</p>
        <button class="arcane-primary-btn" type="button" data-start-daily>開始今日探索</button>
      </section>

      <div class="arcane-section-head"><h2>今日狀態</h2><span>Library status</span></div>
      <section class="arcane-stat-grid">
        <button class="arcane-stat-card" type="button" data-go-corrupted><b>${mistakes}</b><span>待淨化卡片</span></button>
        <button class="arcane-stat-card" type="button" data-go-favorites><b>${favs}</b><span>珍藏卡片</span></button>
      </section>

      <div class="arcane-section-head"><h2>${featured.title}</h2><span>Celestial cards</span></div>
      <section class="arcane-mini-cards">${featured.cards.map(miniCard).join('')}</section>
    </div>`;

    $('[data-go-profile]', page)?.addEventListener('click', () => { refreshProfile(); showPage('page-arcane-profile'); });
    $('[data-start-daily]', page)?.addEventListener('click', startDailyStudy);
    $('[data-go-corrupted]', page)?.addEventListener('click', () => {
      if (!getMistakesSafe().length) return arcaneNotice('腐化檔案目前是空的', '你目前沒有需要淨化的錯題卡片。');
      startMistakeQuiz();
    });
    $('[data-go-favorites]', page)?.addEventListener('click', () => {
      if (!getFavoritesSafe().length) return arcaneNotice('還沒有珍藏卡片', '在單字卡右上角點擊星徽，就能加入珍藏。');
      try { currentMode = 'learn'; } catch (_) {}
      loadFavorites();
    });
  }

  function startDailyStudy() {
    try {
      const raw = vocabDB?.TOEIC || [];
      if (!raw.length) return;
      currentMode = 'learn';
      isAdventureMode = false;
      currentCategoryLabel = '今日探索 · TOEIC';
      currentList = [...raw].sort(() => Math.random() - .5).slice(0, Math.min(10, raw.length));
      currentIndex = 0;
      const title = $('#fc-title');
      if (title) title.textContent = '今日探索';
      showPage('page-flashcard');
      loadCard();
    } catch (err) { console.error('Arcane daily study failed', err); }
  }

  function buildCodex() {
    const page = createPage('page-arcane-codex');
    page.innerHTML = `<div class="arcane-page-shell">
      <header class="arcane-page-header">
        <div><span class="arcane-kicker">Celestial collection</span><h1>奧術卡庫</h1><p>依領域探索你的知識卡牌。學過、珍藏與精通的卡片，都會留在這座星冊之中。</p></div>
        <button class="arcane-round-btn" type="button" data-codex-search aria-label="搜尋">${icon('search')}</button>
      </header>
      <div id="arcane-codex-content"></div>
    </div>`;
    $('[data-codex-search]', page)?.addEventListener('click', () => arcaneNotice('卡牌搜尋', '搜尋功能會放在下一輪細節優化；這一版先完成整體體驗與視覺系統。'));
    refreshCodex();
  }

  function refreshCodex() {
    const host = $('#arcane-codex-content');
    if (!host) return;
    const favCount = getFavoritesSafe().length;
    const defs = [
      ['Astronomy', '天文', 'AST'], ['Biology', '生物', 'BIO'], ['Geography', '地理', 'GEO'],
      ['Psychology', '心理學', 'PSY'], ['History', '歷史考古', 'HIS'], ['Art', '藝術音樂', 'ART'],
      ['Geology', '地質學', 'GLY'], ['Business', '商業經濟', 'BUS'], ['LifeScience', '生命科學', 'LIF']
    ];
    host.innerHTML = `<div class="arcane-category-grid">
      <button class="arcane-category-card wide" data-open-favorites type="button"><span class="orb">★</span><strong>我的珍藏</strong><small>Favorite Arcane Cards</small><span class="count">${favCount} CARDS</span></button>
      <button class="arcane-category-card wide" data-open-main="TOEIC" type="button"><span class="orb">T</span><strong>TOEIC 星冊</strong><small>Business & daily language</small><span class="count">${categoryCount('TOEIC')} CARDS</span></button>
      ${defs.map(([key, zh, mark]) => `<button class="arcane-category-card" data-open-sub="${key}" type="button"><span class="orb">${mark}</span><strong>${zh}</strong><small>${key}</small><span class="count">${categoryCount('TOEFL', key)} CARDS</span></button>`).join('')}
    </div>`;
    $('[data-open-favorites]', host)?.addEventListener('click', () => {
      if (!getFavoritesSafe().length) return arcaneNotice('還沒有珍藏卡片', '在任一張奧術卡右上角點擊星徽，即可加入珍藏。');
      currentMode = 'learn'; loadFavorites();
    });
    $('[data-open-main]', host)?.addEventListener('click', () => { currentMode = 'learn'; handleCategorySelect('TOEIC'); });
    $$('[data-open-sub]', host).forEach(btn => btn.addEventListener('click', () => { currentMode = 'learn'; handleCategorySelect('TOEFL', btn.dataset.openSub); }));
  }

  function buildTrials() {
    const page = createPage('page-arcane-trials');
    page.innerHTML = `<div class="arcane-page-shell">
      <header class="arcane-page-header"><div><span class="arcane-kicker">Arcane trials</span><h1>星術試煉</h1><p>透過不同形式的試煉驗證記憶；答錯的卡牌會進入腐化檔案，等待再次淨化。</p></div></header>
      <div id="arcane-trial-content" class="arcane-trial-list"></div>
    </div>`;
    refreshTrials();
  }

  function trialSigil(content) { return `<span class="arcane-trial-sigil">${content}</span>`; }

  function refreshTrials() {
    const host = $('#arcane-trial-content');
    if (!host) return;
    host.innerHTML = `
      <button class="arcane-trial-card primary" type="button" data-trial="word">${trialSigil('W')}<span><strong>單字試煉</strong><p>從 TOEIC 或 TOEFL 星冊中選擇領域，進行雙向字義測驗。</p></span></button>
      <button class="arcane-trial-card" type="button" data-trial="grammar">${trialSigil('G')}<span><strong>文法試煉</strong><p>測試句型與文法判斷。</p></span><span class="arrow">›</span></button>
      <button class="arcane-trial-card" type="button" data-trial="cloze">${trialSigil('C')}<span><strong>填空試煉</strong><p>在語境中找回正確的字詞。</p></span><span class="arrow">›</span></button>
      <button class="arcane-trial-card arcane-corrupted" type="button" data-trial="corrupted">${trialSigil('◇')}<span><strong>腐化檔案</strong><p>${getMistakesSafe().length} 張卡片等待淨化，連續答對三次即可恢復。</p></span><span class="arrow">›</span></button>`;
    $$('[data-trial]', host).forEach(btn => btn.addEventListener('click', () => {
      const type = btn.dataset.trial;
      if (type === 'word') {
        selectMode('quiz');
        showQuizVocabSelection();
        beautifyLegacyPage();
      } else if (type === 'grammar') {
        currentMode = 'quiz'; startQuizSetup('grammar');
      } else if (type === 'cloze') {
        currentMode = 'quiz'; startQuizSetup('cloze');
      } else if (type === 'corrupted') {
        if (!getMistakesSafe().length) return arcaneNotice('腐化檔案目前是空的', '太好了，你目前沒有需要淨化的錯題。');
        currentMode = 'quiz'; startMistakeQuiz();
      }
    }));
  }

  function buildProfile() {
    const page = createPage('page-arcane-profile');
    page.innerHTML = `<div class="arcane-page-shell"><header class="arcane-page-header"><div><span class="arcane-kicker">Scholar profile</span><h1>學者檔案</h1><p>查看你的收藏、腐化卡片與精通星圖，並管理雲端同步。</p></div></header><div id="arcane-profile-content"></div></div>`;
    refreshProfile();
  }

  function refreshProfile() {
    const host = $('#arcane-profile-content');
    if (!host) return;
    const user = userInfo();
    host.innerHTML = `
      <section class="arcane-profile-card">
        <div class="arcane-profile-identity"><img class="arcane-avatar" src="assets/arcane/emblem.svg" alt=""><div><strong>${escapeHtml(user.name)}</strong><span>${user.signedIn ? '雲端學者 · 已連線' : '本機學者 · 尚未同步'}</span></div></div>
        <div class="arcane-profile-stats"><div><b>${vocabCount()}</b><span>總卡庫</span></div><div><b>${getFavoritesSafe().length}</b><span>珍藏</span></div><div><b>${masteredStageCount()}</b><span>精通星區</span></div></div>
      </section>
      <section class="arcane-profile-card">
        <div class="arcane-setting-row"><span>腐化卡片</span><strong>${getMistakesSafe().length}</strong></div>
        <div class="arcane-setting-row"><span>雲端同步</span><strong>${user.signedIn ? '已啟用' : '未登入'}</strong></div>
        <div class="arcane-setting-row"><span>版本主題</span><strong>Arcane Library v1</strong></div>
      </section>
      <button class="arcane-primary-btn" style="width:100%" type="button" data-auth>${user.signedIn ? '同步目前進度' : '使用 Google 登入同步'}</button>`;
    $('[data-auth]', host)?.addEventListener('click', () => {
      if (typeof googleLogin === 'function') googleLogin();
    });
  }

  function updateBottomNav(pageId) {
    const app = $('.app-container');
    if (!app) return;
    app.classList.toggle('arcane-focus-mode', ARC.focusPages.has(pageId));
    let key = ARC.pageMap[pageId];
    if (!key && pageId === 'page-category') key = typeof currentMode !== 'undefined' && currentMode === 'quiz' ? 'trials' : 'codex';
    if (!key && pageId === 'page-submenu') key = typeof currentMode !== 'undefined' && currentMode === 'quiz' ? 'trials' : 'codex';
    $$('.arcane-nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.arcaneNav === key));
  }

  function cleanLegacyText(text) {
    return String(text || '').replace(/[🌌🧬🌍🧠🏺🎨🪨💼🦠📜💀🐉⚔️🏆👑⏳🎉🔥✨✅❌👀]/gu, '').replace(/\s{2,}/g, ' ').trim();
  }

  function beautifyLegacyPage() {
    $$('.back-btn').forEach(btn => {
      const isClose = btn.querySelector('.fa-times') || /times|close/i.test(btn.innerHTML);
      btn.innerHTML = icon(isClose ? 'close' : 'back');
    });

    const title = $('#cat-title');
    if (title) {
      const t = title.textContent;
      if (/卷軸|領域/.test(t)) title.textContent = '選擇星冊';
      if (/試煉/.test(t)) title.textContent = '選擇試煉';
    }

    const replacements = new Map([
      ['錯題地牢', '腐化檔案'], ['單字試煉', '單字試煉'], ['填空試煉', '填空試煉'], ['文法試煉', '文法試煉'],
      ['我的收藏', '我的珍藏'], ['多益卷軸', 'TOEIC 星冊'], ['托福卷軸', 'TOEFL 星冊'],
      ['選擇副本', '星圖領域'], ['多益地城', 'TOEIC 星圖'], ['托福地城', 'TOEFL 星圖'],
      ['選擇托福區域', '選擇星座領域'], ['冒險地圖', '星象地圖']
    ]);
    $$('.menu-btn span, .page-title').forEach(el => {
      const cleaned = cleanLegacyText(el.textContent);
      el.textContent = replacements.get(cleaned) || cleaned;
    });
    $$('.menu-btn i').forEach(i => i.remove());
    beautifyFlashcard();
  }

  function beautifyFlashcard() {
    const star = $('#star-btn');
    const speaker = $('.speak-btn-large');
    if (star) { star.innerHTML = icon('favorite'); star.setAttribute('aria-label', '加入珍藏'); }
    if (speaker) { speaker.innerHTML = icon('speaker'); speaker.setAttribute('aria-label', '播放發音'); }
    const hint = $('.card-front > p');
    if (hint) hint.remove();
    const title = $('#fc-title');
    if (title && !title.dataset.arcaneTitle) {
      title.textContent = '奧術卡牌';
      title.dataset.arcaneTitle = '1';
    }
  }

  function ensureKnowledgeSheet() {
    if ($('#arcane-sheet-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'arcane-sheet-overlay';
    overlay.className = 'arcane-sheet-overlay';
    overlay.innerHTML = `<section class="arcane-knowledge-sheet" role="dialog" aria-modal="true"><div class="arcane-sheet-handle"></div><div id="arcane-sheet-content"></div></section>`;
    $('.app-container')?.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeKnowledgeSheet(); });
    let startY = 0;
    $('.arcane-knowledge-sheet', overlay)?.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive:true });
    $('.arcane-knowledge-sheet', overlay)?.addEventListener('touchend', e => { if (e.changedTouches[0].clientY - startY > 90) closeKnowledgeSheet(); }, { passive:true });
  }

  function openKnowledgeSheet() {
    try {
      const data = currentList?.[currentIndex];
      if (!data) return;
      ensureKnowledgeSheet();
      const blocks = (data.details || []).map(d => {
        const examples = (d.examples || []).map(ex => {
          if (typeof ex === 'string') return `<div class="arcane-example">${escapeHtml(ex)}</div>`;
          return `<div class="arcane-example">${escapeHtml(ex.en)}<small>${escapeHtml(ex.cn)}</small></div>`;
        }).join('');
        return `<section class="arcane-detail-block"><h3>${escapeHtml(d.pos || '')} · ${escapeHtml(d.cn || '')}</h3>${examples}</section>`;
      }).join('');
      $('#arcane-sheet-content').innerHTML = `<div class="arcane-sheet-title"><h2>${escapeHtml(data.en || data.q || '')}</h2><p>${escapeHtml(data.phonetic || '')}</p></div>${data.root ? `<section class="arcane-detail-block"><h3>ROOT / NOTE</h3><p>${escapeHtml(data.root)}</p></section>` : ''}${blocks || '<section class="arcane-detail-block"><p>目前沒有更多卡牌筆記。</p></section>'}`;
      requestAnimationFrame(() => $('#arcane-sheet-overlay')?.classList.add('show'));
    } catch (err) { console.error('Arcane sheet error', err); }
  }

  function closeKnowledgeSheet() { $('#arcane-sheet-overlay')?.classList.remove('show'); }

  function installCardInteractions() {
    const card = $('#flashcard');
    if (!card || card.dataset.arcaneSwipe) return;
    card.dataset.arcaneSwipe = '1';
    let startX = 0, startY = 0;
    card.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive:true });
    card.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
      if (dx < 0) nextCard(); else prevCard();
    }, { passive:true });
  }

  function animateCard(direction, step) {
    const inner = $('.flip-card-inner');
    if (!inner) return step();
    const out = direction > 0 ? 'arcane-card-out-left' : 'arcane-card-out-right';
    const inside = direction > 0 ? 'arcane-card-in-right' : 'arcane-card-in-left';
    inner.classList.add(out);
    setTimeout(() => {
      step();
      const nextInner = $('.flip-card-inner');
      nextInner?.classList.remove('arcane-card-out-left','arcane-card-out-right');
      nextInner?.classList.add(inside);
      setTimeout(() => nextInner?.classList.remove(inside), 230);
    }, 150);
  }

  function beautifyQuizResult() {
    const title = $('#res-title');
    if (title) {
      const t = cleanLegacyText(title.textContent);
      title.textContent = /正確|答對|恭喜/.test(t) ? '答對了 · 星力共鳴' : '需要再次淨化';
    }
    const review = $('.review-btn'); if (review) review.textContent = '查看題目';
    const next = $('.next-btn'); if (next) next.innerHTML = '下一題 <span aria-hidden="true">›</span>';
    refreshTrials();
  }

  function decorateAdventureNodes() {
    $$('#adventure-grid .level-node').forEach((node, index) => {
      if (!node.querySelector('.arcane-level-index')) {
        const label = document.createElement('span');
        label.className = 'arcane-level-index';
        label.textContent = `STAGE ${index + 1}`;
        node.appendChild(label);
      }
    });
  }

  function arcaneNotice(title, body) {
    const modal = $('#modal-overlay');
    const mt = $('#modal-title');
    const mb = $('#modal-body');
    if (!modal || !mt || !mb) return alert(body || title);
    mt.textContent = title;
    mt.style.color = '';
    mb.textContent = body;
    modal.style.display = 'flex';
    const btn = modal.querySelector('button');
    if (btn) { btn.textContent = '知道了'; btn.onclick = closeModal; }
  }

  function wrapLegacyFunctions() {
    if (window.__arcaneWrapped) return;
    window.__arcaneWrapped = true;

    const legacyShowPage = window.showPage;
    if (typeof legacyShowPage === 'function') {
      window.showPage = function(id) {
        closeKnowledgeSheet();
        legacyShowPage(id);
        updateBottomNav(id);
        setTimeout(() => { beautifyLegacyPage(); if (id === 'page-adventure') decorateAdventureNodes(); }, 0);
      };
    }

    const legacyLoadCard = window.loadCard;
    if (typeof legacyLoadCard === 'function') {
      window.loadCard = function(...args) {
        const result = legacyLoadCard(...args);
        setTimeout(() => { beautifyFlashcard(); installCardInteractions(); }, 0);
        return result;
      };
    }

    window.flipCard = openKnowledgeSheet;

    window.nextCard = function() {
      try {
        if (!currentList || currentIndex >= currentList.length - 1) return arcaneNotice('本次探索完成', '你已經看完這一組奧術卡。可以返回卡庫繼續探索其他領域。');
        animateCard(1, () => { currentIndex++; loadCard(); });
      } catch (_) {}
    };
    window.prevCard = function() {
      try {
        if (!currentList || currentIndex <= 0) return;
        animateCard(-1, () => { currentIndex--; loadCard(); });
      } catch (_) {}
    };

    const legacyCheckAnswer = window.checkAnswer;
    if (typeof legacyCheckAnswer === 'function') {
      window.checkAnswer = function(...args) { const r = legacyCheckAnswer(...args); setTimeout(beautifyQuizResult, 0); return r; };
    }
    const legacyDungeonAnswer = window.checkDungeonAnswer;
    if (typeof legacyDungeonAnswer === 'function') {
      window.checkDungeonAnswer = function(...args) { const r = legacyDungeonAnswer(...args); setTimeout(beautifyQuizResult, 0); return r; };
    }

    const legacyDungeonSub = window.showDungeonSubMenu;
    if (typeof legacyDungeonSub === 'function') {
      window.showDungeonSubMenu = function(...args) { const r = legacyDungeonSub(...args); setTimeout(beautifyLegacyPage,0); return r; };
    }

    const legacyOpenMap = window.openDungeonMap;
    if (typeof legacyOpenMap === 'function') {
      window.openDungeonMap = function(...args) { const r = legacyOpenMap(...args); setTimeout(() => { beautifyLegacyPage(); decorateAdventureNodes(); },0); return r; };
    }

    const legacySaveFavorites = window.saveFavorites;
    if (typeof legacySaveFavorites === 'function') {
      window.saveFavorites = function(...args) { const r = legacySaveFavorites(...args); setTimeout(() => { buildHome(); refreshCodex(); refreshProfile(); },0); return r; };
    }

    const legacySaveGameData = window.saveGameData;
    if (typeof legacySaveGameData === 'function') {
      window.saveGameData = function(...args) { const r = legacySaveGameData(...args); setTimeout(() => { buildHome(); refreshTrials(); refreshProfile(); },0); return r; };
    }
  }

  function addAdventureLabelStyle() {
    if ($('#arcane-runtime-style')) return;
    const style = document.createElement('style');
    style.id = 'arcane-runtime-style';
    style.textContent = `.arcane-level-index{position:absolute;top:74px;left:50%;transform:translateX(-50%);white-space:nowrap;color:#8f9db6;font:600 .55rem var(--arc-sans);letter-spacing:.1em}.level-node.mastered .arcane-level-index{color:#d5b56e}.level-node.locked .arcane-level-index{opacity:.65}`;
    document.head.appendChild(style);
  }

  function initArcane() {
    const app = $('.app-container');
    if (!app || app.classList.contains('arcane-ready')) return;
    app.classList.add('arcane-ready');
    addAdventureLabelStyle();
    buildBottomNav();
    buildCodex();
    buildTrials();
    buildProfile();
    buildHome();
    ensureKnowledgeSheet();
    wrapLegacyFunctions();
    beautifyLegacyPage();
    updateBottomNav($('.page.active')?.id || 'page-landing');

    try {
      if (typeof auth !== 'undefined' && auth?.onAuthStateChanged) {
        auth.onAuthStateChanged(() => { buildHome(); refreshProfile(); });
      }
    } catch (_) {}
  }

  window.arcaneOpenKnowledge = openKnowledgeSheet;
  window.arcaneCloseKnowledge = closeKnowledgeSheet;
  window.addEventListener('load', () => setTimeout(initArcane, 0));
})();
