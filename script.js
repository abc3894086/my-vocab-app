// ==========================================
// 1. 全域變數宣告
// ==========================================
let currentUser = null; // 用來記錄現在是誰登入了
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

    // ★★★ 新增這行：順便上傳到雲端 ★★★
    if (typeof saveToCloud === 'function') {
        saveToCloud();
    }
}

function updateMistakeCount() {
    const el = document.getElementById('mistake-count');
    if (el) el.innerText = mistakeDB.length;
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
        if (menu) menu.classList.add('show');

        const title = document.getElementById('cat-title');
        if (title) title.innerText = "選擇卷軸";

        showPage('page-category');

    } else if (mode === 'quiz') {
        const menu = document.getElementById('menu-quiz-type');
        if (menu) menu.classList.add('show');

        const title = document.getElementById('cat-title');
        if (title) title.innerText = "選擇試煉";

        showPage('page-category');

    } else if (mode === 'dungeon') {
        const menu = document.getElementById('dungeon-main-menu');
        if (menu) menu.classList.add('show');

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
    if (mistakeDB.length === 0) {
        alert("目前沒有錯題紀錄！");
        return;
    }
    quizType = 'mistake';
    currentList = [...mistakeDB].sort(() => 0.5 - Math.random());
    startGenericQuiz(false, "錯題地牢", mistakeDB.length);
}
function getSmartOptions(correctWord, mistakeList) {
    // 1. 先把正確答案放進去
    let options = [correctWord];

    // 2. 嘗試從「錯題列表」中找干擾項 (排除正確答案本身)
    let mistakeDistractors = mistakeList.filter(w => w.english !== correctWord.english);

    // 隨機打亂錯題干擾項
    mistakeDistractors.sort(() => Math.random() - 0.5);

    // 把錯題加進去 (最多加 3 個，因為總共只要 4 個)
    for (let word of mistakeDistractors) {
        if (options.length < 4) {
            options.push(word);
        }
    }

    // 3. 【關鍵修正】如果選項還不夠 4 個，就去「總題庫」找外援
    if (options.length < 4) {
        // 建立一個臨時的總題庫 (把多益和托福加在一起)
        // 注意：這裡假設你有 toeicVocabulary 這些全域變數
        let backupPool = [];
        if (typeof toeicVocabulary !== 'undefined') backupPool = backupPool.concat(toeicVocabulary);
        if (typeof toefl_astronomy !== 'undefined') backupPool = backupPool.concat(toefl_astronomy);
        // ...你可以根據需要加入更多資料來源

        // 隨機打亂總題庫
        // (為了效能，這裡我們只隨機抽 50 個出來打亂，不用全部打亂)
        let randomStart = Math.floor(Math.random() * (backupPool.length - 50));
        let subset = backupPool.slice(Math.max(0, randomStart), randomStart + 50);
        subset.sort(() => Math.random() - 0.5);

        for (let word of subset) {
            // 檢查有沒有重複 (不要跟正確答案重複，也不要跟已經選好的錯題重複)
            let isDuplicate = options.some(opt => opt.english === word.english);

            if (!isDuplicate && options.length < 4) {
                options.push(word);
            }
            if (options.length >= 4) break; // 湊滿就停
        }
    }

    // 4. 最後把這 4 個選項再次打亂 (不然正確答案永遠在第一個)
    return options.sort(() => Math.random() - 0.5);
}
function startQuizSetup(type) {
    if (type === 'grammar') {
        if (typeof grammarDB === 'undefined' || !grammarDB) {
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


function getSmartDistractors(sourceList, correctItem, type) {
    let distractors = [];

    // --- 步驟 A：先從當前的列表 (sourceList) 找 ---
    let potential = sourceList.filter(item => item.en !== correctItem.en);
    potential.sort(() => Math.random() - 0.5);

    for (let item of potential) {
        if (distractors.length >= 3) break;
        let val = (type === 'en') ? item.en : item.details[0].cn;
        if (!distractors.includes(val)) {
            distractors.push(val);
        }
    }

    // --- 步驟 B：如果選項還不夠 3 個，就去「總題庫 (vocabDB)」借 ---
    if (distractors.length < 3) {
        let backupPool = [];

        // ★★★ 關鍵修正：從 vocabDB 抓取所有單字 ★★★
        if (typeof vocabDB !== 'undefined') {
            // 1. 抓多益
            if (vocabDB['TOEIC']) {
                backupPool = backupPool.concat(vocabDB['TOEIC']);
            }
            // 2. 抓托福所有分類
            if (vocabDB['TOEFL']) {
                Object.values(vocabDB['TOEFL']).forEach(list => {
                    backupPool = backupPool.concat(list);
                });
            }
        }

        if (backupPool.length > 0) {
            // 隨機切一塊出來打亂
            let start = Math.floor(Math.random() * (backupPool.length - 50));
            let slice = backupPool.slice(Math.max(0, start), start + 50);
            slice.sort(() => Math.random() - 0.5);

            for (let item of slice) {
                if (distractors.length >= 3) break;
                if (!item.details || item.details.length === 0) continue; // 防呆
                if (item.en === correctItem.en) continue; // 排除正確答案

                let val = (type === 'en') ? item.en : item.details[0].cn;
                
                // 檢查重複
                let correctVal = (type === 'en') ? correctItem.en : correctItem.details[0].cn;
                if (!distractors.includes(val) && val !== correctVal) {
                    distractors.push(val);
                }
            }
        }
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

    const questionData = currentList[currentIndex];
    let correctAnswer;
    let allOptions;
    let audioWord = "";

    const qTextElement = document.getElementById('q-text');
    
    // ★★★ 關鍵修改：預設將 q-sub 隱藏並清空 ★★★
    const qSub = document.getElementById('q-sub');
    if (qSub) {
        qSub.innerText = "";
        qSub.style.display = 'none'; // 隱藏起來，就不會佔空間
    }

    // 判斷是否為文法題
    const isGrammarMode = isGrammar || questionData.type === 'grammar' || (questionData.q && /_{2,}/.test(questionData.q));

    if (isGrammarMode) {
        // === 文法模式 ===
        correctAnswer = questionData.ans;
        allOptions = questionData.options.sort(() => 0.5 - Math.random());

        qTextElement.innerText = questionData.q;
        audioWord = "";

        qTextElement.style.fontSize = "1.2rem";
        qTextElement.style.lineHeight = "1.6";
        qTextElement.style.textAlign = "left";
        qTextElement.style.fontWeight = "bold";

    } else {
        // === 單字模式 ===
        qTextElement.style.fontSize = "2.5rem";
        qTextElement.style.lineHeight = "1.2";
        qTextElement.style.textAlign = "center";

        const isEngToChi = Math.random() > 0.5;
        audioWord = questionData.en;

        if (isEngToChi) {
            qTextElement.innerText = questionData.en;
            correctAnswer = questionData.details[0].cn;
            const distractors = getSmartDistractors(currentList, questionData, 'cn');
            allOptions = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
        } else {
            qTextElement.innerText = questionData.details[0].cn;
            correctAnswer = questionData.en;
            const distractors = getSmartDistractors(currentList, questionData, 'en');
            allOptions = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
        }
    }

    currentQuizData = {
        correct: correctAnswer,
        options: allOptions,
        audioWord: audioWord
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
    const qSubElement = document.getElementById('q-sub');

    if (isCorrect) {
        playSound('correct');
        selectedButton.classList.add('correct');
        score++;

        setTimeout(() => {
            if (currentQuizData.audioWord) playQuizAudio(currentQuizData.audioWord);
        }, 50);

        resultTitle.innerText = "✅ 恭喜答對！";
        resultDetail.innerHTML = `答案：<b>${currentQuizData.correct}</b>`;

        // ★★★ 只有在「錯題地牢」模式才顯示進度 ★★★
        if (quizType === 'mistake') {
            const currentQ = currentList[currentIndex];
            const mistakeIndex = mistakeDB.findIndex(m => {
                if (currentQ.en) return m.en === currentQ.en;
                if (currentQ.q) return m.q === currentQ.q;
                return false;
            });

            if (mistakeIndex !== -1) {
                let newCount = (mistakeDB[mistakeIndex].correct_count || 0) + 1;
                mistakeDB[mistakeIndex].correct_count = newCount;

                // ★ 這裡才把顯示打開 (display = block)
                if (qSubElement) {
                    qSubElement.style.display = 'block'; 
                    
                    if (newCount >= 3) {
                        mistakeDB.splice(mistakeIndex, 1);
                        alert(`🎉 太棒了！已連續答對 3 次，此題已移出地牢！`);
                        qSubElement.innerText = "✨ 已精通！移出地牢 ✨";
                        qSubElement.style.color = "#f1c40f";
                    } else {
                        qSubElement.innerText = `🔥 精通度: ${newCount} / 3`;
                        qSubElement.style.color = "#27ae60";
                    }
                }
                saveGameData();
            }
        } else {
            // 如果不是錯題模式，確保它是隱藏的
            if (qSubElement) qSubElement.style.display = 'none';
        }

    } else {
        playSound('wrong');
        selectedButton.classList.add('wrong');

        const optionsContainer = document.getElementById('options-container');
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText.includes(currentQuizData.correct)) {
                btn.classList.add('correct');
            }
        });

        // 錯題邏輯
        const currentQ = currentList[currentIndex];
        const isAlreadyInDB = mistakeDB.some(m => {
            if (currentQ.en) return m.en === currentQ.en;
            if (currentQ.q) return m.q === currentQ.q;
            return false;
        });

        if (!isAlreadyInDB && (currentQ.en || currentQ.q)) {
            const newMistake = { ...currentQ, correct_count: 0 }; 
            mistakeDB.push(newMistake);
            saveGameData(); 
        }

        resultTitle.innerText = "❌ 答錯了！";
        if (currentQuizData.audioWord) {
            setTimeout(() => { playQuizAudio(currentQuizData.audioWord); }, 200);
        }
        resultDetail.innerHTML = `正確答案是：<b>${currentQuizData.correct}</b>`;
        
        // 答錯時也隱藏進度條 (因為這時候看進度沒意義，或是你想保持隱藏)
        if (qSubElement) {
            qSubElement.innerText = "";
            qSubElement.style.display = 'none';
        }
    }

    document.getElementById('quiz-bar').style.width = `${((currentIndex + 1) / quizTotal) * 100}%`;
    document.getElementById('quiz-score').innerText = score;
    document.getElementById('result-popup').classList.add('show');
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
    // 因為改用電腦即時運算發音，不需要預先下載音檔了
    cachedAudioObj = null;
}

function speakWord() {
    if (isSpeaking) return;

    // 抓取卡片上的英文單字
    const wordEl = document.getElementById('fc-en');
    if (!wordEl) return;
    const word = (wordEl.innerText || "").trim();
    if (!word) return;

    const btn = document.querySelector('.speak-btn-large');
    isSpeaking = true;

    // 按鈕變成讀取圈圈
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.style.opacity = "0.7";
    }

    // 發音結束後的復原函式
    const resetBtn = () => {
        isSpeaking = false;
        if (btn) {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.style.opacity = "1";
        }
    };

    // ★★★ 核心修改：不再檢查 cachedAudioObj，直接用機器人發音 ★★★
    useRobotVoice(word, resetBtn);
}

function useRobotVoice(word, callback) {
    if ('speechSynthesis' in window) {
        // 為了避免多音字誤判，有一個小技巧是：
        // 如果這個字同時有動詞和名詞，電腦通常預設名詞。
        // 雖然無法完美解決，但我們可以確保語系設定正確。

        const utter = new SpeechSynthesisUtterance(word);

        // ★★★ 強制設定為美式英文 ★★★
        utter.lang = 'en-US';

        // 語速稍微調慢一點點 (0.8 ~ 0.9)，聽起來會清楚些
        utter.rate = 0.85;

        utter.onend = callback;

        // 解決某些瀏覽器語音卡住的 bug
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);

        // 保險起見，設個計時器強制復原按鈕 (避免 onend 沒觸發)
        setTimeout(callback, 2000);
    } else {
        alert("您的瀏覽器不支援語音合成功能");
        callback();
    }
}

function playQuizAudio(word) {
    // 直接呼叫機器人發音，第二個參數是 callback，這裡給空函式即可
    useRobotVoice(word, () => { });
}

// ==========================================
// 8. 地城副本與 SRS 系統
// ==========================================

function showDungeonSubMenu() {
    const list = document.getElementById('dungeon-toefl-list');
    if (!list) return;
    list.innerHTML = '';

    if (typeof vocabDB === 'undefined' || !vocabDB['TOEFL']) {
        alert("資料庫未載入");
        return;
    }

    // 1. 定義中文名稱與 Emoji 對照表 (這裡複製了你 HTML 裡的設定)
    const catNameMap = {
        "Astronomy": "🌌 天文 ",
        "Biology": "🧬 生物 ",
        "Geography": "🌍 地理 ",
        "Psychology": "🧠 心理學 ",
        "History": "🏺 歷史考古 ",
        "Art": "🎨 藝術音樂 ",
        "Geology": "🪨 地質學 ",
        "Business": "💼 商業經濟 ",
        "LifeScience": "🦠 生命科學 "
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
    if (typeof vocabDB === 'undefined') { alert("資料庫未載入"); return; }

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
            node.onclick = () => startDungeonBattle(rawData, i);
        }
        else if (timeLeft > 0) {
            node.classList.add('cooldown');
            node.innerHTML = `<span class="level-num" style="font-size:1rem">${formatTimeLeft(timeLeft)}</span>`;
            node.onclick = () => alert(`⏳ 還需等待 ${formatTimeLeft(timeLeft)}`);
        }
        else {
            node.classList.add('ready');
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
    const qTag = document.getElementById('q-tag');
    if (qTag) {
        qTag.style.display = 'none'; 
    }
    document.getElementById('quiz-score').innerText = 0;
    document.getElementById('quiz-bar').style.width = '0%';

    showPage('page-quiz');
    loadDungeonQuestion();
}


function generateOptions(fullDB, correctAns, type) {
    let distractors = [];
    const countNeeded = 3;

    // 1. 從當前副本的單字庫找
    let potentialDistractors = fullDB
        .filter(item => {
            let itemVal = (type === 'cn' && item.details && item.details[0]) ? item.details[0].cn : item.en;
            return itemVal !== correctAns;
        })
        .sort(() => Math.random() - 0.5);

    for (let item of potentialDistractors) {
        if (distractors.length >= countNeeded) break;
        let val = (type === 'cn' && item.details && item.details[0]) ? item.details[0].cn : item.en;
        if (!distractors.includes(val)) distractors.push(val);
    }
    
    // 2. 【關鍵修正】從 vocabDB 找外援
    if (distractors.length < countNeeded) {
        let backupPool = [];
        
        // ★ 從 vocabDB 抓取所有資料
        if (typeof vocabDB !== 'undefined') {
            if (vocabDB['TOEIC']) backupPool = backupPool.concat(vocabDB['TOEIC']);
            if (vocabDB['TOEFL']) {
                Object.values(vocabDB['TOEFL']).forEach(list => {
                    backupPool = backupPool.concat(list);
                });
            }
        }

        if (backupPool.length > 0) {
            backupPool.sort(() => Math.random() - 0.5);

            for (let item of backupPool) {
                if (distractors.length >= countNeeded) break;
                if (!item.details || item.details.length === 0) continue;

                let val = (type === 'cn') ? item.details[0].cn : item.en;

                if (val !== correctAns && !distractors.includes(val)) {
                    distractors.push(val);
                }
            }
        }
    }

    // 如果真的還是湊不到 (極端情況)，補上 ABC 以防當機，但通常上面就會解決了
    while (distractors.length < countNeeded) {
        distractors.push("---");
    }

    return [correctAns, ...distractors].sort(() => Math.random() - 0.5);
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
    // 設定及格門檻 (例如 20 題要對 16 題)
    const passThreshold = Math.ceil(quizTotal * 0.8);
    let msg = "";

    // 1. 判斷是否通關
    if (score >= passThreshold) {
        playSound('correct');
        
        // 讀取目前的總進度
        const allProgress = JSON.parse(localStorage.getItem('vocabRPG_dungeon_progress')) || {};
        
        // ★★★ 修正 1：強制轉成數字 (Number)，避免 "0" !== 0 的問題 ★★★
        const currentUnlocked = Number(allProgress[adventureKey] || 0);
        const currentLevelIdx = Number(adventureLevelIndex);

        console.log(`[地城檢測] 目前打的關卡: ${currentLevelIdx}, 已解鎖進度: ${currentUnlocked}`);

        // 如果你打贏的這關，剛好就是目前解鎖的最遠進度，那就解鎖下一關
        if (currentLevelIdx === currentUnlocked) {
            allProgress[adventureKey] = currentUnlocked + 1;
            localStorage.setItem('vocabRPG_dungeon_progress', JSON.stringify(allProgress));
            
            msg += "\n🎉 下一層已解鎖！";
            
            // ★★★ 修正 2：解鎖後立刻上傳雲端，防止被舊存檔覆蓋 ★★★
            if (typeof saveToCloud === 'function') {
                saveToCloud();
            }
        }
    } else {
        msg = `💀 挑戰失敗...\n得分: ${score}/${quizTotal}`;
        playSound('wrong');
    }

    // 2. 更新精通度與冷卻時間 (SRS)
    const masteryKey = `vocabRPG_mastery_${adventureKey}`;
    let masteryData = JSON.parse(localStorage.getItem(masteryKey)) || {};
    let record = masteryData[adventureLevelIndex] || { nextPlay: 0, count: 0 };

    // 只有及格才累積精通次數
    if (score >= passThreshold) {
        record.count = (record.count || 0) + 1;
    }

    // 判斷是否已精通 (累積及格 5 次)
    if (record.count >= 5) {
        record.nextPlay = 0;
        msg += "\n👑 恭喜！你已經精通此區域！(永久解鎖)";
    } else {
        // 使用正確率計算冷卻
        const cooldown = calculateCooldown(score, quizTotal);
        
        // 設定下次可以玩的時間
        record.nextPlay = Date.now() + cooldown;
        msg += `\n⏳ SRS冷卻啟動：需等待 ${formatTimeLeft(cooldown)}`;
    }

    masteryData[adventureLevelIndex] = record;
    localStorage.setItem(masteryKey, JSON.stringify(masteryData));

    // 3. 顯示結果並重整地圖
    alert(msg);
    
    // 重新載入地圖以更新鎖頭圖示
    openDungeonMap(
        adventureKey.includes('TOEIC') ? 'TOEIC' : 'TOEFL', 
        adventureKey.includes('_') ? adventureKey.split('_')[1] : null
    );
}
function calculateCooldown(score, total) {
    // 防止分母為 0
    if (total === 0) return 30 * 60 * 1000;
    
    const percentage = (score / total) * 100;

    // 滿分 (100%)：冷卻 36 小時 (1.5天)
    if (percentage === 100) return 36 * 60 * 60 * 1000;

    // 高分 (90% 以上)：冷卻 24 小時 (1天)
    if (percentage >= 90) return 24 * 60 * 60 * 1000;

    // 及格 (75% 以上)：冷卻 12 小時
    if (percentage >= 75) return 12 * 60 * 60 * 1000;

    // 勉強 (50% 以上)：冷卻 6 小時
    if (percentage >= 50) return 6 * 60 * 60 * 1000;

    // 不及格 (25% 以上)：冷卻 1 小時
    if (percentage >= 25) return 1 * 60 * 60 * 1000;

    // 太低分：冷卻 10 分鐘 (讓你稍微休息一下再試)
    return 10 * 60 * 1000;
}

function formatTimeLeft(ms) {
    // 1. 計算總小時數 (包含天數換算成小時，例如 1天 = 24小時)
    const totalHours = Math.floor(ms / (1000 * 60 * 60));
    
    // 2. 計算剩餘分鐘數
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

    // 3. 補零函數 (如果數字小於 10，前面補一個 0)
    // padStart(2, '0') 的意思是：字串長度要 2，不夠的話前面補 '0'
    const hStr = totalHours.toString().padStart(2, '0');
    const mStr = minutes.toString().padStart(2, '0');

    // 4. 回傳格式 HH:MM
    return `${hStr}:${mStr}`;
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
// ==========================================
// 9. Firebase 雲端功能
// ==========================================

// 1. 登入函式
function googleLogin() {
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("登入成功！", result.user);
        })
        .catch((error) => {
            console.error("登入失敗", error);
            alert("登入失敗：" + error.message);
        });
}

// 2. 登出函式
function googleLogout() {
    auth.signOut().then(() => {
        alert("已登出雲端帳號");
        // 登出後重新載入頁面，避免資料混亂
        location.reload();
    }).catch((error) => {
        console.error("登出錯誤", error);
    });
}

// 3. 監聽登入狀態改變 (大腦)
// 只要使用者登入或登出，這個函式就會自動執行
if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged((user) => {
        currentUser = user;
        
        // 取得新的 UI 元素
        const authButton = document.getElementById('rpg-auth-btn');
        const authText = document.getElementById('auth-text');
        const authIcon = document.getElementById('auth-icon');

        if (user && authButton) {
            // === 使用者已登入 (控制單一按鈕) ===
            const userName = user.displayName || "勇者";
            
            // 1. 設置點擊事件為登出
            authButton.onclick = googleLogout;
            
            // 2. 更改文字：顯示用戶名和登出
            if (authText) authText.textContent = `${userName} 登出`;
            
            // 3. 更改圖示：換成使用者圖示 (👤)
            if (authIcon) authIcon.className = 'fas fa-user'; 

            // 檢查並載入雲端存檔
            checkCloudSave(user); 
            console.log("用戶已登入:", user.displayName);

        } else if (authButton) {
            // === 使用者已登出 (控制單一按鈕) ===
            currentUser = null;
            
            // 1. 設置點擊事件為登入
            authButton.onclick = googleLogin;
            
            // 2. 更改文字：顯示登入
            if (authText) authText.textContent = '同步進度 / 登入';

            // 3. 更改圖示：換回 Google 圖示
            if (authIcon) authIcon.className = 'fab fa-google'; 

            console.log("用戶已登出");
        }
        
        // 確保 updateMistakeCount 在這裡被呼叫，因為它依賴 currentUser
        if (typeof updateMistakeCount === 'function') {
            updateMistakeCount(); 
        }
    });
}

// 4. 檢查雲端存檔
function checkCloudSave(user) {
    const docRef = db.collection("users").doc(user.uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            const cloudData = doc.data();
            const cloudCount = cloudData.mistakes ? cloudData.mistakes.length : 0;
            const localCount = mistakeDB.length;

            // 如果雲端資料跟本地不一樣，詢問是否同步
            // (這裡簡單判斷：只要有資料就問，你也可以改寫成時間判斷)
            if (confirm(`☁️ 雲端發現備份！\n錯題數: ${cloudCount} (本地: ${localCount})\n\n是否要下載並覆蓋目前的進度？`)) {
                loadFromCloud(cloudData);
            } else {
                // 如果使用者選「否」，表示他想保留現在玩的進度，那就把現在的進度上傳覆蓋雲端
                saveToCloud();
            }
        } else {
            // 新玩家 (雲端沒資料)，自動幫他上傳一次
            saveToCloud();
        }
    }).catch((error) => {
        console.log("讀取雲端失敗:", error);
    });
}

// 5. 下載雲端資料
function loadFromCloud(data) {
    mistakeDB = data.mistakes || [];

    // 讀取地城進度 (Dungeon Progress)
    if (data.dungeonProgress) {
        // 直接存入 localStorage，遊戲邏輯會從這裡讀取
        localStorage.setItem('vocabRPG_dungeon_progress', JSON.stringify(data.dungeonProgress));
    } else {
        localStorage.removeItem('vocabRPG_dungeon_progress'); // 雲端沒有時，清空本地
    }
    
    // 讀取精通/我的最愛紀錄 (Dungeon Mastery/Favorites)
    if (data.dungeonMastery) {
        // 假設你的精通/我的最愛也是存在 'vocabRPG_dungeon_mastery' 這個 key 中
        localStorage.setItem('vocabRPG_dungeon_mastery', JSON.stringify(data.dungeonMastery));
    } else {
        localStorage.removeItem('vocabRPG_dungeon_mastery');
    }

    updateMistakeCount(); // 更新錯題地牢計數

    // 存回本地 localStorage (確保主要進度更新)
    const localData = { mistakes: mistakeDB };
    localStorage.setItem('vocabPro_rpg', JSON.stringify(localData));

    // ★ 額外動作：如果現在在地城地圖頁面，強制重新載入，確保地圖顯示正確進度。
    if (document.getElementById('page-dungeon').classList.contains('active')) {
        // 假設你有一個函數可以重新載入/繪製地城地圖
        if (typeof loadDungeonMap === 'function') {
             loadDungeonMap(); 
        }
        // 如果你沒有 loadDungeonMap，可以嘗試強制跳回首頁再回來
        // showPage('page-landing');
    }
    
    alert("✅ 雲端進度同步完成！");
}

// 6. 上傳資料到雲端
function saveToCloud() {
    // 1. 如果沒登入，就默默結束，不要跳警告 (不然沒登入玩遊戲會被煩死)
    if (!currentUser) {
        // console.log("尚未登入，跳過雲端同步"); 
        return;
    }

    // 讀取本地資料
    const dungeonProgressJSON = localStorage.getItem('vocabRPG_dungeon_progress');
    const dungeonMasteryJSON = localStorage.getItem('vocabRPG_dungeon_mastery');

    const dataToSend = {
        mistakes: mistakeDB,
        dungeonProgress: dungeonProgressJSON ? JSON.parse(dungeonProgressJSON) : null,
        dungeonMastery: dungeonMasteryJSON ? JSON.parse(dungeonMasteryJSON) : null
    };

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set(dataToSend)
        .then(() => {
            // ★★★ 這裡原本是 alert，改成 console.log ★★★
            // 這樣只會在 F12 開發者工具顯示，不會干擾玩家
            console.log("✅ (背景) 雲端同步成功！"); 
        })
        .catch((error) => {
            // 發生錯誤時再跳視窗提醒就好，或者也改成 console.error
            console.error("❌ 雲端同步失敗: ", error);
        });
}
function nextQuestion() {
    currentIndex++; // 索引 +1，前進到下一題

    // 1. 隱藏結果彈窗
    document.getElementById('result-popup').classList.remove('show');
    
    // 2. 隱藏懸浮的下一題按鈕
    document.getElementById('float-next-btn').classList.remove('show');

    // 3. 根據目前的模式，決定載入哪種題目
    if (isAdventureMode) {
        // 如果是地城副本模式
        loadDungeonQuestion();
    } else {
        // 如果是單字/文法/錯題模式
        // (loadQuestion 內部會自動判斷是否結束並跳出 alert)
        loadQuestion(quizType === 'grammar');
    }
}
function loadDungeonQuestion() {
    // 1. 檢查是否結束
    if (currentIndex >= currentList.length) {
        finishDungeon(); // 呼叫結算函式
        return;
    }

    // 2. 清空選項區
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 3. UI 重置
    document.getElementById('result-popup').classList.remove('show');
    document.getElementById('float-next-btn').classList.remove('show');
    
    // 4. 更新進度條
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1}/${quizTotal}`;
    document.getElementById('quiz-bar').style.width = `${(currentIndex / quizTotal) * 100}%`;

    // 5. 取得當前題目資料
    const currentQ = currentList[currentIndex];
    
    // 6. 顯示題目文字
    const qTextElement = document.getElementById('q-text');
    qTextElement.innerText = currentQ.q;
    
    // 設定樣式 (保持跟一般測驗一致)
    qTextElement.style.fontSize = "2.5rem";
    qTextElement.style.lineHeight = "1.2";
    qTextElement.style.textAlign = "center";
    
    // 7. 設定發音與正確答案
    currentQuizData = {
        correct: currentQ.ans,
        audioWord: currentQ.audioWord
    };

    // 預載發音
    if (currentQ.audioWord) {
        // 這裡簡單防呆，避免頻繁請求
        setTimeout(() => preloadAudio(currentQ.audioWord), 0);
    }

    // 8. 產生選項按鈕
    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${String.fromCharCode(65 + index)}. ${opt}`;
        
        // ★ 注意：地城模式要呼叫 checkDungeonAnswer
        btn.onclick = () => checkDungeonAnswer(btn, opt === currentQ.ans);
        
        optionsContainer.appendChild(btn);
    });
}