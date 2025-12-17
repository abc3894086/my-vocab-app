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
    },
// 13. 虛擬語氣與 Wish (Subjunctive Mood with Wish)
    // 解析: wish 後方接與現在事實相反的假設，動詞使用過去式（be 動詞一律用 were）。
    { 
        q: "The supervisor wishes that the marketing team _____ more time to refine the campaign.", 
        ans: "had", 
        options: ["has", "had", "have", "would have"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 14. 否定的分詞構句 (Negative Participle Clause)
    // 解析: 分詞句的否定，Not 直接放在分詞前面。Not knowing... (因為不知道...)
    { 
        q: "_____ how to operate the new software, the intern asked for a manual.", 
        ans: "Not knowing", 
        options: ["Knowing not", "Not knowing", "No knowing", "Not to know"], 
        tag: "Participle Clause",
        type: "grammar"
    },

    // 15. 與過去事實相反的倒裝 (Inversion in Third Conditional)
    // 解析: 原句 If I had known... 倒裝為 Had I known...
    { 
        q: "_____ I known about the flight delay, I would not have left for the airport so early.", 
        ans: "Had", 
        options: ["Should", "Had", "Were", "If"], 
        tag: "Inversion / Conditional",
        type: "grammar"
    },

    // 16. 數量形容詞與複數代名詞 (Quantity Pronouns)
    // 解析: "None of the" 後面接複數名詞或不可數名詞，表示「沒有一個」。
    { 
        q: "The manager reviewed the applications, but _____ of the candidates met the specific requirements.", 
        ans: "none", 
        options: ["neither", "none", "no one", "any"], 
        tag: "Pronoun",
        type: "grammar"
    },

    // 17. 讓步連接詞與副詞 (Conjunctions vs. Adverbs)
    // 解析: Nevertheless (然而) 是副詞，不能連接兩個句子；Although 是連接詞，連接 S+V。
    { 
        q: "The cost of production increased; _____, the company decided not to raise the retail price.", 
        ans: "nevertheless", 
        options: ["although", "despite", "nevertheless", "unless"], 
        tag: "Conjunction / Adverb",
        type: "grammar"
    },

    // 18. 被動語態的分詞修飾 (Passive Participle Modifying a Noun)
    // 解析: 被動修飾。The policies (which were) implemented... (被執行的政策)。
    { 
        q: "The new policies _____ by the HR department will take effect next month.", 
        ans: "implemented", 
        options: ["implement", "implementing", "implemented", "to implement"], 
        tag: "Participle Phrase",
        type: "grammar"
    },

    // 19. 建議動詞後接原形動詞 (Subjunctive - Suggest/Recommend)
    // 解析: suggest + that + S + (should) + VR。此處為被動，應選 (should) be promoted。
    { 
        q: "The committee suggested that the senior analyst _____ to a managerial position.", 
        ans: "be promoted", 
        options: ["is promoted", "was promoted", "be promoted", "promotes"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 20. 否定副詞與倒裝 (Only then / Only after)
    // 解析: Only after + N/子句 置於句首時，主要子句需倒裝。
    { 
        q: "Only after the audit was completed _____ the financial discrepancies discovered.", 
        ans: "were", 
        options: ["was", "were", "did", "had"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 21. 介系詞搭配 (Adjective + Preposition)
    // 解析: be contingent on/upon (視...而定)。
    { 
        q: "The final approval of the merger is contingent _____ the results of the due diligence report.", 
        ans: "upon", 
        options: ["to", "with", "upon", "for"], 
        tag: "Preposition",
        type: "grammar"
    },

    // 22. 使役動詞 Let/Help/Make (Causative Verbs)
    // 解析: make + O + VR (強迫/使某人做...)。
    { 
        q: "The strict regulations made the developers _____ the entire system architecture.", 
        ans: "redesign", 
        options: ["redesign", "redesigned", "to redesign", "redesigning"], 
        tag: "Causative Verb",
        type: "grammar"
    },

    // 23. 複合關係代名詞 (Whoever vs. Whomever)
    // 解析: 空格當後面動詞 fills 的主詞，故用主格 Whoever。
    { 
        q: "_____ fills the vacancy must have at least five years of experience in logistics.", 
        ans: "Whoever", 
        options: ["Whomever", "Whoever", "Anyone", "Who"], 
        tag: "Relative Pronoun",
        type: "grammar"
    },

    // 24. 完成式分詞構句 (Perfect Participle Clause)
    // 解析: Having + p.p. 表示動作發生在主句動作之前 (已經完成了工作，才離開)。
    { 
        q: "_____ the quarterly report, the accountant finally took a short break.", 
        ans: "Having finished", 
        options: ["Finishing", "Finished", "Having finished", "To finish"], 
        tag: "Participle Clause",
        type: "grammar"
    },
// 25. 動名詞作主詞 (Gerund as Subject)
    // 解析: 動名詞 (V-ing) 作為句子主詞時，視為單數。
    { 
        q: "_____ clear expectations is crucial for team productivity.", 
        ans: "Setting", 
        options: ["Set", "To set", "Setting", "Having set"], 
        tag: "Gerund",
        type: "grammar"
    },

    // 26. 條件句的變形 (Inversion in Conditionals - Type 1)
    // 解析: 原句 If you should encounter... 省略 If 倒裝為 Should you encounter... (萬一/如果發生)
    { 
        q: "_____ you have any further questions, please feel free to contact our support team.", 
        ans: "Should", 
        options: ["Had", "Were", "Should", "If"], 
        tag: "Inversion / Conditional",
        type: "grammar"
    },

    // 27. 過去完成式與時間副詞子句 (Past Perfect)
    // 解析: By the time + 過去式，主要子句用過去完成式 (Had p.p.)，表示在過去某時間點前已完成的動作。
    { 
        q: "By the time the project manager arrived, the team members _____ all the preliminary data.", 
        ans: "had collected", 
        options: ["collected", "have collected", "had collected", "were collecting"], 
        tag: "Tense",
        type: "grammar"
    },

    // 28. 慣用語搭配 (Idiomatic Expression)
    // 解析: There is no point in V-ing (做...是沒有意義的)。
    { 
        q: "There is no point in _____ on a strategy that has repeatedly failed.", 
        ans: "insisting", 
        options: ["insist", "to insist", "insisting", "insisted"], 
        tag: "Idiom / Gerund",
        type: "grammar"
    },

    // 29. 關代子句中的數量表達 (Quantifiers in Relative Clauses)
    // 解析: of which/whom 用於關代子句中表示數量。「其中許多/部分」。
    { 
        q: "We received twenty proposals, many _____ were submitted after the deadline.", 
        ans: "of which", 
        options: ["which", "of which", "that", "of them"], 
        tag: "Relative Pronoun",
        type: "grammar"
    },

    // 30. 讓步語氣的連接詞 (Concessive Clauses)
    // 解析: No matter how (無論多麼...) + adj/adv + S + V。
    { 
        q: "No matter _____ complex the problem is, the team is capable of solving it.", 
        ans: "how", 
        options: ["what", "which", "how", "that"], 
        tag: "Conjunction",
        type: "grammar"
    },

    // 31. It takes + 時間 + to V (花費時間)
    // 解析: It takes/took + 人 + 時間 + to V。
    { 
        q: "It took the engineers three months _____ the new security system.", 
        ans: "to develop", 
        options: ["develop", "developing", "to develop", "developed"], 
        tag: "Infinitive",
        type: "grammar"
    },

    // 32. 倒裝句 - So + 助動詞 + S (So too)
    // 解析: So + 助動詞 + S (也一樣) 用於前句肯定的情況。前句用現在式 be 動詞，所以後句用 is。
    { 
        q: "Customer service is essential for success, and so _____ transparent communication.", 
        ans: "is", 
        options: ["does", "is", "has", "it is"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 33. It is time + 過去式 (Subjunctive Mood)
    // 解析: It is time (for S) + to V (該是時候做...)。若後面接子句，則用過去式動詞，表示「早就該做」的假設語氣。
    { 
        q: "It is high time that the company _____ its obsolete equipment.", 
        ans: "replaced", 
        options: ["replace", "replaces", "replaced", "will replace"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 34. 否定句與強調句 (Not until + Inversion)
    // 解析: Not until/Not since 置於句首，主要子句要倒裝 (did S V...)。
    { 
        q: "Not until the final data were presented _____ the committee approve the budget.", 
        ans: "did the committee", 
        options: ["the committee approved", "did the committee", "approved the committee", "was the committee"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 35. 比較級修飾語 (Modifiers for Comparatives)
    // 解析: Much/Far/Even/Still/A lot/A little 可用來修飾比較級，表示「更/多得多」。
    { 
        q: "The second quarter results were _____ better than analysts had predicted.", 
        ans: "much", 
        options: ["many", "too", "much", "very"], 
        tag: "Adverb",
        type: "grammar"
    },

    // 36. 複合動詞片語 (Phrasal Verbs)
    // 解析: put off + V-ing (延期做...)。
    { 
        q: "The manager decided to put off _____ the proposal until the next meeting.", 
        ans: "signing", 
        options: ["sign", "to sign", "signing", "signed"], 
        tag: "Phrasal Verb",
        type: "grammar"
    },
// 37. 基礎：現在完成式 (Present Perfect)
    // 解析: since + 過去時間點，主要子句需用現在完成式 (has/have + p.p.)。
    { 
        q: "The company _____ its market share significantly since it launched the new product line last year.", 
        ans: "has increased", 
        options: ["increased", "has increased", "is increasing", "increases"], 
        tag: "Tense",
        type: "grammar"
    },

    // 38. 中階：分詞作形容詞 (Participle as Adjective)
    // 解析: 修飾事物的情緒動詞，主動（令人...的）用 -ing，被動（感到...的）用 -ed。
    { 
        q: "The survey results provided some _____ insights into consumer behavior.", 
        ans: "interesting", 
        options: ["interest", "interested", "interesting", "interestingly"], 
        tag: "Participle",
        type: "grammar"
    },

    // 39. 中高階：關係代名詞的省略與被動 (Reduced Relative Clause)
    // 解析: 原句是 The documents (which were) attached to the email... 省略關代與 be 動詞。
    { 
        q: "The documents _____ to the email contain sensitive information regarding the merger.", 
        ans: "attached", 
        options: ["attach", "attaching", "attached", "to attach"], 
        tag: "Participle Phrase",
        type: "grammar"
    },

    // 40. 高階：混合類型假設語氣 (Mixed Conditional)
    // 解析: 與「過去」事實相反 (If I had taken) 影響到「現在」的狀態 (I would be...)。
    { 
        q: "If I had taken the promotion last year, I _____ in the London office now.", 
        ans: "would be working", 
        options: ["would work", "would have worked", "would be working", "will be working"], 
        tag: "Mixed Conditional",
        type: "grammar"
    },

    // 41. 高階：否定副詞位於句中 (Negative Adverb Placement)
    // 解析: Little did he know... (他一點都不知道...)。這是一種強調語氣的倒裝。
    { 
        q: "Little _____ that the small startup would eventually become a global tech giant.", 
        ans: "did he realize", 
        options: ["he realized", "did he realize", "he had realized", "has he realized"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 42. 極高階：省略 Should 的假設語氣被動式 (Subjunctive Passive)
    // 解析: It is imperative that + S + (should) + be p.p.。此處為被動，應選 be informed。
    { 
        q: "It is imperative that the CEO _____ of any changes in the regulatory environment immediately.", 
        ans: "be informed", 
        options: ["is informed", "was informed", "be informed", "informs"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 43. 極高階：地點副詞提前之倒裝 (Locative Inversion)
    // 解析: 當地點副詞（片語）放句首，且動詞為不及物動詞（如 come, lie, sit）時，主詞與動詞全倒裝。
    { 
        q: "At the end of the long hallway _____ the office of the Chief Financial Officer.", 
        ans: "lies", 
        options: ["lies", "is lying", "do lie", "does lie"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 44. 高難度：Lest 的用法 (Lest + Subjunctive)
    // 解析: lest (唯恐/以免) 後方子句動詞需用「(should) + 原形動詞」。
    { 
        q: "The negotiator was careful not to mention the price, lest the deal _____ through.", 
        ans: "fall", 
        options: ["falls", "fell", "fall", "will fall"], 
        tag: "Advanced Conjunction",
        type: "grammar"
    },

    // 45. 綜合判斷：介系詞後的關係代名詞 (Preposition + Relative Pronoun)
    // 解析: rely on 的 on 提前。the platform on which we rely.
    { 
        q: "Efficiency is the foundation _____ our entire business model is built.", 
        ans: "upon which", 
        options: ["which", "that", "upon which", "where"], 
        tag: "Relative Pronoun",
        type: "grammar"
    },

    // 46. 陷阱題：形容詞平行結構 (Parallel Structure)
    // 解析: not only... but also... 連接的兩者詞性必須一致。
    { 
        q: "The candidate was not only highly qualified but also _____ motivated to succeed.", 
        ans: "exceptionally", 
        options: ["exception", "exceptional", "exceptionally", "excepting"], 
        tag: "Parallelism",
        type: "grammar"
    },
// 47. 高階：分詞句型中的主詞一致性 (Dangling Participle Avoidance)
    // 解析: 選項必須與主句主詞 "the project" 產生正確的主被動關係。
    // 是項目被完成，故選 Having been completed。
    { 
        q: "_____ ahead of schedule, the project was hailed as a major success by the stakeholders.", 
        ans: "Having been completed", 
        options: ["Completing", "Having completed", "Having been completed", "To complete"], 
        tag: "Participle Clause",
        type: "grammar"
    },

    // 48. 嚴謹文法：虛擬語氣 (Subjunctive Mood - Be)
    // 解析: Whether it be... or... (不論是...還是...) 是固定虛擬語氣用法，表示「不論情況為何」。
    { 
        q: "The company policy must be followed by everyone, whether he _____ a junior intern or a senior executive.", 
        ans: "be", 
        options: ["is", "be", "was", "being"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 49. 高階倒裝：So/Such...that 結構
    // 解析: "So + adj." 置於句首，主句需倒裝。So intense was the heat...
    { 
        q: "So _____ the competition that many small firms were forced out of the market.", 
        ans: "intense was", 
        options: ["intense was", "was intense", "intense it was", "intensely was"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 50. 比較級與冠詞 (The + Comparative)
    // 解析: The + 比較級, the + 比較級。表示「愈...就愈...」。
    { 
        q: "The more volatile the stock market becomes, _____ investors tend to be.", 
        ans: "the more cautious", 
        options: ["more cautious", "the more cautious", "cautious", "the most cautious"], 
        tag: "Comparative",
        type: "grammar"
    },

    // 51. 極高階：省略 "if" 的假設語氣 (Were to)
    // 解析: 與未來事實相反或極低可能的假設。If he were to resign -> Were he to resign。
    { 
        q: "_____ the CEO to resign unexpectedly, the board would immediately appoint an interim leader.", 
        ans: "Were", 
        options: ["Should", "Had", "Were", "If"], 
        tag: "Inversion / Conditional",
        type: "grammar"
    },

    // 52. 高階：代名詞的一致性 (Indefinite Pronouns)
    // 解析: 每個/任何一個 (Everyone/Anyone) 在嚴謹文法中視為單數，對應其所有格應用 his or her（雖然現代口語常用 their，但在嚴格語法測驗中仍選單數）。
    { 
        q: "Every employee is encouraged to submit _____ suggestions to the HR department.", 
        ans: "his or her", 
        options: ["their", "his or her", "our", "its"], 
        tag: "Pronoun Agreement",
        type: "grammar"
    },

    // 53. 否定關聯連接詞 (Negative Correlative Conjunctions)
    // 解析: Not only 置於句首，後方接倒裝句。Not only did they... but they also...
    { 
        q: "Not only _____ the deadline, but they also exceeded the budget expectations.", 
        ans: "did they miss", 
        options: ["they missed", "did they miss", "have they missed", "had they missed"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 54. 高階：介系詞 + Which (Preposition + Which)
    // 解析: to the extent (到...的程度)。對應關係子句為 to which。
    { 
        q: "We were surprised by the extent _____ the new regulations affected our operations.", 
        ans: "to which", 
        options: ["in which", "to which", "for which", "at which"], 
        tag: "Relative Clause",
        type: "grammar"
    },

    // 55. 極高階：But for 的假設語氣 (But for = If it were not for)
    // 解析: But for + N, S + would have + p.p. (若非當時有...，現在就已經...)。
    { 
        q: "But for the financial bailout, the airline _____ bankrupt three years ago.", 
        ans: "would have gone", 
        options: ["would go", "had gone", "would have gone", "went"], 
        tag: "Conditional",
        type: "grammar"
    },

    // 56. 極高階：No sooner...than (一...就...)
    // 解析: No sooner 置於句首，主句倒裝且固定搭配 than (不可用 when)。
    { 
        q: "No sooner _____ the contract than a better offer arrived from a competitor.", 
        ans: "had we signed", 
        options: ["we had signed", "did we sign", "had we signed", "we were signing"], 
        tag: "Inversion / Conjunction",
        type: "grammar"
    },
// 57. 極高階：省略 Should 的被動虛擬語氣 (Subjunctive Passive)
    // 解析: It is essential that + S + (should) + be p.p.。此處 "not be disclosed" 為標準寫法。
    { 
        q: "It is essential that the details of the negotiations _____ to the press until a final agreement is reached.", 
        ans: "not be disclosed", 
        options: ["not be disclosed", "not are disclosed", "should not disclose", "be not disclosed"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 58. 極高階：形容詞子句的變形 (Adjective + As + S + V)
    // 解析: "Try as he might" 或 "Successful as he was" 是讓步句型，意為 "Although he was successful"。
    { 
        q: "_____ as the merger seemed at first, it eventually failed due to cultural differences.", 
        ans: "Promising", 
        options: ["Promise", "Promising", "Promised", "To promise"], 
        tag: "Concession Clause",
        type: "grammar"
    },

    // 59. 嚴謹比較結構 (Comparison of Logical Entities)
    // 解析: 比較對象必須對等。此處是比較「目前的收入」與「去年的收入 (that of last year)」。
    { 
        q: "The company's revenue this year is significantly higher than _____ last year.", 
        ans: "that of", 
        options: ["this of", "it of", "that of", "those of"], 
        tag: "Comparison",
        type: "grammar"
    },

    // 60. 高階倒裝：Not only... but also 的時態一致性
    // 解析: Not only 置於句首引發倒裝，且需注意與後句時態的關聯性。
    { 
        q: "Not only _____ the research, but they also patented the findings immediately.", 
        ans: "did they conduct", 
        options: ["they conducted", "had they conducted", "did they conduct", "were they conducting"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 61. 特殊介系詞用法 (Save for = Except for)
    // 解析: "Save for" 是正式書面語中的「除了...之外」。
    { 
        q: "The report was flawless, _____ a few minor typographical errors in the conclusion.", 
        ans: "save for", 
        options: ["save for", "besides", "owing to", "apart from that"], 
        tag: "Preposition",
        type: "grammar"
    },

    // 62. 極高階：雙重否定與強烈肯定 (Double Negative for Emphasis)
    // 解析: "It is not uncommon" (並非不常見) 用於委婉表達「相當常見」。
    { 
        q: "It is not _____ for high-level executives to undergo rigorous background checks.", 
        ans: "uncommon", 
        options: ["common", "uncommon", "commonly", "uncommonly"], 
        tag: "Rhetorical Device",
        type: "grammar"
    },

    // 63. 代名詞與分詞構句 (Independent Genitive/Absolute Construction)
    // 解析: 獨立分詞構句。主詞不同時需保留 (Weather permitting / All things considered)。
    { 
        q: "The board meeting having concluded, _____ left the conference room to speak with reporters.", 
        ans: "the CEO", 
        options: ["the CEO", "it", "then", "there"], 
        tag: "Absolute Construction",
        type: "grammar"
    },

    // 64. 極高階：特殊連接詞 (Provided that = If)
    // 解析: "Provided that" 或 "Providing that" 是正式合約中常見的「只要.../在...條件下」。
    { 
        q: "The warranty remains valid _____ that the product has not been tampered with by unauthorized personnel.", 
        ans: "provided", 
        options: ["providing", "provided", "suppose", "as long"], 
        tag: "Conjunction",
        type: "grammar"
    },

    // 65. 關係代名詞之限定與非限定 (Restrictive vs. Non-restrictive)
    // 解析: 逗點後不能接 that，且此處指代前面的整個句子狀況，應用 which。
    { 
        q: "The factory exceeded its production quota for the third month in a row, _____ led to a significant year-end bonus for all staff.", 
        ans: "which", 
        options: ["which", "that", "what", "this"], 
        tag: "Relative Clause",
        type: "grammar"
    },

    // 66. 極高階：虛擬語氣倒裝 (Were it not for)
    // 解析: "If it were not for" 的倒裝，表示「若非現在有...」。
    { 
        q: "_____ for the dedicated efforts of our legal team, we would be facing a massive lawsuit today.", 
        ans: "Were it not", 
        options: ["Had it not been", "Were it not", "If it was not", "If not being"], 
        tag: "Inversion / Conditional",
        type: "grammar"
    },
// 67. 極高階：倒裝句與否定範圍 (Negative Scope Inversion)
    // 解析: "Under no circumstances"（絕不）置於句首，主句必須倒裝。
    { 
        q: "Under no circumstances _____ the confidential passwords be shared with third-party vendors.", 
        ans: "should", 
        options: ["should", "passwords should", "did", "are"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 68. 嚴謹代名詞用法：One 的一致性
    // 解析: 在正式寫作中，若主詞使用 One，後續的所有格也應統一使用 one's 而非 his 或 their。
    { 
        q: "One must be diligent in _____ duties if one wishes to be considered for a promotion.", 
        ans: "one's", 
        options: ["his", "their", "one's", "its"], 
        tag: "Pronoun Consistency",
        type: "grammar"
    },

    // 69. 高階虛擬語氣：Lest (以免 / 唯恐)
    // 解析: "Lest" 引導的子句，動詞需用原形 (省略 should)，且不與 not 連用。
    { 
        q: "The auditor scrutinized the records, lest any discrepancy _____ overlooked.", 
        ans: "be", 
        options: ["is", "was", "be", "should be not"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 70. 分詞構句的主詞陷阱 (Dangling Modifiers)
    // 解析: 分詞句的主詞必須與主要子句主詞一致。
    // (Because it was) Written in technical jargon, the manual (主詞) was hard to read.
    { 
        q: "_____ in technical jargon, the new recruits found the manual difficult to understand.", 
        ans: "Written", 
        options: ["Writing", "Having written", "Written", "To write"], 
        tag: "Participle Clause",
        type: "grammar"
    },

    // 71. 極高階：Such + be + S + that (強調倒裝)
    // 解析: Such was the impact... (影響力是如此之大...)，Such 置首時主動詞倒裝。
    { 
        q: "Such _____ the intensity of the storm that the entire power grid was compromised.", 
        ans: "was", 
        options: ["is", "was", "did", "being"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 72. 嚴謹比較：That of / Those of 的單複數一致
    // 解析: 比較對象是 "The fluctuations" (複數)，故用 those of。
    { 
        q: "The fluctuations in the yen are far more volatile than _____ the euro.", 
        ans: "those of", 
        options: ["that of", "those of", "this of", "the one of"], 
        tag: "Comparison",
        type: "grammar"
    },

    // 73. 高階關係代名詞：Which 指代先行句
    // 解析: 這裡的 which 引導非限定用法，指代前面整件事（獲利增加這件事）。
    { 
        q: "The company reported a 30% increase in profits, _____ surprised even the most optimistic analysts.", 
        ans: "which", 
        options: ["that", "which", "this", "what"], 
        tag: "Relative Clause",
        type: "grammar"
    },

    // 74. 極高階：As it were (可以說是 / 彷彿)
    // 解析: "As it were" 是固定用法，作為插入語，表示一種比喻或虛擬。
    { 
        q: "He became a sort of mentor to the team, a second father, _____, during the crisis.", 
        ans: "as it were", 
        options: ["as it is", "as it was", "as it were", "as it would be"], 
        tag: "Subjunctive Idiom",
        type: "grammar"
    },

    // 75. 否定關係詞：But for (若非)
    // 解析: 與「過去」事實相反，主句用 would have + p.p.。
    { 
        q: "But for your timely intervention, the situation _____ into a total disaster.", 
        ans: "would have escalated", 
        options: ["escalated", "would escalate", "would have escalated", "had escalated"], 
        tag: "Conditional",
        type: "grammar"
    },

    // 76. 高階時態：未來完成進行式 (Future Perfect Continuous)
    // 解析: By next month (未來時間) + for ten years (持續時間)。
    { 
        q: "By next month, the CEO _____ this corporation for over ten years.", 
        ans: "will have been leading", 
        options: ["will lead", "will be leading", "will have been leading", "has been leading"], 
        tag: "Tense",
        type: "grammar"
    },// 77. 極高階：省略 Should 的否定虛擬語氣 (Subjunctive Negation)
    // 解析: 在 demand, insist 等動詞後，否定式直接用 "not + VR"，不可加 do/does/did。
    { 
        q: "The stakeholders demanded that the CEO _____ the annual bonuses until the audit was complete.", 
        ans: "not distribute", 
        options: ["not distribute", "does not distribute", "not distributed", "did not distribute"], 
        tag: "Subjunctive Mood",
        type: "grammar"
    },

    // 78. 極高階：Were it not for vs. Had it not been for (時態對稱)
    // 解析: "Had it not been for" 是與「過去」事實相反，主句需搭配 "would have + p.p."。
    { 
        q: "_____ for the emergency funding provided last year, the research laboratory would have closed down.", 
        ans: "Had it not been", 
        options: ["Were it not", "Had it not been", "If it was not", "If it had not"], 
        tag: "Conditional / Inversion",
        type: "grammar"
    },

    // 79. 嚴謹文法：主詞補語的一致性 (Subject Complements)
    // 解析: 在極其正式的英文中，be 動詞後接代名詞作為補語需用主格 (It is I / It was she)。
    { 
        q: "When the phone rang, I was certain that it was _____ who had called to deliver the news.", 
        ans: "she", 
        options: ["her", "she", "hers", "herself"], 
        tag: "Pronoun Case",
        type: "grammar"
    },

    // 80. 高階修辭：倒裝語序 (Negative Adverbial Phrase)
    // 解析: "Not since" (自從...以來就不曾) 引導的時間副詞片語置於句首，主句須倒裝。
    { 
        q: "Not since the economic crisis of 2008 _____ such a rapid decline in interest rates.", 
        ans: "has there been", 
        options: ["there has been", "has there been", "was there", "there was"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 81. 極高階：倒裝假設 (Should... but)
    // 解析: "Should + S + VR" 是對未來可能性的假設。
    { 
        q: "_____ the venture fail, the investors stand to lose their entire initial capital.", 
        ans: "Should", 
        options: ["Had", "Were", "Should", "If"], 
        tag: "Inversion",
        type: "grammar"
    },

    // 82. 複合關係詞與介系詞 (Prepositional Compound Relatives)
    // 解析: "whereby" 意為 "by which" (藉此/憑此)，常用於法律或程序描述。
    { 
        q: "The company established a new protocol _____ employees can report grievances anonymously.", 
        ans: "whereby", 
        options: ["whereby", "whereas", "wherein", "wherefore"], 
        tag: "Conjunction",
        type: "grammar"
    },

    // 83. 嚴謹比較：複數代名詞指代 (Those vs. That)
    // 解析: 比較對象是 "The regulations" (複數)，故後方須對稱使用 "those"。
    { 
        q: "The safety regulations in the aviation industry are far more stringent than _____ in the maritime sector.", 
        ans: "those", 
        options: ["that", "those", "this", "them"], 
        tag: "Comparison",
        type: "grammar"
    },

    // 84. 極高階：分詞句型與完成式 (Having been p.p.)
    // 解析: 這裡需要「完成式」表示發生在主句之前，且需用「被動」表示被忽視。
    { 
        q: "_____ for decades, the historical site was finally restored to its former glory last year.", 
        ans: "Having been neglected", 
        options: ["Neglecting", "Being neglected", "Having been neglected", "To be neglected"], 
        tag: "Participle Clause",
        type: "grammar"
    },

    // 85. 極高階：插入語與主詞動詞一致 (Intervening Phrases)
    // 解析: 主詞是 "The introduction" (單數)，中間的 "as well as..." 不影響主詞單複數。
    { 
        q: "The introduction of new tax laws, as well as the recent tariff increases, _____ expected to slow down the economy.", 
        ans: "is", 
        options: ["is", "are", "be", "being"], 
        tag: "Subject-Verb Agreement",
        type: "grammar"
    },

    // 86. 強調倒裝句 (Adverbial of Place Inversion)
    // 解析: 地點副詞在前，不及物動詞全倒裝 (不需要助動詞 did/does)。
    { 
        q: "Down the slope _____ the remnants of what was once a thriving industrial complex.", 
        ans: "lay", 
        options: ["did lie", "lay", "lied", "lying"], 
        tag: "Inversion",
        type: "grammar"
    }
];