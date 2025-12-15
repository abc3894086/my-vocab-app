// ==========================================
// 1. 全域變數宣告
// ==========================================
let currentMode = ''; 
let quizType = ''; 
let currentList = []; 
let currentIndex = 0; 
let score = 0; 
let currentCategoryLabel = "";
let quizTotal = 0; 
let currentQuizData = null; 

// 音效變數
let cachedAudioObj = null;
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

window.onload = function() {
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
}

function updateMistakeCount() {
    const el = document.getElementById('mistake-count');
    if(el) el.innerText = mistakeDB.length;
}

// ==========================================
// 3. 頁面導航與模式選擇 (核心修復部分)
// ==========================================

function showPage(id) {
    // 1. 找到目標頁面
    const target = document.getElementById(id);
    if (!target) {
        console.error("找不到頁面 ID:", id);
        return;
    }

    // 2. 把所有頁面的 active 拿掉 (讓它們滑出去)
    document.querySelectorAll('.page').forEach(p => {
        if (p.id !== id) {
            p.classList.remove('active');
        }
    });

    // 3. 稍微延遲一點點再顯示新頁面，確保動畫流暢
    // (這行能確保瀏覽器有時間處理 class 變化)
    requestAnimationFrame(() => {
        target.classList.add('active');
    });
}

function selectMode(mode) {
    currentMode = mode;
    isAdventureMode = false;

    // 1. 隱藏所有選單區塊
    document.querySelectorAll('.menu-section').forEach(el => el.classList.remove('show'));

    if (mode === 'learn') {
        const menu = document.getElementById('menu-learn-scope');
        if(menu) menu.classList.add('show');
        
        const title = document.getElementById('cat-title');
        if(title) title.innerText = "選擇卷軸";
        
        showPage('page-category');

    } else if (mode === 'quiz') {
        const menu = document.getElementById('menu-quiz-type');
        if(menu) menu.classList.add('show');
        
        const title = document.getElementById('cat-title');
        if(title) title.innerText = "選擇試煉";
        
        showPage('page-category');

    } else if (mode === 'dungeon') {
        const menu = document.getElementById('dungeon-main-menu');
        if(menu) menu.classList.add('show');
        
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
    // 如果是在測驗選單的第二層 (選擇領域)，要回到第一層 (選擇類型)
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
    // ★★★ 防呆檢查：確保資料庫已載入 ★★★
    if (typeof vocabDB === 'undefined') {
        alert("資料庫尚未載入！請檢查 data 資料夾內的檔案是否正確連結。");
        return;
    }

    let raw = (main === 'TOEIC') ? vocabDB['TOEIC'] : vocabDB['TOEFL'][sub];
    currentCategoryLabel = sub ? `${sub} (TOEFL)` : main;

    if (!raw || raw.length === 0) {
        alert(`此卷軸[${currentCategoryLabel}]空白！請先擴充單字。`);
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

        let countInput = prompt(`請輸入測驗題數 (10-${maxCount} 題，以 10 為單位):`, defaultCount);
        let quizSize = parseInt(countInput);

        if (isNaN(quizSize) || quizSize < 10 || quizSize > maxCount || quizSize % 10 !== 0) {
            alert(`輸入無效。本次測驗將使用 ${defaultCount} 題。`);
            quizSize = defaultCount;
        }

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
    preloadAudio(data.en);

    const card = document.getElementById('flashcard');
    if (!card) return;

    card.classList.remove('flipped');
    card.classList.remove('anim-slide-in-right');
    card.classList.remove('anim-slide-in-left');

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

    const frontInfo = document.getElementById('fc-front-info');
    if (data.details && frontInfo) {
        data.details.forEach(d => {
            const item = document.createElement('div');
            item.className = 'summary-item';
            let mainRowHtml = `<div class="summary-row"><span class="pos-badge">${d.pos}</span><span class="cn-text">${d.cn}</span></div>`;
            let formsHtml = d.forms ? `<div class="forms-text">(${d.forms})</div>` : '';
            item.innerHTML = mainRowHtml + formsHtml;
            frontInfo.appendChild(item);
        });
    }

    const backContent = document.getElementById('fc-back-content');
    if (data.details && backContent) {
        data.details.forEach(d => {
            const block = document.createElement('div');
            block.className = 'detail-block';
            const title = document.createElement('div');
            title.className = 'block-title';
            title.innerHTML = `<span class="pos-badge">${d.pos}</span> ${d.cn}`;
            block.appendChild(title);

            if (data.root) block.innerHTML += `<div style="background:#f0f8ff;padding:5px 10px;border-radius:5px;font-size:0.9rem;color:#2980b9;margin-bottom:10px;"><i class="fas fa-lightbulb"></i> <b>記憶：</b>${data.root}</div>`;
            if (d.synonyms) block.innerHTML += `<div style="font-size:0.9rem;color:#888;margin-bottom:10px;"><b>Synonyms:</b> ${d.synonyms}</div>`;

            if (d.examples && d.examples.length > 0) {
                block.innerHTML += '<div class="back-header" style="text-align:left;margin-top:10px;">EXAMPLES</div>';
                d.examples.forEach(ex => {
                    const exDiv = document.createElement('div');
                    exDiv.className = 'ex-item';
                    if (typeof ex === 'string') {
                        exDiv.innerText = ex;
                    } else {
                        exDiv.innerHTML = `${ex.en}<span class="ex-cn">${ex.cn}</span>`;
                    }
                    block.appendChild(exDiv);
                });
            }
            backContent.appendChild(block);
        });
    }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentIndex >= currentList.length - 1) {
        alert("卷軸已閱畢！");
        return;
    }

    const card = document.getElementById('flashcard');
    card.classList.add('anim-slide-out-left');

    setTimeout(() => {
        currentIndex++;
        loadCard();
        card.classList.remove('anim-slide-out-left');
        card.classList.add('anim-slide-in-right');
        setTimeout(() => {
            card.classList.remove('anim-slide-in-right');
        }, 300);
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
        setTimeout(() => {
            card.classList.remove('anim-slide-in-left');
        }, 300);
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
    if(mistakeDB.length === 0) {
        alert("目前沒有錯題紀錄！");
        return;
    }
    quizType = 'mistake';
    currentList = [...mistakeDB].sort(() => 0.5 - Math.random());
    startGenericQuiz(false, "錯題地牢", mistakeDB.length);
}

function startQuizSetup(type) {
    if(type === 'grammar') {
        if(typeof grammarDB === 'undefined' || !grammarDB) {
             alert("文法資料庫尚未載入"); return;
        }
        currentList = [...grammarDB].sort(() => 0.5 - Math.random()).slice(0, 10);
        quizType = 'grammar';
        startGenericQuiz(true, "文法試煉", 10);
    }
}

function startGenericQuiz(isGrammar = false, title = "測驗", totalCount = 10) {
    if (currentList.length === 0) {
        alert(`本次測驗無題目！`);
        exitPractice();
        return;
    }

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

    const questionData = currentList[currentIndex];
    let correctAnswer;
    let allOptions;
    let audioWord = ""; // 專門用來存英文單字，供發音使用

    if (isGrammar) {
        // 文法題保持原樣
        correctAnswer = questionData.ans;
        allOptions = questionData.options.sort(() => 0.5 - Math.random());
        document.getElementById('q-text').innerText = questionData.q;
        document.getElementById('q-sub').innerText = "";
        audioWord = ""; 
    } else {
        // === ★★★ 單字題核心修改 ★★★ ===
        
        // 隨機決定題型：50% 機率是「英翻中」，50% 機率是「中翻英」
        const isEngToChi = Math.random() > 0.5;

        // 設定發音單字 (永遠是英文那個字)
        audioWord = questionData.en; 

        if (isEngToChi) {
            // 模式 A：看英文 (題目) -> 選中文 (選項)
            document.getElementById('q-text').innerText = questionData.en; // 題目顯示英文
            correctAnswer = questionData.details[0].cn; // 正解是中文
            
            // 產生中文干擾項
            const distractors = generateDistractors(currentList, correctAnswer, 3, 'cn');
            allOptions = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());

        } else {
            // 模式 B：看中文 (題目) -> 選英文 (選項) - (原本的模式)
            document.getElementById('q-text').innerText = questionData.details[0].cn; // 題目顯示中文
            correctAnswer = questionData.en; // 正解是英文
            
            // 產生英文干擾項
            const distractors = generateDistractors(currentList, correctAnswer, 3, 'en');
            allOptions = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
        }
    }

    // 將正確答案與發音單字存入 currentQuizData
    currentQuizData = {
        correct: correctAnswer,
        options: allOptions,
        audioWord: audioWord // 新增這個欄位確保發音正確
    };

    // 如果題目是英文，就先預載音檔
    if(audioWord) preloadAudio(audioWord);

    allOptions.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${String.fromCharCode(65 + index)}. ${optionText}`;
        btn.onclick = () => checkAnswer(btn, optionText === correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

function generateDistractors(wordList, excludeVal, count, type = 'en') {
    if (wordList.length < 4) return ["A", "B", "C"];
    
    // 根據類型決定要從資料中拿什麼欄位
    const potentialDistractors = wordList
        .map(word => (type === 'en') ? word.en : word.details[0].cn) // 抓英文或中文
        .filter(val => val !== excludeVal); // 排除正確答案

    const shuffled = potentialDistractors.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function checkAnswer(selectedButton, isCorrect) {
    document.getElementById('options-container').querySelectorAll('.option-btn').forEach(btn => btn.onclick = null);

    const resultTitle = document.getElementById('res-title');
    const resultDetail = document.getElementById('res-detail');

    if (isCorrect) {
        playSound('correct');
        setTimeout(() => {
            // ★★★ 修改重點：使用 audioWord (英文單字) 來發音，而不是 correct (可能是中文) ★★★
            if(currentQuizData.audioWord) {
                playQuizAudio(currentQuizData.audioWord);
            }
        }, 50);

        selectedButton.classList.add('correct');
        score++;

        resultTitle.innerText = "✅ 恭喜答對！";
        // 顯示原本的單字與意思，讓學習更完整
        resultDetail.innerHTML = `答案：<b>${currentQuizData.correct}</b>`;
    } else {
        playSound('wrong');
        selectedButton.classList.add('wrong');
        
        // 錯題紀錄邏輯
        const currentQ = currentList[currentIndex];
        // 確保紀錄的是原始單字物件，而不是中文
        if(currentQ.en && !mistakeDB.some(m => m.en === currentQ.en)) {
            mistakeDB.push(currentQ);
            saveGameData();
        }

        const optionsContainer = document.getElementById('options-container');
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText.includes(currentQuizData.correct)) {
                btn.classList.add('correct');
            }
        });

        resultTitle.innerText = "❌ 答錯了！";
        
        // 答錯時也唸一下正確英文，加強記憶
        if(currentQuizData.audioWord) {
            setTimeout(() => {
                playQuizAudio(currentQuizData.audioWord);
            }, 200);
        }

        resultDetail.innerHTML = `正確答案是：<b>${currentQuizData.correct}</b>`;
    }

    document.getElementById('quiz-bar').style.width = `${((currentIndex + 1) / quizTotal) * 100}%`;
    document.getElementById('quiz-score').innerText = score;
    document.getElementById('result-popup').classList.add('show');
}

function nextQuestion() {
    currentIndex++;
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('result-popup').classList.remove('show');

    if (isAdventureMode) {
        loadDungeonQuestion();
    } else {
        loadQuestion(quizType === 'grammar');
    }
}

function hideResultPopup() {
    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.add('show');
}

// ==========================================
// 7. 音效與發音功能
// ==========================================

function playSound(type) {
    audioCorrect.volume = 0.5;
    audioWrong.volume = 0.3;

    if (type === 'correct') {
        audioCorrect.currentTime = 0;
        audioCorrect.play().catch(e => console.log("音效錯誤", e));
    } else if (type === 'wrong') {
        audioWrong.currentTime = 0;
        audioWrong.play().catch(e => console.log("音效錯誤", e));
    }
}

function preloadAudio(word) {
    if (!word) return;
    cachedAudioObj = null;

    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word);

    fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
            if (Array.isArray(data) && data[0] && Array.isArray(data[0].phonetics)) {
                const ph = data[0].phonetics.find(p => p.audio);
                if (ph && ph.audio) {
                    const audio = new Audio(ph.audio);
                    audio.preload = 'auto';
                    audio.load();
                    cachedAudioObj = audio;
                }
            }
        })
        .catch(() => {});
}

function speakWord() {
    if (isSpeaking) return;
    const wordEl = document.getElementById('fc-en');
    if (!wordEl) return;
    const word = (wordEl.innerText || "").trim();
    if (!word) return;

    const btn = document.querySelector('.speak-btn-large');
    isSpeaking = true;
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.style.opacity = "0.7";
    }

    const resetBtn = () => {
        isSpeaking = false;
        if (btn) {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.style.opacity = "1";
        }
    };

    if (cachedAudioObj) {
        cachedAudioObj.currentTime = 0;
        cachedAudioObj.play()
            .then(() => {
                cachedAudioObj.onended = resetBtn;
                setTimeout(resetBtn, 1500);
            })
            .catch(err => {
                useRobotVoice(word, resetBtn);
            });
    } else {
        useRobotVoice(word, resetBtn);
    }
}

function useRobotVoice(word, callback) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(word);
        utter.lang = 'en-US';
        utter.rate = 0.9;
        utter.onend = callback;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
        setTimeout(callback, 1000);
    } else {
        callback();
    }
}

function playQuizAudio(word) {
    if (cachedAudioObj) {
        cachedAudioObj.currentTime = 0;
        cachedAudioObj.play().catch(() => useRobotVoice(word, () => {}));
    } else {
        useRobotVoice(word, () => {});
    }
}

// ==========================================
// 8. 地城副本與 SRS 系統
// ==========================================

function showDungeonSubMenu() {
    const list = document.getElementById('dungeon-toefl-list');
    if(!list) return;
    list.innerHTML = ''; 
    
    if(typeof vocabDB === 'undefined' || !vocabDB['TOEFL']) {
        alert("資料庫未載入");
        return;
    }

    // 1. 定義中文名稱與 Emoji 對照表 (這裡複製了你 HTML 裡的設定)
    const catNameMap = {
        "Astronomy": "🌌 天文 (Astronomy)",
        "Biology": "🧬 生物 (Biology)",
        "Geography": "🌍 地理 (Geography)",
        "Psychology": "🧠 心理學 (Psychology)",
        "History": "🏺 歷史考古 (History)",
        "Art": "🎨 藝術音樂 (Art)",
        "Geology": "🪨 地質學 (Geology)",
        "Business": "💼 商業經濟 (Business)",
        "LifeScience": "🦠 生命科學 (Life Science)"
    };

    const categories = Object.keys(vocabDB['TOEFL']);
    
    categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'menu-btn';
        
        // 2. 嘗試從對照表找名字，如果找不到就用預設的
        const displayName = catNameMap[cat] || `📜 ${cat}`;

        btn.innerHTML = `<span>${displayName}</span> <i class="fas fa-chevron-right"></i>`;
        btn.onclick = () => openDungeonMap('TOEFL', cat);
        list.appendChild(btn);
    });
    
    showPage('page-dungeon-toefl-sub');
}
function openDungeonMap(mainCat, subCat = null) {
    if(typeof vocabDB === 'undefined') { alert("資料庫未載入"); return; }

    let rawData;
    let saveKey; 

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
        alert("此區域無資料！");
        return;
    }

    document.getElementById('adv-title').innerText = `地圖: ${subCat || mainCat}`;

    const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
    const unlockedIndex = allProgress[saveKey] || 0;
    const masteryData = JSON.parse(localStorage.getItem(`vocabRPG_mastery_${saveKey}`)) || {};

    const chunkSize = 10;
    const totalLevels = Math.ceil(rawData.length / chunkSize);
    
    const grid = document.getElementById('adventure-grid');
    grid.innerHTML = ''; 

    for (let i = 0; i < totalLevels; i++) {
        const node = document.createElement('div');
        node.className = 'level-node';
        
        if (i > unlockedIndex) {
            node.classList.add('locked');
            grid.appendChild(node);
            continue;
        }

        const record = masteryData[i] || { nextPlay: 0, count: 0 };
        const now = Date.now();
        const isMastered = record.count >= 5;
        const timeLeft = record.nextPlay - now;

        if (isMastered) {
            node.classList.add('mastered');
            node.innerHTML = `<span class="level-num">${i + 1}</span>`;
            node.onclick = () => startDungeonBattle(rawData, i);
        }
        else if (timeLeft > 0) {
            node.classList.add('cooldown');
            node.innerHTML = `<span class="level-num" style="font-size:1rem">${formatTimeLeft(timeLeft)}</span>`;
            node.onclick = () => alert(`⏳ 還需等待 ${formatTimeLeft(timeLeft)}`);
        }
        else {
            node.classList.add('ready'); 
            node.innerHTML = `<span class="level-num">${i + 1}</span>`;
            node.onclick = () => startDungeonBattle(rawData, i);
        }

        grid.appendChild(node);
    }

    showPage('page-adventure');
}

function startDungeonBattle(allWords, levelIndex) {
    adventureLevelIndex = levelIndex;
    isAdventureMode = true;

    const start = levelIndex * 10;
    const end = start + 10;
    const chunkWords = allWords.slice(start, end);

    let battleQuestions = [];

    chunkWords.forEach(word => {
        const cnOptions = generateOptions(allWords, word.details[0].cn, 'cn');
        battleQuestions.push({
            type: 'en_to_cn',
            q: word.en,
            ans: word.details[0].cn,
            options: cnOptions,
            audioWord: word.en
        });

        const enOptions = generateOptions(allWords, word.en, 'en');
        battleQuestions.push({
            type: 'cn_to_en',
            q: word.details[0].cn,
            ans: word.en,
            options: enOptions,
            audioWord: word.en
        });
    });

    battleQuestions.sort(() => 0.5 - Math.random());

    currentList = battleQuestions;
    quizTotal = 20;
    currentIndex = 0;
    score = 0;
    
    document.getElementById('q-tag').innerText = `地下城 ${levelIndex + 1}`;
    document.getElementById('quiz-score').innerText = 0;
    document.getElementById('quiz-bar').style.width = '0%';
    
    showPage('page-quiz');
    loadDungeonQuestion();
}

function generateOptions(fullDB, correctAns, type) {
    let distractors = [];
    if(fullDB.length < 5) return ["A", "B", "C"];

    let maxAttempts = 50;
    while (distractors.length < 3 && maxAttempts > 0) {
        maxAttempts--;
        const randomItem = fullDB[Math.floor(Math.random() * fullDB.length)];
        let candidate = (type === 'cn') ? randomItem.details[0].cn : randomItem.en;
        
        if (candidate !== correctAns && !distractors.includes(candidate)) {
            distractors.push(candidate);
        }
    }
    return [correctAns, ...distractors].sort(() => 0.5 - Math.random());
}

function loadDungeonQuestion() {
    if (currentIndex >= quizTotal) {
        finishDungeon(); 
        return;
    }

    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.remove('show');
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    const qData = currentList[currentIndex];
    document.getElementById('q-text').innerText = qData.q;
    
    if (qData.type === 'en_to_cn') {
        preloadAudio(qData.audioWord);
    } else {
        preloadAudio(qData.audioWord);
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentQuizData = { 
        correct: qData.ans, 
        audioWord: qData.audioWord 
    };

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="opacity:0.5;margin-right:8px;">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
        btn.onclick = () => checkDungeonAnswer(btn, opt === qData.ans);
        optionsContainer.appendChild(btn);
    });
}

function checkDungeonAnswer(btn, isCorrect) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.onclick = null);

    if (isCorrect) {
        btn.classList.add('correct');
        playSound('correct');
        score++;
        document.getElementById('quiz-score').innerText = score;
        
        setTimeout(() => {
            playQuizAudio(currentQuizData.audioWord);
        }, 50);

        document.getElementById('res-title').innerText = "✅ 正確！";
        document.getElementById('res-detail').innerHTML = "";
    } else {
        btn.classList.add('wrong');
        playSound('wrong');
        
        allBtns.forEach(b => {
            if (b.innerText.includes(currentQuizData.correct)) b.classList.add('correct');
        });

        document.getElementById('res-title').innerText = "❌ 錯誤！";
        document.getElementById('res-detail').innerHTML = `正確答案：<b>${currentQuizData.correct}</b>`;
    }
    document.getElementById('quiz-bar').style.width = `${((currentIndex + 1) / quizTotal) * 100}%`;
    document.getElementById('result-popup').classList.add('show');
}

function finishDungeon() {
    const passThreshold = 16; 
    let msg = "";

    if (score >= passThreshold) {
        playSound('correct');
        const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
        const currentUnlocked = allProgress[adventureKey] || 0;
        if (adventureLevelIndex === currentUnlocked) {
            allProgress[adventureKey] = currentUnlocked + 1;
            localStorage.setItem('vocabRPG_dungeon_progress', JSON.stringify(allProgress));
            msg += "\n下一層已解鎖！";
        }
    } else {
        msg = `💀 挑戰失敗...\n得分: ${score}/20`;
        playSound('wrong');
    }

    const masteryKey = `vocabRPG_mastery_${adventureKey}`;
    let masteryData = JSON.parse(localStorage.getItem(masteryKey)) || {};
    let record = masteryData[adventureLevelIndex] || { nextPlay: 0, count: 0 };

    if (score >= passThreshold) {
        record.count += 1;
    }

    if (record.count >= 5) {
        record.nextPlay = 0;
        msg += "\n👑 恭喜！你已經精通此區域！";
    } else {
        const cooldown = calculateCooldown(score);
        record.nextPlay = Date.now() + cooldown;
        msg += `\n⏳ 下次挑戰：${formatTimeLeft(cooldown)} 後`;
    }

    masteryData[adventureLevelIndex] = record;
    localStorage.setItem(masteryKey, JSON.stringify(masteryData));

    alert(msg);
    openDungeonMap(adventureKey.includes('TOEIC') ? 'TOEIC' : 'TOEFL', adventureKey.includes('_') ? adventureKey.split('_')[1] : null);
}

function calculateCooldown(score) {
    if (score === 20) return 72 * 60 * 60 * 1000;
    if (score >= 18) return 48 * 60 * 60 * 1000;
    if (score >= 15) return 24 * 60 * 60 * 1000;
    if (score >= 10) return 12 * 60 * 60 * 1000;
    if (score >= 5)  return 3 * 60 * 60 * 1000;
    return 30 * 60 * 1000;
}

function formatTimeLeft(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) return Math.ceil(hours / 24) + "天";
    if (hours > 0) return `${hours}h${minutes}m`;
    return `${minutes}m`;
}

function triggerImport() { document.getElementById('file-input').click(); }
function importData(input) { alert("還原功能需配合後端或 FileReader 實作"); }
function exportData() { 
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mistakeDB));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "vocab_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
function exitAdventure() {
    // 判斷目前所在的副本類型，決定要退回到哪一層選單
    if (adventureKey && adventureKey.startsWith('TOEFL')) {
        // 如果是托福 (TOEFL_xxx)，回到托福細項選單
        showPage('page-dungeon-toefl-sub');
    } else {
        // 其他情況 (如 TOEIC)，回到最外層的副本選擇頁
        showPage('page-dungeon-select');
    }
}