(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function safeMistakes() {
    try {
      if (typeof mistakeDB !== 'undefined' && Array.isArray(mistakeDB)) return mistakeDB;
      return (JSON.parse(localStorage.getItem('vocabPro_rpg')) || {}).mistakes || [];
    } catch (_) { return []; }
  }

  function safeFavorites() {
    try {
      if (typeof getFavorites === 'function') return getFavorites();
      return JSON.parse(localStorage.getItem('vocabPro_favorites')) || [];
    } catch (_) { return []; }
  }

  function keyOf(item) {
    return String(item?.en || item?.q || '').trim().toLowerCase();
  }

  function isCorrupted(item) {
    const key = keyOf(item);
    if (!key) return false;
    return safeMistakes().some(m => keyOf(m) === key);
  }

  function isFavorite(item) {
    const key = keyOf(item);
    if (!key) return false;
    return safeFavorites().some(f => keyOf(f) === key);
  }

  function currentItem() {
    try { return currentList?.[currentIndex] || null; } catch (_) { return null; }
  }

  function ensureLabel(face, cls, text) {
    let el = $('.' + cls, face);
    if (!el) {
      el = document.createElement('span');
      el.className = cls;
      face.appendChild(el);
    }
    el.textContent = text;
    return el;
  }

  function applyCurrentCardState() {
    const face = $('.card-front');
    const item = currentItem();
    if (!face || !item) return;

    face.classList.remove('arcane-corrupted-state', 'arcane-mastered-state');
    if (isCorrupted(item)) face.classList.add('arcane-corrupted-state');

    ensureLabel(face, 'arcane-card-edition', 'ARCANE LIBRARY');
    ensureLabel(face, 'arcane-card-crest-label', 'CELESTIAL CODEX');
    const badge = ensureLabel(face, 'arcane-card-state-badge', isCorrupted(item) ? 'CORRUPTED' : (isFavorite(item) ? 'FAVORITE' : 'DISCOVERED'));
    badge.dataset.state = isCorrupted(item) ? 'corrupted' : (isFavorite(item) ? 'favorite' : 'discovered');
  }

  function meaningOf(word) {
    return word?.details?.[0]?.cn || word?.cn || '尚未記錄';
  }

  function openPreviewCard(word) {
    try {
      currentMode = 'learn';
      isAdventureMode = false;
      currentCategoryLabel = '星冊一覽';
      currentList = [word];
      currentIndex = 0;
      const title = document.getElementById('fc-title');
      if (title) title.textContent = '奧術卡牌';
      showPage('page-flashcard');
      loadCard();
    } catch (err) {
      console.error('Unable to open Arcane preview card', err);
    }
  }

  function previewWords() {
    const favs = safeFavorites().slice(-3).reverse();
    const result = [...favs];
    try {
      const source = vocabDB?.TOEIC || [];
      for (const word of source) {
        if (result.length >= 6) break;
        if (!result.some(x => keyOf(x) === keyOf(word))) result.push(word);
      }
    } catch (_) {}
    return result.slice(0, 6);
  }

  function buildCodexPreview() {
    const host = $('#arcane-codex-content');
    if (!host || $('.arcane-collection-preview', host)) return;
    const words = previewWords();
    if (!words.length) return;

    const section = document.createElement('section');
    section.className = 'arcane-collection-preview';
    section.innerHTML = `
      <div class="arcane-collection-preview-head">
        <h2>星冊一覽</h2><span>Card collection</span>
      </div>
      <div class="arcane-codex-card-grid">
        ${words.map((word, index) => {
          const corrupt = isCorrupted(word);
          const favorite = isFavorite(word);
          const mark = corrupt ? 'CORRUPTED' : (favorite ? 'FAVORITE' : `CARD ${String(index + 1).padStart(2, '0')}`);
          return `<button type="button" class="arcane-codex-card${corrupt ? ' arcane-corrupted-mini' : ''}" data-arcane-preview="${index}">
            <span class="codex-mark">${mark}</span>
            <strong>${String(word?.en || 'Unknown').replace(/[<>]/g, '')}</strong>
            <small>${String(meaningOf(word)).replace(/[<>]/g, '')}</small>
          </button>`;
        }).join('')}
      </div>`;
    host.appendChild(section);
    $$('[data-arcane-preview]', section).forEach(btn => btn.addEventListener('click', () => openPreviewCard(words[Number(btn.dataset.arcanePreview)])));
  }

  function decorateMiniCards() {
    $$('.arcane-mini-card[data-word]').forEach(card => {
      const key = String(card.dataset.word || '').trim().toLowerCase();
      const corrupt = safeMistakes().some(m => keyOf(m) === key);
      card.classList.toggle('arcane-corrupted-mini', corrupt);
    });
  }

  function refreshPremiumCards() {
    applyCurrentCardState();
    decorateMiniCards();
    buildCodexPreview();
  }

  function wrapGlobal(name, after) {
    const original = window[name];
    if (typeof original !== 'function' || original.__arcaneCardV2) return;
    const wrapped = function(...args) {
      const result = original.apply(this, args);
      setTimeout(after, 0);
      return result;
    };
    wrapped.__arcaneCardV2 = true;
    window[name] = wrapped;
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      wrapGlobal('loadCard', applyCurrentCardState);
      wrapGlobal('saveFavorites', refreshPremiumCards);
      wrapGlobal('saveGameData', refreshPremiumCards);
      refreshPremiumCards();

      const app = document.querySelector('.app-container');
      if (app) {
        const observer = new MutationObserver(() => {
          clearTimeout(window.__arcaneCardV2Timer);
          window.__arcaneCardV2Timer = setTimeout(refreshPremiumCards, 20);
        });
        observer.observe(app, { childList: true, subtree: true });
      }
    }, 60);
  });
})();