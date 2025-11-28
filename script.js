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
    function loadCard() {
        // 防呆：如果沒有資料
        if (!currentList || currentList.length === 0) {
            return;
        }
        
        const data = currentList[currentIndex]; 
        const card = document.getElementById('flashcard');
        if(!card) return; 

        card.classList.remove('flipped'); 
        updateStarStatus(); 

        // 渲染正面
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
        
        updateStarStatus();

        // 填充正面詳細資訊
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

        // 填充背面詳細資訊
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
    // 4. 其他必要功能 (音效、導航、遊戲化)
    // ==========================================
    
    // 音效
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playSound(type) {
        if(audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        const now = audioCtx.currentTime;
        if(type==='correct') {
            osc.type='triangle'; osc.frequency.setValueAtTime(600, now); 
            osc.frequency.exponentialRampToValueAtTime(1000, now+0.1);
            gain.gain.setValueAtTime(0.1, now); gain.gain.linearRampToValueAtTime(0, now+0.3);
            osc.start(); osc.stop(now+0.3);
        } else if(type==='wrong') {
            osc.type='sawtooth'; osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(100, now+0.3);
            gain.gain.setValueAtTime(0.1, now); gain.gain.linearRampToValueAtTime(0, now+0.3);
            osc.start(); osc.stop(now+0.3);
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
    function selectMode(mode) { currentMode = mode; document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show')); if (mode === 'learn') { document.getElementById('menu-learn-scope').classList.add('show'); document.getElementById('cat-title').innerText = "選擇卷軸"; } else { document.getElementById('menu-quiz-type').classList.add('show'); document.getElementById('cat-title').innerText = "選擇試煉"; } showPage('page-category'); }
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
    function nextCard() { if(currentIndex < currentList.length-1) { currentIndex++; addXP(1); loadCard(); } else alert("卷軸已閱畢！"); }
    function prevCard() { if(currentIndex>0) { currentIndex--; loadCard(); } }
   function speakWord() {
    const wordEl = document.getElementById('fc-en');
    if (!wordEl) return;
    const word = (wordEl.innerText || wordEl.textContent || "").trim();
    if (!word) return;

    // 先試 Dictionary API 真人發音
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
                const audio = new Audio(audioUrl);
                audio.play();
            } else {
                throw new Error("no audio");
            }
        })
        .catch(() => {
            // 若沒拿到真人發音，改用 Web Speech API 機器人發音
            if ('speechSynthesis' in window) {
                const utter = new SpeechSynthesisUtterance(word);
                utter.lang = 'en-US';
                utter.rate = 0.9;
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utter);
            } else {
                alert("目前瀏覽器不支援發音功能");
            }
        });
}

    function exitPractice() { showPage('page-category'); }
    
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
        
        // 【關鍵修正】：載入新問題時，隱藏結果彈窗
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
    
    // 【修正】：原本這裡有一行 document.getElementById('float-next-btn').classList.add('show');
    // 我已經把它刪掉了。現在按鈕只會在你點擊「回顧」時，透過 hideResultPopup 函式顯示出來。
}

function nextQuestion() {
    currentIndex++;
    
    // 【新增這行】進入下一題時，把懸浮按鈕隱藏起來
    document.getElementById('float-next-btn').classList.remove('show');
    
    // 確保彈窗也是關閉的
    document.getElementById('result-popup').classList.remove('show');
    
    loadQuestion(quizType === 'grammar');
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
