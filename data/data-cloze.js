// ==========================================
// 📜 填空題專用題庫 (Cloze Test Database)
// ==========================================
// 格式說明：
// q: 題目句子 (挖空處請用 ______)
// ans: 正確答案 (必須跟 options 裡的其中一個完全一樣)
// options: 四個選項的陣列
// cn: 整句題目的中文翻譯
// meanings: { "選項英文": "中文意思或文法解釋" } -> 用於即時回饋
// ==========================================

window.clozeDB = [
    {
        q: "He ______ a lucrative contract with the team yesterday.",
        ans: "signed",
        options: ["signed", "signs", "sign", "signing"],
        cn: "他昨天與球隊簽了一份利潤豐厚的合約。",
        meanings: {
            "signed": "簽署 (過去式 - 正解)",
            "signs": "簽署 (第三人稱單數)",
            "sign": "簽署 (原形)",
            "signing": "簽署 (進行式/動名詞)"
        }
    },
    {
        q: "The earth ______ around the sun once every year.",
        ans: "revolves",
        options: ["revolves", "rotates", "evolves", "involves"],
        cn: "地球每年繞太陽公轉一次。",
        meanings: {
            "revolves": "公轉 (繞著物體轉)",
            "rotates": "自轉 (繞著軸轉)",
            "evolves": "進化/發展",
            "involves": "涉及/包含"
        }
    },
    {
        q: "Photosynthesis allows plants to convert sunlight into ______.",
        ans: "energy",
        options: ["energy", "soil", "water", "wind"],
        cn: "光合作用讓植物將陽光轉化為能量。",
        meanings: {
            "energy": "能量",
            "soil": "土壤",
            "water": "水",
            "wind": "風"
        }
    },
    {
        q: "She is very interested ______ learning new languages.",
        ans: "in",
        options: ["in", "on", "at", "with"],
        cn: "她對學習新語言非常感興趣。",
        meanings: {
            "in": "在...裡面 (be interested in 是固定用法)",
            "on": "在...上面",
            "at": "在...地點/時刻",
            "with": "和...一起"
        }
    },
    {
        q: "The company's new policy will have a significant ______ on the market.",
        ans: "effect",
        options: ["effect", "affect", "effort", "afford"],
        cn: "這家公司的新政策將對市場產生重大影響。",
        meanings: {
            "effect": "影響/效果 (名詞)",
            "affect": "影響 (動詞)",
            "effort": "努力",
            "afford": "負擔得起"
        }
    },
    {
        q: "If I ______ you, I would accept the offer immediately.",
        ans: "were",
        options: ["were", "am", "was", "be"],
        cn: "如果我是你，我會立刻接受這個提議。",
        meanings: {
            "were": "是 (與現在事實相反的假設語氣)",
            "am": "是 (現在式)",
            "was": "是 (過去式，但假設語氣通常用 were)",
            "be": "是 (原形)"
        }
    },
    {
        q: "Scientists formulated a ______ to explain the phenomenon.",
        ans: "hypothesis",
        options: ["hypothesis", "synthesis", "parenthesis", "hypocrisy"],
        cn: "科學家制定了一個假設來解釋這個現象。",
        meanings: {
            "hypothesis": "假設/假說",
            "synthesis": "合成/綜合",
            "parenthesis": "括號/插入語",
            "hypocrisy": "偽善/虛偽"
        }
    },
    {
        q: "Due to the heavy rain, the baseball game was called ______.",
        ans: "off",
        options: ["off", "on", "out", "in"],
        cn: "由於大雨，棒球比賽被取消了。",
        meanings: {
            "off": "取消 (call off)",
            "on": "拜訪/號召 (call on)",
            "out": "大聲喊叫 (call out)",
            "in": "召來/召喚 (call in)"
        }
    },
    {
        q: "The development of ______ intelligence has revolutionized many industries.",
        ans: "artificial",
        options: ["artificial", "artistic", "authentic", "automatic"],
        cn: "人工智慧的發展徹底改變了許多產業。",
        meanings: {
            "artificial": "人造的/人工的",
            "artistic": "藝術的",
            "authentic": "真實的/道地的",
            "automatic": "自動的"
        }
    },
    {
        q: "There isn't ______ water left in the bottle.",
        ans: "much",
        options: ["much", "many", "few", "a few"],
        cn: "瓶子裡剩下的水不多了。",
        meanings: {
            "much": "許多 (接不可數名詞，如 water)",
            "many": "許多 (接可數名詞)",
            "few": "很少 (接可數名詞)",
            "a few": "有一些 (接可數名詞)"
        }
    },
{
        q: "The manager decided to ______ the meeting until next Monday.",
        ans: "postpone",
        options: ["postpone", "prepare", "propose", "promote"],
        cn: "經理決定將會議延期到下週一。",
        meanings: {
            "postpone": "延期 (同 delay)",
            "prepare": "準備",
            "propose": "提議/求婚",
            "promote": "晉升/促銷"
        }
    },
    {
        q: "Water ______ at 100 degrees Celsius under standard atmospheric pressure.",
        ans: "boils",
        options: ["boils", "freezes", "melts", "evaporates"],
        cn: "在標準大氣壓下，水在攝氏 100 度時沸騰。",
        meanings: {
            "boils": "沸騰 (科學事實用現在式)",
            "freezes": "結冰",
            "melts": "融化",
            "evaporates": "蒸發"
        }
    },
    {
        q: "Despite the ______ traffic, he managed to arrive at the airport on time.",
        ans: "heavy",
        options: ["heavy", "strong", "big", "crowded"],
        cn: "儘管交通擁擠，他還是設法準時到達了機場。",
        meanings: {
            "heavy": "沈重的 (heavy traffic 指交通擁擠的固定搭配)",
            "strong": "強壯的/強烈的",
            "big": "大的",
            "crowded": "擁擠的 (通常形容空間而非交通流量)"
        }
    },
    {
        q: "I am looking forward to ______ you at the conference next month.",
        ans: "seeing",
        options: ["seeing", "see", "seen", "to see"],
        cn: "我期待在下個月的會議上見到你。",
        meanings: {
            "seeing": "看見 (look forward to + Ving 是固定用法)",
            "see": "看見 (原形)",
            "seen": "看見 (過去分詞)",
            "to see": "看見 (不定詞，此處 to 是介系詞)"
        }
    },
    {
        q: "The Louvre Museum in Paris is ______ for its vast collection of artworks.",
        ans: "renowned",
        options: ["renowned", "notorious", "ignorant", "anonymous"],
        cn: "巴黎羅浮宮以其豐富的藝術收藏而聞名。",
        meanings: {
            "renowned": "著名的/有聲望的",
            "notorious": "惡名昭彰的",
            "ignorant": "無知的",
            "anonymous": "匿名的"
        }
    },
    {
        q: "The government is taking measures to reduce environmental ______.",
        ans: "pollution",
        options: ["pollution", "population", "popularity", "poverty"],
        cn: "政府正採取措施來減少環境污染。",
        meanings: {
            "pollution": "污染",
            "population": "人口",
            "popularity": "普及/流行",
            "poverty": "貧窮"
        }
    },
    {
        q: "The detective ______ the evidence carefully to find a clue.",
        ans: "examined",
        options: ["examined", "expected", "excluded", "exceeded"],
        cn: "偵探仔細檢查了證據以尋找線索。",
        meanings: {
            "examined": "檢查/審查",
            "expected": "期待/預期",
            "excluded": "排除",
            "exceeded": "超過/勝過"
        }
    },
    {
        q: "Neither the students nor the teacher ______ aware of the schedule change.",
        ans: "was",
        options: ["was", "were", "are", "be"],
        cn: "學生和老師都不知道行程更改了。",
        meanings: {
            "was": "是 (neither A nor B 動詞需與 B 一致，此處為單數 teacher)",
            "were": "是 (複數過去式)",
            "are": "是 (複數現在式)",
            "be": "是 (原形)"
        }
    },
    {
        q: "The internet has a profound ______ on how we communicate today.",
        ans: "impact",
        options: ["impact", "insight", "instance", "incentive"],
        cn: "網路對我們今日的溝通方式有深遠的影響。",
        meanings: {
            "impact": "影響/衝擊",
            "insight": "洞察力",
            "instance": "例子",
            "incentive": "動機/鼓勵"
        }
    },
    {
        q: "If it ______ tomorrow, we will cancel the picnic.",
        ans: "rains",
        options: ["rains", "will rain", "rained", "raining"],
        cn: "如果明天下雨，我們就取消野餐。",
        meanings: {
            "rains": "下雨 (if 引導的條件句，用現在式代替未來式)",
            "will rain": "將下雨 (條件子句中不使用 will)",
            "rained": "下雨 (過去式)",
            "raining": "下雨 (現在分詞)"
        }
    },{
        q: "The marketing department is ______ coming up with a new slogan.",
        ans: "responsible for",
        options: ["responsible for", "interested in", "capable of", "familiar with"],
        cn: "行銷部門負責構思新的口號。",
        meanings: {
            "responsible for": "負責 (be responsible for 是常用職場片語)",
            "interested in": "對...感興趣",
            "capable of": "有能力...",
            "familiar with": "對...熟悉"
        }
    },
    {
        q: "The sales figures have increased ______ since the launch of the new product.",
        ans: "dramatically",
        options: ["dramatically", "accidentally", "rarely", "strictly"],
        cn: "自從新產品上市以來，銷售數字大幅增加。",
        meanings: {
            "dramatically": "戲劇性地/大幅地",
            "accidentally": "意外地",
            "rarely": "很少/罕見地",
            "strictly": "嚴格地"
        }
    },
    {
        q: "Rarely ______ such a beautiful sunset in this city.",
        ans: "have I seen",
        options: ["have I seen", "I have seen", "I saw", "did I saw"],
        cn: "我很少在這個城市看到如此美麗的日落。",
        meanings: {
            "have I seen": "我有看過 (否定副詞 Rarely 置於句首需用倒裝句)",
            "I have seen": "我上看過 (一般語序)",
            "I saw": "我看過 (過去式)",
            "did I saw": "語法錯誤 (did 後應接原形動詞)"
        }
    },
    {
        q: "The meeting had already started by the time he ______ at the office.",
        ans: "arrived",
        options: ["arrived", "arrives", "has arrived", "had arrived"],
        cn: "在他抵達辦公室時，會議已經開始了。",
        meanings: {
            "arrived": "到達 (by the time 引導過去時間點，主要子句用過去完成式)",
            "arrives": "到達 (現在式)",
            "has arrived": "到達 (現在完成式)",
            "had arrived": "到達 (過去完成式，但此處為動作發生先後的參考點)"
        }
    },
    {
        q: "The new bridge is currently ______ to improve traffic flow.",
        ans: "being built",
        options: ["being built", "building", "been built", "to build"],
        cn: "這座新橋目前正在建造中，以改善交通流量。",
        meanings: {
            "being built": "正在被建造 (現在進行式被動語態)",
            "building": "建造中 (主動語態)",
            "been built": "已被建造 (完成式)",
            "to build": "去建造 (不定詞)"
        }
    },
    {
        q: "Please ______ the document to the email before sending it.",
        ans: "attach",
        options: ["attach", "attack", "attain", "attend"],
        cn: "寄出郵件前，請將文件隨信夾帶。",
        meanings: {
            "attach": "附件/夾帶",
            "attack": "攻擊",
            "attain": "達成/獲得",
            "attend": "參加"
        }
    },
    {
        q: "The manager ______ the employee for her outstanding performance.",
        ans: "praised",
        options: ["praised", "blamed", "ignored", "warned"],
        cn: "經理稱讚了這位員工的傑出表現。",
        meanings: {
            "praised": "稱讚",
            "blamed": "責備",
            "ignored": "忽視",
            "warned": "警告"
        }
    },
    {
        q: "We need to find a ______ solution to this long-term problem.",
        ans: "sustainable",
        options: ["sustainable", "temporary", "vague", "sudden"],
        cn: "我們需要為這個長期問題找到一個永續的解決方案。",
        meanings: {
            "sustainable": "永續的/可持續的",
            "temporary": "臨時的/暫時的",
            "vague": "模糊的",
            "sudden": "突然的"
        }
    },
    {
        q: "I would have told you the truth if you ______ me yesterday.",
        ans: "had asked",
        options: ["had asked", "asked", "ask", "would ask"],
        cn: "如果你昨天有問我，我就會告訴你真相了。",
        meanings: {
            "had asked": "有詢問 (與過去事實相反的假設語氣：if + S + had p.p.)",
            "asked": "詢問 (過去式)",
            "ask": "詢問 (現在式)",
            "would ask": "會詢問"
        }
    },
    {
        q: "The information provided in the brochure is highly ______.",
        ans: "accurate",
        options: ["accurate", "adequate", "abundant", "absent"],
        cn: "手冊中提供的資訊非常準確。",
        meanings: {
            "accurate": "準確的",
            "adequate": "充足的/適當的",
            "abundant": "豐富的",
            "absent": "缺席的/缺乏的"
        }
    },
{
        q: "The CEO emphasized that the company must ______ to changing market conditions.",
        ans: "adapt",
        options: ["adapt", "adopt", "adept", "admit"],
        cn: "執行長強調公司必須適應不斷變化的市場條件。",
        meanings: {
            "adapt": "適應 (adapt to)",
            "adopt": "採用/收養",
            "adept": "熟練的 (形容詞)",
            "admit": "承認/准許進入"
        }
    },
    {
        q: "The results of the study were ______ with the previous findings.",
        ans: "consistent",
        options: ["consistent", "constant", "consequent", "convenient"],
        cn: "這項研究的結果與先前的研究結果一致。",
        meanings: {
            "consistent": "一致的/連貫的",
            "constant": "持續不斷的/不變的",
            "consequent": "隨之發生的",
            "convenient": "方便的"
        }
    },
    {
        q: "We should ______ a thorough investigation into the cause of the system failure.",
        ans: "conduct",
        options: ["conduct", "conclude", "confess", "confuse"],
        cn: "我們應該對系統故障的原因進行徹底調查。",
        meanings: {
            "conduct": "執行/實施 (常用於調查、實驗)",
            "conclude": "下結論/結束",
            "confess": "坦白/承認",
            "confuse": "使困惑"
        }
    },
    {
        q: "Hardly ______ the office when the phone started ringing incessantly.",
        ans: "had I entered",
        options: ["had I entered", "I had entered", "did I enter", "I entered"],
        cn: "我一進辦公室，電話就響個不停。",
        meanings: {
            "had I entered": "我剛進入 (Hardly...when... 倒裝句型，表示一...就...)",
            "I had entered": "一般語序 (用於非倒裝句)",
            "did I enter": "助動詞與時態不符",
            "I entered": "過去式"
        }
    },
    {
        q: "The price of raw materials has ______ significantly over the past month.",
        ans: "fluctuated",
        options: ["fluctuated", "fascinated", "facilitated", "fabricated"],
        cn: "原物料價格在過去一個月內大幅波動。",
        meanings: {
            "fluctuated": "波動/起伏",
            "fascinated": "使著迷",
            "facilitated": "促進/使便利",
            "fabricated": "捏造/偽造"
        }
    },
    {
        q: "She managed to finish the project ahead of schedule ______ the limited resources.",
        ans: "despite",
        options: ["despite", "although", "unless", "whereas"],
        cn: "儘管資源有限，她還是設法提前完成了專案。",
        meanings: {
            "despite": "儘管 (介系詞，後接名詞/Ving)",
            "although": "雖然 (連接詞，後接主詞+動詞)",
            "unless": "除非",
            "whereas": "然而/反之"
        }
    },
    {
        q: "The candidate has all the necessary ______ for the senior management position.",
        ans: "qualifications",
        options: ["qualifications", "quantities", "qualities", "quotations"],
        cn: "這位應徵者具備該高階主管職位所需的所有資歷。",
        meanings: {
            "qualifications": "資格/資歷",
            "quantities": "數量",
            "qualities": "特質/品質",
            "quotations": "引述/報價"
        }
    },
    {
        q: "The contract will be ______ if both parties fail to reach an agreement.",
        ans: "terminated",
        options: ["terminated", "translated", "transmitted", "transformed"],
        cn: "如果雙方未能達成協議，合約將被終止。",
        meanings: {
            "terminated": "終止/結束",
            "translated": "翻譯",
            "transmitted": "傳送/傳播",
            "transformed": "轉變/改造"
        }
    },
    {
        q: "The new software is ______ with most operating systems.",
        ans: "compatible",
        options: ["compatible", "comparable", "competitive", "comprehensive"],
        cn: "這款新軟體與大多數作業系統相容。",
        meanings: {
            "compatible": "相容的",
            "comparable": "可比擬的",
            "competitive": "競爭激烈的/有競爭力的",
            "comprehensive": "全面的/廣泛的"
        }
    },
    {
        q: "The employees were ______ about the upcoming changes in the company structure.",
        ans: "notified",
        options: ["notified", "noticed", "noted", "nominated"],
        cn: "員工們已收到關於公司架構即將變動的通知。",
        meanings: {
            "notified": "通知 (被動語態 be notified of/about)",
            "noticed": "注意到",
            "noted": "著名的/記錄下",
            "nominated": "提名"
        }
    },

];