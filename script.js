   // ==========================================
    // 2. 核心變數與設定 (已修正並新增測驗變數)
    // ==========================================
    
    let userLevel = 1, userXP = 0, xpPerLevel = 100;
    let dailyStreak = 0, lastLoginDate = "", unlockedThemes = ['default'];
    let mistakeDB = []; 
    const ranks = ["流浪者", "村民", "士兵", "騎士", "男爵", "子爵", "伯爵", "公爵", "親王", "國王"];
    
    // 導航與測驗變數 (新增 quizTotal 和 currentQuizData)
    let currentMode = ''; let quizType = ''; let currentList = []; let currentIndex = 0; 
    let score = 0; let currentCategoryLabel = "";
    let quizTotal = 0; 
    let currentQuizData = null; // 用來儲存當前問題的答案和選項
    let cachedAudioUrl = null;
    let isSpeaking = false;

    // ==========================================
    // 3. 核心功能與邏輯 (已修復 Quiz 相關邏輯)
    // ==========================================
    function getFavorites() { 
        return JSON.parse(localStorage.getItem('vocabPro_favorites')) || []; 
    }

    function saveFavorites(favList) { 
        localStorage.setItem('vocabPro_favorites', JSON.stringify(favList)); 
    }

    function toggleFavorite() {
        if (!currentList || !currentList[currentIndex]) return;
        const currentWord = currentList[currentIndex]; 
        let favList = getFavorites();
        const index = favList.findIndex(item => item.en === currentWord.en);
        if (index > -1) { favList.splice(index, 1); } else { favList.push(currentWord); }
        saveFavorites(favList); updateStarStatus();
    }

    function updateStarStatus() {
        if (!currentList || !currentList[currentIndex]) return;
        const currentWord = currentList[currentIndex]; 
        let favList = getFavorites();
        const isFav = favList.some(item => item.en === currentWord.en);
        const btn = document.getElementById('star-btn'); 
        if (btn) { 
            if (isFav) btn.classList.add('active'); 
            else btn.classList.remove('active'); 
        }
    }

    function loadFavorites() {
        const favList = getFavorites(); 
        if (favList.length === 0) { alert("還沒有最愛單字！"); return; }
        if (currentMode === 'learn') { currentList = [...favList].sort(() => 0.5 - Math.random()); } else { currentList = favList; }
        currentCategoryLabel = "我的最愛";
        if (currentMode === 'learn') { startFlashcardMode(); } else { startGenericQuiz(false, currentCategoryLabel, favList.length); }
    }

    // === 字卡核心功能 (LoadCard) ===
// === 字卡核心功能 (修正後的完整版) ===
function loadCard() {
    // 1. 防呆：如果沒有資料，直接結束
    if (!currentList || currentList.length === 0) {
        return;
    }
    
    // 2. 音效預載與重置 (新功能)
    cachedAudioUrl = null; // 清空上一張的紀錄
    isSpeaking = false;    // 重置發音狀態
    
    const data = currentList[currentIndex]; // 取得當前單字資料
    preloadAudio(data.en); // 呼叫預載函式

    // 3. 取得 DOM 元素
    const card = document.getElementById('flashcard');
    if(!card) return; 

    // 4. 重置卡片狀態
    card.classList.remove('flipped'); 
    updateStarStatus(); 

    // 5. 渲染正面 HTML
    const frontHTML = `
        <div class="card-face card-front">
            <button class="star-btn" id="star-btn" onclick="event.stopPropagation(); toggleFavorite()">
                <i class="fas fa-star"></i>
            </button>
            <div class="q-tag" id="fc-tag">${currentCategoryLabel}</div>
            <div class="word-en" id="fc-en">${data.en}</div>
            <div class="word-phonetic" id="fc-phonetic">${data.phonetic || ""}</div>
            <div class="front-info-box" id="fc-front-info"></div>
            <button class="speak-btn-large" onclick="event.stopPropagation(); speakWord()"><i class="fas fa-volume-up"></i></button>
            <p style="color:#aaa; font-size:0.8rem; margin-top:15px;">(點擊翻面)</p>
        </div>
    `;
    
    const backHTML = `<div class="card-face card-back" id="fc-back-content"></div>`;
    
    const inner = document.querySelector('.flip-card-inner');
    if(inner) inner.innerHTML = frontHTML + backHTML;
    
    // 重新綁定星星狀態
    updateStarStatus();

    // 6. 填充正面詳細資訊 (詞性、中文)
    const frontInfo = document.getElementById('fc-front-info'); 
    if (data.details && frontInfo) {
        data.details.forEach(d => {
            const item = document.createElement('div'); item.className = 'summary-item';
            let mainRowHtml = `<div class="summary-row"><span class="pos-badge">${d.pos}</span><span class="cn-text">${d.cn}</span></div>`;
            let formsHtml = d.forms ? `<div class="forms-text">(${d.forms})</div>` : '';
            item.innerHTML = mainRowHtml + formsHtml; 
            frontInfo.appendChild(item);
        });
    }

    // 7. 填充背面詳細資訊 (例句、同義字)
    const backContent = document.getElementById('fc-back-content'); 
    if (data.details && backContent) {
        data.details.forEach(d => {
            const block = document.createElement('div'); block.className = 'detail-block';
            const title = document.createElement('div'); title.className = 'block-title';
            title.innerHTML = `<span class="pos-badge">${d.pos}</span> ${d.cn}`; block.appendChild(title);
            
            if (data.root) block.innerHTML += `<div style="background:#f0f8ff;padding:5px 10px;border-radius:5px;font-size:0.9rem;color:#2980b9;margin-bottom:10px;"><i class="fas fa-lightbulb"></i> <b>記憶：</b>${data.root}</div>`;
            if (d.synonyms) block.innerHTML += `<div style="font-size:0.9rem;color:#888;margin-bottom:10px;"><b>Synonyms:</b> ${d.synonyms}</div>`;
            
            if (d.examples && d.examples.length > 0) {
                block.innerHTML += '<div class="back-header" style="text-align:left;margin-top:10px;">EXAMPLES</div>';
                d.examples.forEach(ex => {
                    const exDiv = document.createElement('div'); exDiv.className = 'ex-item';
                    if (typeof ex === 'string') { exDiv.innerText = ex; } else { exDiv.innerHTML = `${ex.en}<span class="ex-cn">${ex.cn}</span>`; }
                    block.appendChild(exDiv);
                });
            }
            backContent.appendChild(block);
        });
    }
}
// ==========================================
// 4. 其他必要功能 (本機檔案版)
// ==========================================

// 這裡的路徑 "./sounds/..." 意思是在當前目錄下的 sounds 資料夾找檔案
const audioCorrect = new Audio("./sounds/correct.mp3"); 
const audioWrong = new Audio("./sounds/wrong.mp3");

function playSound(type) {
    // 設定音量 (0.0 ~ 1.0)
    audioCorrect.volume = 0.5;
    audioWrong.volume = 0.3;

    if (type === 'correct') {
        audioCorrect.currentTime = 0; // 倒帶，確保連按時能重播
        audioCorrect.play().catch(e => console.log("音效播放失敗(可能檔案路徑錯誤):", e));
    } else if (type === 'wrong') {
        audioWrong.currentTime = 0;
        audioWrong.play().catch(e => console.log("音效播放失敗(可能檔案路徑錯誤):", e));
    }
}
    // 遊戲化存取
    function loadGameData() {
        const saved = JSON.parse(localStorage.getItem('vocabPro_rpg')) || {};
        userLevel = saved.level || 1; userXP = saved.xp || 0;
        dailyStreak = saved.streak || 0; lastLoginDate = saved.lastLogin || "";
        unlockedThemes = saved.themes || ['default'];
        mistakeDB = saved.mistakes || [];
        
        const currentTheme = saved.currentTheme || 'default';
        document.body.className = (currentTheme === 'default' ? '' : currentTheme);
        updateActiveThemeBtn(currentTheme); 

        updateLevelUI(); updateMistakeCount(); checkDailyLogin(); updateThemeLocks();
    }

    function saveGameData() {
        const data = {
            level: userLevel, xp: userXP, streak: dailyStreak,
            lastLogin: lastLoginDate, themes: unlockedThemes,
            mistakes: mistakeDB, currentTheme: document.body.className
        };
        localStorage.setItem('vocabPro_rpg', JSON.stringify(data));
        updateLevelUI(); updateMistakeCount();
    }
    
    // === 輔助函數：經驗、等級與主題 ===
    function addXP(amount) { userXP += amount; if(userXP >= xpPerLevel) { userXP -= xpPerLevel; userLevel++; playSound('correct'); alert(`🎉 升級了！Lv.${userLevel}`); } saveGameData(); }
    function updateLevelUI() { document.getElementById('lvl-num').innerText = userLevel; document.getElementById('lvl-title').innerText = ranks[Math.min(Math.floor((userLevel-1)/10), ranks.length-1)]; document.getElementById('xp-text').innerText = `${userXP}/${xpPerLevel}`; document.getElementById('xp-fill').style.width = `${(userXP/xpPerLevel)*100}%`; }
    function checkDailyLogin() { /* ...每日登入邏輯待補... */ }
    function openChest(btn) { /* ...開寶箱邏輯待補... */ }
    function setTheme(theme, reqLv) {
        if(theme !== 'default' && !unlockedThemes.includes(theme)) { 
            alert(`🔒 需達到 Lv.${reqLv} 才能解鎖此風格！`); 
            return; 
        }
        
        document.body.className = (theme === 'default' ? '' : theme);
        updateActiveThemeBtn(theme);
        saveGameData();
    }
    function updateActiveThemeBtn(themeName) {
        document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
        
        let targetId = 'btn-theme-default';
        if (themeName.includes('ocean')) targetId = 'btn-theme-ocean';
        if (themeName.includes('forest')) targetId = 'btn-theme-forest';
        if (themeName.includes('sakura')) targetId = 'btn-theme-sakura';
        if (themeName.includes('dark')) targetId = 'btn-theme-dark';
        
        const btn = document.getElementById(targetId);
        if (btn) btn.classList.add('active');
    }
    function updateThemeLocks() { /* ...主題鎖定狀態邏輯待補... */ }
    function updateMistakeCount() { document.getElementById('mistake-count').innerText = mistakeDB.length; }
    function startMistakeQuiz() { /* ...錯題地牢邏輯待補... */ alert("錯題地牢功能開發中..."); }
    
    // === 輔助函數：產生錯誤選項 (Distractors) ===
    function generateDistractors(wordList, excludeWord, count) {
        const potentialDistractors = wordList.filter(word => word.en !== excludeWord).map(word => word.en);
        const shuffled = potentialDistractors.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // === 導航與功能啟動 (已修正 Quiz 邏輯) ===
    function showPage(id) { document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); p.classList.add('hidden'); }); document.getElementById(id).classList.remove('hidden'); setTimeout(() => document.getElementById(id).classList.add('active'), 10); }
    function selectMode(mode) {
    currentMode = mode;
    isAdventureMode = false; 

    // 1. 先把「所有」有 menu-section 的選單都藏起來 (包含地城選單)
    document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show'));

    if (mode === 'learn') {
        document.getElementById('menu-learn-scope').classList.add('show'); // 顯示學習選單
        document.getElementById('cat-title').innerText = "選擇卷軸";
        showPage('page-category');
    } else if (mode === 'quiz') {
        document.getElementById('menu-quiz-type').classList.add('show'); // 顯示測驗選單
        document.getElementById('cat-title').innerText = "選擇試煉";
        showPage('page-category');
    } else if (mode === 'dungeon') {
        // ★★★ 修正點在這裡 ★★★
        // 顯示「地城專用」的選單
        const dungeonMenu = document.getElementById('dungeon-main-menu');
        if(dungeonMenu) dungeonMenu.classList.add('show');
        
        showPage('page-dungeon-select');
    }
}
    function goBack(target) { if(target==='category') { document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show')); if(currentMode==='learn') { document.getElementById('menu-learn-scope').classList.add('show'); } else { document.getElementById('menu-quiz-scope').classList.add('show'); } showPage('page-category'); } }
    function handleBackFromCategory() { if (currentMode === 'quiz' && document.getElementById('menu-quiz-scope').classList.contains('show')) { document.getElementById('menu-quiz-scope').classList.remove('show'); document.getElementById('menu-quiz-type').classList.add('show'); document.getElementById('cat-title').innerText = "選擇試煉"; return; } showPage('page-landing'); }
    function goToSubMenu() { showPage('page-submenu'); }
    
    function handleCategorySelect(main, sub = null) {
        let raw = (main === 'TOEIC') ? vocabDB['TOEIC'] : vocabDB['TOEFL'][sub];
        currentCategoryLabel = sub ? `${sub} (TOEFL)` : main;
        
        if(!raw || raw.length === 0) { 
            alert(`此卷軸[${currentCategoryLabel}]空白！請先擴充單字。`); 
            return; 
        }
        
        if(currentMode === 'learn') { 
            currentList = [...raw].sort(()=>0.5-Math.random()); 
            currentIndex = 0; 
            document.getElementById('fc-title').innerText = `卷軸：${currentCategoryLabel}`;
            showPage('page-flashcard'); 
            loadCard(); 
        } else { 
            let allWords = [...raw];
            const maxCount = Math.min(allWords.length, 50); 
            let defaultCount = Math.min(10, maxCount);
            
            let countInput = prompt(`請輸入測驗題數 (10-${maxCount} 題，以 10 為單位):`, defaultCount);
            let quizSize = parseInt(countInput);

            if (isNaN(quizSize) || quizSize < 10 || quizSize > maxCount || quizSize % 10 !== 0) {
                alert(`輸入無效。本次測驗將使用 ${defaultCount} 題。`);
                quizSize = defaultCount;
            }
            
            currentList = allWords.sort(()=>0.5-Math.random()).slice(0, quizSize); 
            startGenericQuiz(false, currentCategoryLabel, quizSize); 
        }
    }
    function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
// script.js

// === 下一張 (Next): 左出右進 ===
function nextCard() {
    if (currentIndex >= currentList.length - 1) {
        alert("卷軸已閱畢！");
        return;
    }

    const card = document.getElementById('flashcard');

    // 1. 舊卡往左滑出
    card.classList.add('anim-slide-out-left');

    // 2. 等待 0.3 秒 (配合 CSS 動畫時間)
    setTimeout(() => {
        currentIndex++;
        addXP(1);
        loadCard(); // 換內容

        // 3. 移除滑出動畫，加上滑入動畫 (從右邊進來)
        card.classList.remove('anim-slide-out-left');
        card.classList.add('anim-slide-in-right');

        // 4. 動畫播完後清理乾淨
        setTimeout(() => {
            card.classList.remove('anim-slide-in-right');
        }, 300); 

    }, 300);
}

// === 上一張 (Prev): 右出左進 ===
function prevCard() {
    if (currentIndex <= 0) {
        return;
    }

    const card = document.getElementById('flashcard');

    // 1. 舊卡往右滑出
    card.classList.add('anim-slide-out-right');

    // 2. 等待 0.3 秒
    setTimeout(() => {
        currentIndex--;
        loadCard(); // 換內容

        // 3. 移除滑出動畫，加上滑入動畫 (從左邊進來)
        card.classList.remove('anim-slide-out-right');
        card.classList.add('anim-slide-in-left');

        // 4. 清理
        setTimeout(() => {
            card.classList.remove('anim-slide-in-left');
        }, 300);

    }, 300);
}     function exitPractice() { showPage('page-category'); }
    // === 測驗啟動與執行核心 ===
    function startQuizSetup(type) {
        quizType = type; 
        if (quizType === 'grammar') {
            const maxCount = Math.min(grammarDB.length, 50);
            let defaultCount = Math.min(10, maxCount);
            
            let countInput = prompt(`文法測驗題數 (10-${maxCount} 題，以 10 為單位):`, defaultCount);
            let quizSize = parseInt(countInput);
            
            if (isNaN(quizSize) || quizSize < 10 || quizSize > maxCount || quizSize % 10 !== 0) {
                alert(`輸入無效。本次測驗將使用 ${defaultCount} 題。`);
                quizSize = defaultCount;
            }

            currentList = grammarDB.sort(()=>0.5-Math.random()).slice(0, quizSize);
            startGenericQuiz(true, "文法試煉", quizSize); 
        } 
    }

    function startGenericQuiz(isGrammar = false, title = "測驗", totalCount = 10) {
        if (currentList.length === 0) {
            alert(`本次測驗無題目！請選擇內容更豐富的分類。`);
            exitPractice();
            return;
        }

        quizTotal = totalCount;
        currentIndex = 0;
        score = 0;
        
        document.getElementById('quiz-score').innerText = score;
        document.getElementById('quiz-bar').style.width = '0%';
        document.getElementById('q-tag').innerText = title;

        showPage('page-quiz');
        loadQuestion(isGrammar);
    }

// === 修正後的 loadQuestion 與 checkAnswer ===

function loadQuestion(isGrammar = false) {
    if (currentIndex >= currentList.length) {
        document.getElementById('quiz-bar').style.width = '100%';
        alert(`🎉 測驗完成！得分：${score}/${quizTotal}。獲得經驗值 ${score * 3} XP!`);
        addXP(score * 3);
        exitPractice(); 
        return;
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 隱藏結果彈窗
    document.getElementById('result-popup').classList.remove('show');
    
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    const questionData = currentList[currentIndex];
    let correctAnswer;
    let allOptions;

    if (isGrammar) {
        correctAnswer = questionData.ans;
        allOptions = questionData.options.sort(() => 0.5 - Math.random());
        document.getElementById('q-text').innerText = questionData.q;
        document.getElementById('q-sub').innerText = "選擇正確的詞彙填入空格";
    } else {
        correctAnswer = questionData.en;
        document.getElementById('q-text').innerText = questionData.details[0].cn;
        document.getElementById('q-sub').innerText = "選擇對應的英文單字";

        const distractors = generateDistractors(currentList, correctAnswer, 3);
        allOptions = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
    }

    currentQuizData = { correct: correctAnswer, options: allOptions };
    
    // ★★★ 修正點：正確的音檔預載位置 ★★★
    cachedAudioUrl = null; 
    preloadAudio(correctAnswer); 

    // 產生選項按鈕
    allOptions.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${String.fromCharCode(65 + index)}. ${optionText}`;
        
        btn.onclick = () => checkAnswer(btn, optionText === correctAnswer);
        
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedButton, isCorrect) {
    // 鎖定所有按鈕不能再按
    document.getElementById('options-container').querySelectorAll('.option-btn').forEach(btn => btn.onclick = null);

    const resultTitle = document.getElementById('res-title');
    const resultDetail = document.getElementById('res-detail');

    if (isCorrect) {
        playSound('correct'); 
        
        // ★★★ 修正點：答對後延遲播放發音 ★★★
        setTimeout(() => {
            playQuizAudio(currentQuizData.correct); 
        }, 200); 

        selectedButton.classList.add('correct');
        score++;
        addXP(2);
        
        resultTitle.innerText = "✅ 恭喜答對！";
        resultDetail.innerHTML = `答案：<b>${currentQuizData.correct}</b>`;
    } else {
        playSound('wrong');
        selectedButton.classList.add('wrong');
        
        // 標示出正確答案
        const optionsContainer = document.getElementById('options-container');
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText.includes(currentQuizData.correct)) {
                btn.classList.add('correct');
            }
        });
        
        resultTitle.innerText = "❌ 答錯了！";
        resultDetail.innerHTML = `正確答案是：<b>${currentQuizData.correct}</b>`;
    }

    document.getElementById('quiz-score').innerText = score;
    
    // 顯示結果彈窗
    document.getElementById('result-popup').classList.add('show');
}
function nextQuestion() {
    currentIndex++;
    
    // 隱藏懸浮按鈕與彈窗
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('result-popup').classList.remove('show');

    // ★★★ 關鍵修改在這裡 ★★★
    if (isAdventureMode) {
        // 如果現在是副本模式，呼叫副本專用的載入函式
        loadDungeonQuestion();
    } else {
        // 否則，跑原本的普通測驗邏輯
        loadQuestion(quizType === 'grammar');
    }
}
    
    function showQuizVocabSelection() { quizType = 'vocab'; document.getElementById('menu-quiz-type').classList.remove('show'); document.getElementById('menu-quiz-scope').classList.add('show'); document.getElementById('cat-title').innerText = "選擇領域"; }
    function triggerImport() {}
    function exportData() {}

    window.onload = loadGameData;

// === 新增這個函式 ===
function hideResultPopup() {
    // 移除 .show 讓彈窗縮下去
    document.getElementById('result-popup').classList.remove('show');
    // 確保懸浮按鈕是顯示的，這樣使用者看完還可以按下一題
    document.getElementById('float-next-btn').classList.add('show');
}
function preloadAudio(word) {
    if (!word) return;
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word);
    
    fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
            if (Array.isArray(data) && data[0] && Array.isArray(data[0].phonetics)) {
                // 找一個有 audio 的項目
                const ph = data[0].phonetics.find(p => p.audio);
                if (ph) cachedAudioUrl = ph.audio;
            }
        })
        .catch(() => {
            console.log("預載音檔失敗，稍後將使用機器人發音");
        });
}

// === 2. 修改後的發音函式 (加入防呆與動畫) ===
function speakWord() {
    // 防止重複點擊
    if (isSpeaking) return;
    
    const wordEl = document.getElementById('fc-en');
    if (!wordEl) return;
    const word = (wordEl.innerText || wordEl.textContent || "").trim();
    if (!word) return;

    // 取得按鈕並加入「讀取中」動畫
    const btn = document.querySelector('.speak-btn-large');
    
    isSpeaking = true; // 鎖定狀態
    if(btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; // 轉圈圈圖示
        btn.style.opacity = "0.7";
    }

    // 定義播放結束後的復原函式
    const resetBtn = () => {
        isSpeaking = false;
        if(btn) {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.style.opacity = "1";
        }
    };

    // --- 播放邏輯 ---
    
    // 情況 A: 已經預載好了 (這是最快的情況，手機通常不會擋)
    if (cachedAudioUrl) {
        const audio = new Audio(cachedAudioUrl);
        audio.play()
            .then(() => {
                // 播放成功
                audio.onended = resetBtn;
                // 防呆：如果音檔太短或沒觸發 ended，1秒後強制復原
                setTimeout(resetBtn, 1500);
            })
            .catch(err => {
                console.error("播放被阻擋，嘗試機器人發音", err);
                useRobotVoice(word, resetBtn);
            });
    } 
    // 情況 B: 還沒下載好 (網路慢)，只好現場抓
    else {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word);
        fetch(url)
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(data => {
                let audioUrl = null;
                if (Array.isArray(data) && data[0] && Array.isArray(data[0].phonetics)) {
                    const ph = data[0].phonetics.find(p => p.audio);
                    if (ph) audioUrl = ph.audio;
                }

                if (audioUrl) {
                    cachedAudioUrl = audioUrl; // 存起來下次用
                    const audio = new Audio(audioUrl);
                    
                    // 這裡因為是 fetch 後播放，手機可能會擋，所以加 catch
                    audio.play()
                        .then(() => {
                            audio.onended = resetBtn;
                            setTimeout(resetBtn, 1500);
                        })
                        .catch(() => useRobotVoice(word, resetBtn));
                } else {
                    useRobotVoice(word, resetBtn);
                }
            })
            .catch(() => {
                useRobotVoice(word, resetBtn);
            });
    }
}

// === 3. 機器人發音 (備案) ===
function useRobotVoice(word, callback) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(word);
        utter.lang = 'en-US';
        utter.rate = 0.9;
        
        // 講完後復原按鈕
        utter.onend = callback; 
        
        window.speechSynthesis.cancel(); // 切掉上一句
        window.speechSynthesis.speak(utter);
        
        // 如果機器人壞掉沒回傳，1秒後強制復原
        setTimeout(callback, 1000);
    } else {
        // 裝置完全不支援
        callback();
    }
}
// script.js - 檔案最下面

// ★★★ 新增：測驗專用的發音函式 ★★★
function playQuizAudio(word) {
    // 如果有預載到真人發音，就播真人
    if (cachedAudioUrl) {
        const audio = new Audio(cachedAudioUrl);
        audio.play().catch(() => {
            // 如果真人播放失敗，轉用機器人
            useRobotVoice(word, () => {}); 
        });
    } else {
        // 如果沒抓到真人發音，直接用機器人
        useRobotVoice(word, () => {});
    }
}
// ==========================================
// ★★★ 地城副本核心變數 ★★★
// ==========================================
let adventureKey = ""; // 目前正在打哪個副本 (例如 "TOEIC" 或 "TOEFL_Biology")
let adventureLevelIndex = 0; // 目前正在打第幾關 (0 base)
let isAdventureMode = false; // 是否處於副本模式中

// ==========================================
// ★★★ 1. 入口與地圖生成邏輯 ★★★
// ==========================================

// 點擊首頁「地城副本」卡片
if (currentMode === 'dungeon') {
    // 這裡原本的 selectMode 會呼叫，我們在 selectMode 裡面加判斷
    // (請往下看 selectMode 的修改建議)
}

// 開啟托福子選單 (與原本學習模式共用按鈕樣式)
function showDungeonSubMenu() {
    const list = document.getElementById('dungeon-toefl-list');
    list.innerHTML = ''; // 清空
    
    // 遍歷 TOEFL 資料夾
    const categories = Object.keys(vocabDB['TOEFL']);
    categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'menu-btn';
        btn.innerHTML = `<span>📜 ${cat}</span> <i class="fas fa-chevron-right"></i>`;
        btn.onclick = () => openDungeonMap('TOEFL', cat);
        list.appendChild(btn);
    });
    
    showPage('page-dungeon-toefl-sub');
}

// 核心：開啟冒險地圖
function openDungeonMap(mainCat, subCat = null) {
    let rawData;
    let saveKey; // 用來存 localStorage 的 key

    if (mainCat === 'TOEIC') {
        rawData = vocabDB['TOEIC'];
        saveKey = 'TOEIC';
        adventureKey = 'TOEIC';
    } else {
        rawData = vocabDB['TOEFL'][subCat];
        saveKey = `TOEFL_${subCat}`;
        adventureKey = saveKey;
    }

    if (!rawData || rawData.length === 0) {
        alert("此區域尚未有魔物進駐 (無單字資料)！");
        return;
    }

    document.getElementById('adv-title').innerText = `地圖: ${subCat || mainCat}`;

    // 1. 讀取玩家進度 (預設解鎖到第 0 關)
    // 格式: { "TOEIC": 5, "TOEFL_Biology": 2 } 代表解鎖到的 index
    const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
    const unlockedIndex = allProgress[saveKey] || 0;

    // 2. 計算總關卡數 (每 10 個字一關)
    const chunkSize = 10;
    const totalLevels = Math.ceil(rawData.length / chunkSize);
    
    const grid = document.getElementById('adventure-grid');
    grid.innerHTML = ''; // 清空舊方塊

    // 3. 產生方塊
    for (let i = 0; i < totalLevels; i++) {
        const node = document.createElement('div');
        node.className = 'level-node';
        
        // 判斷狀態
        if (i > unlockedIndex) {
            // 尚未解鎖
            node.classList.add('locked');
        } else {
            // 已解鎖
            if (i < unlockedIndex) {
                node.classList.add('cleared'); // 已通關
            }
            node.innerHTML = `<span class="level-num">${i + 1}</span>`;
            
            // 綁定點擊事件：進入戰鬥
            node.onclick = () => startDungeonBattle(rawData, i);
        }
        grid.appendChild(node);
    }

    showPage('page-adventure');
}

function exitAdventure() {
    showPage('page-dungeon-select');
}
// ==========================================
// ★★★ 2. 戰鬥生成與執行邏輯 ★★★
// ==========================================

function startDungeonBattle(allWords, levelIndex) {
    adventureLevelIndex = levelIndex; // 記住現在打第幾關
    isAdventureMode = true; // 標記為副本模式

    // 1. 切割出這一關的 10 個單字
    const start = levelIndex * 10;
    const end = start + 10;
    const chunkWords = allWords.slice(start, end);

    // 2. 產生 20 題 (10 英選中 + 10 中選英)
    let battleQuestions = [];

    chunkWords.forEach(word => {
        // --- 題目 A: 英選中 ---
        // 選項：正確中文 + 3個隨機錯誤中文
        const cnOptions = generateOptions(allWords, word.details[0].cn, 'cn');
        battleQuestions.push({
            type: 'en_to_cn', // 英選中
            q: word.en,       // 題目: 英文
            ans: word.details[0].cn, // 答案: 中文
            options: cnOptions,
            audioWord: word.en // 用來播放發音
        });

        // --- 題目 B: 中選英 ---
        // 選項：正確英文 + 3個隨機錯誤英文
        const enOptions = generateOptions(allWords, word.en, 'en');
        battleQuestions.push({
            type: 'cn_to_en', // 中選英
            q: word.details[0].cn, // 題目: 中文
            ans: word.en,          // 答案: 英文
            options: enOptions,
            audioWord: word.en
        });
    });

    // 3. 洗牌 (Shuffle) 讓題型交錯
    battleQuestions.sort(() => 0.5 - Math.random());

    // 4. 設定全域變數並開始
    currentList = battleQuestions; // 覆蓋目前的題目列表
    quizTotal = 20;
    currentIndex = 0;
    score = 0;
    
    // 初始化 UI
    document.getElementById('q-tag').innerText = `關卡 ${levelIndex + 1}`;
    document.getElementById('quiz-score').innerText = 0;
    document.getElementById('quiz-bar').style.width = '0%';
    
    showPage('page-quiz');
    loadDungeonQuestion();
}

// 輔助：產生選項 (包含 1 個正確 + 3 個錯誤)
function generateOptions(fullDB, correctAns, type) {
    // 從資料庫隨機抓 3 個錯誤答案
    let distractors = [];
    while (distractors.length < 3) {
        const randomItem = fullDB[Math.floor(Math.random() * fullDB.length)];
        let candidate = (type === 'cn') ? randomItem.details[0].cn : randomItem.en;
        
        // 確保不重複且不是正確答案
        if (candidate !== correctAns && !distractors.includes(candidate)) {
            distractors.push(candidate);
        }
    }
    // 加入正確答案並洗牌
    return [correctAns, ...distractors].sort(() => 0.5 - Math.random());
}
// ==========================================
// ★★★ 3.3 副本專用邏輯 (貼在 script.js 最下方) ★★★
// ==========================================

// 動作 A：載入副本題目 (支援雙向題型)
function loadDungeonQuestion() {
    // 1. 如果題目做完了 (currentIndex 超過總題數)，就去結算
    if (currentIndex >= quizTotal) {
        finishDungeon(); 
        return;
    }

    // 2. 介面初始化 (隱藏舊彈窗、更新進度條)
    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    // 3. 取得當前題目資料
    const qData = currentList[currentIndex];
    
    // 4. 設定題目文字
    document.getElementById('q-text').innerText = qData.q;
    
    // 5. 判斷題型並給予提示 (這裡就是副本最特別的地方)
    if (qData.type === 'en_to_cn') {
        // 題目是英文 -> 選中文
        document.getElementById('q-sub').innerText = "請選擇正確的 [中文]";
        // 預載英文發音
        cachedAudioUrl = null;
        preloadAudio(qData.audioWord);
    } else {
        // 題目是中文 -> 選英文
        document.getElementById('q-sub').innerText = "請選擇對應的 [英文]";
        // 中文題目不用預載，但在答對時我們會播英文
        cachedAudioUrl = null;
        preloadAudio(qData.audioWord);
    }

    // 6. 產生選項按鈕
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 儲存正確答案跟發音單字，給等一下檢查用
    currentQuizData = { 
        correct: qData.ans, 
        audioWord: qData.audioWord 
    };

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        // 選項前面加 A. B. C. D.
        btn.innerHTML = `<span style="opacity:0.5;margin-right:8px;">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
        
        // 綁定點擊事件：檢查答案
        btn.onclick = () => checkDungeonAnswer(btn, opt === qData.ans);
        optionsContainer.appendChild(btn);
    });
}

// 動作 B：檢查答案 (副本專用)
function checkDungeonAnswer(btn, isCorrect) {
    // 鎖定所有按鈕，避免重複按
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.onclick = null);

    if (isCorrect) {
        // 答對了
        btn.classList.add('correct');
        playSound('correct');
        score++;
        document.getElementById('quiz-score').innerText = score;
        
        // ★重點：不管題目是中文還英文，答對時都播放英文發音，加強記憶
        setTimeout(() => {
            playQuizAudio(currentQuizData.audioWord);
        }, 200);

        document.getElementById('res-title').innerText = "✅ 正確！";
        document.getElementById('res-detail').innerHTML = ""; // 答對不用顯示解釋
    } else {
        // 答錯了
        btn.classList.add('wrong');
        playSound('wrong');
        
        // 把正確答案標示成綠色告訴使用者
        allBtns.forEach(b => {
            if (b.innerText.includes(currentQuizData.correct)) b.classList.add('correct');
        });

        document.getElementById('res-title').innerText = "❌ 錯誤！";
        document.getElementById('res-detail').innerHTML = `正確答案：<b>${currentQuizData.correct}</b>`;
    }

    // 顯示結果彈窗
    document.getElementById('result-popup').classList.add('show');
}

// 動作 C：結算與存檔
function finishDungeon() {
    // 設定及格分數：20題要對 16 題 (80%)
    const passThreshold = 16; 
    let msg = "";

    if (score >= passThreshold) {
        msg = `🎉 副本通關！\n得分: ${score}/20\n下一層已解鎖！`;
        playSound('correct');
        
        // 更新 localStorage (手機裡的存檔)
        const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
        const currentUnlocked = allProgress[adventureKey] || 0;
        
        // 只有當你打的是「最新進度」時，才幫你開下一關
        if (adventureLevelIndex === currentUnlocked) {
            allProgress[adventureKey] = currentUnlocked + 1;
            localStorage.setItem('vocabRPG_dungeon_progress', JSON.stringify(allProgress));
        }
    } else {
        msg = `💀 挑戰失敗...\n得分: ${score}/20\n你需要 ${passThreshold} 分才能通關。`;
        playSound('wrong');
    }

    alert(msg);
    // 結束後，重新整理地圖，這樣才能看到下一關解鎖
    openDungeonMap(adventureKey.includes('TOEIC') ? 'TOEIC' : 'TOEFL', adventureKey.split('_')[1]);
}