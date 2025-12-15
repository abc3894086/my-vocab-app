// data-grammar.js
// 進階文法測驗題目 (TOEIC 850+ Level)

window.grammarDB = [
    // --- ★★★ 新增：進階多益難題 (TOEIC Hard) ★★★ ---

    // 1. 假設語氣與倒裝 (Inversion in Conditionals)
    // 解析: 原句是 "If the client had contacted us..." 省略 If 需倒裝 -> "Had the client contacted us..."
    { 
        q: "_____ the client contacted us sooner, we could have completed the project on time.", 
        ans: "Had", 
        options: ["Has", "Had", "Have", "If"], 
        tag: "Inversion / Conditional",
        type: "grammar"
    },

    // 2. 意志動詞與假設語氣 (Subjunctive Mood)
    // 解析: 堅持/建議/要求 (insist/suggest/demand) + that + S + (should) + VR (原形動詞)
    { 
        q: "The board of directors insisted that the manager _____ immediately.", 
        ans: "resign", 
        options: ["resigns", "resigned", "resign", "to resign"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 3. 分詞構句 (Participle Clause)
    // 解析: (Because it is) Located in the city center... 主詞一致省略，被動用 p.p.
    { 
        q: "_____ in the heart of the business district, the hotel is popular among business travelers.", 
        ans: "Located", 
        options: ["Locating", "Located", "Locate", "To locate"], 
        tag: "Participle Clause",
        type: "grammar"
    },

    // 4. 介系詞與動名詞 (Preposition + Gerund)
    // 解析: look forward to (期待) 的 to 是介系詞，後面要接 V-ing
    { 
        q: "We look forward to _____ from you regarding the partnership proposal.", 
        ans: "hearing", 
        options: ["hear", "hearing", "heard", "be heard"], 
        tag: "Phrasal Verb",
        type: "grammar"
    },

    // 5. 關代所有格 (Relative Pronouns)
    // 解析: 先行詞是公司，空格後是名詞(stock price)，表示「公司的股價」，用 whose
    { 
        q: "The company, _____ stock price has risen by 20% this quarter, is planning to expand overseas.", 
        ans: "whose", 
        options: ["which", "that", "whose", "what"], 
        tag: "Relative Pronoun",
        type: "grammar"
    },

    // 6. 讓步連接詞 (Conjunctions)
    // 解析: Despite + N/V-ing (介系詞); Although + S + V (連接詞)。空格後是句子 (it rained)，故選 Although
    { 
        q: "_____ it rained heavily, the outdoor concert continued as scheduled.", 
        ans: "Although", 
        options: ["Despite", "In spite of", "Although", "Because"], 
        tag: "Conjunction",
        type: "grammar"
    },

    // 7. 使役動詞 (Causative Verbs)
    // 解析: have + O + p.p. (讓某物被...)。報告是被寫的，所以用 written
    { 
        q: "Mr. Smith had his assistant _____ the report before the meeting.", 
        ans: "rewrite", 
        options: ["rewrite", "rewritten", "rewrote", "rewriting"], 
        tag: "Causative Verb",
        type: "grammar" 
    },
    // 注意：上題如果是 assistant 主動重寫用 rewrite (have + 人 + VR)。
    // 下題是報告被寫：
    { 
        q: "I need to get my car _____ before the road trip.", 
        ans: "serviced", 
        options: ["service", "servicing", "serviced", "to service"], 
        tag: "Causative Verb",
        type: "grammar" 
    },

    // 8. 詞性判斷 (Word Form)
    // 解析: remain 是連綴動詞，後面接形容詞。competitive (競爭力的)
    { 
        q: "In order to remain _____ in the market, we must innovate constantly.", 
        ans: "competitive", 
        options: ["competition", "compete", "competitively", "competitive"], 
        tag: "Word Form",
        type: "grammar"
    },

    // 9. 複合關係代名詞 (Compound Relative Pronouns)
    // 解析: Whichever + N (無論哪個...)
    { 
        q: "_____ strategy you choose, make sure to document the process carefully.", 
        ans: "Whichever", 
        options: ["However", "Whichever", "Whoever", "Whenever"], 
        tag: "Advanced Grammar",
        type: "grammar"
    },

    // 10. 倒裝句 - 否定副詞置首 (Negative Adverbial Inversion)
    // 解析: Hardly/Scarcely/Rarely 置首，句子要倒裝 (助動詞提前)
    { 
        q: "Rarely _____ seen such a dedicated employee.", 
        ans: "have I", 
        options: ["I have", "have I", "I had", "did I"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 11. 未來完成式 (Future Perfect)
    // 解析: By the time (等到...時候) + 現在式，主要子句用「未來完成式」(will have p.p.)
    { 
        q: "By the time the CEO arrives, we _____ the presentation.", 
        ans: "will have finished", 
        options: ["will finish", "finish", "will have finished", "have finished"], 
        tag: "Tense",
        type: "grammar"
    },

    // 12. 詞彙搭配 (Collocation - 致力於)
    // 解析: be committed to + V-ing/N
    { 
        q: "The organization is dedicated to _____ the local community.", 
        ans: "serving", 
        options: ["serve", "serving", "service", "served"], 
        tag: "Phrasal Verb",
        type: "grammar"
    }
];