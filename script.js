// ==========================================
// 1. 全域變數宣告
// ==========================================
let currentUser = null; 
let currentMode = '';
let quizType = '';
let currentList = [];
let currentIndex = 0;
let score = 0;
let currentCategoryLabel = "";
let quizTotal = 0;
let currentQuizData = null;

// 音效變數
let isSpeaking = false;

// 錯題變數
let mistakeDB = [];

// 地城副本變數
let adventureKey = "";
let adventureLevelIndex = 0;
let isAdventureMode = false;

// 音效物件
const audioCorrect = new Audio("./sounds/correct.mp3");
const audioWrong = new Audio("./sounds/wrong.mp3");

// ==========================================
// 2. 初始化與存檔系統
// ==========================================

window.onload = function () {
    loadGameData();
    // 預設顯示首頁
    showPage('page-landing');
};

function loadGameData() {
    try {
        const saved = JSON.parse(localStorage.getItem('vocabPro_rpg')) || {};
        mistakeDB = saved.mistakes || [];
        updateMistakeCount();
    } catch (e) {
        console.error("讀取存檔失敗", e);
        mistakeDB = [];
    }
}

function saveGameData() {
    const data = { mistakes: mistakeDB };
    localStorage.setItem('vocabPro_rpg', JSON.stringify(data));
    updateMistakeCount();

    // 順便上傳到雲端
    if (typeof saveToCloud === 'function') {
        saveToCloud();
    }
}

function updateMistakeCount() {
    const el = document.getElementById('mistake-count');
    if (el) el.innerText = mistakeDB.length;
}

// ==========================================
// 3. 頁面導航與模式選擇
// ==========================================

function showPage(id) {
    const target = document.getElementById(id);
    if (!target) return;

    document.querySelectorAll('.page').forEach(p => {
        if (p.id !== id) p.classList.remove('active');
    });

    requestAnimationFrame(() => {
        target.classList.add('active');
    });
}

function selectMode(mode) {
    currentMode = mode;
    isAdventureMode = false;

    document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show'));

    if (mode === 'learn') {
        document.getElementById('menu-learn-scope').classList.add('show');
        document.getElementById('cat-title').innerText = "選擇卷軸";
        showPage('page-category');
    } else if (mode === 'quiz') {
        document.getElementById('menu-quiz-type').classList.add('show');
        document.getElementById('cat-title').innerText = "選擇試煉";
        showPage('page-category');
    } else if (mode === 'dungeon') {
        document.getElementById('dungeon-main-menu').classList.add('show');
        showPage('page-dungeon-select');
    }
}

function goBack(target) {
    if (target === 'category') {
        document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show'));
        if (currentMode === 'learn') {
            document.getElementById('menu-learn-scope').classList.add('show');
        } else {
            document.getElementById('menu-quiz-scope').classList.add('show');
        }
        showPage('page-category');
    }
}

function handleBackFromCategory() {
    if (currentMode === 'quiz' && document.getElementById('menu-quiz-scope').classList.contains('show')) {
        document.getElementById('menu-quiz-scope').classList.remove('show');
        document.getElementById('menu-quiz-type').classList.add('show');
        document.getElementById('cat-title').innerText = "選擇試煉";
        return;
    }
    showPage('page-landing');
}

function goToSubMenu() {
    showPage('page-submenu');
}

function exitPractice() {
    if (isAdventureMode) {
        showPage('page-adventure');
    } else {
        document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show'));
        showPage('page-category');

        if (currentMode === 'learn') {
            document.getElementById('menu-learn-scope').classList.add('show');
            document.getElementById('cat-title').innerText = "選擇卷軸";
        } else if (currentMode === 'quiz') {
            document.getElementById('menu-quiz-type').classList.add('show');
            document.getElementById('cat-title').innerText = "選擇試煉";
        }
    }
}

// ==========================================
// 4. 資料載入與我的最愛
// ==========================================

function getFavorites() {
    return JSON.parse(localStorage.getItem('vocabPro_favorites')) || [];
}

function saveFavorites(favList) {
    localStorage.setItem('vocabPro_favorites', JSON.stringify(favList));
    // Hook: 存最愛時自動同步
    scheduleCloudSave();
}

function toggleFavorite() {
    if (!currentList || !currentList[currentIndex]) return;
    const currentWord = currentList[currentIndex];
    let favList = getFavorites();
    const index = favList.findIndex(item => item.en === currentWord.en);
    if (index > -1) {
        favList.splice(index, 1);
    } else {
        favList.push(currentWord);
    }
    saveFavorites(favList);
    updateStarStatus();
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
    if (favList.length === 0) {
        alert("還沒有最愛單字！請先在字卡點擊星星收藏。");
        return;
    }
    currentCategoryLabel = "我的最愛";
    if (currentMode === 'learn') {
        currentList = [...favList].sort(() => 0.5 - Math.random());
        currentIndex = 0;
        document.getElementById('fc-title').innerText = `卷軸：${currentCategoryLabel}`;
        showPage('page-flashcard');
        loadCard();
    } else {
        currentList = favList;
        startGenericQuiz(false, currentCategoryLabel, favList.length);
    }
}

function handleCategorySelect(main, sub = null) {
    if (currentMode === 'quiz' && quizType === 'cloze') {
        // 填空模式邏輯
        if (typeof clozeDB === 'undefined') {
            alert("填空資料庫 (data-cloze.js) 尚未載入！");
            return;
        }
        // 直接從 data-cloze.js 載入所有題目
        currentList = [...clozeDB].sort(() => 0.5 - Math.random());
        let quizSize = Math.min(10, currentList.length);
        currentList = currentList.slice(0, quizSize);
        startGenericQuiz(false, "填空試煉 (綜合)", quizSize);
        return;
    }

    if (typeof vocabDB === 'undefined') {
        alert("資料庫尚未載入！");
        return;
    }

    let raw = (main === 'TOEIC') ? vocabDB['TOEIC'] : vocabDB['TOEFL'][sub];
    currentCategoryLabel = sub ? `${sub} (TOEFL)` : main;

    if (!raw || raw.length === 0) {
        alert(`此卷軸[${currentCategoryLabel}]空白！`);
        return;
    }

    if (currentMode === 'learn') {
        currentList = [...raw].sort(() => 0.5 - Math.random());
        currentIndex = 0;
        document.getElementById('fc-title').innerText = `卷軸：${currentCategoryLabel}`;
        showPage('page-flashcard');
        loadCard();
    } else {
        let allWords = [...raw];
        const maxCount = Math.min(allWords.length, 50);
        let defaultCount = Math.min(10, maxCount);
        let countInput = prompt(`請輸入測驗題數 (10-${maxCount} 題):`, defaultCount);
        let quizSize = parseInt(countInput);
        if (isNaN(quizSize) || quizSize < 10 || quizSize > maxCount) quizSize = defaultCount;

        currentList = allWords.sort(() => 0.5 - Math.random()).slice(0, quizSize);
        startGenericQuiz(false, currentCategoryLabel, quizSize);
    }
}

// ==========================================
// 5. 單字卡功能 (Flashcard)
// ==========================================

function loadCard() {
    if (!currentList || currentList.length === 0) return;
    isSpeaking = false;
    const data = currentList[currentIndex];
    
    // 預載發音 (雖然我們用 robot voice, 這裡保留結構)
    
    const card = document.getElementById('flashcard');
    if (!card) return;
    card.classList.remove('flipped', 'anim-slide-in-right', 'anim-slide-in-left');

    const frontHTML = `
        <div class="card-face card-front">
            <button class="star-btn" id="star-btn" onclick="event.stopPropagation(); toggleFavorite()">
                <i class="fas fa-star"></i>
            </button>
            <div class="word-en" id="fc-en">${data.en}</div>
            <div class="word-phonetic" id="fc-phonetic">${data.phonetic || ""}</div>
            <div class="front-info-box" id="fc-front-info"></div>
            <button class="speak-btn-large" onclick="event.stopPropagation(); speakWord()"><i class="fas fa-volume-up"></i></button>
            <p style="color:#aaa; font-size:0.8rem; margin-top:10px;">(點擊翻面)</p>
        </div>
    `;
    const backHTML = `<div class="card-face card-back" id="fc-back-content"></div>`;
    const inner = document.querySelector('.flip-card-inner');
    if (inner) inner.innerHTML = frontHTML + backHTML;

    updateStarStatus();

    // 正面摘要
    const frontInfo = document.getElementById('fc-front-info');
    if (data.details && frontInfo) {
        data.details.forEach(d => {
            const item = document.createElement('div');
            item.className = 'summary-item';
            let mainRowHtml = `<div class="summary-row"><span class="pos-badge">${d.pos}</span><span class="cn-text">${d.cn}</span></div>`;
            item.innerHTML = mainRowHtml;
            frontInfo.appendChild(item);
        });
    }

    // 背面詳細
    const backContent = document.getElementById('fc-back-content');
    if (data.details && backContent) {
        data.details.forEach(d => {
            const block = document.createElement('div');
            block.className = 'detail-block';
            block.innerHTML = `<div class="block-title"><span class="pos-badge">${d.pos}</span> ${d.cn}</div>`;
            if (data.root) block.innerHTML += `<div style="background:#f0f8ff;padding:5px;margin-bottom:10px;font-size:0.9rem;">💡 ${data.root}</div>`;
            
            if (d.examples && d.examples.length > 0) {
                block.innerHTML += '<div class="back-header" style="text-align:left;margin-top:10px;">EXAMPLES</div>';
                d.examples.forEach(ex => {
                    const exDiv = document.createElement('div');
                    exDiv.className = 'ex-item';
                    if (typeof ex === 'string') exDiv.innerText = ex;
                    else exDiv.innerHTML = `${ex.en}<span class="ex-cn">${ex.cn}</span>`;
                    block.appendChild(exDiv);
                });
            }
            backContent.appendChild(block);
        });
    }
    speakWord();
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentIndex >= currentList.length - 1) { alert("卷軸已閱畢！"); return; }
    const card = document.getElementById('flashcard');
    card.classList.add('anim-slide-out-left');
    setTimeout(() => {
        currentIndex++;
        loadCard();
        card.classList.remove('anim-slide-out-left');
        card.classList.add('anim-slide-in-right');
        setTimeout(() => card.classList.remove('anim-slide-in-right'), 300);
    }, 300);
}

function prevCard() {
    if (currentIndex <= 0) return;
    const card = document.getElementById('flashcard');
    card.classList.add('anim-slide-out-right');
    setTimeout(() => {
        currentIndex--;
        loadCard();
        card.classList.remove('anim-slide-out-right');
        card.classList.add('anim-slide-in-left');
        setTimeout(() => card.classList.remove('anim-slide-in-left'), 300);
    }, 300);
}

// ==========================================
// 6. 測驗功能 (Quiz)
// ==========================================

function showQuizVocabSelection() {
    quizType = 'vocab';
    document.getElementById('menu-quiz-type').classList.remove('show');
    document.getElementById('menu-quiz-scope').classList.add('show');
    document.getElementById('cat-title').innerText = "選擇領域";
}

function startMistakeQuiz() {
    if (mistakeDB.length === 0) { alert("目前沒有錯題紀錄！"); return; }
    quizType = 'mistake';
    currentList = [...mistakeDB].sort(() => 0.5 - Math.random());
    startGenericQuiz(false, "錯題地牢", mistakeDB.length);
}

function startQuizSetup(type) {
    if (type === 'grammar') {
        if (typeof grammarDB === 'undefined' || !grammarDB) { alert("文法資料庫尚未載入"); return; }
        currentList = [...grammarDB].sort(() => 0.5 - Math.random()).slice(0, 10);
        quizType = 'grammar';
        startGenericQuiz(true, "文法試煉", 10);
    } 
    else if (type === 'cloze') {
        if (typeof clozeDB === 'undefined' || !Array.isArray(clozeDB)) { alert("填空題庫錯誤"); return; }
        quizType = 'cloze';
        currentList = [...clozeDB].sort(() => 0.5 - Math.random());
        let quizSize = Math.min(10, currentList.length);
        currentList = currentList.slice(0, quizSize);
        startGenericQuiz(false, "填空試煉 (綜合)", quizSize);
    }
}

function startGenericQuiz(isGrammar = false, title = "測驗", totalCount = 10) {
    isAdventureMode = false; 

    // 👇 以下是你原本的程式碼，完全保留原樣 👇
    if (currentList.length === 0) { alert(`本次測驗無題目！`); exitPractice(); return; }
    quizTotal = totalCount;
    currentIndex = 0;
    score = 0;
    document.getElementById('quiz-score').innerText = score;
    document.getElementById('quiz-bar').style.width = '0%';
    const qTag = document.getElementById('q-tag');
    if (qTag) qTag.style.display = 'none';
    showPage('page-quiz');
    loadQuestion(isGrammar);
}

function getSmartDistractors(sourceList, correctItem, type) {
    let distractors = [];
    const getVal = (item, type) => {
        if (!item) return null;
        if (item.options && item.q && item.q.includes('______')) return null; // 排除填空題
        if (item.en && item.details) return (type === 'en') ? item.en : item.details[0].cn;
        if (item.q && item.ans) {
            const qIsEn = /[a-zA-Z]/.test(item.q);
            if (type === 'en') return qIsEn ? item.q : item.ans;
            else return qIsEn ? item.ans : item.q;
        }
        return null;
    };
    const correctVal = getVal(correctItem, type);
    let potential = sourceList.filter(item => {
        const val = getVal(item, type);
        return val && val !== correctVal && val.length < 20;
    });
    potential.sort(() => Math.random() - 0.5);
    for (let item of potential) {
        if (distractors.length >= 3) break;
        let val = getVal(item, type);
        if (val && !distractors.includes(val)) distractors.push(val);
    }
    // 備用池邏輯 (簡化版)
    if (distractors.length < 3 && typeof vocabDB !== 'undefined') {
        // ... (如果需要可以去 vocabDB 抓，這裡為保持簡潔先省略，因為你上面已有相關邏輯)
        while(distractors.length < 3) distractors.push("---");
    }
    return distractors;
}

function loadQuestion(isGrammar = false) {
    if (currentIndex >= currentList.length) {
        document.getElementById('quiz-bar').style.width = '100%';
        alert(`測驗結束！得分: ${score}/${quizTotal}`);
        exitPractice();
        return;
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    const qTextElement = document.getElementById('q-text');
    const qSub = document.getElementById('q-sub');
    if (qSub) { qSub.innerText = ""; qSub.style.display = 'none'; }

    const questionData = currentList[currentIndex];
    let correctAnswer, allOptions;
    let audioWord = "";

    // 判斷是否為「自帶選項」的題目 (填空/文法/已存錯題)
    if (questionData.options && Array.isArray(questionData.options) && questionData.options.length > 0) {
        // 長句子判斷
        if (questionData.q && questionData.q.length > 30) {
            qTextElement.innerText = questionData.q;
            qTextElement.style.fontSize = "1.4rem";
            qTextElement.style.textAlign = "left";
            qTextElement.style.lineHeight = "1.6";
            qTextElement.style.fontWeight = "normal";
        } else {
            qTextElement.innerText = questionData.q || questionData.en;
            qTextElement.style.fontSize = "2.5rem";
            qTextElement.style.textAlign = "center";
        }
        correctAnswer = questionData.ans;
        allOptions = [...questionData.options].sort(() => 0.5 - Math.random());
        if (!/[^a-zA-Z]/.test(correctAnswer)) audioWord = correctAnswer;
    } else {
        // 一般單字題
        qTextElement.style.fontSize = "2.5rem";
        qTextElement.style.textAlign = "center";
        qTextElement.style.fontWeight = "normal";

        if (!questionData.en && questionData.q) { // 地城簡易格式
             qTextElement.innerText = questionData.q;
             correctAnswer = questionData.ans;
             const isAnsEnglish = /[a-zA-Z]/.test(correctAnswer);
             const distType = isAnsEnglish ? 'en' : 'cn';
             const distractors = getSmartDistractors(currentList, questionData, distType);
             allOptions = [correctAnswer, ...distractors].sort(()=>0.5-Math.random());
        } else { // 標準格式
             const isEngToChi = Math.random() > 0.5;
             audioWord = questionData.en;
             if (isEngToChi) {
                qTextElement.innerText = questionData.en;
                correctAnswer = questionData.details[0].cn;
                const distractors = getSmartDistractors(currentList, questionData, 'cn');
                allOptions = [correctAnswer, ...distractors].sort(()=>0.5-Math.random());
             } else {
                qTextElement.innerText = questionData.details[0].cn;
                correctAnswer = questionData.en;
                const distractors = getSmartDistractors(currentList, questionData, 'en');
                allOptions = [correctAnswer, ...distractors].sort(()=>0.5-Math.random());
             }
        }
    }

   currentQuizData = {
        correct: correctAnswer,
        options: allOptions,
        audioWord: audioWord,
        cn: questionData.cn || "",
        meanings: questionData.meanings || null 
    };

    if (audioWord) preloadAudio(audioWord);

    allOptions.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${String.fromCharCode(65 + index)}. ${optionText}`;
        btn.onclick = () => checkAnswer(btn, optionText === correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedButton, isCorrect) {
    // 1. 鎖定按鈕
    document.querySelectorAll('.option-btn').forEach(btn => btn.onclick = null);
    
    const resultTitle = document.getElementById('res-title');
    const resultDetail = document.getElementById('res-detail');
    const qSubElement = document.getElementById('q-sub'); 

    // A. 顯示題目中文
    if (currentQuizData.cn && qSubElement) {
        qSubElement.innerText = currentQuizData.cn;
        qSubElement.style.display = 'block';
        qSubElement.style.color = '#7f8c8d'; 
        qSubElement.style.marginTop = '10px';
        
        qSubElement.style.opacity = '0';
        qSubElement.style.transition = 'opacity 0.5s';
        requestAnimationFrame(() => qSubElement.style.opacity = '1');
    }

    // B. 顯示選項中文
    document.querySelectorAll('.option-btn').forEach(btn => {
        const parts = btn.innerText.split('. ');
        if (parts.length > 1) {
            const englishWord = parts[1].trim(); 
            let cnMeaning = (currentQuizData.meanings && currentQuizData.meanings[englishWord]) 
                            ? currentQuizData.meanings[englishWord] 
                            : findWordCN(englishWord);
            if (cnMeaning) {
                btn.innerHTML += ` <small class="opt-cn">${cnMeaning}</small>`;
            }
        }
    });

    // 2. 判斷對錯
    if (isCorrect) {
        playSound('correct');
        selectedButton.classList.add('correct');
        score++;
        
        if (currentQuizData.audioWord) setTimeout(() => playQuizAudio(currentQuizData.audioWord), 50);
        
        resultTitle.innerText = "✅ 恭喜答對！";
        resultDetail.innerHTML = ""; 

        // ★★★ 錯題地牢邏輯 (保留精通度顯示，移除按鈕) ★★★
        if (quizType === 'mistake') {
            try {
                const currentQ = currentList[currentIndex];
                const mistakeIndex = mistakeDB.findIndex(m => (currentQ.en && m.en === currentQ.en) || (currentQ.q && m.q === currentQ.q));
                
                if (mistakeIndex !== -1) {
                    let newCount = (mistakeDB[mistakeIndex].correct_count || 0) + 1;
                    mistakeDB[mistakeIndex].correct_count = newCount;

                    const masteryText = newCount >= 3 ? "✨ 已精通！移出地牢 ✨" : `🔥 精通度: ${newCount} / 3`;
                    const color = newCount >= 3 ? "#f1c40f" : "#27ae60";
                    const masteryHTML = `<br><span style="color:${color}; font-weight:bold;">${masteryText}</span>`;

                    // 顯示在題目下方
                    if (qSubElement) {
                        qSubElement.style.display = 'block'; 
                        qSubElement.style.opacity = '1';     
                        qSubElement.innerHTML += masteryHTML;
                    }
                    
                    // 顯示在彈窗內
                    if (resultDetail) {
                        resultDetail.innerHTML = masteryHTML;
                    }
                    
                    if (newCount >= 3) mistakeDB.splice(mistakeIndex, 1);
                    saveGameData();
                }
            } catch (e) { console.error(e); }
        }
    } else {
        playSound('wrong');
        selectedButton.classList.add('wrong');
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.innerText.includes(currentQuizData.correct)) btn.classList.add('correct');
        });

        // 錯題紀錄
        try {
            const currentQ = currentList[currentIndex];
            const isAlreadyInDB = mistakeDB.some(m => (currentQ.en && m.en === currentQ.en) || (currentQ.q && m.q === currentQ.q));
            if (!isAlreadyInDB) {
                const newMistake = { ...currentQ, correct_count: 0 };
                mistakeDB.push(newMistake);
                saveGameData();
            }
        } catch(e) {}

        resultTitle.innerText = "❌ 答錯了！";
        resultDetail.innerHTML = `正確答案是：<b>${currentQuizData.correct}</b>`;
        
        if (currentQuizData.audioWord) setTimeout(() => { playQuizAudio(currentQuizData.audioWord); }, 200);
    }

    // 顯示結果視窗
    document.getElementById('quiz-bar').style.width = `${((currentIndex + 1) / quizTotal) * 100}%`;
    document.getElementById('quiz-score').innerText = score;
    document.getElementById('result-popup').classList.add('show');
}

function hideResultPopup() {
    // 1. 隱藏結果視窗
    document.getElementById('result-popup').classList.remove('show');
    
    // 2. 顯示右下角的「浮動下一題」按鈕 (不然你會卡住沒辦法去下一題)
    document.getElementById('float-next-btn').classList.add('show');
}

// ==========================================
// 7. 音效與發音
// ==========================================
function playSound(type) {
    audioCorrect.volume = 0.5; audioWrong.volume = 0.3;
    if (type === 'correct') { audioCorrect.currentTime = 0; audioCorrect.play().catch(()=>{}); }
    else if (type === 'wrong') { audioWrong.currentTime = 0; audioWrong.play().catch(()=>{}); }
}
function preloadAudio(word) {}
function speakWord() {
    if (isSpeaking) return;
    const wordEl = document.getElementById('fc-en');
    if (!wordEl) return;
    const word = (wordEl.innerText || "").trim();
    if (!word) return;
    isSpeaking = true;
    useRobotVoice(word, () => { isSpeaking = false; });
}
function useRobotVoice(word, callback) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(word);
        utter.lang = 'en-US';
        utter.rate = 0.85;
        utter.onend = callback;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
        setTimeout(callback, 2000);
    } else {
        alert("不支援語音");
        callback();
    }
}
function playQuizAudio(word) { useRobotVoice(word, () => {}); }

// ==========================================
// 8. 地城副本
// ==========================================
function showDungeonSubMenu() {
    const list = document.getElementById('dungeon-toefl-list');
    if (!list) return;
    list.innerHTML = '';
    if (typeof vocabDB === 'undefined' || !vocabDB['TOEFL']) { alert("資料庫未載入"); return; }
    const catNameMap = { "Astronomy": "🌌 天文 ", "Biology": "🧬 生物 ", "Geography": "🌍 地理 ", "Psychology": "🧠 心理學 ", "History": "🏺 歷史考古 ", "Art": "🎨 藝術音樂 ", "Geology": "🪨 地質學 ", "Business": "💼 商業經濟 ", "LifeScience": "🦠 生命科學 " };
    Object.keys(vocabDB['TOEFL']).forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'menu-btn';
        const displayName = catNameMap[cat] || `📜 ${cat}`;
        btn.innerHTML = `<span>${displayName}</span> <i class="fas fa-chevron-right"></i>`;
        btn.onclick = () => openDungeonMap('TOEFL', cat);
        list.appendChild(btn);
    });
    showPage('page-dungeon-toefl-sub');
}

// ==========================================
function openDungeonMap(mainCat, subCat = null) {
    if (typeof vocabDB === 'undefined') return;

    // 取得原始資料
    let rawData, saveKey;
    if (mainCat === 'TOEIC') { 
        rawData = vocabDB['TOEIC']; 
        saveKey = 'TOEIC'; 
        adventureKey = 'TOEIC'; 
    } else { 
        rawData = vocabDB['TOEFL'][subCat]; 
        saveKey = `TOEFL_${subCat}`; 
        adventureKey = saveKey; 
    }
    
    if (!rawData || rawData.length === 0) { alert("此區域無資料！"); return; }
    
    // ★★★ 關鍵：使用固定雜湊排序打亂資料 ★★★
    // 這樣每次進來，順序都是亂的，但永遠固定不變
    const shuffledData = pseudoShuffle(rawData);

    document.getElementById('adv-title').innerText = `地圖: ${subCat || mainCat}`;

    const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
    const unlockedIndex = Number(allProgress[saveKey] || 0);
    const masteryData = JSON.parse(localStorage.getItem(`vocabRPG_mastery_${saveKey}`)) || {};
    
    // 使用打亂後的長度計算關卡數
    const totalLevels = Math.ceil(shuffledData.length / 10);
    const grid = document.getElementById('adventure-grid');
    grid.innerHTML = '';

    for (let i = 0; i < totalLevels; i++) {
        const node = document.createElement('div');
        node.className = 'level-node';
        
        // 取得該關卡的紀錄
        const record = masteryData[i] || { nextPlay: 0, count: 0 };
        
        // 判斷鎖定
        if (i > unlockedIndex) {
            node.classList.add('locked');
            grid.appendChild(node);
            continue;
        }

        const starHtml = `<div class="star-container">${getStarHtml(record.count)}</div>`;
        const now = Date.now();
        const timeLeft = record.nextPlay - now;

        // ★★★ 這裡傳入 shuffledData 給戰鬥系統 ★★★
        if (record.count >= 5) {
            node.classList.add('mastered');
            node.innerHTML = starHtml; 
            node.onclick = () => startDungeonBattle(shuffledData, i);
        } else if (timeLeft > 0) {
            node.classList.add('cooldown');
            node.innerHTML = `${starHtml}<span class="level-num" style="font-size:1rem">${formatTimeLeft(timeLeft)}</span>`;
            node.onclick = () => alert(`⏳ 還需等待 ${formatTimeLeft(timeLeft)}`);
        } else {
            node.classList.add('ready');
            node.innerHTML = starHtml;
            node.onclick = () => startDungeonBattle(shuffledData, i);
        }
        
        grid.appendChild(node);
    }
    showPage('page-adventure');
}

// ==========================================
// 2. 固定亂數排序器 (這兩個函式請放在 script.js 裡面)
// ==========================================
function pseudoShuffle(array) {
    // 複製一份陣列，避免改壞原始資料庫
    const copy = [...array];
    
    // 使用 sort 進行排序
    copy.sort((a, b) => {
        // 取得單字的英文作為排序種子 (轉小寫避免大小寫差異)
        const wordA = (a.en || a.q || "").toLowerCase();
        const wordB = (b.en || b.q || "").toLowerCase();
        
        // 算出雜湊值 (Hash Code)
        const hashA = stringHashCode(wordA);
        const hashB = stringHashCode(wordB);
        
        // 根據數字大小排序 -> 達成「亂序但固定」的效果
        return hashA - hashB;
    });

    return copy;
}

// 將字串轉換為數字的演算法
function stringHashCode(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function startDungeonBattle(allWords, levelIndex) {
    adventureLevelIndex = levelIndex;
    isAdventureMode = true;
    const start = levelIndex * 10;
    const chunkWords = allWords.slice(start, start + 10);
    let battleQuestions = [];
    chunkWords.forEach(word => {
        battleQuestions.push({ type: 'en_to_cn', q: word.en, ans: word.details[0].cn, options: generateOptions(allWords, word.details[0].cn, 'cn'), audioWord: word.en });
        battleQuestions.push({ type: 'cn_to_en', q: word.details[0].cn, ans: word.en, options: generateOptions(allWords, word.en, 'en'), audioWord: word.en });
    });
    currentList = battleQuestions.sort(() => 0.5 - Math.random());
    quizTotal = 20; currentIndex = 0; score = 0;
    document.getElementById('quiz-score').innerText = 0;
    document.getElementById('quiz-bar').style.width = '0%';
    showPage('page-quiz');
    loadDungeonQuestion();
}

function generateOptions(fullDB, correctAns, type) {
    let distractors = [];
    let potential = fullDB.filter(item => {
        let val = (type === 'cn') ? item.details[0].cn : item.en;
        return val !== correctAns;
    }).sort(() => Math.random() - 0.5);
    
    potential.slice(0, 3).forEach(item => {
        distractors.push((type === 'cn') ? item.details[0].cn : item.en);
    });
    
    while(distractors.length < 3) distractors.push("---");
    return [correctAns, ...distractors].sort(() => Math.random() - 0.5);
}

function loadDungeonQuestion() {
    if (currentIndex >= currentList.length) { finishDungeon(); return; }
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    const currentQ = currentList[currentIndex];
    const qTextElement = document.getElementById('q-text');
    qTextElement.innerText = currentQ.q;
    qTextElement.style.fontSize = "2.5rem";
    qTextElement.style.textAlign = "center";

    currentQuizData = { correct: currentQ.ans, audioWord: currentQ.audioWord };
    if (currentQ.audioWord) setTimeout(() => preloadAudio(currentQ.audioWord), 0);

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${String.fromCharCode(65 + index)}. ${opt}`;
        btn.onclick = () => checkDungeonAnswer(btn, opt === currentQ.ans);
        optionsContainer.appendChild(btn);
    });
}

function checkDungeonAnswer(btn, isCorrect) {
    document.querySelectorAll('.option-btn').forEach(b => b.onclick = null);
    if (isCorrect) {
        btn.classList.add('correct');
        playSound('correct');
        score++;
        document.getElementById('res-title').innerText = "✅ 正確！";
        document.getElementById('res-detail').innerHTML = "";
        setTimeout(() => { playQuizAudio(currentQuizData.audioWord); }, 50);
    } else {
        btn.classList.add('wrong');
        playSound('wrong');
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.innerText.includes(currentQuizData.correct)) b.classList.add('correct');
        });
        document.getElementById('res-title').innerText = "❌ 錯誤！";
        document.getElementById('res-detail').innerHTML = `正確答案：<b>${currentQuizData.correct}</b>`;
    }
    document.getElementById('quiz-score').innerText = score;
    document.getElementById('quiz-bar').style.width = `${((currentIndex + 1) / quizTotal) * 100}%`;
    document.getElementById('result-popup').classList.add('show');
}

function finishDungeon() {
    const passThreshold = Math.ceil(quizTotal * 0.8); // 及格門檻
    const isPassed = score >= passThreshold;
    
    // 1. 準備彈窗內容 (不使用 alert，改用 HTML)
    let titleText = isPassed ? "🏆 挑戰成功！" : "💀 挑戰失敗...";
    let bodyText = `得分：${score} / ${quizTotal}`;
    let titleColor = isPassed ? "green" : "red";

    // 2. 處理通關解鎖邏輯
    if (isPassed) {
        playSound('correct');
        const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
        const currentUnlocked = Number(allProgress[adventureKey] || 0);
        
        if (Number(adventureLevelIndex) === currentUnlocked) {
            allProgress[adventureKey] = currentUnlocked + 1;
            localStorage.setItem('vocabRPG_dungeon_progress', JSON.stringify(allProgress));
            bodyText += "<br><br>🎉 恭喜！<b>下一層已解鎖！</b>";
            scheduleCloudSave();
        }
    } else {
        playSound('wrong');
        bodyText += "<br><br>(失敗不扣次數，請再接再厲)";
    }

    // 3. 處理精通度與冷卻 (SRS)
    const masteryKey = `vocabRPG_mastery_${adventureKey}`;
    let masteryData = JSON.parse(localStorage.getItem(masteryKey)) || {};
    let record = masteryData[adventureLevelIndex] || { nextPlay: 0, count: 0 };

    if (isPassed) {
        record.count = (record.count || 0) + 1;
        if (record.count >= 5) {
            record.nextPlay = 0;
            bodyText += "<br>👑 <b style='color:#f1c40f'>已精通！此關卡永久開放。</b>";
        } else {
            const cooldown = calculateCooldown(score, quizTotal);
            record.nextPlay = Date.now() + cooldown;
            bodyText += `<br>⏳ 下次挑戰冷卻：${formatTimeLeft(cooldown)}`;
        }
    }
    
    // 存檔
    masteryData[adventureLevelIndex] = record;
    localStorage.setItem(masteryKey, JSON.stringify(masteryData));
    scheduleCloudSave();

    // 4. ★★★ 顯示彈窗並設定「離開行為」 ★★★
    const modal = document.getElementById('modal-overlay');
    const mTitle = document.getElementById('modal-title');
    const mBody = document.getElementById('modal-body');
    // 嘗試抓取彈窗裡的關閉按鈕，假設你的 HTML 裡按鈕是唯一的 button 或最後一個
    const mBtn = modal.querySelector('button'); 

    if (mTitle) {
        mTitle.innerText = titleText;
        mTitle.style.color = titleColor;
    }
    if (mBody) mBody.innerHTML = bodyText;
    
    if (modal) modal.style.display = 'flex';

    // 重要：重新定義「關閉按鈕」的行為
    // 當在地城結算按關閉時，要執行「回到地圖」
    if (mBtn) {
        mBtn.onclick = function() {
            modal.style.display = 'none';
            // 恢復按鈕預設行為 (避免影響其他模式)
            mBtn.onclick = closeModal; 
            // 回到地圖
            openDungeonMap(
                adventureKey.includes('TOEIC') ? 'TOEIC' : 'TOEFL', 
                adventureKey.includes('_') ? adventureKey.split('_')[1] : null
            );
        };
    }
}
function calculateCooldown(score, total) {
    // 1. 設定最大冷卻時間：36 小時 (毫秒)
    const maxTime = 36 * 60 * 60 * 1000; 

    // 2. 計算答對率 (例如 20/20 = 1.0, 16/20 = 0.8)
    // 邏輯：錯越多 -> 分數越低 -> 比率越小 -> 冷卻時間越短
    const ratio = score / total;

    // 3. 回傳計算結果
    // 例如：全對 = 36小時; 剛好及格(80%) = 28.8小時
    return Math.floor(maxTime * ratio);
}
function exitAdventure() {
    if (adventureKey && adventureKey.startsWith('TOEFL')) showPage('page-dungeon-toefl-sub');
    else showPage('page-dungeon-select');
}

// ==========================================
// 9. Firebase 雲端功能 (防呆修正版)
// ==========================================

// 1. 強化版 JSON 解析 (防止 null 導致當機)
function _safeParseJSON(str, fallback) {
    if (!str || str === "null" || str === "undefined") return fallback;
    try {
        const result = JSON.parse(str);
        return result === null ? fallback : result;
    } catch (e) {
        return fallback;
    }
}

function _lsGetJSON(key, fallback) {
    return _safeParseJSON(localStorage.getItem(key), fallback);
}

function _lsSetJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// 2. 登入函式
function googleLogin() {
    if (typeof auth === 'undefined') {
        alert("Firebase 尚未載入，請檢查網路連線或 index.html 設定。");
        return;
    }
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("登入成功", result.user);
            // 登入後不需要做什麼，onAuthStateChanged 會自動處理
        })
        .catch((error) => {
            console.error(error);
            alert("登入失敗: " + error.message);
        });
}

// 3. 登出函式
function googleLogout() {
    if (typeof auth !== 'undefined') {
        auth.signOut().then(() => {
            alert("已登出");
            location.reload();
        });
    }
}

// 4. 背景存檔排程
let __cloudSaveTimer = null;
function scheduleCloudSave(delayMs = 600) {
    if (!currentUser) return;
    clearTimeout(__cloudSaveTimer);
    __cloudSaveTimer = setTimeout(() => {
        try { saveToCloud(); } catch (e) { console.error("背景存檔失敗", e); }
    }, delayMs);
}

// 5. ★★★ 修正：監聽登入狀態並更新按鈕 ★★★
if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged((user) => {
        // 抓取你的 HTML 裡原本就有的按鈕元件
        const loginBtn = document.getElementById('rpg-auth-btn');
        const authText = document.getElementById('auth-text');
        const authIcon = document.getElementById('auth-icon');

        if (user) {
            // === 登入成功狀態 ===
            currentUser = user;
            
            // 把按鈕文字改成「登出」
            if (authText) authText.innerText = `登出 (${user.displayName || '勇者'})`;
            if (authIcon) authIcon.className = 'fas fa-sign-out-alt';
            
            // 點擊行為改成登出
            if (loginBtn) {
                loginBtn.onclick = googleLogout;
                
                // ★★★ 關鍵修正：刪除下面這行，不要讓它變灰色！ ★★★
                // loginBtn.style.background = "#bdc3c7"; 
                
                // 讓它保持原本 CSS 設定的金色框框 (gold-frame.png)
                // 如果你想讓登出按鈕稍微不一樣，可以用濾鏡 (選填)
                // loginBtn.style.filter = "hue-rotate(180deg)"; // 這樣會變成藍色框框
            }

            // 開始同步資料
            checkCloudSave(user);
        } else {
            // === 未登入狀態 ===
            currentUser = null;

            // 恢復按鈕為「登入」
            if (authText) authText.innerText = "同步進度 / 登入";
            if (authIcon) authIcon.className = 'fab fa-google';
            
            if (loginBtn) {
                loginBtn.onclick = googleLogin;
                
                // 清除可能被設定過的樣式，回復預設
                loginBtn.style.background = ""; 
                loginBtn.style.filter = "";
            }
        }
    });
}
// 6. 檢查雲端存檔
function checkCloudSave(user) {
    console.log("☁️ 檢查雲端...");
    const dbRef = (typeof db !== 'undefined' && db) ? db : firebase.firestore();
    
    dbRef.collection("users").doc(user.uid).get().then((doc) => {
        if (!doc.exists) {
            console.log("☁️ 無雲端存檔，正在上傳本地進度...");
            saveToCloud();
        } else {
            console.log("☁️ 發現雲端存檔，開始合併...");
            loadFromCloud(doc.data());
            // 合併完後立刻回寫，確保雙邊一致
            saveToCloud();
        }
    }).catch(err => {
        console.error("雲端讀取錯誤:", err);
    });
}

// 7. 上傳資料
function saveToCloud() {
    if (!currentUser) return;
    const dbRef = (typeof db !== 'undefined' && db) ? db : firebase.firestore();
    
    const localProg = _lsGetJSON('vocabRPG_dungeon_progress', {});
    const localFav = _lsGetJSON('vocabPro_favorites', []);
    const localHistory = _lsGetJSON('vocabRPG_daily_activity', {});
    
    const masteryByKey = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('vocabRPG_mastery_')) {
            masteryByKey[k.replace('vocabRPG_mastery_', '')] = _lsGetJSON(k, {});
        }
    }

    const dataToSend = {
        mistakes: mistakeDB || [],
        favorites: localFav || [],
        dungeonProgress: localProg || {},
        masteryByKey: masteryByKey || {},
        dailyActivity: localHistory || {},
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    dbRef.collection("users").doc(currentUser.uid).set(dataToSend, { merge: true });
}

// 8. ★★★ 修正：下載並合併 (解決 localF error) ★★★
// 📥 讀取雲端存檔並合併 (強力修復版：解決進度鎖死問題)
function loadFromCloud(cloudData) {
    if (!cloudData) return;

    console.log("📥 開始處理雲端資料...");

    // Helper: 強制轉為整數，如果失敗則回傳 0 (防止 NaN 導致關卡鎖死)
    const safeInt = (val) => {
        const n = parseInt(val, 10);
        return isNaN(n) ? 0 : n;
    };

    // 1. 合併錯題 (聯集)
    const localM = Array.isArray(mistakeDB) ? mistakeDB : [];
    const cloudM = Array.isArray(cloudData.mistakes) ? cloudData.mistakes : [];
    const mOut = new Map();
    [...localM, ...cloudM].forEach(m => {
        const k = (m.en) ? m.en : m.q;
        if(k && !mOut.has(k)) mOut.set(k, m);
    });
    mistakeDB = Array.from(mOut.values());
    _lsSetJSON('vocabPro_rpg', { mistakes: mistakeDB });
    updateMistakeCount();

    // 2. 合併最愛 (聯集)
    const localF = _lsGetJSON('vocabPro_favorites', []) || [];
    const cloudF = cloudData.favorites || [];
    const safeLocalF = Array.isArray(localF) ? localF : [];
    const safeCloudF = Array.isArray(cloudF) ? cloudF : [];
    const fOut = new Map();
    [...safeLocalF, ...safeCloudF].forEach(f => {
        if(f && f.en && !fOut.has(f.en)) fOut.set(f.en, f);
    });
    _lsSetJSON('vocabPro_favorites', Array.from(fOut.values()));

    // 3. 合併地城進度 (取最大值)
    // ★★★ 修正重點：使用 Set 抓出所有 Key (本地+雲端)，確保壞掉的本地資料也會被修復 ★★★
    const localP = _lsGetJSON('vocabRPG_dungeon_progress', {}) || {};
    const cloudP = cloudData.dungeonProgress || {};
    
    // 建立所有進度 Key 的清單 (包含 TOEIC, TOEFL_Biology 等)
    const allKeys = new Set([...Object.keys(localP), ...Object.keys(cloudP)]);
    const mergedP = {};

    allKeys.forEach(k => {
        // 確保兩邊都是有效數字，如果有 NaN 就會變成 0
        const valL = safeInt(localP[k]);
        const valC = safeInt(cloudP[k]);
        mergedP[k] = Math.max(valL, valC);
    });
    _lsSetJSON('vocabRPG_dungeon_progress', mergedP);

    // 4. 合併每日數據 (取最大值)
    const localD = _lsGetJSON('vocabRPG_daily_activity', {}) || {};
    const cloudD = cloudData.dailyActivity || {};
    const allDailyKeys = new Set([...Object.keys(localD), ...Object.keys(cloudD)]);
    const mergedD = {};
    
    allDailyKeys.forEach(k => {
        mergedD[k] = Math.max(safeInt(localD[k]), safeInt(cloudD[k]));
    });
    _lsSetJSON('vocabRPG_daily_activity', mergedD);

    // 5. 合併 SRS 精通資料 (Mastery)
    const cloudMastery = cloudData.masteryByKey || {};
    Object.keys(cloudMastery).forEach(key => {
        const localKey = `vocabRPG_mastery_${key}`;
        const localVal = _lsGetJSON(localKey, {}) || {};
        const cloudVal = cloudMastery[key] || {};
        
        const mergedVal = { ...localVal };
        Object.keys(cloudVal).forEach(lvl => {
            const lRec = localVal[lvl] || { count: 0, nextPlay: 0 };
            const cRec = cloudVal[lvl] || { count: 0, nextPlay: 0 };
            if (cRec.count > lRec.count) {
                mergedVal[lvl] = cRec;
            }
        });
        _lsSetJSON(localKey, mergedVal);
    });

    console.log("✅ 雲端資料合併完成");

    // 重整頁面邏輯
    if (!sessionStorage.getItem('just_synced')) {
        sessionStorage.setItem('just_synced', 'true');
        alert("📥 雲端進度同步完成！即將更新畫面...");
        location.reload(); 
    } else {
        sessionStorage.removeItem('just_synced');
    }
}

// ==========================================
// 10. 手機觸控優化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const interactiveClasses = ['menu-btn', 'mode-card', 'option-btn', 'rpg-login-btn', 'back-btn', 'ctrl-btn', 'level-node', 'chest-btn'];
    document.body.addEventListener('touchstart', (e) => {
        const target = e.target.closest('.' + interactiveClasses.join(', .'));
        if (target && !target.classList.contains('locked') && !target.disabled) {
            target.classList.add('rpg-pressed');
        }
    }, { passive: true });

    const endTouch = (e) => {
        const target = e.target.closest('.' + interactiveClasses.join(', .'));
        if (target) {
            setTimeout(() => { target.classList.remove('rpg-pressed'); }, 80);
        }
    };
    document.body.addEventListener('touchend', endTouch, { passive: true });
    document.body.addEventListener('touchcancel', endTouch, { passive: true });
});
// ==========================================
// ★★★ 補上遺失的小工具：全域單字搜尋 (查中文) ★★★
// ==========================================
function findWordCN(word) {
    // 1. 基本防呆
    if (!word || typeof vocabDB === 'undefined') return null;
    
    // 2. 判斷是不是中文 (如果是中文選項，就不用查了)
    // 這一行可以避免程式拿著「蘋果」去英文單字庫裡找，浪費效能
    if (/[\u4e00-\u9fa5]/.test(word)) return null;

    // 3. 找 TOEIC 資料庫
    if (vocabDB['TOEIC']) {
        const found = vocabDB['TOEIC'].find(w => w.en === word);
        if (found && found.details) return found.details[0].cn;
    }
    
    // 4. 找 TOEFL 資料庫 (遍歷所有分類)
    if (vocabDB['TOEFL']) {
        for (const catKey in vocabDB['TOEFL']) {
            const list = vocabDB['TOEFL'][catKey];
            const found = list.find(w => w.en === word);
            if (found && found.details) return found.details[0].cn;
        }
    }
    
    // 5. 真的找不到
    return null;
}
function showFinalResult(score) {
    const modal = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    // 顯示遮罩
    modal.style.display = 'block';

    // 邏輯判斷
    if (score >= 60) { // 假設 60 分及格
        title.innerText = "🏆 挑戰成功！";
        title.style.color = "green";
        body.innerText = "恭喜你！你的分數是: " + score;
    } else {
        title.innerText = "💀 挑戰失敗...";
        title.style.color = "red";
        body.innerText = "很遺憾，你的分數是: " + score + "。請再接再厲！";
    }
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}
function formatTimeLeft(ms) {
    if (ms <= 0) return "00:00:00";
    
    // 計算時、分、秒
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)));

    // 補零 (例如 5 -> 05)
    const pad = (n) => n < 10 ? '0' + n : n;
    
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function nextQuestion() {
    // 1. 隱藏結果彈窗與浮動按鈕
    const resultPopup = document.getElementById('result-popup');
    const floatBtn = document.getElementById('float-next-btn');
    
    if (resultPopup) resultPopup.classList.remove('show');
    if (floatBtn) floatBtn.classList.remove('show');

    // 2. 題號 +1
    currentIndex++;

    // 3. 判斷現在是「地城副本」還是「一般測驗」
    if (isAdventureMode) {
        // --- 地城模式 ---
        // 直接呼叫 loadDungeonQuestion，它內部會自己判斷「題目沒了就結算」
        loadDungeonQuestion();
    } else {
        // --- 一般模式 (單字/填空/文法/錯題) ---
        // 判斷是否為文法題 (因為 loadQuestion 需要這個參數)
        const isGrammar = (quizType === 'grammar');
        loadQuestion(isGrammar);
    }
}
function getStarHtml(count) {
    // 如果沒有通關紀錄，或次數為 0，回傳空字串
    if (!count || count <= 0) return '';

    // 如果通關 5 次 (含) 以上，回傳一顆大星星
    if (count >= 5) {
        return '<span class="star-big">★</span>';
    }

    // 如果通關 1~4 次，回傳對應數量的小星星
    let stars = '';
    for (let i = 0; i < count; i++) {
        stars += '<span class="star-small">★</span>';
    }
    return stars;
}
function getStarHtml(count) {
    if (!count || count <= 0) return '';
    
    // 如果通關 5 次以上，顯示一顆大星星
    if (count >= 5) {
        return '<div class="star-big">★</div>';
    }
    
    // 否則顯示對應數量的小星星
    let stars = '';
    for (let i = 0; i < count; i++) {
        stars += '<span class="star-small">★</span>';
    }
    return stars;
}