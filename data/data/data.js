    // ==========================================
    // 1. 資料庫區域 (小心符號！)
    // ==========================================
 const vocabDB = {
        "TOEIC": [
            {
                en: "Abide",
                phonetic: "[əˋbaɪd]",
                details: [
                    { pos: "v.", cn: "遵守、忍受", forms: "abides / abode / abode", examples: ["Competitors must abide by the rules of the game.", "I cannot abide his rudeness anymore."] }
                ]
            },
            {
                en: "Access",
                phonetic: "[ˋæksɛs]",
                details: [
                    { pos: "n.", cn: "進入權、通道", examples: ["Only authorized personnel have access to the computer system.", "The main access to the building is around the back."] },
                    { pos: "v.", cn: "存取、使用", forms: "accesses / accessed / accessed", examples: ["You can access your account online anytime.", "The files are password-protected."] }
                ]
            },
            {
                en: "Accommodate",
                phonetic: "[əˋkɑmə͵det]",
                details: [
                    { pos: "v.", cn: "容納、配合", forms: "accommodates / accommodated / accommodated", examples: ["The conference room can accommodate up to 500 people.", "We will do our best to accommodate your schedule."] }
                ]
            },
            {
                en: "Accumulate",
                phonetic: "[əˋkjumjə͵let]",
                details: [
                    { pos: "v.", cn: "累積、積聚", forms: "accumulates / accumulated / accumulated", examples: ["Debts began to accumulate after he lost his job.", "Evidence against the suspect is accumulating."] }
                ]
            },
            {
                en: "Acquire",
                phonetic: "[əˋkwaɪr]",
                details: [
                    { pos: "v.", cn: "獲得、收購", forms: "acquires / acquired / acquired", examples: ["The company has acquired a new office building.", "He has acquired a reputation for being difficult."] }
                ]
            },
            {
                en: "Adapt",
                phonetic: "[əˋdæpt]",
                details: [
                    { pos: "v.", cn: "適應、改編", forms: "adapts / adapted / adapted", examples: ["It took him a while to adapt to the new working environment.", "The novel was adapted for the big screen."] }
                ]
            },
            {
                en: "Adequate",
                phonetic: "[ˋædəkwɪt]",
                details: [
                    { pos: "adj.", cn: "足夠的、適當的", examples: ["We need to ensure adequate resources for the project.", "His performance was adequate but not outstanding."] }
                ]
            },
            {
                en: "Administer",
                phonetic: "[ədˋmɪnəstɚ]",
                details: [
                    { pos: "v.", cn: "管理、執行", forms: "administers / administered / administered", examples: ["The HR department administers the employee benefit program.", "The test will be administered by the supervisor."] }
                ]
            },
            {
                en: "Affordable",
                phonetic: "[əˋfɔrdəb!]",
                details: [
                    { pos: "adj.", cn: "負擔得起的", examples: ["They offer high-quality products at affordable prices.", "Housing in this area is no longer affordable for most people."] }
                ]
            },
            {
                en: "Allocate",
                phonetic: "[ˋælə͵ket]",
                details: [
                    { pos: "v.", cn: "分配、撥出", forms: "allocates / allocated / allocated", examples: ["The government allocated funds for the new infrastructure project.", "You should allocate more time to double-check your work."] }
                ]
            },{
        en: "Alter",
        phonetic: "[ˋɔltɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "改變、修改(衣服)", 
                forms: "alters / altered / altered",
                examples: [
                    "We had to alter our plans due to the bad weather.",
                    "I need to have this dress altered; it fits too loosely."
                ]
            }
        ]
    },
    {
        en: "Alternative",
        phonetic: "[ɔlˋtɝnətɪv]",
        details: [
            { 
                pos: "n.", 
                cn: "替代方案、選擇", 
                examples: [
                    "We have no alternative but to cancel the meeting.",
                    "Vegetarian tofu is a good alternative to meat."
                ]
            },
            { 
                pos: "adj.", 
                cn: "替代的、另類的", 
                examples: [
                    "We are looking for alternative energy sources.",
                    "He enjoys listening to alternative rock music."
                ]
            }
        ]
    },
    {
        en: "Ambition",
        phonetic: "[æmˋbɪʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "抱負、野心", 
                examples: [
                    "His ambition is to become the CEO of the company.",
                    "She is a woman of great ambition and talent."
                ]
            }
        ]
    },
    {
        en: "Analyze",
        phonetic: "[ˋæn!͵aɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "分析", 
                forms: "analyzes / analyzed / analyzed",
                examples: [
                    "We need to analyze the data before making a decision.",
                    "The laboratory analyzed the water sample for chemicals."
                ]
            }
        ]
    },
    {
        en: "Annual",
        phonetic: "[ˋænjʊəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "年度的、每年的", 
                examples: [
                    "The company's annual report will be published next week.",
                    "We are planning our annual family vacation."
                ]
            }
        ]
    },
    {
        en: "Anticipate",
        phonetic: "[ænˋtɪsə͵pet]",
        details: [
            { 
                pos: "v.", 
                cn: "預期、期望", 
                forms: "anticipates / anticipated / anticipated",
                examples: [
                    "We allow for anticipated delays in the schedule.",
                    "They anticipate that sales will rise next quarter."
                ]
            }
        ]
    },
    {
        en: "Apparent",
        phonetic: "[əˋpærənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "明顯的、顯而易見的", 
                examples: [
                    "It became apparent that she was not feeling well.",
                    "For no apparent reason, the system crashed."
                ]
            }
        ]
    },
    {
        en: "Appeal",
        phonetic: "[əˋpil]",
        details: [
            { 
                pos: "v.", 
                cn: "吸引、呼籲、上訴", 
                forms: "appeals / appealed / appealed",
                examples: [
                    "The new product appeals to younger consumers.",
                    "Police appealed to the public for information about the crime."
                ]
            },
            { 
                pos: "n.", 
                cn: "吸引力、呼籲", 
                examples: [
                    "The movie holds little appeal for me.",
                    "They launched an appeal for aid to the disaster victims."
                ]
            }
        ]
    },
    {
        en: "Appoint",
        phonetic: "[əˋpɔɪnt]",
        details: [
            { 
                pos: "v.", 
                cn: "任命、指派", 
                forms: "appoints / appointed / appointed",
                examples: [
                    "She was appointed as the new sales manager.",
                    "A committee was appointed to investigate the incident."
                ]
            }
        ]
    },
    {
        en: "Appraise",
        phonetic: "[əˋprez]",
        details: [
            { 
                pos: "v.", 
                cn: "評估、評價", 
                forms: "appraises / appraised / appraised",
                examples: [
                    "Managers appraise employee performance once a year.",
                    "The property was appraised at two million dollars."
                ]
            }
        ]
    },
    {
        en: "Appreciate",
        phonetic: "[əˋpriʃɪ͵et]",
        details: [
            { 
                pos: "v.", 
                cn: "感激、欣賞、(資產)增值", 
                forms: "appreciates / appreciated / appreciated",
                examples: [
                    "I really appreciate your help with this project.",
                    "The value of the house has appreciated by 50%."
                ]
            }
        ]
    },
    {
        en: "Approach",
        phonetic: "[əˋprotʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "接近、著手處理", 
                forms: "approaches / approached / approached",
                examples: [
                    "As the deadline approached, we worked faster.",
                    "I’m not sure how to approach this problem."
                ]
            },
            { 
                pos: "n.", 
                cn: "方法、途徑", 
                examples: [
                    "We need a new approach to marketing.",
                    "His approach to management is very flexible."
                ]
            }
        ]
    },
    {
        en: "Appropriate",
        phonetic: "[əˋproprikɪt]",
        details: [
            { 
                pos: "adj.", 
                cn: "適當的、合適的", 
                examples: [
                    "Jeans are not appropriate for a formal interview.",
                    "Please take appropriate action to fix the error."
                ]
            }
        ]
    },
    {
        en: "Approve",
        phonetic: "[əˋpruv]",
        details: [
            { 
                pos: "v.", 
                cn: "批准、贊成", 
                forms: "approves / approved / approved",
                examples: [
                    "The board approved the budget for next year.",
                    "My parents didn't approve of my decision."
                ]
            }
        ]
    },
    {
        en: "Approximate",
        phonetic: "[əˋprɑksəmɪt]",
        details: [
            { 
                pos: "adj.", 
                cn: "大約的、近似的", 
                examples: [
                    "The approximate cost of the repair is $500.",
                    "Can you give me an approximate number of attendees?"
                ]
            }
        ]
    },
    {
        en: "Arise",
        phonetic: "[əˋraɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "發生、出現、起床", 
                forms: "arises / arose / arisen",
                examples: [
                    "Problems may arise if we don't plan carefully.",
                    "A new opportunity has arisen."
                ]
            }
        ]
    },
    {
        en: "Artificial",
        phonetic: "[͵ɑrtəˋfɪʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "人工的、人造的", 
                examples: [
                    "This product contains no artificial colors or flavors.",
                    "Artificial intelligence is transforming the tech industry."
                ]
            }
        ]
    },
    {
        en: "Aspire",
        phonetic: "[əˋspaɪr]",
        details: [
            { 
                pos: "v.", 
                cn: "渴望、追求(目標)", 
                forms: "aspires / aspired / aspired",
                examples: [
                    "She aspires to become a world-class musician.",
                    "He has always aspired to a career in politics."
                ]
            }
        ]
    },
    {
        en: "Assemble",
        phonetic: "[əˋsɛmb!]",
        details: [
            { 
                pos: "v.", 
                cn: "組裝、集合", 
                forms: "assembles / assembled / assembled",
                examples: [
                    "It took hours to assemble the new furniture.",
                    "All employees are asked to assemble in the lobby."
                ]
            }
        ]
    },
    {
        en: "Assess",
        phonetic: "[əˋsɛs]",
        details: [
            { 
                pos: "v.", 
                cn: "評估、估價", 
                forms: "assesses / assessed / assessed",
                examples: [
                    "The insurance company sent someone to assess the damage.",
                    "Tests are used to assess students' progress."
                ]
            }
        ]
    },{
        en: "Asset",
        phonetic: "[ˋæsɛt]",
        details: [
            { 
                pos: "n.", 
                cn: "資產、優點", 
                examples: [
                    "Good employees are the company's most valuable assets.",
                    "Her ability to speak three languages is a great asset to the team."
                ]
            }
        ]
    },
    {
        en: "Assign",
        phonetic: "[əˋsaɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "指派、分配", 
                forms: "assigns / assigned / assigned",
                examples: [
                    "The manager assigned the most difficult task to me.",
                    "Please assign a unique ID number to each new client."
                ]
            }
        ]
    },
    {
        en: "Assist",
        phonetic: "[əˋsɪst]",
        details: [
            { 
                pos: "v.", 
                cn: "協助、幫助", 
                forms: "assists / assisted / assisted",
                examples: [
                    "We will do everything we can to assist you.",
                    "The software assists users in organizing their files."
                ]
            }
        ]
    },
    {
        en: "Associate",
        phonetic: "[əˋsoʃɪ͵et]",
        details: [
            { 
                pos: "v.", 
                cn: "聯想、結交", 
                forms: "associates / associated / associated",
                examples: [
                    "People often associate this brand with quality.",
                    "I prefer not to associate with dishonest people."
                ]
            },
            { 
                pos: "n.", 
                cn: "同事、合夥人", 
                examples: [
                    "She introduced me to one of her business associates.",
                    "He is a close associate of the CEO."
                ]
            }
        ]
    },
    {
        en: "Assume",
        phonetic: "[əˋsjum]",
        details: [
            { 
                pos: "v.", 
                cn: "假設、承擔(責任)", 
                forms: "assumes / assumed / assumed",
                examples: [
                    "I assumed that you knew about the meeting.",
                    "The new director will assume responsibility for the project."
                ]
            }
        ]
    },
    {
        en: "Assure",
        phonetic: "[əˋʃʊr]",
        details: [
            { 
                pos: "v.", 
                cn: "向...保證、使確信", 
                forms: "assures / assured / assured",
                examples: [
                    "I can assure you that the product is safe.",
                    "He assured us that he would finish the work on time."
                ]
            }
        ]
    },
    {
        en: "Attach",
        phonetic: "[əˋtætʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "附加、貼上", 
                forms: "attaches / attached / attached",
                examples: [
                    "Please attach a copy of your resume to the email.",
                    "A label was attached to the parcel."
                ]
            }
        ]
    },
    {
        en: "Attain",
        phonetic: "[əˋten]",
        details: [
            { 
                pos: "v.", 
                cn: "達到、獲得", 
                forms: "attains / attained / attained",
                examples: [
                    "She worked hard to attain her goals.",
                    "We hope to attain a higher level of efficiency."
                ]
            }
        ]
    },
    {
        en: "Attempt",
        phonetic: "[əˋtɛmpt]",
        details: [
            { 
                pos: "v.", 
                cn: "嘗試、企圖", 
                forms: "attempts / attempted / attempted",
                examples: [
                    "They attempted to climb the mountain but failed.",
                    "Do not attempt to repair the device yourself."
                ]
            },
            { 
                pos: "n.", 
                cn: "嘗試", 
                examples: [
                    "His first attempt at writing a novel was successful.",
                    "They made no attempt to escape."
                ]
            }
        ]
    },
    {
        en: "Attend",
        phonetic: "[əˋtɛnd]",
        details: [
            { 
                pos: "v.", 
                cn: "參加、出席、照料", 
                forms: "attends / attended / attended",
                examples: [
                    "Over 200 people attended the conference.",
                    "Nurses attend to the needs of the patients."
                ]
            }
        ]
    },
    {
        en: "Attitude",
        phonetic: "[ˋætə͵tjud]",
        details: [
            { 
                pos: "n.", 
                cn: "態度、看法", 
                examples: [
                    "She has a very positive attitude towards work.",
                    "You need to change your attitude if you want to succeed."
                ]
            }
        ]
    },
    {
        en: "Attribute",
        phonetic: "[əˋtrɪbjʊt]",
        details: [
            { 
                pos: "v.", 
                cn: "歸因於", 
                forms: "attributes / attributed / attributed",
                examples: [
                    "He attributes his success to hard work.",
                    "The accident was attributed to mechanical failure."
                ]
            },
            { 
                pos: "n.", 
                cn: "特質、屬性", 
                examples: [
                    "Patience is one of her best attributes.",
                    "Both candidates possess the attributes needed for the job."
                ]
            }
        ]
    },
    {
        en: "Audit",
        phonetic: "[ˋɔdɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "審計、查帳", 
                examples: [
                    "The company is facing an annual tax audit.",
                    "The results of the audit showed no irregularities."
                ]
            },
            { 
                pos: "v.", 
                cn: "審核、旁聽", 
                forms: "audits / audited / audited",
                examples: [
                    "We hired an external firm to audit our accounts.",
                    "I decided to audit the history class instead of taking it for credit."
                ]
            }
        ]
    },
    {
        en: "Authentic",
        phonetic: "[ɔˋθɛntɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "真實的、道地的", 
                examples: [
                    "The restaurant serves authentic Italian cuisine.",
                    "Experts confirmed that the painting is authentic."
                ]
            }
        ]
    },
    {
        en: "Authority",
        phonetic: "[əˋθɔrətɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "權威、當局、權力", 
                examples: [
                    "He is an authority on modern art.",
                    "Only the manager has the authority to sign checks."
                ]
            }
        ]
    },
    {
        en: "Authorize",
        phonetic: "[ˋɔθə͵raɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "授權、批准", 
                forms: "authorizes / authorized / authorized",
                examples: [
                    "I authorized him to act on my behalf.",
                    "The transaction was not authorized by the bank."
                ]
            }
        ]
    },
    {
        en: "Automatic",
        phonetic: "[͵ɔtəˋmætɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "自動的、無意識的", 
                examples: [
                    "The doors are automatic.",
                    "Breathing is an automatic function of the body."
                ]
            }
        ]
    },
    {
        en: "Available",
        phonetic: "[əˋveləb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "可獲得的、有空的", 
                examples: [
                    "Tickets are still available for tonight's show.",
                    "I am available for a meeting tomorrow afternoon."
                ]
            }
        ]
    },
    {
        en: "Avoid",
        phonetic: "[əˋvɔɪd]",
        details: [
            { 
                pos: "v.", 
                cn: "避免、躲避", 
                forms: "avoids / avoided / avoided",
                examples: [
                    "You should avoid eating too much sugar.",
                    "He tried to avoid answering the question."
                ]
            }
        ]
    },
    {
        en: "Award",
        phonetic: "[əˋwɔrd]",
        details: [
            { 
                pos: "n.", 
                cn: "獎項", 
                examples: [
                    "She received an award for her outstanding performance.",
                    "The Academy Awards ceremony is held annually."
                ]
            },
            { 
                pos: "v.", 
                cn: "頒發、給予", 
                forms: "awards / awarded / awarded",
                examples: [
                    "The judges awarded him the first prize.",
                    "The contract was awarded to a local construction company."
                ]
            }
        ]
    },{
        en: "Aware",
        phonetic: "[əˋwɛr]",
        details: [
            { 
                pos: "adj.", 
                cn: "意識到的、知道的", 
                examples: [
                    "Are you aware of the new company policy?",
                    "We need to make the public aware of the risks."
                ]
            }
        ]
    },
    {
        en: "Backlog",
        phonetic: "[ˋbæk͵lɔg]",
        details: [
            { 
                pos: "n.", 
                cn: "積壓的工作、存貨", 
                examples: [
                    "We are working overtime to clear the backlog of orders.",
                    "The manufacturer has a huge backlog of requests."
                ]
            }
        ]
    },
    {
        en: "Balance",
        phonetic: "[ˋbæləns]",
        details: [
            { 
                pos: "n.", 
                cn: "餘額、平衡", 
                examples: [
                    "Please check your bank account balance.",
                    "It is important to maintain a healthy work-life balance."
                ]
            },
            { 
                pos: "v.", 
                cn: "使平衡、結算", 
                forms: "balances / balanced / balanced",
                examples: [
                    "We need to balance the budget before the end of the year.",
                    "She managed to balance work and study successfully."
                ]
            }
        ]
    },
    {
        en: "Ban",
        phonetic: "[bæn]",
        details: [
            { 
                pos: "v.", 
                cn: "禁止、取締", 
                forms: "bans / banned / banned",
                examples: [
                    "Smoking is strictly banned in the office building.",
                    "The government banned the import of certain products."
                ]
            },
            { 
                pos: "n.", 
                cn: "禁令", 
                examples: [
                    "There is a ban on parking in this area.",
                    "They called for a ban on single-use plastics."
                ]
            }
        ]
    },
    {
        en: "Bankrupt",
        phonetic: "[ˋbæŋkrəpt]",
        details: [
            { 
                pos: "adj.", 
                cn: "破產的", 
                examples: [
                    "Many small businesses went bankrupt during the recession.",
                    "The company was declared bankrupt last week."
                ]
            },
            { 
                pos: "v.", 
                cn: "使破產", 
                forms: "bankrupts / bankrupted / bankrupted",
                examples: [
                    "The lawsuit nearly bankrupted the firm.",
                    "Poor management bankrupted the organization."
                ]
            }
        ]
    },
    {
        en: "Bargain",
        phonetic: "[ˋbɑrgɪn]",
        details: [
            { 
                pos: "n.", 
                cn: "便宜貨、協議", 
                examples: [
                    "This laptop was a real bargain at that price.",
                    "We made a bargain that he would do the cooking."
                ]
            },
            { 
                pos: "v.", 
                cn: "討價還價", 
                forms: "bargains / bargained / bargained",
                examples: [
                    "She bargained with the seller for a lower price.",
                    "Unions are bargaining for higher wages."
                ]
            }
        ]
    },
    {
        en: "Basic",
        phonetic: "[ˋbesɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "基礎的、基本的", 
                examples: [
                    "The course covers the basic principles of marketing.",
                    "Access to clean water is a basic human right."
                ]
            }
        ]
    },
    {
        en: "Bear",
        phonetic: "[bɛr]",
        details: [
            { 
                pos: "v.", 
                cn: "忍受、承擔、帶有", 
                forms: "bears / bore / borne",
                examples: [
                    "I cannot bear to see him suffer.",
                    "The company will bear all the costs of the trip."
                ]
            }
        ]
    },
    {
        en: "Behavior",
        phonetic: "[bɪˋhevjɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "行為、舉止", 
                examples: [
                    "His behavior at the party was unacceptable.",
                    "We study consumer behavior to improve sales."
                ]
            }
        ]
    },
    {
        en: "Belong",
        phonetic: "[bəˋlɔŋ]",
        details: [
            { 
                pos: "v.", 
                cn: "屬於、適合", 
                forms: "belongs / belonged / belonged",
                examples: [
                    "This book belongs to the library.",
                    "I feel like I don't belong here."
                ]
            }
        ]
    },
    {
        en: "Beneficial",
        phonetic: "[͵bɛnəˋfɪʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "有益的、有利的", 
                examples: [
                    "Regular exercise is beneficial to your health.",
                    "The agreement will be mutually beneficial for both parties."
                ]
            }
        ]
    },
    {
        en: "Benefit",
        phonetic: "[ˋbɛnəfɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "利益、津貼(福利)", 
                examples: [
                    "The employee benefits package includes health insurance.",
                    "Tourism has brought many benefits to the region."
                ]
            },
            { 
                pos: "v.", 
                cn: "有益於、獲益", 
                forms: "benefits / benefited / benefited",
                examples: [
                    "The new policy will benefit all staff members.",
                    "Many students benefited from the new scholarship program."
                ]
            }
        ]
    },
    {
        en: "Bid",
        phonetic: "[bɪd]",
        details: [
            { 
                pos: "n.", 
                cn: "出價、投標", 
                examples: [
                    "We put in a bid for the new stadium contract.",
                    "The highest bid at the auction was $5,000."
                ]
            },
            { 
                pos: "v.", 
                cn: "出價、競標", 
                forms: "bids / bid / bid",
                examples: [
                    "Three companies bid for the construction project.",
                    "She bid $100 for the antique vase."
                ]
            }
        ]
    },
    {
        en: "Bill",
        phonetic: "[bɪl]",
        details: [
            { 
                pos: "n.", 
                cn: "帳單、法案、鈔票", 
                examples: [
                    "Could we have the bill, please?",
                    "The senate passed the new energy bill."
                ]
            },
            { 
                pos: "v.", 
                cn: "開帳單", 
                forms: "bills / billed / billed",
                examples: [
                    "Please bill me for the expenses.",
                    "You will be billed monthly for the service."
                ]
            }
        ]
    },
    {
        en: "Board",
        phonetic: "[bord]",
        details: [
            { 
                pos: "n.", 
                cn: "董事會、木板", 
                examples: [
                    "The board of directors will meet tomorrow.",
                    "He wrote the notice on the bulletin board."
                ]
            },
            { 
                pos: "v.", 
                cn: "登機、上船", 
                forms: "boards / boarded / boarded",
                examples: [
                    "Passengers are now boarding at Gate 5.",
                    "We boarded the train just in time."
                ]
            }
        ]
    },
    {
        en: "Boost",
        phonetic: "[bust]",
        details: [
            { 
                pos: "v.", 
                cn: "促進、增加、舉起", 
                forms: "boosts / boosted / boosted",
                examples: [
                    "The new campaign is designed to boost sales.",
                    "Compliments can boost someone's confidence."
                ]
            },
            { 
                pos: "n.", 
                cn: "推進、增長", 
                examples: [
                    "The tax cut provided a boost to the economy.",
                    "He gave me a boost to get over the fence."
                ]
            }
        ]
    },
    {
        en: "Borrow",
        phonetic: "[ˋbɑro]",
        details: [
            { 
                pos: "v.", 
                cn: "借入", 
                forms: "borrows / borrowed / borrowed",
                examples: [
                    "Can I borrow your pen for a moment?",
                    "He borrowed a large sum of money from the bank."
                ]
            }
        ]
    },
    {
        en: "Bottom",
        phonetic: "[ˋbɑtəm]",
        details: [
            { 
                pos: "n.", 
                cn: "底部、盡頭", 
                examples: [
                    "The price is listed at the bottom of the page.",
                    "We need to get to the bottom of this mystery."
                ]
            },
            { 
                pos: "adj.", 
                cn: "底部的", 
                examples: [
                    "The bottom drawer is locked.",
                    "What is the bottom line for this quarter?"
                ]
            }
        ]
    },
    {
        en: "Branch",
        phonetic: "[bræntʃ]",
        details: [
            { 
                pos: "n.", 
                cn: "分公司、樹枝、支流", 
                examples: [
                    "Our bank has a branch in every major city.",
                    "The company is opening a new branch in Tokyo."
                ]
            }
        ]
    },
    {
        en: "Brand",
        phonetic: "[brænd]",
        details: [
            { 
                pos: "n.", 
                cn: "品牌、商標", 
                examples: [
                    "This is a well-known luxury brand.",
                    "Brand loyalty is important for long-term success."
                ]
            }
        ]
    },{
        en: "Breach",
        phonetic: "[britʃ]",
        details: [
            { 
                pos: "n.", 
                cn: "違犯、破壞、缺口", 
                examples: [
                    "This is a clear breach of contract.",
                    "A security breach allowed hackers to access the data."
                ]
            },
            { 
                pos: "v.", 
                cn: "違反、突破", 
                forms: "breaches / breached / breached",
                examples: [
                    "The company was accused of breaching safety regulations.",
                    "The river breached its banks and flooded the town."
                ]
            }
        ]
    },
    {
        en: "Breakdown",
        phonetic: "[ˋbrek͵daʊn]",
        details: [
            { 
                pos: "n.", 
                cn: "故障、崩潰、詳細分析", 
                examples: [
                    "The car suffered a mechanical breakdown on the highway.",
                    "Can you give me a breakdown of the costs?"
                ]
            }
        ]
    },
    {
        en: "Brief",
        phonetic: "[brif]",
        details: [
            { 
                pos: "adj.", 
                cn: "簡短的", 
                examples: [
                    "Please keep your report brief and to the point.",
                    "We had a brief meeting this morning."
                ]
            },
            { 
                pos: "v.", 
                cn: "做簡報、向...說明", 
                forms: "briefs / briefed / briefed",
                examples: [
                    "The manager briefed the team on the new project.",
                    "I need to be briefed on the situation before the press conference."
                ]
            }
        ]
    },
    {
        en: "Broad",
        phonetic: "[brɔd]",
        details: [
            { 
                pos: "adj.", 
                cn: "寬廣的、概括的", 
                examples: [
                    "The company has a broad range of products.",
                    "We reached a broad agreement on the main issues."
                ]
            }
        ]
    },
    {
        en: "Broadcast",
        phonetic: "[ˋbrɔd͵kæst]",
        details: [
            { 
                pos: "v.", 
                cn: "廣播、播送", 
                forms: "broadcasts / broadcast / broadcast",
                examples: [
                    "The interview will be broadcast live tonight.",
                    "They broadcast the news to the whole nation."
                ]
            },
            { 
                pos: "n.", 
                cn: "廣播節目", 
                examples: [
                    "We listened to the radio broadcast.",
                    "The evening news broadcast starts at 6 PM."
                ]
            }
        ]
    },
    {
        en: "Brochure",
        phonetic: "[broˋʃʊr]",
        details: [
            { 
                pos: "n.", 
                cn: "小冊子", 
                examples: [
                    "Please read the travel brochure for more information.",
                    "We distributed brochures at the trade show."
                ]
            }
        ]
    },
    {
        en: "Broker",
        phonetic: "[ˋbrokɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "經紀人、仲介", 
                examples: [
                    "We hired a real estate broker to sell our house.",
                    "An insurance broker can help you find the best policy."
                ]
            }
        ]
    },
    {
        en: "Budget",
        phonetic: "[ˋbʌdʒɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "預算", 
                examples: [
                    "We have a limited budget for advertising.",
                    "The project was completed within budget."
                ]
            },
            { 
                pos: "v.", 
                cn: "編列預算", 
                forms: "budgets / budgeted / budgeted",
                examples: [
                    "You need to budget carefully for the upcoming trip.",
                    "The company has budgeted $1 million for research."
                ]
            }
        ]
    },
    {
        en: "Bulletin",
        phonetic: "[ˋbʊlətɪn]",
        details: [
            { 
                pos: "n.", 
                cn: "公告、快報", 
                examples: [
                    "Check the bulletin board for job postings.",
                    "A news bulletin interrupted the regular program."
                ]
            }
        ]
    },
    {
        en: "Burden",
        phonetic: "[ˋbɝdn]",
        details: [
            { 
                pos: "n.", 
                cn: "負擔、重擔", 
                examples: [
                    "High taxes are a burden on small businesses.",
                    "I don't want to be a burden to my family."
                ]
            }
        ]
    },
    {
        en: "Cabinet",
        phonetic: "[ˋkæbənɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "櫃子、內閣", 
                examples: [
                    "The files are stored in the filing cabinet.",
                    "The President met with his Cabinet members."
                ]
            }
        ]
    },
    {
        en: "Calculate",
        phonetic: "[ˋkælkjə͵let]",
        details: [
            { 
                pos: "v.", 
                cn: "計算、估計", 
                forms: "calculates / calculated / calculated",
                examples: [
                    "We need to calculate the total cost of the trip.",
                    "It is difficult to calculate the impact of the new policy."
                ]
            }
        ]
    },
    {
        en: "Campaign",
        phonetic: "[kæmˋpen]",
        details: [
            { 
                pos: "n.", 
                cn: "活動、競選活動", 
                examples: [
                    "The marketing campaign was very successful.",
                    "They launched a campaign to raise awareness."
                ]
            }
        ]
    },
    {
        en: "Cancel",
        phonetic: "[ˋkæns!]",
        details: [
            { 
                pos: "v.", 
                cn: "取消", 
                forms: "cancels / canceled / canceled",
                examples: [
                    "I have to cancel our appointment tomorrow.",
                    "The flight was canceled due to heavy snow."
                ]
            }
        ]
    },
    {
        en: "Candidate",
        phonetic: "[ˋkændədet]",
        details: [
            { 
                pos: "n.", 
                cn: "候選人、應徵者", 
                examples: [
                    "She is the best candidate for the job.",
                    "Three candidates are running for mayor."
                ]
            }
        ]
    },
    {
        en: "Capacity",
        phonetic: "[kəˋpæsətɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "容量、能力、職位", 
                examples: [
                    "The stadium has a seating capacity of 50,000.",
                    "He acted in his capacity as legal advisor."
                ]
            }
        ]
    },
    {
        en: "Capital",
        phonetic: "[ˋkæpət!]",
        details: [
            { 
                pos: "n.", 
                cn: "資金、首都、大寫字母", 
                examples: [
                    "They lack the capital to expand the business.",
                    "Paris is the capital of France."
                ]
            }
        ]
    },
    {
        en: "Career",
        phonetic: "[kəˋrɪr]",
        details: [
            { 
                pos: "n.", 
                cn: "職業生涯", 
                examples: [
                    "She wants to pursue a career in medicine.",
                    "He spent his entire career at the same company."
                ]
            }
        ]
    },
    {
        en: "Cargo",
        phonetic: "[ˋkɑrgo]",
        details: [
            { 
                pos: "n.", 
                cn: "貨物(船或飛機裝載的)", 
                examples: [
                    "The ship was carrying a cargo of oil.",
                    "Cargo planes are used to transport goods quickly."
                ]
            }
        ]
    },
    {
        en: "Casual",
        phonetic: "[ˋkæʒʊəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "非正式的、休閒的、偶然的", 
                examples: [
                    "The dress code for the party is casual.",
                    "He works as a casual laborer on the farm."
                ]
            }
        ]
    },{
        en: "Category",
        phonetic: "[ˋkætə͵gorɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "種類、類別", 
                examples: [
                    "The results are divided into three main categories.",
                    "This product belongs to the luxury goods category."
                ]
            }
        ]
    },
    {
        en: "Cause",
        phonetic: "[kɔz]",
        details: [
            { 
                pos: "n.", 
                cn: "原因、理由", 
                examples: [
                    "The police are investigating the cause of the accident.",
                    "There is no cause for alarm."
                ]
            },
            { 
                pos: "v.", 
                cn: "造成、導致", 
                forms: "causes / caused / caused",
                examples: [
                    "The heavy rain caused a flood in the city.",
                    "Careless driving often causes accidents."
                ]
            }
        ]
    },
    {
        en: "Caution",
        phonetic: "[ˋkɔʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "謹慎、小心", 
                examples: [
                    "You should proceed with caution.",
                    "He drove with extreme caution on the icy road."
                ]
            },
            { 
                pos: "v.", 
                cn: "警告、告誡", 
                forms: "cautions / cautioned / cautioned",
                examples: [
                    "The sign cautions drivers to slow down.",
                    "I cautioned him against making a hasty decision."
                ]
            }
        ]
    },
    {
        en: "Cease",
        phonetic: "[sis]",
        details: [
            { 
                pos: "v.", 
                cn: "停止、終止", 
                forms: "ceases / ceased / ceased",
                examples: [
                    "The factory has ceased operations.",
                    "The rain ceased, and the sun came out."
                ]
            }
        ]
    },
    {
        en: "Celebrate",
        phonetic: "[ˋsɛlə͵bret]",
        details: [
            { 
                pos: "v.", 
                cn: "慶祝", 
                forms: "celebrates / celebrated / celebrated",
                examples: [
                    "We are going out to celebrate my promotion.",
                    "The company celebrated its 50th anniversary last month."
                ]
            }
        ]
    },
    {
        en: "Certain",
        phonetic: "[ˋsɝtən]",
        details: [
            { 
                pos: "adj.", 
                cn: "肯定的、某個", 
                examples: [
                    "I am certain that he will come.",
                    "Certain conditions must be met before signing the contract."
                ]
            }
        ]
    },
    {
        en: "Certificate",
        phonetic: "[sɚˋtɪfəkɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "證書、證明", 
                examples: [
                    "You will receive a certificate upon completion of the course.",
                    "A birth certificate is required for the application."
                ]
            }
        ]
    },
    {
        en: "Chain",
        phonetic: "[tʃen]",
        details: [
            { 
                pos: "n.", 
                cn: "連鎖店、鏈條", 
                examples: [
                    "She owns a chain of restaurants across the country.",
                    "The bicycle chain needs to be oiled."
                ]
            }
        ]
    },
    {
        en: "Challenge",
        phonetic: "[ˋtʃælɪndʒ]",
        details: [
            { 
                pos: "n.", 
                cn: "挑戰", 
                examples: [
                    "He is ready to face a new challenge.",
                    "Finding a parking space is always a challenge here."
                ]
            },
            { 
                pos: "v.", 
                cn: "向...挑戰、質疑", 
                forms: "challenges / challenged / challenged",
                examples: [
                    "I challenged him to a game of tennis.",
                    "She challenged the accuracy of the report."
                ]
            }
        ]
    },
    {
        en: "Chamber",
        phonetic: "[ˋtʃembɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "會議室、商會", 
                examples: [
                    "The local Chamber of Commerce helps small businesses.",
                    "The council meets in the council chamber."
                ]
            }
        ]
    },
    {
        en: "Character",
        phonetic: "[ˋkærɪktɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "個性、特徵、角色", 
                examples: [
                    "He is a man of strong character.",
                    "The main character in the movie is very funny."
                ]
            }
        ]
    },
    {
        en: "Charge",
        phonetic: "[tʃɑrdʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "收費、充電、控告", 
                forms: "charges / charged / charged",
                examples: [
                    "The hotel charges $100 per night.",
                    "I need to charge my phone."
                ]
            },
            { 
                pos: "n.", 
                cn: "費用、掌管", 
                examples: [
                    "Is there a service charge?",
                    "Who is in charge of this project?"
                ]
            }
        ]
    },
    {
        en: "Charity",
        phonetic: "[ˋtʃærətɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "慈善機構、仁慈", 
                examples: [
                    "All proceeds will go to a local charity.",
                    "She is involved in several charity events."
                ]
            }
        ]
    },
    {
        en: "Chart",
        phonetic: "[tʃɑrt]",
        details: [
            { 
                pos: "n.", 
                cn: "圖表", 
                examples: [
                    "The chart shows the sales figures for this year.",
                    "Please refer to the organizational chart."
                ]
            }
        ]
    },
    {
        en: "Check",
        phonetic: "[tʃɛk]",
        details: [
            { 
                pos: "v.", 
                cn: "檢查、核對", 
                forms: "checks / checked / checked",
                examples: [
                    "Please check your email for the confirmation.",
                    "We need to check the inventory list."
                ]
            },
            { 
                pos: "n.", 
                cn: "支票、帳單、檢查", 
                examples: [
                    "I will pay by check.",
                    "Can we have the check, please?"
                ]
            }
        ]
    },
    {
        en: "Chef",
        phonetic: "[ʃɛf]",
        details: [
            { 
                pos: "n.", 
                cn: "主廚", 
                examples: [
                    "He is the head chef at a five-star hotel.",
                    "The chef recommends the seafood pasta."
                ]
            }
        ]
    },
    {
        en: "Chemical",
        phonetic: "[ˋkɛmɪk!]",
        details: [
            { 
                pos: "n.", 
                cn: "化學物質", 
                examples: [
                    "Toxic chemicals were found in the water.",
                    "Handle these chemicals with care."
                ]
            },
            { 
                pos: "adj.", 
                cn: "化學的", 
                examples: [
                    "A chemical reaction occurred when the liquids were mixed.",
                    "They are studying chemical engineering."
                ]
            }
        ]
    },
    {
        en: "Chief",
        phonetic: "[tʃif]",
        details: [
            { 
                pos: "adj.", 
                cn: "主要的、首席的", 
                examples: [
                    "The chief reason for his resignation was health.",
                    "She is the Chief Executive Officer (CEO)."
                ]
            },
            { 
                pos: "n.", 
                cn: "首領", 
                examples: [
                    "He is the police chief of this town.",
                    "The tribe has a new chief."
                ]
            }
        ]
    },
    {
        en: "Choice",
        phonetic: "[tʃɔɪs]",
        details: [
            { 
                pos: "n.", 
                cn: "選擇", 
                examples: [
                    "You have no other choice but to accept.",
                    "It was a difficult choice to make."
                ]
            }
        ]
    },
    {
        en: "Choose",
        phonetic: "[tʃuz]",
        details: [
            { 
                pos: "v.", 
                cn: "選擇", 
                forms: "chooses / chose / chosen",
                examples: [
                    "Please choose a password for your account.",
                    "She was chosen to lead the team."
                ]
            }
        ]
    },{
        en: "Chronic",
        phonetic: "[ˋkrɑnɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "慢性的、長期的", 
                examples: [
                    "He suffers from chronic back pain.",
                    "There is a chronic shortage of housing in the city."
                ]
            }
        ]
    },
    {
        en: "Circumstance",
        phonetic: "[ˋsɝkəm͵stæns]",
        details: [
            { 
                pos: "n.", 
                cn: "情況、環境", 
                examples: [
                    "Under no circumstances should you open this door.",
                    "Due to unforeseen circumstances, the event is cancelled."
                ]
            }
        ]
    },
    {
        en: "Cite",
        phonetic: "[saɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "引用、舉證、傳喚", 
                forms: "cites / cited / cited",
                examples: [
                    "The author cites several studies to support his argument.",
                    "He was cited for reckless driving."
                ]
            }
        ]
    },
    {
        en: "Claim",
        phonetic: "[klem]",
        details: [
            { 
                pos: "v.", 
                cn: "宣稱、索賠、認領", 
                forms: "claims / claimed / claimed",
                examples: [
                    "He claims to have met the president.",
                    "You can claim travel expenses for business trips."
                ]
            },
            { 
                pos: "n.", 
                cn: "索賠、聲稱", 
                examples: [
                    "She filed an insurance claim after the accident.",
                    "His claim to the property is being disputed."
                ]
            }
        ]
    },
    {
        en: "Clarify",
        phonetic: "[ˋklærə͵faɪ]",
        details: [
            { 
                pos: "v.", 
                cn: "澄清、闡明", 
                forms: "clarifies / clarified / clarified",
                examples: [
                    "Could you please clarify your last point?",
                    "The memo was sent to clarify the new policy."
                ]
            }
        ]
    },
    {
        en: "Clause",
        phonetic: "[klɔz]",
        details: [
            { 
                pos: "n.", 
                cn: "條款、子句", 
                examples: [
                    "Please read the confidentiality clause carefully.",
                    "There is a penalty clause in the contract."
                ]
            }
        ]
    },
    {
        en: "Clearance",
        phonetic: "[ˋklɪrəns]",
        details: [
            { 
                pos: "n.", 
                cn: "清倉、許可、間隙", 
                examples: [
                    "We are having a clearance sale this weekend.",
                    "You need security clearance to enter this area."
                ]
            }
        ]
    },
    {
        en: "Clerk",
        phonetic: "[klɝk]",
        details: [
            { 
                pos: "n.", 
                cn: "店員、辦事員", 
                examples: [
                    "The hotel clerk handed me the room key.",
                    "She works as a filing clerk in a law firm."
                ]
            }
        ]
    },
    {
        en: "Client",
        phonetic: "[ˋklaɪənt]",
        details: [
            { 
                pos: "n.", 
                cn: "客戶、委託人", 
                examples: [
                    "We have a meeting with a potential client tomorrow.",
                    "The lawyer advised his client not to speak."
                ]
            }
        ]
    },
    {
        en: "Climate",
        phonetic: "[ˋklaɪmɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "氣候、局勢", 
                examples: [
                    "The current economic climate is favorable for investment.",
                    "We need to protect our climate from global warming."
                ]
            }
        ]
    },
    {
        en: "Clinic",
        phonetic: "[ˋklɪnɪk]",
        details: [
            { 
                pos: "n.", 
                cn: "診所", 
                examples: [
                    "He went to a dental clinic for a check-up.",
                    "The community clinic offers free vaccinations."
                ]
            }
        ]
    },
    {
        en: "Closure",
        phonetic: "[ˋkloʒɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "關閉、終止", 
                examples: [
                    "The road closure caused heavy traffic.",
                    "The factory closure resulted in many job losses."
                ]
            }
        ]
    },
    {
        en: "Code",
        phonetic: "[kod]",
        details: [
            { 
                pos: "n.", 
                cn: "法規、代碼、規範", 
                examples: [
                    "The building must meet the new safety code.",
                    "Employees must follow the dress code."
                ]
            }
        ]
    },
    {
        en: "Coincide",
        phonetic: "[͵koɪnˋsaɪd]",
        details: [
            { 
                pos: "v.", 
                cn: "同時發生、相符", 
                forms: "coincides / coincided / coincided",
                examples: [
                    "My vacation coincides with the conference.",
                    "His statement does not coincide with the facts."
                ]
            }
        ]
    },
    {
        en: "Collaborate",
        phonetic: "[kəˋlæbə͵ret]",
        details: [
            { 
                pos: "v.", 
                cn: "合作、協作", 
                forms: "collaborates / collaborated / collaborated",
                examples: [
                    "Two companies collaborated on the project.",
                    "We look forward to collaborating with you."
                ]
            }
        ]
    },
    {
        en: "Collapse",
        phonetic: "[kəˋlæps]",
        details: [
            { 
                pos: "v.", 
                cn: "倒塌、崩潰", 
                forms: "collapses / collapsed / collapsed",
                examples: [
                    "The roof collapsed under the weight of the snow.",
                    "The negotiations collapsed at the last minute."
                ]
            },
            { 
                pos: "n.", 
                cn: "倒塌、暴跌", 
                examples: [
                    "The sudden collapse of the stock market shocked everyone.",
                    "He suffered a nervous collapse due to stress."
                ]
            }
        ]
    },
    {
        en: "Collection",
        phonetic: "[kəˋlɛkʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "收集、收藏品、收款", 
                examples: [
                    "He has a large collection of stamps.",
                    "The garbage collection is on Tuesdays."
                ]
            }
        ]
    },
    {
        en: "Collective",
        phonetic: "[kəˋlɛktɪv]",
        details: [
            { 
                pos: "adj.", 
                cn: "集體的、共同的", 
                examples: [
                    "It was a collective decision made by the team.",
                    "Employees have the right to collective bargaining."
                ]
            }
        ]
    },
    {
        en: "Combine",
        phonetic: "[kəmˋbaɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "結合、合併", 
                forms: "combines / combined / combined",
                examples: [
                    "The two firms combined to form a larger corporation.",
                    "This recipe combines sweet and sour flavors."
                ]
            }
        ]
    },
    {
        en: "Comfort",
        phonetic: "[ˋkʌmfɚt]",
        details: [
            { 
                pos: "n.", 
                cn: "舒適、安慰", 
                examples: [
                    "This chair provides excellent back comfort.",
                    "His words brought me some comfort."
                ]
            },
            { 
                pos: "v.", 
                cn: "安慰", 
                forms: "comforts / comforted / comforted",
                examples: [
                    "She tried to comfort the crying child.",
                    "We were comforted by the news of his recovery."
                ]
            }
        ]
    },{
        en: "Command",
        phonetic: "[kəˋmænd]",
        details: [
            { 
                pos: "v.", 
                cn: "命令、指揮、俯瞰", 
                forms: "commands / commanded / commanded",
                examples: [
                    "The general commanded the troops to advance.",
                    "The hotel commands a fine view of the valley."
                ]
            },
            { 
                pos: "n.", 
                cn: "命令、指揮權、運用能力", 
                examples: [
                    "He has a good command of the English language.",
                    "The soldiers are under his command."
                ]
            }
        ]
    },
    {
        en: "Commence",
        phonetic: "[kəˋmɛns]",
        details: [
            { 
                pos: "v.", 
                cn: "開始、著手", 
                forms: "commences / commenced / commenced",
                examples: [
                    "The meeting is scheduled to commence at 9:00 AM.",
                    "Construction work commenced last month."
                ]
            }
        ]
    },
    {
        en: "Commercial",
        phonetic: "[kəˋmɝʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "商業的、營利的", 
                examples: [
                    "The new district is zoned for commercial use.",
                    "The movie was a huge commercial success."
                ]
            },
            { 
                pos: "n.", 
                cn: "商業廣告", 
                examples: [
                    "I saw a funny commercial on TV last night.",
                    "TV commercials can be very expensive."
                ]
            }
        ]
    },
    {
        en: "Commission",
        phonetic: "[kəˋmɪʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "佣金、委員會", 
                examples: [
                    "She receives a 10% commission on every sale.",
                    "A special commission was set up to investigate the case."
                ]
            },
            { 
                pos: "v.", 
                cn: "委任、委託製作", 
                forms: "commissions / commissioned / commissioned",
                examples: [
                    "The artist was commissioned to paint a portrait of the mayor.",
                    "The report was commissioned by the government."
                ]
            }
        ]
    },
    {
        en: "Commit",
        phonetic: "[kəˋmɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "承諾、犯罪、致力於", 
                forms: "commits / committed / committed",
                examples: [
                    "We are committed to providing the best service.",
                    "He committed a serious error in judgment."
                ]
            }
        ]
    },
    {
        en: "Committee",
        phonetic: "[kəˋmɪtɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "委員會", 
                examples: [
                    "The budget committee meets every Tuesday.",
                    "She is a member of the planning committee."
                ]
            }
        ]
    },
    {
        en: "Communicate",
        phonetic: "[kəˋmjunə͵ket]",
        details: [
            { 
                pos: "v.", 
                cn: "溝通、傳達", 
                forms: "communicates / communicated / communicated",
                examples: [
                    "We need to communicate our ideas clearly.",
                    "Computers allow us to communicate with people globally."
                ]
            }
        ]
    },
    {
        en: "Commute",
        phonetic: "[kəˋmjut]",
        details: [
            { 
                pos: "v.", 
                cn: "通勤", 
                forms: "commutes / commuted / commuted",
                examples: [
                    "He commutes to London by train every day.",
                    "Many people commute long distances to work."
                ]
            },
            { 
                pos: "n.", 
                cn: "通勤路程", 
                examples: [
                    "My daily commute takes about 45 minutes.",
                    "She uses the time during her commute to read."
                ]
            }
        ]
    },
    {
        en: "Comparable",
        phonetic: "[ˋkɑmpərəb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "可比較的、比得上的", 
                examples: [
                    "The two products are comparable in quality.",
                    "Sales figures this year are comparable to last year's."
                ]
            }
        ]
    },
    {
        en: "Compatible",
        phonetic: "[kəmˋpætəb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "相容的、合得來的", 
                examples: [
                    "This software is not compatible with my computer.",
                    "They are a very compatible couple."
                ]
            }
        ]
    },
    {
        en: "Compensate",
        phonetic: "[ˋkɑmpən͵set]",
        details: [
            { 
                pos: "v.", 
                cn: "補償、賠償", 
                forms: "compensates / compensated / compensated",
                examples: [
                    "Victims will be compensated for their injuries.",
                    "Hard work can sometimes compensate for a lack of experience."
                ]
            }
        ]
    },
    {
        en: "Compete",
        phonetic: "[kəmˋpit]",
        details: [
            { 
                pos: "v.", 
                cn: "競爭、比賽", 
                forms: "competes / competed / competed",
                examples: [
                    "Several companies are competing for the contract.",
                    "Small businesses often struggle to compete with large corporations."
                ]
            }
        ]
    },
    {
        en: "Competent",
        phonetic: "[ˋkɑmpətənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "有能力的、勝任的", 
                examples: [
                    "She is a highly competent administrative assistant.",
                    "He is not competent to drive a heavy truck."
                ]
            }
        ]
    },
    {
        en: "Competition",
        phonetic: "[͵kɑmpəˋtɪʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "競爭、比賽", 
                examples: [
                    "There is fierce competition in the smartphone market.",
                    "He won first prize in the photography competition."
                ]
            }
        ]
    },
    {
        en: "Competitive",
        phonetic: "[kəmˋpɛtətɪv]",
        details: [
            { 
                pos: "adj.", 
                cn: "有競爭力的、好勝的", 
                examples: [
                    "We offer competitive salaries and benefits.",
                    "The market for skilled workers is highly competitive."
                ]
            }
        ]
    },
    {
        en: "Compile",
        phonetic: "[kəmˋpaɪl]",
        details: [
            { 
                pos: "v.", 
                cn: "彙編、收集(資料)", 
                forms: "compiles / compiled / compiled",
                examples: [
                    "We are compiling a list of potential clients.",
                    "It takes time to compile all the necessary data."
                ]
            }
        ]
    },
    {
        en: "Complain",
        phonetic: "[kəmˋplen]",
        details: [
            { 
                pos: "v.", 
                cn: "抱怨、投訴", 
                forms: "complains / complained / complained",
                examples: [
                    "Customers complained about the slow service.",
                    "He never complains about working late."
                ]
            }
        ]
    },
    {
        en: "Complaint",
        phonetic: "[kəmˋplent]",
        details: [
            { 
                pos: "n.", 
                cn: "抱怨、投訴", 
                examples: [
                    "We have received several complaints from neighbors.",
                    "Please file a formal complaint with the manager."
                ]
            }
        ]
    },
    {
        en: "Complete",
        phonetic: "[kəmˋplit]",
        details: [
            { 
                pos: "adj.", 
                cn: "完整的、完成的", 
                examples: [
                    "Please ensure the application form is complete.",
                    "The project is now complete."
                ]
            },
            { 
                pos: "v.", 
                cn: "完成", 
                forms: "completes / completed / completed",
                examples: [
                    "They completed the building ahead of schedule.",
                    "You need to complete this section of the test."
                ]
            }
        ]
    },
    {
        en: "Complex",
        phonetic: "[ˋkɑmplɛks]",
        details: [
            { 
                pos: "adj.", 
                cn: "複雜的", 
                examples: [
                    "The instructions are too complex to follow.",
                    "This is a complex issue with no easy solution."
                ]
            },
            { 
                pos: "n.", 
                cn: "綜合大樓、複合體", 
                examples: [
                    "They are building a new sports complex nearby.",
                    "The industrial complex is located outside the city."
                ]
            }
        ]
    },{
        en: "Compliment",
        phonetic: "[ˋkɑmpləmənt]",
        details: [
            { 
                pos: "n.", 
                cn: "讚美、恭維", 
                examples: [
                    "He paid her a nice compliment on her presentation.",
                    "Thank you for the compliment."
                ]
            },
            { 
                pos: "v.", 
                cn: "讚美", 
                forms: "compliments / complimented / complimented",
                examples: [
                    "She complimented the chef on the delicious meal.",
                    "I must compliment you on your handling of the situation."
                ]
            }
        ]
    },
    {
        en: "Comply",
        phonetic: "[kəmˋplaɪ]",
        details: [
            { 
                pos: "v.", 
                cn: "遵守、順從", 
                forms: "complies / complied / complied",
                examples: [
                    "All employees must comply with safety regulations.",
                    "Failure to comply may result in a fine."
                ]
            }
        ]
    },
    {
        en: "Component",
        phonetic: "[kəmˋponənt]",
        details: [
            { 
                pos: "n.", 
                cn: "零件、成分", 
                examples: [
                    "Trust is a vital component of any relationship.",
                    "We source electronic components from various suppliers."
                ]
            }
        ]
    },
    {
        en: "Compose",
        phonetic: "[kəmˋpoz]",
        details: [
            { 
                pos: "v.", 
                cn: "組成、作曲、撰寫", 
                forms: "composes / composed / composed",
                examples: [
                    "The committee is composed of ten members.",
                    "He composed a thoughtful email to the client."
                ]
            }
        ]
    },
    {
        en: "Comprehensive",
        phonetic: "[͵kɑmpriˋhɛnsɪv]",
        details: [
            { 
                pos: "adj.", 
                cn: "全面的、詳盡的", 
                examples: [
                    "We offer a comprehensive range of services.",
                    "He took out a comprehensive car insurance policy."
                ]
            }
        ]
    },
    {
        en: "Compromise",
        phonetic: "[ˋkɑmprə͵maɪz]",
        details: [
            { 
                pos: "n.", 
                cn: "妥協、折衷", 
                examples: [
                    "We reached a compromise after hours of negotiation.",
                    "A compromise is better than a conflict."
                ]
            },
            { 
                pos: "v.", 
                cn: "妥協、讓步", 
                forms: "compromises / compromised / compromised",
                examples: [
                    "Neither side is willing to compromise.",
                    "We cannot compromise on safety standards."
                ]
            }
        ]
    },
    {
        en: "Compulsory",
        phonetic: "[kəmˋpʌlsərɪ]",
        details: [
            { 
                pos: "adj.", 
                cn: "義務的、強制的", 
                examples: [
                    "Wearing seat belts is compulsory.",
                    "English is a compulsory subject in many schools."
                ]
            }
        ]
    },
    {
        en: "Concede",
        phonetic: "[kənˋsid]",
        details: [
            { 
                pos: "v.", 
                cn: "承認、讓步", 
                forms: "concedes / conceded / conceded",
                examples: [
                    "He conceded that he had made a mistake.",
                    "The candidate conceded defeat in the election."
                ]
            }
        ]
    },
    {
        en: "Concentrate",
        phonetic: "[ˋkɑnsɛn͵tret]",
        details: [
            { 
                pos: "v.", 
                cn: "專注、集中", 
                forms: "concentrates / concentrated / concentrated",
                examples: [
                    "I can't concentrate with all that noise.",
                    "We need to concentrate our efforts on improving quality."
                ]
            }
        ]
    },
    {
        en: "Concern",
        phonetic: "[kənˋsɝn]",
        details: [
            { 
                pos: "n.", 
                cn: "擔憂、關注的事", 
                examples: [
                    "There is growing concern about climate change.",
                    "Customer satisfaction is our main concern."
                ]
            },
            { 
                pos: "v.", 
                cn: "使擔憂、涉及", 
                forms: "concerns / concerned / concerned",
                examples: [
                    "The report's findings concern me deeply.",
                    "This matter concerns everyone in the office."
                ]
            }
        ]
    },
    {
        en: "Concert",
        phonetic: "[ˋkɑnsɚt]",
        details: [
            { 
                pos: "n.", 
                cn: "音樂會、演唱會", 
                examples: [
                    "We bought tickets for the rock concert.",
                    "The band will perform a live concert in London."
                ]
            }
        ]
    },
    {
        en: "Conclude",
        phonetic: "[kənˋklud]",
        details: [
            { 
                pos: "v.", 
                cn: "下結論、結束", 
                forms: "concludes / concluded / concluded",
                examples: [
                    "The report concluded that the plan was feasible.",
                    "The meeting concluded with a speech by the chairman."
                ]
            }
        ]
    },
    {
        en: "Conclusion",
        phonetic: "[kənˋkluʒən]",
        details: [
            { 
                pos: "n.", 
                cn: "結論、結局", 
                examples: [
                    "We came to the conclusion that we need more staff.",
                    "In conclusion, I would like to thank everyone."
                ]
            }
        ]
    },
    {
        en: "Concrete",
        phonetic: "[ˋkɑnkrit]",
        details: [
            { 
                pos: "adj.", 
                cn: "具體的、混凝土的", 
                examples: [
                    "We need concrete evidence before we can proceed.",
                    "The building is made of reinforced concrete."
                ]
            },
            { 
                pos: "n.", 
                cn: "混凝土", 
                examples: [
                    "The sidewalk is made of concrete.",
                    "Fresh concrete was poured for the foundation."
                ]
            }
        ]
    },
    {
        en: "Condition",
        phonetic: "[kənˋdɪʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "狀況、條件", 
                examples: [
                    "The car is in excellent condition.",
                    "He agreed to the terms and conditions of the contract."
                ]
            }
        ]
    },
    {
        en: "Conduct",
        phonetic: "[kənˋdʌkt]",
        details: [
            { 
                pos: "v.", 
                cn: "執行、指揮、傳導", 
                forms: "conducts / conducted / conducted",
                examples: [
                    "We conducted a survey to gauge customer satisfaction.",
                    "Copper conducts electricity very well."
                ]
            },
            { 
                pos: "n.", 
                cn: "行為、品行", 
                examples: [
                    "His conduct during the meeting was unprofessional.",
                    "The school has a strict code of conduct."
                ]
            }
        ]
    },
    {
        en: "Conference",
        phonetic: "[ˋkɑnfərəns]",
        details: [
            { 
                pos: "n.", 
                cn: "會議、研討會", 
                examples: [
                    "The annual sales conference will be held in Chicago.",
                    "She was a keynote speaker at the conference."
                ]
            }
        ]
    },
    {
        en: "Confess",
        phonetic: "[kənˋfɛs]",
        details: [
            { 
                pos: "v.", 
                cn: "承認、坦白", 
                forms: "confesses / confessed / confessed",
                examples: [
                    "He confessed to stealing the money.",
                    "I must confess that I don't know the answer."
                ]
            }
        ]
    },
    {
        en: "Confidence",
        phonetic: "[ˋkɑnfədəns]",
        details: [
            { 
                pos: "n.", 
                cn: "信心、信任", 
                examples: [
                    "I have full confidence in your ability to succeed.",
                    "The lack of experience shook his confidence."
                ]
            }
        ]
    },
    {
        en: "Confidential",
        phonetic: "[͵kɑnfəˋdɛnʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "機密的", 
                examples: [
                    "Please keep these documents confidential.",
                    "All client information is treated as strictly confidential."
                ]
            }
        ]
    },{
        en: "Confirm",
        phonetic: "[kənˋfɝm]",
        details: [
            { 
                pos: "v.", 
                cn: "確認、證實", 
                forms: "confirms / confirmed / confirmed",
                examples: [
                    "Please confirm your reservation by email.",
                    "The report confirmed our worst fears."
                ]
            }
        ]
    },
    {
        en: "Conflict",
        phonetic: "[ˋkɑnflɪkt]",
        details: [
            { 
                pos: "n.", 
                cn: "衝突、矛盾", 
                examples: [
                    "There is a conflict between the two schedules.",
                    "We need to resolve this conflict peacefully."
                ]
            },
            { 
                pos: "v.", 
                cn: "衝突、抵觸", 
                forms: "conflicts / conflicted / conflicted",
                examples: [
                    "His testimony conflicts with the evidence.",
                    "My personal opinion conflicts with company policy."
                ]
            }
        ]
    },
    {
        en: "Conform",
        phonetic: "[kənˋfɔrm]",
        details: [
            { 
                pos: "v.", 
                cn: "遵從、符合", 
                forms: "conforms / conformed / conformed",
                examples: [
                    "The product must conform to international safety standards.",
                    "Employees are expected to conform to the dress code."
                ]
            }
        ]
    },
    {
        en: "Confront",
        phonetic: "[kənˋfrʌnt]",
        details: [
            { 
                pos: "v.", 
                cn: "面臨、對抗", 
                forms: "confronts / confronted / confronted",
                examples: [
                    "We are confronted with a serious financial crisis.",
                    "He decided to confront his accuser."
                ]
            }
        ]
    },
    {
        en: "Confuse",
        phonetic: "[kənˋfjuz]",
        details: [
            { 
                pos: "v.", 
                cn: "使困惑、混淆", 
                forms: "confuses / confused / confused",
                examples: [
                    "The complicated instructions confused everyone.",
                    "Please do not confuse me with my twin brother."
                ]
            }
        ]
    },
    {
        en: "Congratulate",
        phonetic: "[kənˋgrætʃə͵let]",
        details: [
            { 
                pos: "v.", 
                cn: "祝賀、恭喜", 
                forms: "congratulates / congratulated / congratulated",
                examples: [
                    "I want to congratulate you on your promotion.",
                    "He congratulated the winner warmly."
                ]
            }
        ]
    },
    {
        en: "Connect",
        phonetic: "[kəˋnɛkt]",
        details: [
            { 
                pos: "v.", 
                cn: "連接、聯繫", 
                forms: "connects / connected / connected",
                examples: [
                    "This train connects London and Paris.",
                    "I can't seem to connect to the internet."
                ]
            }
        ]
    },
    {
        en: "Conscious",
        phonetic: "[ˋkɑnʃəs]",
        details: [
            { 
                pos: "adj.", 
                cn: "意識到的、神志清醒的", 
                examples: [
                    "We are conscious of the risks involved.",
                    "He was conscious during the operation."
                ]
            }
        ]
    },
    {
        en: "Consequence",
        phonetic: "[ˋkɑnsə͵kwɛns]",
        details: [
            { 
                pos: "n.", 
                cn: "後果、結果", 
                examples: [
                    "You must accept the consequences of your actions.",
                    "The economic consequences of the war were severe."
                ]
            }
        ]
    },
    {
        en: "Conservative",
        phonetic: "[kənˋsɝvətɪv]",
        details: [
            { 
                pos: "adj.", 
                cn: "保守的", 
                examples: [
                    "He has a conservative approach to investment.",
                    "At a conservative estimate, the project will cost $1 million."
                ]
            }
        ]
    },
    {
        en: "Consider",
        phonetic: "[kənˋsɪdɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "考慮、認為", 
                forms: "considers / considered / considered",
                examples: [
                    "We are considering moving to a new office.",
                    "I consider him to be a very capable manager."
                ]
            }
        ]
    },
    {
        en: "Considerable",
        phonetic: "[kənˋsɪdərəb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "相當大的、可觀的", 
                examples: [
                    "A considerable amount of time was spent on the project.",
                    "The damage to the building was considerable."
                ]
            }
        ]
    },
    {
        en: "Consist",
        phonetic: "[kənˋsɪst]",
        details: [
            { 
                pos: "v.", 
                cn: "組成、構成", 
                forms: "consists / consisted / consisted",
                examples: [
                    "The committee consists of ten members.",
                    "Breakfast consisted of bread and coffee."
                ]
            }
        ]
    },
    {
        en: "Consistent",
        phonetic: "[kənˋsɪstənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "一致的、始終如一的", 
                examples: [
                    "We need to ensure consistent quality across all products.",
                    "His actions are consistent with his words."
                ]
            }
        ]
    },
    {
        en: "Constant",
        phonetic: "[ˋkɑnstənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "持續的、不斷的", 
                examples: [
                    "The machine requires constant maintenance.",
                    "She is in constant pain."
                ]
            }
        ]
    },
    {
        en: "Construct",
        phonetic: "[kənˋstrʌkt]",
        details: [
            { 
                pos: "v.", 
                cn: "建造、構成", 
                forms: "constructs / constructed / constructed",
                examples: [
                    "They plan to construct a new bridge across the river.",
                    "The argument was carefully constructed."
                ]
            }
        ]
    },
    {
        en: "Consult",
        phonetic: "[kənˋsʌlt]",
        details: [
            { 
                pos: "v.", 
                cn: "諮詢、商量", 
                forms: "consults / consulted / consulted",
                examples: [
                    "You should consult a lawyer before signing the contract.",
                    "I need to consult with my team before deciding."
                ]
            }
        ]
    },
    {
        en: "Consume",
        phonetic: "[kənˋsjum]",
        details: [
            { 
                pos: "v.", 
                cn: "消耗、消費、吃喝", 
                forms: "consumes / consumed / consumed",
                examples: [
                    "This car consumes a lot of fuel.",
                    "He consumed a large meal before the race."
                ]
            }
        ]
    },
    {
        en: "Contact",
        phonetic: "[ˋkɑntækt]",
        details: [
            { 
                pos: "n.", 
                cn: "聯繫、接觸", 
                examples: [
                    "Please keep in contact with us.",
                    "I lost contact with him years ago."
                ]
            },
            { 
                pos: "v.", 
                cn: "聯絡、接觸", 
                forms: "contacts / contacted / contacted",
                examples: [
                    "Please contact customer service for assistance.",
                    "Do not contact the liquid with your bare hands."
                ]
            }
        ]
    },
    {
        en: "Contain",
        phonetic: "[kənˋten]",
        details: [
            { 
                pos: "v.", 
                cn: "包含、容納、控制", 
                forms: "contains / contained / contained",
                examples: [
                    "This document contains sensitive information.",
                    "The box contains fragile items."
                ]
            }
        ]
    },{
        en: "Contemporary",
        phonetic: "[kənˋtɛmpə͵rɛrɪ]",
        details: [
            { 
                pos: "adj.", 
                cn: "當代的、同時代的", 
                examples: [
                    "He is a leading figure in contemporary art.",
                    "Contemporary music is very different from classical music."
                ]
            }
        ]
    },
    {
        en: "Contest",
        phonetic: "[ˋkɑntɛst]",
        details: [
            { 
                pos: "n.", 
                cn: "比賽、競賽", 
                examples: [
                    "She won first prize in the singing contest.",
                    "The election was a close contest between the two candidates."
                ]
            },
            { 
                pos: "v.", 
                cn: "爭奪、競爭", 
                forms: "contests / contested / contested",
                examples: [
                    "They plan to contest the decision in court.",
                    "Three candidates are contesting the leadership."
                ]
            }
        ]
    },
    {
        en: "Context",
        phonetic: "[ˋkɑntɛkst]",
        details: [
            { 
                pos: "n.", 
                cn: "上下文、背景", 
                examples: [
                    "You need to look at the statement in context.",
                    "The historical context of the novel is important."
                ]
            }
        ]
    },
    {
        en: "Contract",
        phonetic: "[ˋkɑntrækt]",
        details: [
            { 
                pos: "n.", 
                cn: "合約", 
                examples: [
                    "Please sign the contract at the bottom.",
                    "We have a contract with a major supplier."
                ]
            },
            { 
                pos: "v.", 
                cn: "簽約、收縮", 
                forms: "contracts / contracted / contracted",
                examples: [
                    "The company contracted to build the new stadium.",
                    "Metal contracts as it cools."
                ]
            }
        ]
    },
    {
        en: "Contradict",
        phonetic: "[͵kɑntrəˋdɪkt]",
        details: [
            { 
                pos: "v.", 
                cn: "反駁、與...矛盾", 
                forms: "contradicts / contradicted / contradicted",
                examples: [
                    "The witness contradicted his earlier statement.",
                    "The facts contradict your theory."
                ]
            }
        ]
    },
    {
        en: "Contrary",
        phonetic: "[ˋkɑntrɛrɪ]",
        details: [
            { 
                pos: "adj.", 
                cn: "相反的", 
                examples: [
                    "Contrary to popular belief, he is quite shy.",
                    "The result was contrary to our expectations."
                ]
            },
            { 
                pos: "n.", 
                cn: "相反的事物", 
                examples: [
                    "I thought he was busy, but the contrary was true.",
                    "On the contrary, I love this idea."
                ]
            }
        ]
    },
    {
        en: "Contrast",
        phonetic: "[ˋkɑntræst]",
        details: [
            { 
                pos: "n.", 
                cn: "對比、差異", 
                examples: [
                    "There is a sharp contrast between the two styles.",
                    "In contrast to his brother, he is very outgoing."
                ]
            },
            { 
                pos: "v.", 
                cn: "使對比、對照", 
                forms: "contrasts / contrasted / contrasted",
                examples: [
                    "The poem contrasts youth and old age.",
                    "Her actions contrast sharply with her promises."
                ]
            }
        ]
    },
    {
        en: "Contribute",
        phonetic: "[kənˋtrɪbjut]",
        details: [
            { 
                pos: "v.", 
                cn: "貢獻、捐助、投稿", 
                forms: "contributes / contributed / contributed",
                examples: [
                    "Many people contributed money to the fund.",
                    "She regularly contributes articles to the magazine."
                ]
            }
        ]
    },
    {
        en: "Contribution",
        phonetic: "[͵kɑntrəˋbjuʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "貢獻、捐款", 
                examples: [
                    "Thank you for your contribution to the project.",
                    "All contributions are tax-deductible."
                ]
            }
        ]
    },
    {
        en: "Control",
        phonetic: "[kənˋtrol]",
        details: [
            { 
                pos: "v.", 
                cn: "控制、管理", 
                forms: "controls / controlled / controlled",
                examples: [
                    "The government is trying to control inflation.",
                    "She struggled to control her temper."
                ]
            },
            { 
                pos: "n.", 
                cn: "控制權", 
                examples: [
                    "The situation is under control.",
                    "He lost control of the car on the ice."
                ]
            }
        ]
    },
    {
        en: "Convenient",
        phonetic: "[kənˋvinjənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "方便的", 
                examples: [
                    "Is it convenient for you to talk now?",
                    "The hotel is in a convenient location near the station."
                ]
            }
        ]
    },
    {
        en: "Convention",
        phonetic: "[kənˋvɛnʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "大會、慣例", 
                examples: [
                    "The annual convention attracts thousands of visitors.",
                    "By convention, the leader speaks first."
                ]
            }
        ]
    },
    {
        en: "Convert",
        phonetic: "[kənˋvɝt]",
        details: [
            { 
                pos: "v.", 
                cn: "轉換、改變信仰", 
                forms: "converts / converted / converted",
                examples: [
                    "We need to convert dollars into euros.",
                    "The old warehouse was converted into apartments."
                ]
            }
        ]
    },
    {
        en: "Convince",
        phonetic: "[kənˋvɪns]",
        details: [
            { 
                pos: "v.", 
                cn: "說服、使確信", 
                forms: "convinces / convinced / convinced",
                examples: [
                    "I tried to convince him to stay.",
                    "She convinced the jury of her innocence."
                ]
            }
        ]
    },
    {
        en: "Cooperate",
        phonetic: "[koˋɑpə͵ret]",
        details: [
            { 
                pos: "v.", 
                cn: "合作、配合", 
                forms: "cooperates / cooperated / cooperated",
                examples: [
                    "The two countries agreed to cooperate on trade.",
                    "Please cooperate with the security staff."
                ]
            }
        ]
    },
    {
        en: "Coordinate",
        phonetic: "[koˋɔrdnɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "協調", 
                forms: "coordinates / coordinated / coordinated",
                examples: [
                    "We need to coordinate our efforts to finish on time.",
                    "She coordinates the activities of the various departments."
                ]
            }
        ]
    },
    {
        en: "Copy",
        phonetic: "[ˋkɑpɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "副本、複印件", 
                examples: [
                    "Please make a copy of this document.",
                    "I bought a copy of the newspaper."
                ]
            },
            { 
                pos: "v.", 
                cn: "複製、抄寫", 
                forms: "copies / copied / copied",
                examples: [
                    "Do not copy the answers from your neighbor.",
                    "He copied the files to a USB drive."
                ]
            }
        ]
    },
    {
        en: "Corporate",
        phonetic: "[ˋkɔrpərɪt]",
        details: [
            { 
                pos: "adj.", 
                cn: "公司的、法人的", 
                examples: [
                    "We are planning a corporate event.",
                    "The company has a strong corporate culture."
                ]
            }
        ]
    },
    {
        en: "Correct",
        phonetic: "[kəˋrɛkt]",
        details: [
            { 
                pos: "adj.", 
                cn: "正確的", 
                examples: [
                    "Your answer is correct.",
                    "Please ensure that the information is correct."
                ]
            },
            { 
                pos: "v.", 
                cn: "改正、修正", 
                forms: "corrects / corrected / corrected",
                examples: [
                    "The teacher corrected my grammar mistakes.",
                    "We need to correct this error immediately."
                ]
            }
        ]
    },
    {
        en: "Correspond",
        phonetic: "[͵kɔrəˋspɑnd]",
        details: [
            { 
                pos: "v.", 
                cn: "符合、通信", 
                forms: "corresponds / corresponded / corresponded",
                examples: [
                    "His account of the event corresponds with the police report.",
                    "We corresponded by email for several years."
                ]
            }
        ]
    },{
        en: "Cost",
        phonetic: "[kɔst]",
        details: [
            { 
                pos: "n.", 
                cn: "費用、成本", 
                examples: [
                    "The cost of living has increased significantly.",
                    "We need to cut production costs."
                ]
            },
            { 
                pos: "v.", 
                cn: "花費、使付出", 
                forms: "costs / cost / cost",
                examples: [
                    "This mistake cost the company millions of dollars.",
                    "How much does this laptop cost?"
                ]
            }
        ]
    },
    {
        en: "Council",
        phonetic: "[ˋkaʊns!]",
        details: [
            { 
                pos: "n.", 
                cn: "議會、委員會", 
                examples: [
                    "The city council voted to approve the new park.",
                    "She was elected to the student council."
                ]
            }
        ]
    },
    {
        en: "Counsel",
        phonetic: "[ˋkaʊns!]",
        details: [
            { 
                pos: "v.", 
                cn: "建議、輔導", 
                forms: "counsels / counseled / counseled",
                examples: [
                    "He counseled me to accept the job offer.",
                    "The expert counseled caution in this investment."
                ]
            },
            { 
                pos: "n.", 
                cn: "法律顧問、建議", 
                examples: [
                    "The defendant acted on the advice of his counsel.",
                    "I am grateful for your wise counsel."
                ]
            }
        ]
    },
    {
        en: "Counter",
        phonetic: "[ˋkaʊntɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "櫃檯、計數器", 
                examples: [
                    "Please approach the check-in counter.",
                    "The kitchen counter was covered with food."
                ]
            },
            { 
                pos: "v.", 
                cn: "反擊、對抗", 
                forms: "counters / countered / countered",
                examples: [
                    "They countered our proposal with a better offer.",
                    "We need to counter the effects of climate change."
                ]
            }
        ]
    },
    {
        en: "Courier",
        phonetic: "[ˋkʊrɪɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "快遞公司、信差", 
                examples: [
                    "The package was delivered by a courier service.",
                    "I sent the documents via courier."
                ]
            }
        ]
    },
    {
        en: "Course",
        phonetic: "[kors]",
        details: [
            { 
                pos: "n.", 
                cn: "課程、路線、一道菜", 
                examples: [
                    "I signed up for a management training course.",
                    "The ship changed its course to avoid the storm."
                ]
            }
        ]
    },
    {
        en: "Cover",
        phonetic: "[ˋkʌvɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "覆蓋、報導、支付、包含", 
                forms: "covers / covered / covered",
                examples: [
                    "The insurance policy covers fire and theft.",
                    "The seminar covers a wide range of topics."
                ]
            },
            { 
                pos: "n.", 
                cn: "封面、蓋子", 
                examples: [
                    "His picture is on the cover of the magazine.",
                    "Please put the cover back on the lens."
                ]
            }
        ]
    },
    {
        en: "Coverage",
        phonetic: "[ˋkʌvərɪdʒ]",
        details: [
            { 
                pos: "n.", 
                cn: "新聞報導、保險範圍", 
                examples: [
                    "The event received extensive media coverage.",
                    "This policy provides coverage for medical expenses."
                ]
            }
        ]
    },
    {
        en: "Credentials",
        phonetic: "[krɪˋdɛnʃəlz]",
        details: [
            { 
                pos: "n.", 
                cn: "資歷、證書(常用複數)", 
                examples: [
                    "She has excellent academic credentials.",
                    "Please present your credentials at the security desk."
                ]
            }
        ]
    },
    {
        en: "Credit",
        phonetic: "[ˋkrɛdɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "信用、讚揚、賒帳", 
                examples: [
                    "Do you accept credit cards?",
                    "She deserves credit for the project's success."
                ]
            },
            { 
                pos: "v.", 
                cn: "把...存入、歸功於", 
                forms: "credits / credited / credited",
                examples: [
                    "The bank credited $500 to my account.",
                    "He is credited with inventing the new device."
                ]
            }
        ]
    },
    {
        en: "Crew",
        phonetic: "[kru]",
        details: [
            { 
                pos: "n.", 
                cn: "全體工作人員、機組員", 
                examples: [
                    "The flight crew prepared the cabin for landing.",
                    "A film crew was shooting a scene on the street."
                ]
            }
        ]
    },
    {
        en: "Crisis",
        phonetic: "[ˋkraɪsɪs]",
        details: [
            { 
                pos: "n.", 
                cn: "危機", 
                examples: [
                    "The country is facing an economic crisis.",
                    "He handles crisis situations very well."
                ]
            }
        ]
    },
    {
        en: "Criteria",
        phonetic: "[kraɪˋtɪrɪə]",
        details: [
            { 
                pos: "n.", 
                cn: "標準、準則(複數)", 
                examples: [
                    "What are the criteria for selection?",
                    "We need to meet strict safety criteria."
                ]
            }
        ]
    },
    {
        en: "Critical",
        phonetic: "[ˋkrɪtɪk!]",
        details: [
            { 
                pos: "adj.", 
                cn: "關鍵的、批評的、危急的", 
                examples: [
                    "Time is a critical factor in this project.",
                    "The report was highly critical of the management."
                ]
            }
        ]
    },
    {
        en: "Criticize",
        phonetic: "[ˋkrɪtə͵saɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "批評、評論", 
                forms: "criticizes / criticized / criticized",
                examples: [
                    "He was criticized for his lack of leadership.",
                    "It is easy to criticize others."
                ]
            }
        ]
    },
    {
        en: "Crucial",
        phonetic: "[ˋkruʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "決定性的、至關重要的", 
                examples: [
                    "It is crucial that we finish on time.",
                    "Her support played a crucial role in his victory."
                ]
            }
        ]
    },
    {
        en: "Currency",
        phonetic: "[ˋkɝənsɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "貨幣、流通", 
                examples: [
                    "The Euro is the common currency in Europe.",
                    "Foreign currency exchange is available at the airport."
                ]
            }
        ]
    },
    {
        en: "Current",
        phonetic: "[ˋkɝənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "目前的、現行的", 
                examples: [
                    "What is your current address?",
                    "Current economic trends suggest a slowdown."
                ]
            },
            { 
                pos: "n.", 
                cn: "水流、氣流、電流", 
                examples: [
                    "The swimmer struggled against the strong current.",
                    "Check the electrical current before touching the wire."
                ]
            }
        ]
    },
    {
        en: "Custom",
        phonetic: "[ˋkʌstəm]",
        details: [
            { 
                pos: "n.", 
                cn: "海關(複數)、習俗", 
                examples: [
                    "We had to pass through customs at the airport.",
                    "It is a local custom to take off shoes indoors."
                ]
            },
            { 
                pos: "adj.", 
                cn: "訂做的、客製化的", 
                examples: [
                    "He ordered a custom suit for the wedding.",
                    "We offer custom software solutions."
                ]
            }
        ]
    },
    {
        en: "Customer",
        phonetic: "[ˋkʌstəmɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "顧客、客戶", 
                examples: [
                    "The customer is always right.",
                    "We aim to provide excellent customer service."
                ]
            }
        ]
    },{
        en: "Cycle",
        phonetic: "[ˋsaɪk!]",
        details: [
            { 
                pos: "n.", 
                cn: "週期、循環", 
                examples: [
                    "The product life cycle is becoming shorter.",
                    "We need to break this cycle of debt."
                ]
            },
            { 
                pos: "v.", 
                cn: "騎腳踏車、循環", 
                forms: "cycles / cycled / cycled",
                examples: [
                    "He cycles to work every day to save money.",
                    " The machine cycles through the wash program automatically."
                ]
            }
        ]
    },
    {
        en: "Damage",
        phonetic: "[ˋdæmɪdʒ]",
        details: [
            { 
                pos: "n.", 
                cn: "損害、損失", 
                examples: [
                    "The storm caused extensive damage to the building.",
                    "The insurance covers accidental damage."
                ]
            },
            { 
                pos: "v.", 
                cn: "損害、毀壞", 
                forms: "damages / damaged / damaged",
                examples: [
                    "Smoking can severely damage your health.",
                    "The package was damaged during shipping."
                ]
            }
        ]
    },
    {
        en: "Deadline",
        phonetic: "[ˋdɛd͵laɪn]",
        details: [
            { 
                pos: "n.", 
                cn: "截止期限", 
                examples: [
                    "The deadline for applications is next Friday.",
                    "We are working under a tight deadline."
                ]
            }
        ]
    },
    {
        en: "Deal",
        phonetic: "[dil]",
        details: [
            { 
                pos: "v.", 
                cn: "處理、交易", 
                forms: "deals / dealt / dealt",
                examples: [
                    "She deals with customer complaints.",
                    "We deal directly with the manufacturer."
                ]
            },
            { 
                pos: "n.", 
                cn: "交易、協議", 
                examples: [
                    "They closed a business deal worth millions.",
                    "It's a deal!"
                ]
            }
        ]
    },
    {
        en: "Debate",
        phonetic: "[dɪˋbet]",
        details: [
            { 
                pos: "n.", 
                cn: "辯論、討論", 
                examples: [
                    "There has been much debate about the new policy.",
                    "The candidates held a televised debate."
                ]
            },
            { 
                pos: "v.", 
                cn: "辯論、爭論", 
                forms: "debates / debated / debated",
                examples: [
                    "They debated the issue for hours.",
                    "I am debating whether to accept the offer."
                ]
            }
        ]
    },
    {
        en: "Debt",
        phonetic: "[dɛt]",
        details: [
            { 
                pos: "n.", 
                cn: "債務、欠款", 
                examples: [
                    "He is trying to pay off his credit card debt.",
                    "The company is deep in debt."
                ]
            }
        ]
    },
    {
        en: "Decade",
        phonetic: "[ˋdɛked]",
        details: [
            { 
                pos: "n.", 
                cn: "十年", 
                examples: [
                    "Prices have doubled over the last decade.",
                    "She has worked here for more than a decade."
                ]
            }
        ]
    },
    {
        en: "Decide",
        phonetic: "[dɪˋsaɪd]",
        details: [
            { 
                pos: "v.", 
                cn: "決定、裁決", 
                forms: "decides / decided / decided",
                examples: [
                    "Have you decided where to go for lunch?",
                    "The committee will decide the winner."
                ]
            }
        ]
    },
    {
        en: "Declare",
        phonetic: "[dɪˋklɛr]",
        details: [
            { 
                pos: "v.", 
                cn: "宣布、申報(關稅)", 
                forms: "declares / declared / declared",
                examples: [
                    "The country declared independence in 1945.",
                    "Do you have anything to declare at customs?"
                ]
            }
        ]
    },
    {
        en: "Decrease",
        phonetic: "[dɪˋkris]",
        details: [
            { 
                pos: "v.", 
                cn: "減少、降低", 
                forms: "decreases / decreased / decreased",
                examples: [
                    "Sales decreased by 10% this quarter.",
                    "We need to decrease our spending."
                ]
            },
            { 
                pos: "n.", 
                cn: "減少", 
                examples: [
                    "There has been a decrease in the number of visitors.",
                    "The decrease in temperature was sudden."
                ]
            }
        ]
    },
    {
        en: "Dedicate",
        phonetic: "[ˋdɛdə͵ket]",
        details: [
            { 
                pos: "v.", 
                cn: "奉獻、致力於", 
                forms: "dedicates / dedicated / dedicated",
                examples: [
                    "He dedicated his life to helping the poor.",
                    "This book is dedicated to my parents."
                ]
            }
        ]
    },
    {
        en: "Deduct",
        phonetic: "[dɪˋdʌkt]",
        details: [
            { 
                pos: "v.", 
                cn: "扣除、減去", 
                forms: "deducts / deducted / deducted",
                examples: [
                    "Tax will be deducted from your salary.",
                    "They deducted the cost of the meal from my pay."
                ]
            }
        ]
    },
    {
        en: "Defect",
        phonetic: "[ˋdifɛkt]",
        details: [
            { 
                pos: "n.", 
                cn: "缺陷、瑕疵", 
                examples: [
                    "The product was recalled due to a manufacturing defect.",
                    "There are no visible defects in the material."
                ]
            }
        ]
    },
    {
        en: "Deficit",
        phonetic: "[ˋdɛfəsɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "赤字、虧損", 
                examples: [
                    "The government is trying to reduce the budget deficit.",
                    "We are facing a trade deficit this year."
                ]
            }
        ]
    },
    {
        en: "Define",
        phonetic: "[dɪˋfaɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "定義、規定", 
                forms: "defines / defined / defined",
                examples: [
                    "The contract defines the duties of the employee.",
                    "It is difficult to define the word 'success'."
                ]
            }
        ]
    },
    {
        en: "Definite",
        phonetic: "[ˋdɛfənɪt]",
        details: [
            { 
                pos: "adj.", 
                cn: "明確的、肯定的", 
                examples: [
                    "We need a definite answer by tomorrow.",
                    "There has been a definite improvement in his work."
                ]
            }
        ]
    },
    {
        en: "Delay",
        phonetic: "[dɪˋle]",
        details: [
            { 
                pos: "v.", 
                cn: "延遲、耽擱", 
                forms: "delays / delayed / delayed",
                examples: [
                    "The flight was delayed due to bad weather.",
                    "Don't delay in sending your application."
                ]
            },
            { 
                pos: "n.", 
                cn: "延誤", 
                examples: [
                    "We apologize for the delay.",
                    "There will be a slight delay in delivery."
                ]
            }
        ]
    },
    {
        en: "Delegate",
        phonetic: "[ˋdɛlə͵get]",
        details: [
            { 
                pos: "v.", 
                cn: "委派、授權", 
                forms: "delegates / delegated / delegated",
                examples: [
                    "A good manager knows how to delegate tasks.",
                    "He delegated the authority to his assistant."
                ]
            },
            { 
                pos: "n.", 
                cn: "代表", 
                examples: [
                    "Delegates from 50 countries attended the conference.",
                    "She was chosen as a delegate to the convention."
                ]
            }
        ]
    },
    {
        en: "Delete",
        phonetic: "[dɪˋlit]",
        details: [
            { 
                pos: "v.", 
                cn: "刪除", 
                forms: "deletes / deleted / deleted",
                examples: [
                    "Please delete this file from your computer.",
                    "I accidentally deleted the message."
                ]
            }
        ]
    },
    {
        en: "Deliberate",
        phonetic: "[dɪˋlɪbərɪt]",
        details: [
            { 
                pos: "adj.", 
                cn: "深思熟慮的、故意的", 
                examples: [
                    "It was a deliberate attempt to deceive us.",
                    "He spoke in a slow and deliberate manner."
                ]
            },
            { 
                pos: "v.", 
                cn: "仔細考慮", 
                forms: "deliberates / deliberated / deliberated",
                examples: [
                    "The jury deliberated for three days.",
                    "We need time to deliberate on this proposal."
                ]
            }
        ]
    },{
        en: "Delicate",
        phonetic: "[ˋdɛləkət]",
        details: [
            { 
                pos: "adj.", 
                cn: "易碎的、精緻的、微妙的", 
                examples: [
                    "These crystal glasses are very delicate.",
                    "The negotiations are at a delicate stage."
                ]
            }
        ]
    },
    {
        en: "Deliver",
        phonetic: "[dɪˋlɪvɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "遞送、發表(演說)", 
                forms: "delivers / delivered / delivered",
                examples: [
                    "We can deliver the furniture to your home.",
                    "The CEO delivered an inspiring speech."
                ]
            }
        ]
    },
    {
        en: "Delivery",
        phonetic: "[dɪˋlɪvərɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "遞送、交付", 
                examples: [
                    "Allow three to five days for delivery.",
                    "We offer free delivery on orders over $50."
                ]
            }
        ]
    },
    {
        en: "Demand",
        phonetic: "[dɪˋmænd]",
        details: [
            { 
                pos: "n.", 
                cn: "需求、要求", 
                examples: [
                    "There is a high demand for skilled workers.",
                    "Supply cannot keep up with demand."
                ]
            },
            { 
                pos: "v.", 
                cn: "要求、需要", 
                forms: "demands / demanded / demanded",
                examples: [
                    "The workers demanded a pay raise.",
                    "This job demands a lot of patience."
                ]
            }
        ]
    },
    {
        en: "Demonstrate",
        phonetic: "[ˋdɛmən͵stret]",
        details: [
            { 
                pos: "v.", 
                cn: "示範、證明、示威", 
                forms: "demonstrates / demonstrated / demonstrated",
                examples: [
                    "Let me demonstrate how the machine works.",
                    "The study demonstrates the link between stress and illness."
                ]
            }
        ]
    },
    {
        en: "Deny",
        phonetic: "[dɪˋnaɪ]",
        details: [
            { 
                pos: "v.", 
                cn: "否認、拒絕給予", 
                forms: "denies / denied / denied",
                examples: [
                    "He denied all the allegations against him.",
                    "They were denied access to the building."
                ]
            }
        ]
    },
    {
        en: "Department",
        phonetic: "[dɪˋpɑrtmənt]",
        details: [
            { 
                pos: "n.", 
                cn: "部門、系", 
                examples: [
                    "Please contact the billing department.",
                    "He is the head of the English department."
                ]
            }
        ]
    },
    {
        en: "Depend",
        phonetic: "[dɪˋpɛnd]",
        details: [
            { 
                pos: "v.", 
                cn: "依賴、視...而定", 
                forms: "depends / depended / depended",
                examples: [
                    "Our success depends on your hard work.",
                    "The cost depends on the size of the order."
                ]
            }
        ]
    },
    {
        en: "Deposit",
        phonetic: "[dɪˋpɑzɪt]",
        details: [
            { 
                pos: "n.", 
                cn: "存款、押金、沉積物", 
                examples: [
                    "You need to pay a deposit to secure the booking.",
                    "I made a large deposit into my savings account."
                ]
            },
            { 
                pos: "v.", 
                cn: "存錢、存放", 
                forms: "deposits / deposited / deposited",
                examples: [
                    "Please deposit the money at the bank.",
                    "She deposited her bag in the locker."
                ]
            }
        ]
    },
    {
        en: "Describe",
        phonetic: "[dɪˋskraɪb]",
        details: [
            { 
                pos: "v.", 
                cn: "描述、形容", 
                forms: "describes / described / described",
                examples: [
                    "Can you describe the man you saw?",
                    "The report describes the current economic situation."
                ]
            }
        ]
    },
    {
        en: "Description",
        phonetic: "[dɪˋskrɪpʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "描述、說明", 
                examples: [
                    "Please provide a detailed description of the item.",
                    "The product description is misleading."
                ]
            }
        ]
    },
    {
        en: "Deserve",
        phonetic: "[dɪˋzɝv]",
        details: [
            { 
                pos: "v.", 
                cn: "應得、值得", 
                forms: "deserves / deserved / deserved",
                examples: [
                    "You deserve a rest after all that hard work.",
                    "He deserves credit for his achievements."
                ]
            }
        ]
    },
    {
        en: "Design",
        phonetic: "[dɪˋzaɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "設計", 
                forms: "designs / designed / designed",
                examples: [
                    "The building was designed by a famous architect.",
                    "This software is designed for small businesses."
                ]
            },
            { 
                pos: "n.", 
                cn: "設計、圖樣", 
                examples: [
                    "I like the modern design of this chair.",
                    "We need to approve the final design."
                ]
            }
        ]
    },
    {
        en: "Designate",
        phonetic: "[ˋdɛzɪg͵net]",
        details: [
            { 
                pos: "v.", 
                cn: "指定、指派、標示", 
                forms: "designates / designated / designated",
                examples: [
                    "This area is designated for smoking.",
                    "He was designated as the team leader."
                ]
            }
        ]
    },
    {
        en: "Desire",
        phonetic: "[dɪˋzaɪr]",
        details: [
            { 
                pos: "n.", 
                cn: "渴望、慾望", 
                examples: [
                    "He has no desire to travel.",
                    "Her desire for success drove her to work hard."
                ]
            },
            { 
                pos: "v.", 
                cn: "渴望、想要", 
                forms: "desires / desired / desired",
                examples: [
                    "We desire to establish a long-term relationship.",
                    "The customer desires a refund."
                ]
            }
        ]
    },
    {
        en: "Detail",
        phonetic: "[ˋditel]",
        details: [
            { 
                pos: "n.", 
                cn: "細節", 
                examples: [
                    "Please send me the details of the contract.",
                    "We need to pay attention to every detail."
                ]
            },
            { 
                pos: "v.", 
                cn: "詳述", 
                forms: "details / detailed / detailed",
                examples: [
                    "The brochure details all the services we offer.",
                    "He detailed his plan to the board."
                ]
            }
        ]
    },
    {
        en: "Detect",
        phonetic: "[dɪˋtɛkt]",
        details: [
            { 
                pos: "v.", 
                cn: "偵測、察覺", 
                forms: "detects / detected / detected",
                examples: [
                    "The alarm detects smoke and heat.",
                    "I detected a note of hesitation in his voice."
                ]
            }
        ]
    },
    {
        en: "Determine",
        phonetic: "[dɪˋtɝmɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "決定、下定決心、查明", 
                forms: "determines / determined / determined",
                examples: [
                    "Supply and demand determine the price.",
                    "We need to determine the cause of the fire."
                ]
            }
        ]
    },
    {
        en: "Develop",
        phonetic: "[dɪˋvɛləp]",
        details: [
            { 
                pos: "v.", 
                cn: "發展、開發、沖洗(底片)", 
                forms: "develops / developed / developed",
                examples: [
                    "The company plans to develop new markets overseas.",
                    "Symptoms of the disease can take years to develop."
                ]
            }
        ]
    },
    {
        en: "Device",
        phonetic: "[dɪˋvaɪs]",
        details: [
            { 
                pos: "n.", 
                cn: "裝置、設備、手段", 
                examples: [
                    "This electronic device is very popular.",
                    "A tracking device was attached to the car."
                ]
            }
        ]
    },{
        en: "Devise",
        phonetic: "[dɪˋvaɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "設計、發明、策劃", 
                forms: "devises / devised / devised",
                examples: [
                    "We need to devise a new strategy to increase sales.",
                    "Engineers devised a way to replace the broken part."
                ]
            }
        ]
    },
    {
        en: "Diagnose",
        phonetic: "[ˋdaɪəg͵nos]",
        details: [
            { 
                pos: "v.", 
                cn: "診斷、判斷", 
                forms: "diagnoses / diagnosed / diagnosed",
                examples: [
                    "The doctor diagnosed him with a rare disease.",
                    "The technician diagnosed the problem with the server."
                ]
            }
        ]
    },
    {
        en: "Diagram",
        phonetic: "[ˋdaɪə͵græm]",
        details: [
            { 
                pos: "n.", 
                cn: "圖表、圖解", 
                examples: [
                    "Please refer to the diagram on page 10.",
                    "He drew a diagram to explain the process."
                ]
            }
        ]
    },
    {
        en: "Dial",
        phonetic: "[ˋdaɪəl]",
        details: [
            { 
                pos: "v.", 
                cn: "撥號", 
                forms: "dials / dialed / dialed",
                examples: [
                    "Please dial 9 for an outside line.",
                    "I dialed the wrong number by mistake."
                ]
            },
            { 
                pos: "n.", 
                cn: "刻度盤、調節器", 
                examples: [
                    "Turn the dial to adjust the temperature.",
                    "The instrument panel has several dials."
                ]
            }
        ]
    },
    {
        en: "Dictate",
        phonetic: "[ˋdɪktet]",
        details: [
            { 
                pos: "v.", 
                cn: "口述、命令、支配", 
                forms: "dictates / dictated / dictated",
                examples: [
                    "The boss dictated a letter to his secretary.",
                    "We cannot let the market dictate our prices."
                ]
            }
        ]
    },
    {
        en: "Differ",
        phonetic: "[ˋdɪfɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "不同、意見不合", 
                forms: "differs / differed / differed",
                examples: [
                    "Opinions differ on the best way to proceed.",
                    "This model differs slightly from the previous one."
                ]
            }
        ]
    },
    {
        en: "Digest",
        phonetic: "[daɪˋdʒɛst]",
        details: [
            { 
                pos: "v.", 
                cn: "消化、理解", 
                forms: "digests / digested / digested",
                examples: [
                    "It took me a while to digest the news.",
                    "Some foods are difficult to digest."
                ]
            },
            { 
                pos: "n.", 
                cn: "摘要、文摘", 
                examples: [
                    "I read a digest of the report.",
                    "She subscribes to a monthly science digest."
                ]
            }
        ]
    },
    {
        en: "Digital",
        phonetic: "[ˋdɪdʒɪt!]",
        details: [
            { 
                pos: "adj.", 
                cn: "數位的", 
                examples: [
                    "The company is investing heavily in digital marketing.",
                    "Most cameras nowadays are digital."
                ]
            }
        ]
    },
    {
        en: "Dilemma",
        phonetic: "[dəˋlɛmə]",
        details: [
            { 
                pos: "n.", 
                cn: "進退兩難的困境", 
                examples: [
                    "We are facing a moral dilemma.",
                    "He was in a dilemma about whether to accept the job."
                ]
            }
        ]
    },
    {
        en: "Dimension",
        phonetic: "[dɪˋmɛnʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "尺寸、維度、層面", 
                examples: [
                    "Please measure the dimensions of the room.",
                    "There is a political dimension to this problem."
                ]
            }
        ]
    },
    {
        en: "Diminish",
        phonetic: "[dəˋmɪnɪʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "減少、縮減", 
                forms: "diminishes / diminished / diminished",
                examples: [
                    "Our supplies are diminishing rapidly.",
                    "Don't let him diminish your achievements."
                ]
            }
        ]
    },
    {
        en: "Dine",
        phonetic: "[daɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "用餐", 
                forms: "dines / dined / dined",
                examples: [
                    "We dined at a fancy restaurant last night.",
                    "Guests are invited to dine with the captain."
                ]
            }
        ]
    },
    {
        en: "Direct",
        phonetic: "[dəˋrɛkt]",
        details: [
            { 
                pos: "v.", 
                cn: "指導、指揮、給...指路", 
                forms: "directs / directed / directed",
                examples: [
                    "He was hired to direct the new project.",
                    "Could you direct me to the nearest station?"
                ]
            },
            { 
                pos: "adj.", 
                cn: "直接的", 
                examples: [
                    "Is there a direct flight to New York?",
                    "He gave me a direct answer."
                ]
            }
        ]
    },
    {
        en: "Direction",
        phonetic: "[dəˋrɛkʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "方向、指示(複數)", 
                examples: [
                    "He drove off in the opposite direction.",
                    "Please follow the directions on the package."
                ]
            }
        ]
    },
    {
        en: "Director",
        phonetic: "[dəˋrɛktɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "主管、董事、導演", 
                examples: [
                    "She was appointed as the new marketing director.",
                    "The board of directors will meet next week."
                ]
            }
        ]
    },
    {
        en: "Directory",
        phonetic: "[dəˋrɛktərɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "工商名錄、通訊錄、指南", 
                examples: [
                    "You can find his number in the staff directory.",
                    "Check the building directory for the office location."
                ]
            }
        ]
    },
    {
        en: "Disable",
        phonetic: "[dɪsˋeb!]",
        details: [
            { 
                pos: "v.", 
                cn: "使喪失能力、使無法運作", 
                forms: "disables / disabled / disabled",
                examples: [
                    "The alarm system has been disabled.",
                    "He was disabled in the accident."
                ]
            }
        ]
    },
    {
        en: "Disadvantage",
        phonetic: "[͵dɪsədˋvæntɪdʒ]",
        details: [
            { 
                pos: "n.", 
                cn: "不利條件、劣勢", 
                examples: [
                    "One disadvantage of living here is the noise.",
                    "The new tax law works to our disadvantage."
                ]
            }
        ]
    },
    {
        en: "Disagree",
        phonetic: "[͵dɪsəˋgri]",
        details: [
            { 
                pos: "v.", 
                cn: "不同意、不符", 
                forms: "disagrees / disagreed / disagreed",
                examples: [
                    "I strongly disagree with his opinion.",
                    "The two reports disagree on the total cost."
                ]
            }
        ]
    },
    {
        en: "Disappoint",
        phonetic: "[͵dɪsəˋpɔɪnt]",
        details: [
            { 
                pos: "v.", 
                cn: "使失望", 
                forms: "disappoints / disappointed / disappointed",
                examples: [
                    "I'm sorry to disappoint you, but I can't come.",
                    "The sales figures disappointed the investors."
                ]
            }
        ]
    },{
        en: "Disapprove",
        phonetic: "[͵dɪsəˋpruv]",
        details: [
            { 
                pos: "v.", 
                cn: "不贊成、不同意", 
                forms: "disapproves / disapproved / disapproved",
                examples: [
                    "Her parents disapproved of her career choice.",
                    "The committee disapproved the budget proposal."
                ]
            }
        ]
    },
    {
        en: "Disaster",
        phonetic: "[dɪˋzæstɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "災難、徹底失敗", 
                examples: [
                    "The earthquake was a major disaster.",
                    "My first attempt at cooking was a total disaster."
                ]
            }
        ]
    },
    {
        en: "Discard",
        phonetic: "[dɪsˋkɑrd]",
        details: [
            { 
                pos: "v.", 
                cn: "丟棄、拋棄", 
                forms: "discards / discarded / discarded",
                examples: [
                    "Please discard used tickets in the bin.",
                    "He discarded his old clothes."
                ]
            }
        ]
    },
    {
        en: "Discharge",
        phonetic: "[dɪsˋtʃɑrdʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "允許離開(出院/退伍)、排放", 
                forms: "discharges / discharged / discharged",
                examples: [
                    "He was discharged from the hospital yesterday.",
                    "The factory was fined for discharging waste into the river."
                ]
            }
        ]
    },
    {
        en: "Discipline",
        phonetic: "[ˋdɪsəplɪn]",
        details: [
            { 
                pos: "n.", 
                cn: "紀律、學科", 
                examples: [
                    "The school maintains strict discipline.",
                    "Yoga requires a lot of mental discipline."
                ]
            },
            { 
                pos: "v.", 
                cn: "懲戒、訓練", 
                forms: "disciplines / disciplined / disciplined",
                examples: [
                    "The employee was disciplined for being late.",
                    "I am trying to discipline myself to exercise daily."
                ]
            }
        ]
    },
    {
        en: "Disclose",
        phonetic: "[dɪsˋkloz]",
        details: [
            { 
                pos: "v.", 
                cn: "揭露、公開", 
                forms: "discloses / disclosed / disclosed",
                examples: [
                    "The company refused to disclose the terms of the agreement.",
                    "He disclosed his secret to me."
                ]
            }
        ]
    },
    {
        en: "Discount",
        phonetic: "[ˋdɪskaʊnt]",
        details: [
            { 
                pos: "n.", 
                cn: "折扣", 
                examples: [
                    "Employees get a 20% discount on all products.",
                    "Is there a discount for bulk purchases?"
                ]
            },
            { 
                pos: "v.", 
                cn: "打折、不重視", 
                forms: "discounts / discounted / discounted",
                examples: [
                    "The store discounted all summer clothing.",
                    "You shouldn't discount his opinion completely."
                ]
            }
        ]
    },
    {
        en: "Discover",
        phonetic: "[dɪsˋkʌvɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "發現", 
                forms: "discovers / discovered / discovered",
                examples: [
                    "They discovered a hidden room in the basement.",
                    "Scientists are trying to discover a cure for the disease."
                ]
            }
        ]
    },
    {
        en: "Discourage",
        phonetic: "[dɪsˋkɝɪdʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "使氣餒、阻礙", 
                forms: "discourages / discouraged / discouraged",
                examples: [
                    "Don't let one failure discourage you.",
                    "High prices discourage customers from buying."
                ]
            }
        ]
    },
    {
        en: "Discuss",
        phonetic: "[dɪsˋkʌs]",
        details: [
            { 
                pos: "v.", 
                cn: "討論", 
                forms: "discusses / discussed / discussed",
                examples: [
                    "We need to discuss the budget for next year.",
                    "I discussed the problem with my manager."
                ]
            }
        ]
    },
    {
        en: "Disease",
        phonetic: "[dɪˋziz]",
        details: [
            { 
                pos: "n.", 
                cn: "疾病", 
                examples: [
                    "They are researching a cure for the disease.",
                    "Poor hygiene can spread disease."
                ]
            }
        ]
    },
    {
        en: "Dismiss",
        phonetic: "[dɪsˋmɪs]",
        details: [
            { 
                pos: "v.", 
                cn: "解散、解雇、駁回", 
                forms: "dismisses / dismissed / dismissed",
                examples: [
                    "The class was dismissed early today.",
                    "He was dismissed from his job for misconduct."
                ]
            }
        ]
    },
    {
        en: "Dispatch",
        phonetic: "[dɪˋspætʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "派遣、發送", 
                forms: "dispatches / dispatched / dispatched",
                examples: [
                    "An ambulance was dispatched to the scene immediately.",
                    "The goods have been dispatched to your address."
                ]
            },
            { 
                pos: "n.", 
                cn: "發送、急件", 
                examples: [
                    "The prompt dispatch of orders is our priority.",
                    "He read the dispatch from the front line."
                ]
            }
        ]
    },
    {
        en: "Display",
        phonetic: "[dɪˋsple]",
        details: [
            { 
                pos: "v.", 
                cn: "展示、陳列", 
                forms: "displays / displayed / displayed",
                examples: [
                    "The new models are displayed in the window.",
                    "She displayed great courage during the crisis."
                ]
            },
            { 
                pos: "n.", 
                cn: "展覽、陳列品", 
                examples: [
                    "There is a fireworks display tonight.",
                    "The monitor display is very clear."
                ]
            }
        ]
    },
    {
        en: "Dispose",
        phonetic: "[dɪˋspoz]",
        details: [
            { 
                pos: "v.", 
                cn: "處置、丟棄 (常接 of)", 
                forms: "disposes / disposed / disposed",
                examples: [
                    "How should I dispose of this chemical waste?",
                    "He disposed of his old car."
                ]
            }
        ]
    },
    {
        en: "Dispute",
        phonetic: "[dɪˋspjut]",
        details: [
            { 
                pos: "n.", 
                cn: "爭端、糾紛", 
                examples: [
                    "The labor dispute has been resolved.",
                    "There is a dispute over the property boundary."
                ]
            },
            { 
                pos: "v.", 
                cn: "爭論、質疑", 
                forms: "disputes / disputed / disputed",
                examples: [
                    "No one disputed his claim to the title.",
                    "They disputed the bill with the waiter."
                ]
            }
        ]
    },
    {
        en: "Distinct",
        phonetic: "[dɪˋstɪŋkt]",
        details: [
            { 
                pos: "adj.", 
                cn: "明顯的、截然不同的", 
                examples: [
                    "There is a distinct smell of gas in here.",
                    "The two concepts are quite distinct from each other."
                ]
            }
        ]
    },
    {
        en: "Distinguish",
        phonetic: "[dɪˋstɪŋgwɪʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "區分、辨別", 
                forms: "distinguishes / distinguished / distinguished",
                examples: [
                    "It is hard to distinguish between the twins.",
                    "He distinguished himself as a brilliant lawyer."
                ]
            }
        ]
    },
    {
        en: "Distribute",
        phonetic: "[dɪˋstrɪbjʊt]",
        details: [
            { 
                pos: "v.", 
                cn: "分發、分配、銷售", 
                forms: "distributes / distributed / distributed",
                examples: [
                    "We distributed the leaflets to passers-by.",
                    "The company distributes its products worldwide."
                ]
            }
        ]
    },
    {
        en: "District",
        phonetic: "[ˋdɪstrɪkt]",
        details: [
            { 
                pos: "n.", 
                cn: "區域、行政區", 
                examples: [
                    "He lives in the financial district.",
                    "The school district covers three towns."
                ]
            }
        ]
    },{
        en: "Disturb",
        phonetic: "[dɪˋstɝb]",
        details: [
            { 
                pos: "v.", 
                cn: "打擾、妨礙", 
                forms: "disturbs / disturbed / disturbed",
                examples: [
                    "Please do not disturb him while he is working.",
                    "The noise from the construction site disturbed the meeting."
                ]
            }
        ]
    },
    {
        en: "Dividend",
        phonetic: "[ˋdɪvə͵dɛnd]",
        details: [
            { 
                pos: "n.", 
                cn: "股息、紅利", 
                examples: [
                    "Shareholders received a substantial dividend this year.",
                    "The company declared a quarterly dividend of 50 cents per share."
                ]
            }
        ]
    },
    {
        en: "Division",
        phonetic: "[dəˋvɪʒən]",
        details: [
            { 
                pos: "n.", 
                cn: "部門、分配、除法", 
                examples: [
                    "He works in the sales division.",
                    "The division of profits was agreed upon by all partners."
                ]
            }
        ]
    },
    {
        en: "Document",
        phonetic: "[ˋdɑkjəmənt]",
        details: [
            { 
                pos: "n.", 
                cn: "文件、公文", 
                examples: [
                    "Please sign the document at the bottom.",
                    "Keep all important documents in a safe place."
                ]
            },
            { 
                pos: "v.", 
                cn: "記錄、記載", 
                forms: "documents / documented / documented",
                examples: [
                    "The study documents the effects of the new drug.",
                    "His career is well documented in the biography."
                ]
            }
        ]
    },
    {
        en: "Domestic",
        phonetic: "[dəˋmɛstɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "國內的、家庭的", 
                examples: [
                    "Domestic sales have increased this quarter.",
                    "The airline operates both domestic and international flights."
                ]
            }
        ]
    },
    {
        en: "Dominate",
        phonetic: "[ˋdɑmə͵net]",
        details: [
            { 
                pos: "v.", 
                cn: "支配、在...中佔主要地位", 
                forms: "dominates / dominated / dominated",
                examples: [
                    "The company dominates the local market.",
                    "Sports news dominated the headlines."
                ]
            }
        ]
    },
    {
        en: "Donate",
        phonetic: "[ˋdonet]",
        details: [
            { 
                pos: "v.", 
                cn: "捐贈、捐獻", 
                forms: "donates / donated / donated",
                examples: [
                    "He donated a large sum of money to the hospital.",
                    "We encourage employees to donate blood."
                ]
            }
        ]
    },
    {
        en: "Draft",
        phonetic: "[dræft]",
        details: [
            { 
                pos: "n.", 
                cn: "草稿、匯票", 
                examples: [
                    "This is just a rough draft of the speech.",
                    "Payment was made by bank draft."
                ]
            },
            { 
                pos: "v.", 
                cn: "起草、徵兵", 
                forms: "drafts / drafted / drafted",
                examples: [
                    "Lawyers are drafting the new contract.",
                    "He was drafted into the army."
                ]
            }
        ]
    },
    {
        en: "Dramatic",
        phonetic: "[drəˋmætɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "急劇的、戲劇性的", 
                examples: [
                    "There has been a dramatic increase in sales.",
                    "The changes produced dramatic results."
                ]
            }
        ]
    },
    {
        en: "Drastic",
        phonetic: "[ˋdræstɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "激烈的、嚴厲的", 
                examples: [
                    "Drastic measures are needed to cut costs.",
                    "The company underwent a drastic restructuring."
                ]
            }
        ]
    },
    {
        en: "Draw",
        phonetic: "[drɔ]",
        details: [
            { 
                pos: "v.", 
                cn: "吸引、提取(錢)、畫", 
                forms: "draws / drew / drawn",
                examples: [
                    "The exhibition drew a large crowd.",
                    "I need to draw some money from the ATM."
                ]
            }
        ]
    },
    {
        en: "Due",
        phonetic: "[dju]",
        details: [
            { 
                pos: "adj.", 
                cn: "到期的、預定的、應支付的", 
                examples: [
                    "The report is due next Monday.",
                    "The train is due to arrive at 10:30."
                ]
            }
        ]
    },
    {
        en: "Duplicate",
        phonetic: "[ˋdjupləkɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "複製、複印", 
                forms: "duplicates / duplicated / duplicated",
                examples: [
                    "Please duplicate this key for me.",
                    "Do not duplicate copyrighted material."
                ]
            },
            { 
                pos: "n.", 
                cn: "複本、複製品", 
                examples: [
                    "Make a duplicate of the invoice for your records.",
                    "Is this a duplicate or the original?"
                ]
            }
        ]
    },
    {
        en: "Durable",
        phonetic: "[ˋdjʊrəb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "耐用的、持久的", 
                examples: [
                    "This fabric is very durable and easy to clean.",
                    "We need to invest in durable equipment."
                ]
            }
        ]
    },
    {
        en: "Duration",
        phonetic: "[djuˋreʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "持續期間", 
                examples: [
                    "You must stay seated for the duration of the flight.",
                    "The duration of the contract is two years."
                ]
            }
        ]
    },
    {
        en: "Duty",
        phonetic: "[ˋdjutɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "職責、關稅", 
                examples: [
                    "It is my duty to report any suspicious activity.",
                    "Duty-free goods are sold at the airport."
                ]
            }
        ]
    },
    {
        en: "Dynamic",
        phonetic: "[daɪˋnæmɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "有活力的、動態的", 
                examples: [
                    "He is a dynamic leader with great vision.",
                    "The market is dynamic and constantly changing."
                ]
            }
        ]
    },
    {
        en: "Eager",
        phonetic: "[ˋigɚ]",
        details: [
            { 
                pos: "adj.", 
                cn: "渴望的、熱切的", 
                examples: [
                    "She is eager to learn new skills.",
                    "Customers are eager for the new product launch."
                ]
            }
        ]
    },
    {
        en: "Earnings",
        phonetic: "[ˋɝnɪŋz]",
        details: [
            { 
                pos: "n.", 
                cn: "收益、所得(常複數)", 
                examples: [
                    "The company reported higher earnings this quarter.",
                    "Average earnings have increased by 5%."
                ]
            }
        ]
    },
    {
        en: "Ease",
        phonetic: "[iz]",
        details: [
            { 
                pos: "n.", 
                cn: "容易、舒適", 
                examples: [
                    "He passed the exam with ease.",
                    "The medicine brought him immediate ease from pain."
                ]
            },
            { 
                pos: "v.", 
                cn: "減輕、緩和", 
                forms: "eases / eased / eased",
                examples: [
                    "The central bank eased interest rates.",
                    "This cream will help ease the itching."
                ]
            }
        ]
    },{
        en: "Economical",
        phonetic: "[͵ikəˋnɑmɪk!]",
        details: [
            { 
                pos: "adj.", 
                cn: "經濟的、節約的", 
                examples: [
                    "It is more economical to buy in bulk.",
                    "This car is very economical on fuel."
                ]
            }
        ]
    },
    {
        en: "Economy",
        phonetic: "[ɪˋkɑnəmɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "經濟、節約", 
                examples: [
                    "The country's economy is growing steadily.",
                    "We must practice strict economy in our spending."
                ]
            }
        ]
    },
    {
        en: "Edit",
        phonetic: "[ˋɛdɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "編輯、校訂", 
                forms: "edits / edited / edited",
                examples: [
                    "She edits the company newsletter.",
                    "The film was edited to shorten the runtime."
                ]
            }
        ]
    },
    {
        en: "Effect",
        phonetic: "[ɪˋfɛkt]",
        details: [
            { 
                pos: "n.", 
                cn: "效果、影響", 
                examples: [
                    "The new law will have a significant effect on small businesses.",
                    "The medication had an immediate effect."
                ]
            }
        ]
    },
    {
        en: "Effective",
        phonetic: "[ɪˋfɛktɪv]",
        details: [
            { 
                pos: "adj.", 
                cn: "有效的、生效的", 
                examples: [
                    "This is a simple but effective solution.",
                    "The new rates become effective next month."
                ]
            }
        ]
    },
    {
        en: "Efficient",
        phonetic: "[ɪˋfɪʃənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "有效率的", 
                examples: [
                    "He is an efficient worker who never wastes time.",
                    "We need a more efficient way to process orders."
                ]
            }
        ]
    },
    {
        en: "Elaborate",
        phonetic: "[ɪˋlæbə͵ret]",
        details: [
            { 
                pos: "v.", 
                cn: "詳盡說明", 
                forms: "elaborates / elaborated / elaborated",
                examples: [
                    "Can you elaborate on your plan?",
                    "He refused to elaborate further."
                ]
            },
            { 
                pos: "adj.", 
                cn: "精心的、詳盡的", 
                examples: [
                    "They made elaborate preparations for the party.",
                    "The design is very elaborate."
                ]
            }
        ]
    },
    {
        en: "Element",
        phonetic: "[ˋɛləmənt]",
        details: [
            { 
                pos: "n.", 
                cn: "要素、成分", 
                examples: [
                    "Trust is a key element of a successful partnership.",
                    "There is an element of risk in every investment."
                ]
            }
        ]
    },
    {
        en: "Eligible",
        phonetic: "[ˋɛlɪdʒəb!]",
        details: [
            { 
                pos: "adj.", 
                cn: "有資格的、合適的", 
                examples: [
                    "Only citizens are eligible to vote.",
                    "You may be eligible for a discount if you book early."
                ]
            }
        ]
    },
    {
        en: "Eliminate",
        phonetic: "[ɪˋlɪmə͵net]",
        details: [
            { 
                pos: "v.", 
                cn: "消除、淘汰", 
                forms: "eliminates / eliminated / eliminated",
                examples: [
                    "We must eliminate unnecessary waste.",
                    "Our team was eliminated in the first round."
                ]
            }
        ]
    },
    {
        en: "Embark",
        phonetic: "[ɪmˋbɑrk]",
        details: [
            { 
                pos: "v.", 
                cn: "著手、上船(或飛機)", 
                forms: "embarks / embarked / embarked",
                examples: [
                    "We are embarking on a new project.",
                    "Passengers must embark by noon."
                ]
            }
        ]
    },
    {
        en: "Emergency",
        phonetic: "[ɪˋmɝdʒənsɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "緊急狀況", 
                examples: [
                    "In case of emergency, break the glass.",
                    "The pilot made an emergency landing."
                ]
            }
        ]
    },
    {
        en: "Emphasis",
        phonetic: "[ˋɛmfəsɪs]",
        details: [
            { 
                pos: "n.", 
                cn: "強調、重點", 
                examples: [
                    "The school places great emphasis on discipline.",
                    "There was a shift of emphasis in the report."
                ]
            }
        ]
    },
    {
        en: "Emphasize",
        phonetic: "[ˋɛmfə͵saɪz]",
        details: [
            { 
                pos: "v.", 
                cn: "強調", 
                forms: "emphasizes / emphasized / emphasized",
                examples: [
                    "I want to emphasize the importance of safety.",
                    "He emphasized that the plan was just a draft."
                ]
            }
        ]
    },
    {
        en: "Employ",
        phonetic: "[ɪmˋplɔɪ]",
        details: [
            { 
                pos: "v.", 
                cn: "雇用、使用", 
                forms: "employs / employed / employed",
                examples: [
                    "The factory employs 500 people.",
                    "We employ the latest technology in our products."
                ]
            }
        ]
    },
    {
        en: "Employee",
        phonetic: "[͵ɛmplɔɪˋi]",
        details: [
            { 
                pos: "n.", 
                cn: "員工", 
                examples: [
                    "The company has over 1,000 employees.",
                    "She was named Employee of the Month."
                ]
            }
        ]
    },
    {
        en: "Employer",
        phonetic: "[ɪmˋplɔɪɚ]",
        details: [
            { 
                pos: "n.", 
                cn: "雇主", 
                examples: [
                    "His employer pays him a good salary.",
                    "Employers are required to provide a safe workplace."
                ]
            }
        ]
    },
    {
        en: "Enable",
        phonetic: "[ɪnˋeb!]",
        details: [
            { 
                pos: "v.", 
                cn: "使能夠", 
                forms: "enables / enabled / enabled",
                examples: [
                    "This money will enable me to buy a house.",
                    "The software enables you to access data remotely."
                ]
            }
        ]
    },
    {
        en: "Enclose",
        phonetic: "[ɪnˋkloz]",
        details: [
            { 
                pos: "v.", 
                cn: "隨函附上、圍住", 
                forms: "encloses / enclosed / enclosed",
                examples: [
                    "Please enclose a check with your order.",
                    "The garden is enclosed by a high wall."
                ]
            }
        ]
    },
    {
        en: "Encounter",
        phonetic: "[ɪnˋkaʊntɚ]",
        details: [
            { 
                pos: "v.", 
                cn: "遭遇、遇到", 
                forms: "encounters / encountered / encountered",
                examples: [
                    "We encountered some difficulties during the project.",
                    "I encountered an old friend on the street."
                ]
            },
            { 
                pos: "n.", 
                cn: "相遇、遭遇", 
                examples: [
                    "It was a chance encounter.",
                    "His first encounter with the boss was awkward."
                ]
            }
        ]
    },{
        en: "Encourage",
        phonetic: "[ɪnˋkɝɪdʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "鼓勵、促進", 
                forms: "encourages / encouraged / encouraged",
                examples: [
                    "My parents encouraged me to pursue my dreams.",
                    "Lower taxes encourage investment."
                ]
            }
        ]
    },
    {
        en: "Endorse",
        phonetic: "[ɪnˋdɔrs]",
        details: [
            { 
                pos: "v.", 
                cn: "背書、贊同、(在支票背面)簽名", 
                forms: "endorses / endorsed / endorsed",
                examples: [
                    "The celebrity endorsed the new beauty product.",
                    "Please endorse the check before depositing it."
                ]
            }
        ]
    },
    {
        en: "Endure",
        phonetic: "[ɪnˋdjʊr]",
        details: [
            { 
                pos: "v.", 
                cn: "忍受、持續", 
                forms: "endures / endured / endured",
                examples: [
                    "He endured a lot of pain during his recovery.",
                    "Their friendship has endured for over twenty years."
                ]
            }
        ]
    },
    {
        en: "Enforce",
        phonetic: "[ɪnˋfɔrs]",
        details: [
            { 
                pos: "v.", 
                cn: "執行(法律)、實施", 
                forms: "enforces / enforced / enforced",
                examples: [
                    "The police are here to enforce the law.",
                    "It is difficult to enforce these new regulations."
                ]
            }
        ]
    },
    {
        en: "Engage",
        phonetic: "[ɪnˋgedʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "從事、訂婚、吸引", 
                forms: "engages / engaged / engaged",
                examples: [
                    "He is currently engaged in a dispute with his neighbor.",
                    "The book engaged my interest from the beginning."
                ]
            }
        ]
    },
    {
        en: "Enhance",
        phonetic: "[ɪnˋhæns]",
        details: [
            { 
                pos: "v.", 
                cn: "提高、增加、改善", 
                forms: "enhances / enhanced / enhanced",
                examples: [
                    "This software will enhance the image quality.",
                    "Good lighting can enhance the atmosphere of a room."
                ]
            }
        ]
    },
    {
        en: "Enlarge",
        phonetic: "[ɪnˋlɑrdʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "擴大、放大(照片)", 
                forms: "enlarges / enlarged / enlarged",
                examples: [
                    "We need to enlarge the parking lot.",
                    "Can you enlarge this photograph for me?"
                ]
            }
        ]
    },
    {
        en: "Enormous",
        phonetic: "[ɪˋnɔrməs]",
        details: [
            { 
                pos: "adj.", 
                cn: "巨大的、龐大的", 
                examples: [
                    "The project required an enormous amount of money.",
                    "They have made an enormous contribution to science."
                ]
            }
        ]
    },
    {
        en: "Enroll",
        phonetic: "[ɪnˋrol]",
        details: [
            { 
                pos: "v.", 
                cn: "註冊、登記", 
                forms: "enrolls / enrolled / enrolled",
                examples: [
                    "I decided to enroll in a cooking class.",
                    "Please enroll for the course by Friday."
                ]
            }
        ]
    },
    {
        en: "Ensure",
        phonetic: "[ɪnˋʃʊr]",
        details: [
            { 
                pos: "v.", 
                cn: "確保、保證", 
                forms: "ensures / ensured / ensured",
                examples: [
                    "Please ensure that all lights are turned off.",
                    "We must ensure the safety of our passengers."
                ]
            }
        ]
    },
    {
        en: "Entail",
        phonetic: "[ɪnˋtel]",
        details: [
            { 
                pos: "v.", 
                cn: "牽涉、需要", 
                forms: "entails / entailed / entailed",
                examples: [
                    "The job entails a lot of travel.",
                    "Repairing the roof will entail considerable expense."
                ]
            }
        ]
    },
    {
        en: "Enterprise",
        phonetic: "[ˋɛntɚ͵praɪz]",
        details: [
            { 
                pos: "n.", 
                cn: "企業、事業心", 
                examples: [
                    "This is a state-owned enterprise.",
                    "He showed great enterprise in starting his own business."
                ]
            }
        ]
    },
    {
        en: "Entertain",
        phonetic: "[͵ɛntɚˋten]",
        details: [
            { 
                pos: "v.", 
                cn: "招待、娛樂", 
                forms: "entertains / entertained / entertained",
                examples: [
                    "We often entertain clients at this restaurant.",
                    "The clown entertained the children for hours."
                ]
            }
        ]
    },
    {
        en: "Enthusiastic",
        phonetic: "[ɪn͵θjuzɪˋæstɪk]",
        details: [
            { 
                pos: "adj.", 
                cn: "熱情的、熱衷的", 
                examples: [
                    "She is very enthusiastic about her new job.",
                    "The audience gave him an enthusiastic welcome."
                ]
            }
        ]
    },
    {
        en: "Entire",
        phonetic: "[ɪnˋtaɪr]",
        details: [
            { 
                pos: "adj.", 
                cn: "全部的、整個的", 
                examples: [
                    "I spent the entire day cleaning the house.",
                    "The entire staff agreed to the proposal."
                ]
            }
        ]
    },
    {
        en: "Entitle",
        phonetic: "[ɪnˋtaɪt!]",
        details: [
            { 
                pos: "v.", 
                cn: "給...權利、給...題名", 
                forms: "entitles / entitled / entitled",
                examples: [
                    "This ticket entitles you to a free drink.",
                    "Employees are entitled to 20 days of paid leave."
                ]
            }
        ]
    },
    {
        en: "Entrance",
        phonetic: "[ˋɛntrəns]",
        details: [
            { 
                pos: "n.", 
                cn: "入口、進入許可", 
                examples: [
                    "The main entrance is around the corner.",
                    "Entrance to the museum is free on Sundays."
                ]
            }
        ]
    },
    {
        en: "Entrepreneur",
        phonetic: "[͵ɑntrəprəˋnɝ]",
        details: [
            { 
                pos: "n.", 
                cn: "企業家", 
                examples: [
                    "He is a successful entrepreneur in the tech industry.",
                    "Entrepreneurs take risks to start new businesses."
                ]
            }
        ]
    },
    {
        en: "Entry",
        phonetic: "[ˋɛntrɪ]",
        details: [
            { 
                pos: "n.", 
                cn: "進入、參賽作品、條目", 
                examples: [
                    "The winning entry will be displayed in the gallery.",
                    "Data entry is a tedious job."
                ]
            }
        ]
    },
    {
        en: "Environment",
        phonetic: "[ɪnˋvaɪrənmənt]",
        details: [
            { 
                pos: "n.", 
                cn: "環境", 
                examples: [
                    "We must protect the environment for future generations.",
                    "The office provides a friendly working environment."
                ]
            }
        ]
    },{
        en: "Equip",
        phonetic: "[ɪˋkwɪp]",
        details: [
            { 
                pos: "v.", 
                cn: "裝備、配備", 
                forms: "equips / equipped / equipped",
                examples: [
                    "The office is equipped with new computers.",
                    "We need to equip our staff with the necessary skills."
                ]
            }
        ]
    },
    {
        en: "Equivalent",
        phonetic: "[ɪˋkwɪvələnt]",
        details: [
            { 
                pos: "adj.", 
                cn: "相等的、等值的", 
                examples: [
                    "One dollar is equivalent to 100 cents.",
                    "His qualification is equivalent to a degree."
                ]
            },
            { 
                pos: "n.", 
                cn: "相等物、等價物", 
                examples: [
                    "There is no English equivalent for this word.",
                    "She earns the equivalent of $50,000 a year."
                ]
            }
        ]
    },
    {
        en: "Escort",
        phonetic: "[ɪˋskɔrt]",
        details: [
            { 
                pos: "v.", 
                cn: "護送、陪同", 
                forms: "escorts / escorted / escorted",
                examples: [
                    "Security guards escorted the VIP to his car.",
                    "Allow me to escort you to the door."
                ]
            },
            { 
                pos: "n.", 
                cn: "護衛、陪同者", 
                examples: [
                    "The president traveled with a police escort.",
                    "He hired an escort for the evening event."
                ]
            }
        ]
    },
    {
        en: "Essential",
        phonetic: "[ɪˋsɛnʃəl]",
        details: [
            { 
                pos: "adj.", 
                cn: "必要的、本質的", 
                examples: [
                    "Experience is essential for this job.",
                    "Water is essential to life."
                ]
            }
        ]
    },
    {
        en: "Establish",
        phonetic: "[əˋstæblɪʃ]",
        details: [
            { 
                pos: "v.", 
                cn: "建立、設立、證實", 
                forms: "establishes / established / established",
                examples: [
                    "The company was established in 1990.",
                    "We need to establish a good relationship with our clients."
                ]
            }
        ]
    },
    {
        en: "Estate",
        phonetic: "[ɪsˋtet]",
        details: [
            { 
                pos: "n.", 
                cn: "地產、財產、莊園", 
                examples: [
                    "He works in real estate.",
                    "She left her entire estate to her daughter."
                ]
            }
        ]
    },
    {
        en: "Estimate",
        phonetic: "[ˋɛstə͵met]",
        details: [
            { 
                pos: "v.", 
                cn: "估計、估價", 
                forms: "estimates / estimated / estimated",
                examples: [
                    "We estimated the cost at $500.",
                    "It is estimated that the project will take two years."
                ]
            },
            { 
                pos: "n.", 
                cn: "估價(單)、估計", 
                examples: [
                    "Can you give me a rough estimate of the price?",
                    "According to the latest estimates, sales are up."
                ]
            }
        ]
    },
    {
        en: "Evaluate",
        phonetic: "[ɪˋvæljʊ͵et]",
        details: [
            { 
                pos: "v.", 
                cn: "評估、評價", 
                forms: "evaluates / evaluated / evaluated",
                examples: [
                    "We need to evaluate the effectiveness of the campaign.",
                    "Employees are evaluated on their performance annually."
                ]
            }
        ]
    },
    {
        en: "Evidence",
        phonetic: "[ˋɛvədəns]",
        details: [
            { 
                pos: "n.", 
                cn: "證據、證詞", 
                examples: [
                    "There is no evidence of fraud.",
                    "The police are collecting evidence at the scene."
                ]
            }
        ]
    },
    {
        en: "Evident",
        phonetic: "[ˋɛvədənt]",
        details: [
            { 
                pos: "adj.", 
                cn: "明顯的", 
                examples: [
                    "It was evident that he was unhappy.",
                    "The success of the project is evident to everyone."
                ]
            }
        ]
    },
    {
        en: "Exaggerate",
        phonetic: "[ɪgˋzædʒə͵ret]",
        details: [
            { 
                pos: "v.", 
                cn: "誇張、誇大", 
                forms: "exaggerates / exaggerated / exaggerated",
                examples: [
                    "Don't exaggerate the problem; it's not that bad.",
                    "The media often exaggerates the risks."
                ]
            }
        ]
    },
    {
        en: "Examine",
        phonetic: "[ɪgˋzæmɪn]",
        details: [
            { 
                pos: "v.", 
                cn: "檢查、審查、測驗", 
                forms: "examines / examined / examined",
                examples: [
                    "Please examine the contract carefully before signing.",
                    "The doctor examined the patient."
                ]
            }
        ]
    },
    {
        en: "Exceed",
        phonetic: "[ɪkˋsid]",
        details: [
            { 
                pos: "v.", 
                cn: "超過、勝過", 
                forms: "exceeds / exceeded / exceeded",
                examples: [
                    "Sales exceeded our expectations this quarter.",
                    "Drivers who exceed the speed limit will be fined."
                ]
            }
        ]
    },
    {
        en: "Exception",
        phonetic: "[ɪkˋsɛpʃən]",
        details: [
            { 
                pos: "n.", 
                cn: "例外", 
                examples: [
                    "We made an exception for him because he was ill.",
                    "Everyone was late, with the exception of Mary."
                ]
            }
        ]
    },
    {
        en: "Excess",
        phonetic: "[ˋɛksɛs]",
        details: [
            { 
                pos: "n.", 
                cn: "過量、超過", 
                examples: [
                    "An excess of fat in your diet is unhealthy.",
                    "We have an excess of inventory this month."
                ]
            },
            { 
                pos: "adj.", 
                cn: "過量的、額外的", 
                examples: [
                    "You will be charged for excess baggage.",
                    "Pour off any excess liquid."
                ]
            }
        ]
    },
    {
        en: "Exchange",
        phonetic: "[ɪksˋtʃendʒ]",
        details: [
            { 
                pos: "v.", 
                cn: "交換、兌換", 
                forms: "exchanges / exchanged / exchanged",
                examples: [
                    "We exchanged business cards at the meeting.",
                    "I'd like to exchange these dollars for yen."
                ]
            },
            { 
                pos: "n.", 
                cn: "交換、交易所", 
                examples: [
                    "We had a frank exchange of views.",
                    "The stock exchange is closed today."
                ]
            }
        ]
    },
    {
        en: "Exclude",
        phonetic: "[ɪkˋsklud]",
        details: [
            { 
                pos: "v.", 
                cn: "排除、不包括", 
                forms: "excludes / excluded / excluded",
                examples: [
                    "The price excludes tax and service charges.",
                    "We cannot exclude the possibility of a mistake."
                ]
            }
        ]
    },
    {
        en: "Executive",
        phonetic: "[ɪgˋzɛkjʊtɪv]",
        details: [
            { 
                pos: "n.", 
                cn: "高階主管、行政部門", 
                examples: [
                    "He is a senior executive at a tech company.",
                    "The executive board meets monthly."
                ]
            },
            { 
                pos: "adj.", 
                cn: "執行的、行政的", 
                examples: [
                    "She has significant executive powers.",
                    "The executive decision was final."
                ]
            }
        ]
    },
    {
        en: "Exhibit",
        phonetic: "[ɪgˋzɪbɪt]",
        details: [
            { 
                pos: "v.", 
                cn: "展示、陳列", 
                forms: "exhibits / exhibited / exhibited",
                examples: [
                    "They will exhibit their new products at the trade fair.",
                    "He exhibited signs of stress."
                ]
            },
            { 
                pos: "n.", 
                cn: "展覽品、證據", 
                examples: [
                    "Please do not touch the exhibits.",
                    "Exhibit A is the weapon found at the scene."
                ]
            }
        ]
    },
    {
        en: "Expand",
        phonetic: "[ɪkˋspænd]",
        details: [
            { 
                pos: "v.", 
                cn: "擴張、展開", 
                forms: "expands / expanded / expanded",
                examples: [
                    "We plan to expand our business into Asia.",
                    "Water expands when it freezes."
                ]
            }
        ]
    },
        ],
        "TOEFL": {
"Astronomy": [
                {
                    en: "Celestial",
                    phonetic: "[sɪˋlɛstʃəl]",
                    root: "celest (heavenly 天上的) + ial",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "天體的、天空的", 
                            synonyms: "heavenly, astronomical, stellar",
                            examples: [
                                { en: "The sun, moon, and stars are all celestial bodies.", cn: "太陽、月亮和星星都是天體。" },
                                { en: "Ancient sailors used celestial navigation to find their way across the ocean.", cn: "古代水手使用天體導航在海洋中尋找方向。" },
                                { en: "Astronomy is the scientific study of celestial objects and phenomena.", cn: "天文學是對天體和天文現象的科學研究。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Orbit",
                    phonetic: "[ˋɔrbɪt]",
                    root: "orb (circle 圓圈/盤)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "軌道", 
                            synonyms: "path, course, trajectory",
                            examples: [
                                { en: "The satellite was launched into a stable orbit around the Earth.", cn: "衛星被發射進入繞地球的穩定軌道。" },
                                { en: "It takes 365 days for the Earth to complete one orbit around the Sun.", cn: "地球繞太陽運行一週需要 365 天。" },
                                { en: "The moon's orbit is elliptical rather than perfectly circular.", cn: "月球的軌道是橢圓形的，而不是完美的圓形。" }
                            ]
                        },
                        { 
                            pos: "v.", 
                            cn: "環繞軌道運行", 
                            forms: "orbits / orbited / orbited",
                            examples: [
                                { en: "Many communication satellites orbit the planet.", cn: "許多通訊衛星繞著地球運行。" },
                                { en: "The spacecraft will orbit Mars for two years to collect data.", cn: "太空船將繞行火星兩年以收集數據。" },
                                { en: "Electrons orbit the nucleus of an atom.", cn: "電子繞著原子核運行。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Eclipse",
                    phonetic: "[ɪˋklɪps]",
                    root: "ec (out) + leipein (leave 離開) -> to fail to appear",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "蝕 (日蝕、月蝕)", 
                            synonyms: "obscuration, blocking",
                            examples: [
                                { en: "A solar eclipse occurs when the moon passes between the sun and the earth.", cn: "當月球經過太陽和地球之間時，就會發生日蝕。" },
                                { en: "Never look directly at the sun during a solar eclipse.", cn: "在日蝕期間，切勿直視太陽。" },
                                { en: "Lunar eclipses can only happen during a full moon.", cn: "月蝕只能發生在滿月期間。" }
                            ]
                        },
                        { 
                            pos: "v.", 
                            cn: "遮蔽光線、使黯然失色", 
                            forms: "eclipses / eclipsed / eclipsed",
                            examples: [
                                { en: "The moon eclipsed the sun, causing darkness during the day.", cn: "月球遮蔽了太陽，導致白天出現黑暗。" },
                                { en: "His recent achievements have eclipsed his earlier success.", cn: "他最近的成就使他早期的成功黯然失色。" },
                                { en: "The scandal threatened to eclipse the candidate's campaign.", cn: "這醜聞威脅要掩蓋候選人的競選活動。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Meteorite",
                    phonetic: "[ˋmitɪər͵aɪt]",
                    root: "meta (high) + aero (air) + ite (rock/stone)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "隕石 (已掉落到地面的)", 
                            synonyms: "fallen star, meteoroid",
                            examples: [
                                { en: "Unlike a meteor, a meteorite survives its passage through the atmosphere and hits the ground.", cn: "與流星不同，隕石在通過大氣層後倖存並撞擊地面。" },
                                { en: "Scientists study meteorites to learn about the early solar system.", cn: "科學家研究隕石以了解早期太陽系。" },
                                { en: "A massive crater was formed by the impact of a meteorite.", cn: "一個巨大的隕石坑是由隕石撞擊形成的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Galaxy",
                    phonetic: "[ˋgæləksɪ]",
                    root: "gala (milk 乳汁 -> Milky Way)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "星系、銀河系", 
                            synonyms: "star system",
                            examples: [
                                { en: "The Milky Way is the galaxy that contains our solar system.", cn: "銀河系是包含我們太陽系的星系。" },
                                { en: "Astronomers estimate there are billions of galaxies in the universe.", cn: "天文學家估計宇宙中有數十億個星系。" },
                                { en: "Andromeda is the closest spiral galaxy to us.", cn: "仙女座星系是距離我們最近的螺旋星系。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Constellation",
                    phonetic: "[͵kɑnstəˋleʃən]",
                    root: "con (together) + stella (star 星星)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "星座、星群", 
                            synonyms: "star group, configuration",
                            examples: [
                                { en: "Orion is one of the most recognizable constellations in the night sky.", cn: "獵戶座是夜空中最容易辨認的星座之一。" },
                                { en: "Ancient cultures used constellations for navigation and storytelling.", cn: "古代文化利用星座來導航和講故事。" },
                                { en: "The constellations appear to move across the sky as the Earth rotates.", cn: "隨著地球自轉，星座似乎在天空中移動。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Comet",
                    phonetic: "[ˋkɑmɪt]",
                    root: "Latin 'cometa' (long-haired 長髮的 -> 彗尾)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "彗星", 
                            synonyms: "celestial body",
                            examples: [
                                { en: "A comet is often described as a dirty snowball made of ice and dust.", cn: "彗星常被形容為由冰和塵埃組成的髒雪球。" },
                                { en: "As a comet approaches the sun, it develops a glowing tail.", cn: "當彗星接近太陽時，它會產生發光的尾巴。" },
                                { en: "Halley's Comet is visible from Earth every 75 to 76 years.", cn: "哈雷彗星每 75 到 76 年從地球上可見一次。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Asteroid",
                    phonetic: "[ˋæstə͵rɔɪd]",
                    root: "aster (star) + oid (resembling 像...的)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "小行星", 
                            synonyms: "minor planet",
                            examples: [
                                { en: "Most asteroids are found in the asteroid belt between Mars and Jupiter.", cn: "大多數小行星發現於火星和木星之間的小行星帶。" },
                                { en: "The extinction of the dinosaurs is believed to have been caused by an asteroid impact.", cn: "恐龍的滅絕被認為是由小行星撞擊造成的。" },
                                { en: "Scientists are monitoring asteroids that could potentially hit Earth.", cn: "科學家正在監測可能撞擊地球的小行星。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Gravity",
                    phonetic: "[ˋgrævətɪ]",
                    root: "grav (heavy 重) + ity",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "重力、地心引力", 
                            synonyms: "attraction, force, pull",
                            examples: [
                                { en: "Gravity holds the planets in orbit around the sun.", cn: "重力使行星保持在繞太陽的軌道上。" },
                                { en: "Astronauts experience zero gravity when they are in space.", cn: "太空人在太空中會經歷零重力。" },
                                { en: "The gravity on the moon is one-sixth of that on Earth.", cn: "月球上的重力是地球的六分之一。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Atmosphere",
                    phonetic: "[ˋætməs͵fɪr]",
                    root: "atmos (vapor 蒸氣) + sphaira (sphere 球體)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "大氣層", 
                            synonyms: "air, sky, ozone",
                            examples: [
                                { en: "The Earth's atmosphere protects us from harmful solar radiation.", cn: "地球的大氣層保護我們免受有害的太陽輻射。" },
                                { en: "Mars has a very thin atmosphere compared to Earth.", cn: "與地球相比，火星的大氣層非常稀薄。" },
                                { en: "Meteors usually burn up upon entering the atmosphere.", cn: "流星通常在進入大氣層時燃燒殆盡。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Cosmos",
                    phonetic: "[ˋkɑzməs]",
                    root: "Greek 'kosmos' (order/world 秩序/世界)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "宇宙 (強調秩序與和諧)", 
                            synonyms: "universe, space",
                            examples: [
                                { en: "Cosmology is the study of the origin and development of the cosmos.", cn: "宇宙學是研究宇宙起源和發展的學科。" },
                                { en: "We are just a tiny speck in the vast cosmos.", cn: "我們只是浩瀚宇宙中的一個微小斑點。" },
                                { en: "The ancient Greeks viewed the cosmos as an orderly system.", cn: "古希臘人將宇宙視為一個有序的系統。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Nebula",
                    phonetic: "[ˋnɛbjələ]",
                    root: "Latin 'nebula' (mist/cloud 霧/雲)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "星雲 (複數 nebulae)", 
                            synonyms: "cloud of gas and dust",
                            examples: [
                                { en: "A nebula is a giant cloud of dust and gas in space.", cn: "星雲是太空中巨大的塵埃和氣體雲。" },
                                { en: "Stars are often born inside nebulae.", cn: "恆星通常誕生於星雲內部。" },
                                { en: "The Orion Nebula is visible to the naked eye.", cn: "獵戶座星雲是肉眼可見的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Supernova",
                    phonetic: "[͵supɚˋnovə]",
                    root: "super (above) + nova (new)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "超新星 (恆星爆炸)", 
                            synonyms: "stellar explosion",
                            examples: [
                                { en: "A supernova occurs when a star explodes at the end of its life.", cn: "超新星發生在恆星生命盡頭爆炸時。" },
                                { en: "The light from a supernova can outshine an entire galaxy.", cn: "超新星的光芒可以勝過整個星系。" },
                                { en: "Supernovae distribute elements like iron and carbon into space.", cn: "超新星將鐵和碳等元素散布到太空中。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Telescope",
                    phonetic: "[ˋtɛlə͵skop]",
                    root: "tele (far 遠) + skopein (to look 看)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "望遠鏡", 
                            synonyms: "optical instrument",
                            examples: [
                                { en: "Galileo was the first to use a telescope for astronomical observation.", cn: "伽利略是第一個使用望遠鏡進行天文觀測的人。" },
                                { en: "The Hubble Space Telescope has taken amazing images of deep space.", cn: "哈伯太空望遠鏡拍攝了深空的驚人影像。" },
                                { en: "Modern telescopes use mirrors instead of lenses to gather light.", cn: "現代望遠鏡使用鏡子而不是透鏡來聚集光線。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Axis",
                    phonetic: "[ˋæksɪs]",
                    root: "Latin 'axis' (axle 軸)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "軸、軸線", 
                            synonyms: "center line, pivot",
                            examples: [
                                { en: "The Earth rotates on its axis once every 24 hours.", cn: "地球每 24 小時繞其軸自轉一次。" },
                                { en: "The tilt of the Earth's axis causes the seasons.", cn: "地球軸的傾斜導致了季節的變化。" },
                                { en: "The planet's axis is tilted at an angle of 23.5 degrees.", cn: "這顆行星的軸傾斜了 23.5 度。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Latitude",
                    phonetic: "[ˋlætə͵tjud]",
                    root: "lat (wide 寬/廣)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "緯度", 
                            synonyms: "parallel",
                            examples: [
                                { en: "Regions at high latitudes receive less sunlight.", cn: "高緯度地區接收到的陽光較少。" },
                                { en: "The climate varies significantly depending on the latitude.", cn: "氣候隨緯度不同而有顯著變化。" },
                                { en: "Lines of latitude run parallel to the equator.", cn: "緯線與赤道平行。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Longitude",
                    phonetic: "[ˋlɑndʒə͵tjud]",
                    root: "long (long 長)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "經度", 
                            synonyms: "meridian",
                            examples: [
                                { en: "Longitude is measured in degrees east or west of the Prime Meridian.", cn: "經度是以本初子午線向東或向西的度數來測量的。" },
                                { en: "Sailors use longitude and latitude to determine their position.", cn: "水手使用經緯度來確定他們的位置。" },
                                { en: "The concept of longitude was crucial for maritime navigation.", cn: "經度的概念對海上航行至關重要。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Equator",
                    phonetic: "[ɪˋkwetɚ]",
                    root: "equi (equal 平等)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "赤道", 
                            synonyms: "central line",
                            examples: [
                                { en: "The equator divides the Earth into the Northern and Southern Hemispheres.", cn: "赤道將地球分為北半球和南半球。" },
                                { en: "Temperatures near the equator remain warm throughout the year.", cn: "赤道附近的氣溫全年保持溫暖。" },
                                { en: "Day and night are of approximately equal length at the equator.", cn: "在赤道，白天和黑夜的長度大約相等。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Hemisphere",
                    phonetic: "[ˋhɛməs͵fɪr]",
                    root: "hemi (half 半) + sphere (ball 球)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "半球 (地球或大腦)", 
                            synonyms: "half",
                            examples: [
                                { en: "Australia is located in the Southern Hemisphere.", cn: "澳洲位於南半球。" },
                                { en: "The left hemisphere of the brain controls language functions.", cn: "大腦左半球控制語言功能。" },
                                { en: "Winter in the Northern Hemisphere occurs when it is tilted away from the sun.", cn: "當北半球背向太陽傾斜時，就是冬天。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Lunar",
                    phonetic: "[ˋlunɚ]",
                    root: "Latin 'luna' (moon 月亮)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "月亮的、陰曆的", 
                            synonyms: "moony",
                            examples: [
                                { en: "The lunar surface is covered with craters.", cn: "月球表面佈滿了隕石坑。" },
                                { en: "Chinese New Year is based on the lunar calendar.", cn: "農曆新年是基於陰曆。" },
                                { en: "A lunar eclipse occurs when the Earth casts a shadow on the moon.", cn: "當地球將陰影投射在月球上時，就會發生月蝕。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Solar",
                    phonetic: "[ˋsolɚ]",
                    root: "Latin 'sol' (sun 太陽)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "太陽的", 
                            synonyms: "sun-related",
                            examples: [
                                { en: "Solar energy is a renewable source of power.", cn: "太陽能是一種可再生能源。" },
                                { en: "The solar system consists of the sun and the objects that orbit it.", cn: "太陽系由太陽及繞其運行的物體組成。" },
                                { en: "Solar flares can disrupt radio communications on Earth.", cn: "太陽閃焰會干擾地球上的無線電通訊。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Rotation",
                    phonetic: "[roˋteʃən]",
                    root: "rot (wheel 輪子/轉)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "自轉、旋轉", 
                            synonyms: "spinning, turning, revolution",
                            examples: [
                                { en: "The Earth's rotation causes day and night.", cn: "地球的自轉造成了晝夜更替。" },
                                { en: "It takes 24 hours for the Earth to complete one full rotation.", cn: "地球完成一次完整的自轉需要 24 小時。" },
                                { en: "The rotation of the tires ensures even wear.", cn: "輪胎的輪調確保磨損均勻。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Revolution",
                    phonetic: "[͵rɛvəˋluʃən]",
                    root: "re (back) + volu (roll 滾)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "公轉、革命", 
                            synonyms: "orbit, circuit, rebellion",
                            examples: [
                                { en: "The Earth makes one revolution around the sun every year.", cn: "地球每年繞太陽公轉一圈。" },
                                { en: "The Industrial Revolution changed how goods were produced.", cn: "工業革命改變了商品的生產方式。" },
                                { en: "Copernicus proposed that planets revolve around the sun.", cn: "哥白尼提出行星繞太陽運行的理論。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Satellite",
                    phonetic: "[ˋsæt!͵aɪt]",
                    root: "Latin 'satelles' (attendant 隨從)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "衛星 (天然或人造)", 
                            synonyms: "orbiter, spacecraft, moon",
                            examples: [
                                { en: "The moon is Earth's only natural satellite.", cn: "月球是地球唯一的天然衛星。" },
                                { en: "GPS relies on a network of satellites orbiting the Earth.", cn: "全球定位系統依賴繞地球運行的衛星網絡。" },
                                { en: "Weather satellites provide data for forecasting.", cn: "氣象衛星為天氣預報提供數據。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Magnitude",
                    phonetic: "[ˋmægnə͵tjud]",
                    root: "magn (great 大)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "[天文] 星等 (亮度)、震級、巨大", 
                            synonyms: "brightness, intensity, size",
                            examples: [
                                { en: "The star has a visual magnitude of 1.5.", cn: "這顆恆星的視星等為 1.5。" },
                                { en: "An earthquake of magnitude 7.0 struck the region.", cn: "該地區發生了規模 7.0 的地震。" },
                                { en: "They didn't realize the sheer magnitude of the problem.", cn: "他們沒有意識到問題的巨大規模。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Observatory",
                    phonetic: "[əbˋzɝvə͵torɪ]",
                    root: "ob (over) + serv (watch 看/守)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "天文台、觀測站", 
                            synonyms: "watchtower, station",
                            examples: [
                                { en: "The observatory is located on top of the mountain for clear skies.", cn: "天文台位於山頂以獲得晴朗的天空。" },
                                { en: "Astronomers at the observatory discovered a new comet.", cn: "天文台的天文學家發現了一顆新彗星。" },
                                { en: "The Greenwich Observatory marks the Prime Meridian.", cn: "格林威治天文台標誌著本初子午線。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Phase",
                    phonetic: "[fez]",
                    root: "Greek 'phasis' (appearance 外觀)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "(月亮/行星的) 盈虧、階段", 
                            synonyms: "stage, step, period",
                            examples: [
                                { en: "The moon goes through different phases each month.", cn: "月亮每個月都會經歷不同的盈虧階段。" },
                                { en: "We are entering the final phase of the project.", cn: "我們正進入專案的最後階段。" },
                                { en: "The new moon is the first phase of the lunar cycle.", cn: "新月是月球週期的第一階段。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Radiation",
                    phonetic: "[͵redɪˋeʃən]",
                    root: "radi (ray 光線/輻射)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "輻射", 
                            synonyms: "emission, rays",
                            examples: [
                                { en: "The ozone layer protects us from ultraviolet radiation.", cn: "臭氧層保護我們免受紫外線輻射。" },
                                { en: "High levels of radiation were detected near the reactor.", cn: "反應爐附近檢測到高水平的輻射。" },
                                { en: "Background radiation is present everywhere in the universe.", cn: "背景輻射存在於宇宙的每個角落。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Spectrum",
                    phonetic: "[ˋspɛktrəm]",
                    root: "spect (look 看/景象)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "光譜、範圍", 
                            synonyms: "range, scale, gamut",
                            examples: [
                                { en: "A prism breaks white light into a spectrum of colors.", cn: "稜鏡將白光分解成彩色光譜。" },
                                { en: "The survey covered a wide spectrum of opinions.", cn: "這項調查涵蓋了廣泛的意見。" },
                                { en: "Astronomers analyze the light spectrum of stars to determine their composition.", cn: "天文學家分析恆星的光譜以確定其組成。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Interstellar",
                    phonetic: "[͵ɪntɚˋstɛlɚ]",
                    root: "inter (between 之間) + stella (star 星星)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "星際的", 
                            synonyms: "cosmic, space",
                            examples: [
                                { en: "Interstellar space is the region between stars.", cn: "星際空間是恆星之間的區域。" },
                                { en: "The movie depicts interstellar travel through wormholes.", cn: "這部電影描繪了穿越蟲洞的星際旅行。" },
                                { en: "Dust and gas clouds are common in the interstellar medium.", cn: "塵埃和氣體雲在星際介質中很常見。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Terrestrial",
                    phonetic: "[təˋrɛstrɪəl]",
                    root: "terra (earth 地球/土地)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "類地的(行星)、陸地的、地球的", 
                            synonyms: "earthly, land-dwelling",
                            examples: [
                                { en: "Mercury, Venus, Earth, and Mars are terrestrial planets.", cn: "水星、金星、地球和火星是類地行星。" },
                                { en: "Terrestrial animals live on land rather than in water.", cn: "陸生動物生活在陸地上而不是水中。" },
                                { en: "The search for extra-terrestrial life continues.", cn: "尋找地外生命的行動仍在繼續。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Jovian",
                    phonetic: "[ˋdʒovɪən]",
                    root: "Jove (Jupiter 木星)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "類木的(行星)、木星的", 
                            synonyms: "gas giant",
                            examples: [
                                { en: "Jupiter and Saturn are examples of Jovian planets.", cn: "木星和土星是類木行星的例子。" },
                                { en: "Jovian planets are primarily composed of gas.", cn: "類木行星主要由氣體組成。" },
                                { en: "These planets are much larger than terrestrial planets.", cn: "這些行星比類地行星大得多。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Debris",
                    phonetic: "[dəˋbri]",
                    root: "French 'débris' (broken 破碎)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "殘骸、碎片、垃圾", 
                            synonyms: "rubble, wreckage, waste",
                            examples: [
                                { en: "Space debris poses a threat to satellites.", cn: "太空垃圾對衛星構成威脅。" },
                                { en: "The explosion scattered debris over a wide area.", cn: "爆炸將碎片散佈在廣大區域。" },
                                { en: "After the storm, the streets were filled with debris.", cn: "暴風雨過後，街道上滿是殘骸。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Composition",
                    phonetic: "[͵kɑmpəˋzɪʃən]",
                    root: "com (together) + pos (put 放)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "組成、成分、作文", 
                            synonyms: "structure, constitution, makeup",
                            examples: [
                                { en: "We studied the chemical composition of the soil.", cn: "我們研究了土壤的化學成分。" },
                                { en: "The composition of the atmosphere is mainly nitrogen and oxygen.", cn: "大氣的成分主要是氮氣和氧氣。" },
                                { en: "Mozart began writing musical compositions at a young age.", cn: "莫札特很小就開始創作音樂作品。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Velocity",
                    phonetic: "[vəˋlɑsətɪ]",
                    root: "veloc (swift 快/速)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "速度、速率", 
                            synonyms: "speed, pace, rate",
                            examples: [
                                { en: "Light travels at a velocity of approximately 300,000 km/s.", cn: "光以每秒約 30 萬公里的速度傳播。" },
                                { en: "Escape velocity is the speed needed to break free from a planet's gravity.", cn: "逃逸速度是擺脫行星重力所需的速度。" },
                                { en: "The velocity of the wind increased during the storm.", cn: "風速在暴風雨期間增加了。" }
                            ]
                        }
                    ]
                }
            ],
            "Biology": [
                {
                    en: "Photosynthesis",
                    phonetic: "[͵fotəˋsɪnθəsɪs]",
                    root: "photo (light 光) + synthesis (putting together 合成)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "光合作用", 
                            synonyms: "solar synthesis",
                            examples: [
                                { en: "Photosynthesis is the process by which plants make their own food.", cn: "光合作用是植物製造自己食物的過程。" },
                                { en: "Sunlight, water, and carbon dioxide are necessary for photosynthesis.", cn: "陽光、水和二氧化碳是光合作用所必需的。" },
                                { en: "Oxygen is released as a byproduct of photosynthesis.", cn: "氧氣作為光合作用的副產品被釋放出來。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Metabolism",
                    phonetic: "[məˋtæb!͵ɪzəm]",
                    root: "meta (change 變化) + bol (throw 投/轉化)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "新陳代謝", 
                            synonyms: "bodily process",
                            examples: [
                                { en: "Exercise can help speed up your metabolism.", cn: "運動有助於加速你的新陳代謝。" },
                                { en: "Small animals often have a faster metabolism than large ones.", cn: "小動物的新陳代謝通常比大動物快。" },
                                { en: "The drug slows down the body's metabolism.", cn: "這種藥物會減緩身體的新陳代謝。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Organism",
                    phonetic: "[ˋɔrgən͵ɪzəm]",
                    root: "organ (tool/organ 器官) + ism",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "生物、有機體", 
                            synonyms: "living thing, creature, entity",
                            examples: [
                                { en: "A single-celled organism is too small to be seen with the naked eye.", cn: "單細胞生物太小，肉眼無法看見。" },
                                { en: "All living organisms need energy to survive.", cn: "所有生物都需要能量才能生存。" },
                                { en: "The coral reef is home to thousands of marine organisms.", cn: "珊瑚礁是數千種海洋生物的家園。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Genetic",
                    phonetic: "[dʒəˋnɛtɪk]",
                    root: "gen (birth/produce 產生/出生)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "基因的、遺傳的", 
                            synonyms: "hereditary, inherited",
                            examples: [
                                { en: "Eye color is determined by genetic factors.", cn: "眼睛的顏色取決於遺傳因素。" },
                                { en: "Scientists are studying the genetic code of the virus.", cn: "科學家正在研究該病毒的遺傳密碼。" },
                                { en: "There is a genetic predisposition to certain diseases.", cn: "某些疾病有遺傳易感性。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Evolution",
                    phonetic: "[͵ɛvəˋluʃən]",
                    root: "e (out) + volu (roll 滾/轉)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "演化、進化", 
                            synonyms: "development, progression, adaptation",
                            examples: [
                                { en: "Darwin proposed the theory of evolution by natural selection.", cn: "達爾文提出了天擇演化論。" },
                                { en: "The evolution of the horse is well documented in the fossil record.", cn: "馬的演化在化石記錄中有詳細記載。" },
                                { en: "We are studying the evolution of language.", cn: "我們正在研究語言的演變。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Ecosystem",
                    phonetic: "[ˋiko͵sɪstəm]",
                    root: "eco (house/environment 環境) + system",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "生態系統", 
                            synonyms: "environment, biological community",
                            examples: [
                                { en: "Pollution can cause severe damage to the fragile ecosystem.", cn: "污染會對脆弱的生態系統造成嚴重破壞。" },
                                { en: "Every species plays a role in balancing the ecosystem.", cn: "每個物種都在平衡生態系統中發揮作用。" },
                                { en: "The rainforest is a complex and diverse ecosystem.", cn: "雨林是一個複雜且多樣的生態系統。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Predator",
                    phonetic: "[ˋprɛdətɚ]",
                    root: "prey (plunder 掠奪/獵物)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "掠食者、捕食性動物", 
                            synonyms: "hunter, carnivore",
                            examples: [
                                { en: "Lions are apex predators in the African savanna.", cn: "獅子是非洲草原上的頂級掠食者。" },
                                { en: "The owl is a nocturnal predator that hunts mice.", cn: "貓頭鷹是一種捕食老鼠的夜行性掠食者。" },
                                { en: "Prey animals have evolved various defenses against predators.", cn: "獵物動物已經演化出各種防禦掠食者的機制。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Mammal",
                    phonetic: "[ˋmæm!]",
                    root: "mamma (breast 乳房)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "哺乳動物", 
                            synonyms: "warm-blooded vertebrate",
                            examples: [
                                { en: "Whales are mammals, not fish.", cn: "鯨魚是哺乳動物，不是魚。" },
                                { en: "Most mammals give birth to live young.", cn: "大多數哺乳動物是胎生的。" },
                                { en: "Mammals are characterized by having hair and producing milk.", cn: "哺乳動物的特徵是有毛髮並能分泌乳汁。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Reptile",
                    phonetic: "[ˋrɛptɪl]",
                    root: "rept (crawl 爬行)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "爬行動物", 
                            synonyms: "cold-blooded vertebrate",
                            examples: [
                                { en: "Snakes, lizards, and turtles are all reptiles.", cn: "蛇、蜥蜴和烏龜都是爬行動物。" },
                                { en: "Reptiles rely on the environment to regulate their body temperature.", cn: "爬行動物依靠環境來調節體溫。" },
                                { en: "Most reptiles lay eggs with tough shells.", cn: "大多數爬行動物產下帶有堅硬外殼的蛋。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Amphibian",
                    phonetic: "[æmˋfɪbɪən]",
                    root: "amphi (both 兩者) + bios (life 生命)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "兩棲動物", 
                            synonyms: "frog, salamander",
                            examples: [
                                { en: "Frogs and toads are common amphibians.", cn: "青蛙和蟾蜍是常見的兩棲動物。" },
                                { en: "Amphibians can live both in water and on land.", cn: "兩棲動物既可以生活在水中，也可以生活在陸地上。" },
                                { en: "Pollution makes amphibians vulnerable to extinction.", cn: "污染使兩棲動物容易滅絕。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Species",
                    phonetic: "[ˋspiʃiz]",
                    root: "spec (look/kind 種類/外觀)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "物種 (單複數同形)", 
                            synonyms: "type, breed, variety",
                            examples: [
                                { en: "The giant panda is an endangered species.", cn: "大貓熊是瀕危物種。" },
                                { en: "Darwin studied the origin of species.", cn: "達爾文研究了物種的起源。" },
                                { en: "There are thousands of species of beetles.", cn: "有數千種甲蟲物種。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Habitat",
                    phonetic: "[ˋhæbə͵tæt]",
                    root: "habit (dwell 居住)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "棲息地", 
                            synonyms: "home, environment, territory",
                            examples: [
                                { en: "The polar bear's natural habitat is the Arctic.", cn: "北極熊的自然棲息地是北極。" },
                                { en: "Deforestation is destroying the habitat of many birds.", cn: "森林砍伐正在破壞許多鳥類的棲息地。" },
                                { en: "We must protect the habitat of wild animals.", cn: "我們必須保護野生動物的棲息地。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Adaptation",
                    phonetic: "[͵ædæpˋteʃən]",
                    root: "ad (to) + apt (fit 適合)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "適應、適應性特徵", 
                            synonyms: "adjustment, modification",
                            examples: [
                                { en: "Camouflage is an adaptation that helps insects hide from predators.", cn: "偽裝是一種幫助昆蟲躲避掠食者的適應性特徵。" },
                                { en: "Adaptation to changing climates is essential for survival.", cn: "適應氣候變化對生存至關重要。" },
                                { en: "The thick fur is an adaptation to the cold weather.", cn: "厚厚的毛皮是對寒冷天氣的一種適應。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Mutation",
                    phonetic: "[mjuˋteʃən]",
                    root: "mut (change 改變)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "突變、變異", 
                            synonyms: "alteration, variation, change",
                            examples: [
                                { en: "Genetic mutation can sometimes lead to new traits.", cn: "基因突變有時會導致新的特徵。" },
                                { en: "Radiation can cause harmful mutations in DNA.", cn: "輻射會導致 DNA 有害的突變。" },
                                { en: "Not all mutations are harmful; some are beneficial.", cn: "並非所有突變都是有害的；有些是有益的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Chromosome",
                    phonetic: "[ˋkromə͵som]",
                    root: "chromo (color 顏色) + some (body 體)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "染色體", 
                            synonyms: "genetic structure",
                            examples: [
                                { en: "Humans typically have 23 pairs of chromosomes.", cn: "人類通常有 23 對染色體。" },
                                { en: "The X and Y chromosomes determine the sex of the offspring.", cn: "X 和 Y 染色體決定後代的性別。" },
                                { en: "Down syndrome is caused by an extra copy of chromosome 21.", cn: "唐氏症是由第 21 對染色體多出一條引起的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Cell",
                    phonetic: "[sɛl]",
                    root: "Latin 'cella' (small room 小房間)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "細胞", 
                            synonyms: "basic unit, microorganism",
                            examples: [
                                { en: "The cell is the basic structural and functional unit of all living organisms.", cn: "細胞是所有生物體的基本結構和功能單位。" },
                                { en: "Plant cells have a rigid cell wall, unlike animal cells.", cn: "與動物細胞不同，植物細胞具有堅硬的細胞壁。" },
                                { en: "Red blood cells carry oxygen throughout the body.", cn: "紅血球將氧氣輸送到全身。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Tissue",
                    phonetic: "[ˋtɪʃʊ]",
                    root: "texere (weave 編織)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "(動植物的) 組織", 
                            synonyms: "matter, material",
                            examples: [
                                { en: "Muscle tissue allows the body to move.", cn: "肌肉組織使身體能夠運動。" },
                                { en: "The virus attacks the nerve tissue in the brain.", cn: "病毒攻擊大腦中的神經組織。" },
                                { en: "Damage to the heart tissue can lead to failure.", cn: "心臟組織的損傷可能導致心臟衰竭。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Membrane",
                    phonetic: "[ˋmɛmbren]",
                    root: "membrum (limb/member 肢體/部分)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "膜、薄膜 (細胞膜)", 
                            synonyms: "layer, skin, film",
                            examples: [
                                { en: "The cell membrane controls what enters and exits the cell.", cn: "細胞膜控制物質進出細胞。" },
                                { en: "This artificial membrane is used for water filtration.", cn: "這種人造膜用於水過濾。" },
                                { en: "Mucous membranes line the mouth and nose.", cn: "黏膜覆蓋在口腔和鼻子內部。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Enzyme",
                    phonetic: "[ˋɛnzaɪm]",
                    root: "en (in) + zyme (leaven 酵母)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "酵素、酶", 
                            synonyms: "catalyst",
                            examples: [
                                { en: "Enzymes accelerate chemical reactions in the body.", cn: "酵素加速體內的化學反應。" },
                                { en: "Saliva contains enzymes that begin the digestion of food.", cn: "唾液含有開始消化食物的酵素。" },
                                { en: "High temperatures can destroy the structure of enzymes.", cn: "高溫會破壞酵素的結構。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Hormone",
                    phonetic: "[ˋhɔrmon]",
                    root: "Greek 'hormon' (setting in motion 啟動)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "荷爾蒙、激素", 
                            synonyms: "chemical messenger",
                            examples: [
                                { en: "Insulin is a hormone that regulates blood sugar levels.", cn: "胰島素是一種調節血糖水平的荷爾蒙。" },
                                { en: "Hormones play a crucial role in growth and development.", cn: "荷爾蒙在生長和發育中扮演關鍵角色。" },
                                { en: "Stress causes the body to release the hormone cortisol.", cn: "壓力會導致身體釋放皮質醇荷爾蒙。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Protein",
                    phonetic: "[ˋprotiɪn]",
                    root: "proteios (primary 第一/首要)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "蛋白質", 
                            synonyms: "organic compound",
                            examples: [
                                { en: "Proteins are essential for building muscle and repairing tissues.", cn: "蛋白質對於建立肌肉和修復組織至關重要。" },
                                { en: "Fish, eggs, and beans are good sources of protein.", cn: "魚、蛋和豆類是良好的蛋白質來源。" },
                                { en: "Enzymes are a type of protein.", cn: "酵素是蛋白質的一種。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Nutrient",
                    phonetic: "[ˋnjutrɪənt]",
                    root: "nutri (feed 餵養)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "營養素、養分", 
                            synonyms: "nourishment, food",
                            examples: [
                                { en: "Plants absorb nutrients from the soil through their roots.", cn: "植物通過根部從土壤中吸收養分。" },
                                { en: "A balanced diet provides all the necessary nutrients.", cn: "均衡的飲食提供所有必要的營養素。" },
                                { en: "Lack of essential nutrients can cause health problems.", cn: "缺乏必需營養素會導致健康問題。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Parasite",
                    phonetic: "[ˋpærə͵saɪt]",
                    root: "para (beside 旁邊) + sitos (food 食物)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "寄生蟲、寄生生物", 
                            synonyms: "leech, sponge",
                            examples: [
                                { en: "A parasite lives on or inside another organism and causes it harm.", cn: "寄生蟲生活在另一種生物體上或體內並對其造成傷害。" },
                                { en: "Fleas and ticks are common parasites on dogs.", cn: "跳蚤和壁蝨是狗身上常見的寄生蟲。" },
                                { en: "The cuckoo bird is a brood parasite that lays eggs in other birds' nests.", cn: "杜鵑鳥是一種巢寄生鳥類，會將蛋產在其他鳥類的巢中。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Host",
                    phonetic: "[host]",
                    root: "Latin 'hospes' (guest/host 客人/主人)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "[生物] 宿主", 
                            synonyms: "carrier",
                            examples: [
                                { en: "The parasite feeds on the blood of its host.", cn: "寄生蟲以宿主的血液為食。" },
                                { en: "Mosquitoes can transmit the virus from one host to another.", cn: "蚊子可以將病毒從一個宿主傳播到另一個宿主。" },
                                { en: "The tree acts as a host for various types of fungi.", cn: "這棵樹是各種真菌的宿主。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Symbiosis",
                    phonetic: "[͵sɪmbaɪˋosɪs]",
                    root: "syn (together) + bio (life)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "共生關係", 
                            synonyms: "coexistence, partnership",
                            examples: [
                                { en: "Symbiosis is a close relationship between two different species.", cn: "共生是兩種不同物種之間的密切關係。" },
                                { en: "Clownfish and sea anemones live in symbiosis.", cn: "小丑魚和海葵生活在共生關係中。" },
                                { en: "In mutualism, a type of symbiosis, both species benefit.", cn: "在互利共生這種共生類型中，兩個物種都受益。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Migration",
                    phonetic: "[maɪˋgreʃən]",
                    root: "migr (move 移動/遷徙)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "遷徙、移居", 
                            synonyms: "movement, journey, relocation",
                            examples: [
                                { en: "Bird migration is driven by changes in seasons and food availability.", cn: "鳥類遷徙是由季節變化和食物供應驅動的。" },
                                { en: "Scientists track the migration routes of whales.", cn: "科學家追蹤鯨魚的遷徙路線。" },
                                { en: "The mass migration of wildebeest is a spectacular sight.", cn: "牛羚的大規模遷徙是一個壯觀的景象。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Hibernate",
                    phonetic: "[ˋhaɪbɚ͵net]",
                    root: "Latin 'hibernus' (winter 冬天)",
                    details: [
                        { 
                            pos: "v.", 
                            cn: "冬眠", 
                            synonyms: "sleep, lie dormant",
                            examples: [
                                { en: "Bears hibernate during the cold winter months to conserve energy.", cn: "熊在寒冷的冬季冬眠以保存能量。" },
                                { en: "During hibernation, the animal's heart rate slows down significantly.", cn: "在冬眠期間，動物的心率顯著減慢。" },
                                { en: "Some insects also hibernate to survive the freezing temperatures.", cn: "一些昆蟲也通過冬眠來在冰凍的溫度下生存。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Extinction",
                    phonetic: "[ɪkˋstɪŋkʃən]",
                    root: "ex (out) + stinguere (quench 熄滅)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "滅絕、絕種", 
                            synonyms: "destruction, annihilation, death",
                            examples: [
                                { en: "Habitat loss is a leading cause of species extinction.", cn: "棲息地喪失是物種滅絕的主要原因。" },
                                { en: "Dinosaurs faced mass extinction 65 million years ago.", cn: "恐龍在 6500 萬年前面臨大規模滅絕。" },
                                { en: "Conservation efforts aim to prevent the extinction of rare animals.", cn: "保育工作的目標是防止珍稀動物滅絕。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Fossil",
                    phonetic: "[ˋfɑs!]",
                    root: "fossa (dug up 被挖掘出的)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "化石", 
                            synonyms: "relic, remains",
                            examples: [
                                { en: "Fossils provide evidence of life that existed millions of years ago.", cn: "化石提供了數百萬年前存在生命的證據。" },
                                { en: "We found a fossil of an ancient fish in the rock.", cn: "我們在岩石中發現了一條遠古魚類的化石。" },
                                { en: "Fossil fuels like coal and oil are formed from ancient plants.", cn: "煤和石油等化石燃料是由遠古植物形成的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Bacteria",
                    phonetic: "[bækˋtɪrɪə]",
                    root: "Greek 'bakterion' (small staff 小棒)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "細菌 (單數 bacterium)", 
                            synonyms: "germs, microbes",
                            examples: [
                                { en: "Some bacteria are harmful, but others are beneficial to digestion.", cn: "有些細菌有害，但有些對消化有益。" },
                                { en: "Antibiotics are used to treat infections caused by bacteria.", cn: "抗生素用於治療由細菌引起的感染。" },
                                { en: "Bacteria reproduce rapidly in warm, moist environments.", cn: "細菌在溫暖潮濕的環境中繁殖迅速。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Virus",
                    phonetic: "[ˋvaɪrəs]",
                    root: "Latin 'virus' (poison 毒)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "病毒", 
                            synonyms: "pathogen, bug",
                            examples: [
                                { en: "A virus needs a host cell to replicate itself.", cn: "病毒需要宿主細胞來複製自己。" },
                                { en: "The flu is caused by the influenza virus.", cn: "流感是由流感病毒引起的。" },
                                { en: "Vaccines stimulate the immune system to fight specific viruses.", cn: "疫苗刺激免疫系統對抗特定的病毒。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Immune",
                    phonetic: "[ɪˋmjun]",
                    root: "im (not) + munis (service/duty 義務/負擔)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "免疫的、免除的", 
                            synonyms: "resistant, exempt",
                            examples: [
                                { en: "The immune system protects the body from disease.", cn: "免疫系統保護身體免受疾病侵害。" },
                                { en: "Some people are naturally immune to certain infections.", cn: "有些人對某些感染具有天然免疫力。" },
                                { en: "No one is immune to the effects of aging.", cn: "沒有人能免受衰老的影響。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Reproduction",
                    phonetic: "[͵riprəˋdʌkʃən]",
                    root: "re (again) + produce",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "繁殖、複製", 
                            synonyms: "breeding, procreation, copy",
                            examples: [
                                { en: "Sexual reproduction involves the combination of genetic material.", cn: "有性繁殖涉及遺傳物質的結合。" },
                                { en: "Asexual reproduction allows a single organism to produce offspring.", cn: "無性繁殖允許單個生物產生後代。" },
                                { en: "This painting is a reproduction of the original masterpiece.", cn: "這幅畫是原作的複製品。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Offspring",
                    phonetic: "[ˋɔf͵sprɪŋ]",
                    root: "off + spring (originate 起源)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "後代、幼獸 (單複數同形)", 
                            synonyms: "descendant, young, progeny",
                            examples: [
                                { en: "Parents pass their genes to their offspring.", cn: "父母將基因傳給後代。" },
                                { en: "Many animals protect their offspring fiercely.", cn: "許多動物會兇猛地保護牠們的幼獸。" },
                                { en: "The offspring of a lion and a tiger is called a liger.", cn: "獅子和老虎的後代被稱為獅虎。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Diversity",
                    phonetic: "[daɪˋvɝsətɪ]",
                    root: "di (apart) + vert (turn 轉)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "多樣性", 
                            synonyms: "variety, assortment",
                            examples: [
                                { en: "Biodiversity refers to the variety of life in a particular ecosystem.", cn: "生物多樣性指的是特定生態系統中生命的多樣性。" },
                                { en: "Genetic diversity helps populations adapt to changing environments.", cn: "遺傳多樣性有助於種群適應變化的環境。" },
                                { en: "The rainforest is known for its incredible diversity of species.", cn: "雨林以其驚人的物種多樣性而聞名。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Herbivore",
                    phonetic: "[ˋhɝbə͵vɔr]",
                    root: "herb (plant 植物) + vor (eat 吃)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "食草動物", 
                            synonyms: "plant-eater",
                            examples: [
                                { en: "Herbivores have teeth adapted for grinding plants.", cn: "食草動物擁有適合研磨植物的牙齒。" },
                                { en: "Deer and cows are common examples of herbivores.", cn: "鹿和牛是食草動物的常見例子。" },
                                { en: "In the food chain, herbivores are primary consumers.", cn: "在食物鏈中，食草動物是初級消費者。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Carnivore",
                    phonetic: "[ˋkɑrnə͵vɔr]",
                    root: "carn (flesh 肉) + vor (eat 吃)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "食肉動物", 
                            synonyms: "meat-eater, predator",
                            examples: [
                                { en: "Tigers are powerful carnivores that hunt large prey.", cn: "老虎是獵捕大型獵物的強大食肉動物。" },
                                { en: "Most carnivores have sharp claws and teeth.", cn: "大多數食肉動物都有鋒利的爪子和牙齒。" },
                                { en: "Some plants, like the Venus flytrap, are actually carnivores.", cn: "有些植物，如捕蠅草，實際上是食肉的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Prey",
                    phonetic: "[pre]",
                    root: "Latin 'praeda' (booty/plunder 戰利品)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "獵物、被捕食者", 
                            synonyms: "victim, quarry",
                            examples: [
                                { en: "The eagle swooped down to snatch its prey.", cn: "老鷹俯衝下來抓取牠的獵物。" },
                                { en: "Rabbits are prey for many larger animals.", cn: "兔子是許多大型動物的獵物。" },
                                { en: "Prey animals often live in groups for protection.", cn: "被捕食動物通常群居以尋求保護。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Mimicry",
                    phonetic: "[ˋmɪmɪkrɪ]",
                    root: "mimic (imitate 模仿)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "擬態、模仿 (生物保護色)", 
                            synonyms: "imitation, camouflage",
                            examples: [
                                { en: "Mimicry helps some insects look like dangerous species to avoid being eaten.", cn: "擬態幫助某些昆蟲看起來像危險物種，以避免被吃掉。" },
                                { en: "The Viceroy butterfly uses mimicry to look like the poisonous Monarch.", cn: "副王蛺蝶利用擬態讓自己看起來像有毒的帝王斑蝶。" },
                                { en: "Batesian mimicry is a common survival strategy in nature.", cn: "貝氏擬態是自然界中常見的生存策略。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Camouflage",
                    phonetic: "[ˋkæmə͵flɑʒ]",
                    root: "French 'camoufler' (to disguise 偽裝)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "偽裝、保護色", 
                            synonyms: "disguise, concealment",
                            examples: [
                                { en: "The chameleon changes color as a form of camouflage.", cn: "變色龍改變顏色作為一種偽裝。" },
                                { en: "Soldiers wear green and brown uniforms for camouflage in the jungle.", cn: "士兵穿著綠色和棕色的制服以便在叢林中偽裝。" },
                                { en: "Stripes provide camouflage for zebras in the tall grass.", cn: "條紋為斑馬在高草叢中提供了偽裝。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Pollination",
                    phonetic: "[͵pɑləˋneʃən]",
                    root: "pollen (dust/flour 花粉/粉末)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "授粉", 
                            synonyms: "fertilization",
                            examples: [
                                { en: "Bees play a crucial role in the pollination of flowers.", cn: "蜜蜂在花朵授粉中扮演關鍵角色。" },
                                { en: "Wind pollination is common among grasses and trees.", cn: "風媒授粉在草類和樹木中很常見。" },
                                { en: "Without pollination, many crops would not produce fruit.", cn: "如果沒有授粉，許多農作物將無法結果。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Nectar",
                    phonetic: "[ˋnɛktɚ]",
                    root: "Greek 'nektar' (drink of the gods 神的飲品)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "花蜜", 
                            synonyms: "sweet liquid",
                            examples: [
                                { en: "Bees collect nectar to make honey.", cn: "蜜蜂採集花蜜來製作蜂蜜。" },
                                { en: "Hummingbirds feed primarily on nectar.", cn: "蜂鳥主要以花蜜為食。" },
                                { en: "Flowers produce nectar to attract pollinators.", cn: "花朵產生花蜜以吸引授粉者。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Dispersal",
                    phonetic: "[dɪˋspɝs!]",
                    root: "dis (apart) + spargere (scatter 散佈)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "散佈、傳播 (種子等)", 
                            synonyms: "scattering, distribution, spread",
                            examples: [
                                { en: "Seed dispersal can occur via wind, water, or animals.", cn: "種子散佈可以透過風、水或動物進行。" },
                                { en: "The dispersal of the population helped the species survive.", cn: "族群的擴散幫助了該物種的生存。" },
                                { en: "Birds aid in the dispersal of seeds by eating fruit.", cn: "鳥類通過吃水果來幫助種子散佈。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Nocturnal",
                    phonetic: "[nɑkˋtɝn!]",
                    root: "noct (night 夜晚)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "夜行性的", 
                            synonyms: "night-active",
                            examples: [
                                { en: "Owls and bats are nocturnal animals.", cn: "貓頭鷹和蝙蝠是夜行性動物。" },
                                { en: "Nocturnal animals have highly developed senses of hearing and smell.", cn: "夜行性動物有高度發達的聽覺和嗅覺。" },
                                { en: "It is rare to see a nocturnal creature during the day.", cn: "白天很少見到夜行性生物。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Larva",
                    phonetic: "[ˋlɑrvə]",
                    root: "Latin 'larva' (ghost/mask 鬼魂/面具)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "幼蟲 (複數 larvae)", 
                            synonyms: "grub, caterpillar",
                            examples: [
                                { en: "A caterpillar is the larva of a butterfly.", cn: "毛毛蟲是蝴蝶的幼蟲。" },
                                { en: "The larva feeds constantly before transforming into a pupa.", cn: "幼蟲在變成蛹之前會不斷進食。" },
                                { en: "Mosquito larvae live in standing water.", cn: "蚊子的幼蟲生活在積水中。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Vertebrate",
                    phonetic: "[ˋvɝtə͵bret]",
                    root: "vertebra (joint/backbone 脊椎)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "脊椎動物", 
                            synonyms: "animal with a backbone",
                            examples: [
                                { en: "Fish, amphibians, reptiles, birds, and mammals are all vertebrates.", cn: "魚類、兩棲類、爬行類、鳥類和哺乳類都是脊椎動物。" },
                                { en: "The defining characteristic of a vertebrate is its spinal column.", cn: "脊椎動物的定義特徵是其脊柱。" },
                                { en: "Vertebrates tend to have more complex nervous systems.", cn: "脊椎動物往往擁有更複雜的神經系統。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Invertebrate",
                    phonetic: "[ɪnˋvɝtə͵bret]",
                    root: "in (not) + vertebrate",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "無脊椎動物", 
                            synonyms: "creature without a backbone",
                            examples: [
                                { en: "Insects, spiders, and jellyfish are invertebrates.", cn: "昆蟲、蜘蛛和水母是無脊椎動物。" },
                                { en: "Invertebrates make up the vast majority of animal species.", cn: "無脊椎動物佔了動物物種的絕大多數。" },
                                { en: "Unlike vertebrates, invertebrates lack an internal skeleton.", cn: "與脊椎動物不同，無脊椎動物缺乏內部骨骼。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Excrete",
                    phonetic: "[ɪkˋskrit]",
                    root: "ex (out) + cernere (sift 篩選/排出)",
                    details: [
                        { 
                            pos: "v.", 
                            cn: "排泄、分泌", 
                            synonyms: "expel, eliminate, discharge",
                            examples: [
                                { en: "The kidneys help excrete waste products from the blood.", cn: "腎臟幫助從血液中排泄廢物。" },
                                { en: "Plants excrete oxygen as a waste product of photosynthesis.", cn: "植物排泄氧氣作為光合作用的廢物。" },
                                { en: "Sweat glands excrete moisture to cool the body.", cn: "汗腺分泌水分以冷卻身體。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Respiration",
                    phonetic: "[͵rɛspəˋreʃən]",
                    root: "re (again) + spirare (breathe 呼吸)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "呼吸 (作用)", 
                            synonyms: "breathing",
                            examples: [
                                { en: "Cellular respiration converts glucose into energy.", cn: "細胞呼吸將葡萄糖轉化為能量。" },
                                { en: "Plants engage in respiration at night when there is no light.", cn: "植物在沒有光線的夜間進行呼吸作用。" },
                                { en: "Fish use gills for respiration underwater.", cn: "魚在水下使用鰓進行呼吸。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Fertilization",
                    phonetic: "[͵fɝt!əˋzeʃən]",
                    root: "ferre (bear/produce 生產)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "受精、施肥", 
                            synonyms: "impregnation, pollination",
                            examples: [
                                { en: "Fertilization occurs when a sperm cell fuses with an egg cell.", cn: "當精子細胞與卵細胞結合時，就會發生受精。" },
                                { en: "External fertilization is common in fish and amphibians.", cn: "體外受精在魚類和兩棲動物中很常見。" },
                                { en: "Farmers use organic waste for the fertilization of soil.", cn: "農民使用有機廢物來給土壤施肥。" }
                            ]
                        }
                    ]
                }
            ],
            "Geography": [],
"Psychology": [
                {
                    en: "Cognitive",
                    phonetic: "[ˋkɑgnətɪv]",
                    root: "cogn (know 知道) + itive (形容詞)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "認知的、感知的", 
                            synonyms: "mental, intellectual, perceptual",
                            examples: [
                                { en: "Cognitive psychology focuses on how people perceive, learn, remember, and think.", cn: "認知心理學專注於人們如何感知、學習、記憶和思考。" },
                                { en: "Piaget's theory of cognitive development is fundamental in education.", cn: "皮亞傑的認知發展理論在教育中是基礎性的。" },
                                { en: "As we age, some cognitive functions may decline.", cn: "隨著我們變老，某些認知功能可能會衰退。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Subconscious",
                    phonetic: "[sʌbˋkɑnʃəs]",
                    root: "sub (under 下面) + conscious (意識)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "潛意識的", 
                            synonyms: "subliminal, unconscious",
                            examples: [
                                { en: "Her fear of dogs may stem from a subconscious memory.", cn: "她對狗的恐懼可能源於潛意識的記憶。" },
                                { en: "Advertisers often try to appeal to our subconscious desires.", cn: "廣告商經常試圖吸引我們的潛意識慾望。" },
                                { en: "He had a subconscious feeling that something was wrong.", cn: "他有一種潛意識的感覺，覺得有些不對勁。" }
                            ]
                        },
                        { 
                            pos: "n.", 
                            cn: "潛意識", 
                            examples: [
                                { en: "Dreams are often thought to be a window into the subconscious.", cn: "夢常被認為是通往潛意識的窗口。" },
                                { en: "The idea had been buried deep in his subconscious.", cn: "這個想法被深埋在他的潛意識裡。" },
                                { en: "Freud believed the subconscious drives much of our behavior.", cn: "佛洛伊德相信潛意識驅動了我們大部分的行為。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Stimulus",
                    phonetic: "[ˋstɪmjələs]",
                    root: "stimul (goad 刺/激勵) + us",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "刺激(物)、激勵 (複數 stimuli)", 
                            synonyms: "incentive, spur, motivation",
                            examples: [
                                { en: "Visual stimuli are processed in the occipital lobe of the brain.", cn: "視覺刺激在大腦的枕葉中處理。" },
                                { en: "The pay raise served as a stimulus for higher productivity.", cn: "加薪成為了提高生產力的激勵因素。" },
                                { en: "Plants respond to the stimulus of light by growing towards it.", cn: "植物對光的刺激做出反應，朝向光生長。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Amnesia",
                    phonetic: "[æmˋniʒə]",
                    root: "a (not 無) + men (mind 心智/記憶)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "失憶症、健忘", 
                            synonyms: "memory loss, forgetfulness",
                            examples: [
                                { en: "The patient suffered from temporary amnesia after the car accident.", cn: "病人在車禍後患上了暫時性失憶症。" },
                                { en: "Dissociative amnesia can be triggered by severe psychological trauma.", cn: "解離性失憶症可能由嚴重的心理創傷引發。" },
                                { en: "He claimed to have amnesia regarding the events of that night.", cn: "他聲稱對那晚發生的事情失憶了。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Innate",
                    phonetic: "[ˋɪnet]",
                    root: "in (into 內) + nate (born 出生)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "與生俱來的、天生的", 
                            synonyms: "inborn, natural, inherent",
                            examples: [
                                { en: "Chomsky argued that humans have an innate ability to learn language.", cn: "喬姆斯基認為人類有學習語言的天生能力。" },
                                { en: "Many believe that musical talent is innate rather than acquired.", cn: "許多人相信音樂天賦是與生俱來的，而非後天習得的。" },
                                { en: "Children have an innate curiosity about the world.", cn: "孩子們對世界有著天生的好奇心。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Perception",
                    phonetic: "[pɚˋsɛpʃən]",
                    root: "per (through 徹底) + cept (take 拿/領會)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "感知、觀念、洞察力", 
                            synonyms: "insight, awareness, view",
                            examples: [
                                { en: "Alcohol can blur your visual perception and reaction time.", cn: "酒精會模糊你的視覺感知和反應時間。" },
                                { en: "There is a general perception that the economy is improving.", cn: "普遍的觀念認為經濟正在好轉。" },
                                { en: "His perception of the situation was different from mine.", cn: "他對局勢的看法與我不同。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Behaviorism",
                    phonetic: "[bɪˋhevjər͵ɪzəm]",
                    root: "behavior (行為) + ism (主義)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "行為主義", 
                            synonyms: "behavioral psychology",
                            examples: [
                                { en: "Behaviorism suggests that all behaviors are learned through interaction.", cn: "行為主義認為所有行為都是透過互動學習而來的。" },
                                { en: "John B. Watson is often considered the father of behaviorism.", cn: "華生通常被認為是行為主義之父。" },
                                { en: "Behaviorism focuses on observable actions rather than internal mental states.", cn: "行為主義專注於可觀察的動作，而非內在的心理狀態。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Trauma",
                    phonetic: "[ˋtrɔmə]",
                    root: "Greek 'trauma' (wound 傷口)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "創傷 (心理或生理)", 
                            synonyms: "shock, injury, suffering",
                            examples: [
                                { en: "The child experienced severe trauma after losing his parents.", cn: "這孩子在失去父母後經歷了嚴重的創傷。" },
                                { en: "Psychotherapy can help patients recover from past traumas.", cn: "心理治療可以幫助病人從過去的創傷中復原。" },
                                { en: "The accident caused severe head trauma.", cn: "這起事故造成了嚴重的頭部創傷。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Disorder",
                    phonetic: "[dɪsˋɔrdɚ]",
                    root: "dis (not) + order (秩序)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "失調、疾病、混亂", 
                            synonyms: "illness, condition, ailment",
                            examples: [
                                { en: "She was diagnosed with an anxiety disorder.", cn: "她被診斷出患有焦慮症。" },
                                { en: "Eating disorders are common among adolescents.", cn: "飲食失調在青少年中很常見。" },
                                { en: "The room was in a state of disorder.", cn: "房間處於一片混亂之中。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Conditioning",
                    phonetic: "[kənˋdɪʃənɪŋ]",
                    root: "condition (條件) + ing",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "條件作用、訓練", 
                            synonyms: "training, habituation",
                            examples: [
                                { en: "Pavlov's dogs are a classic example of classical conditioning.", cn: "巴甫洛夫的狗是古典制約的經典例子。" },
                                { en: "Operant conditioning uses rewards and punishments to modify behavior.", cn: "操作制約使用獎勵和懲罰來修正行為。" },
                                { en: "Social conditioning affects how we interact with others.", cn: "社會制約影響我們與他人互動的方式。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Narcissism",
                    phonetic: "[ˋnɑrsɪ͵sɪzəm]",
                    root: "Narcissus (希臘神話自戀美男)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "自戀、自我陶醉", 
                            synonyms: "self-love, vanity, egoism",
                            examples: [
                                { en: "His extreme narcissism made it difficult for him to maintain relationships.", cn: "他極度的自戀讓他很難維持人際關係。" },
                                { en: "Social media is sometimes blamed for the rise in narcissism.", cn: "社群媒體有時被歸咎為自戀風氣興起的原因。" },
                                { en: "Narcissism is characterized by an inflated sense of self-importance.", cn: "自戀的特徵是過度膨脹的自我重要感。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Altruism",
                    phonetic: "[ˋæltrʊ͵ɪzəm]",
                    root: "alter (other 其他人) + ism",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "利他主義、無私", 
                            synonyms: "selflessness, kindness",
                            examples: [
                                { en: "Evolutionary biologists study the origins of altruism in animals.", cn: "演化生物學家研究動物利他主義的起源。" },
                                { en: "Her volunteer work was motivated by pure altruism.", cn: "她的志工工作是純粹出於利他主義。" },
                                { en: "Altruism involves helping others without expecting anything in return.", cn: "利他主義包含幫助他人而不求回報。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Subject",
                    phonetic: "[ˋsʌbdʒɪkt]",
                    root: "sub (under) + ject (throw 投/置於...之下)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "[心理實驗] 受試者、主題", 
                            synonyms: "participant, volunteer",
                            examples: [
                                { en: "The subjects were asked to look at a series of images.", cn: "受試者被要求觀看一系列的圖像。" },
                                { en: "Ethical guidelines ensure that human subjects are treated fairly.", cn: "倫理準則確保人類受試者受到公平對待。" },
                                { en: "The subject of the lecture was abnormal psychology.", cn: "這場講座的主題是變態心理學。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Hypothesis",
                    phonetic: "[haɪˋpɑθəsɪs]",
                    root: "hypo (under) + thesis (proposition)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "假設、假說", 
                            synonyms: "theory, assumption, proposition",
                            examples: [
                                { en: "The results of the experiment supported the researcher's hypothesis.", cn: "實驗結果支持了研究者的假說。" },
                                { en: "We need to test this hypothesis with further data.", cn: "我們需要用更多數據來測試這個假設。" },
                                { en: "A scientific hypothesis must be testable.", cn: "科學假說必須是可測試的。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Correlation",
                    phonetic: "[͵kɔrəˋleʃən]",
                    root: "com (together) + relation",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "相關性、關聯", 
                            synonyms: "connection, association, link",
                            examples: [
                                { en: "There is a strong correlation between stress and heart disease.", cn: "壓力和心臟病之間有很強的關聯性。" },
                                { en: "Correlation does not necessarily imply causation.", cn: "相關性並不一定意味著因果關係。" },
                                { en: "Researchers found a negative correlation between the two variables.", cn: "研究人員發現這兩個變數之間呈負相關。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Placebo",
                    phonetic: "[pləˋsibo]",
                    root: "Latin 'placebo' (I shall please 我將使人愉悅)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "安慰劑", 
                            synonyms: "dummy pill, inactive substance",
                            examples: [
                                { en: "The placebo effect occurs when a patient feels better solely because they believe the treatment works.", cn: "當病人僅僅因為相信治療有效而感覺好轉時，就會發生安慰劑效應。" },
                                { en: "In the experiment, half the group was given a placebo instead of the actual drug.", cn: "在實驗中，一半的組員被給予安慰劑而不是真正的藥物。" },
                                { en: "Placebos are used as controls in pharmaceutical trials.", cn: "安慰劑在藥物試驗中被用作對照組。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Reinforcement",
                    phonetic: "[͵riɪnˋfɔrsmənt]",
                    root: "re (again) + in + force (力量)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "強化、增強 (行為)", 
                            synonyms: "reward, support, strengthening",
                            examples: [
                                { en: "Positive reinforcement involves rewarding a behavior to increase its frequency.", cn: "正強化涉及獎勵某種行為以增加其發生頻率。" },
                                { en: "Teachers often use praise as a form of reinforcement.", cn: "老師經常使用讚美作為一種強化形式。" },
                                { en: "Without reinforcement, the learned behavior may eventually disappear.", cn: "如果沒有強化，習得的行為最終可能會消失。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Repression",
                    phonetic: "[rɪˋprɛʃən]",
                    root: "re (back) + press (壓)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "壓抑 (心理防衛機制)", 
                            synonyms: "suppression, inhibition",
                            examples: [
                                { en: "Repression is a defense mechanism where painful memories are pushed out of consciousness.", cn: "壓抑是一種防衛機制，痛苦的記憶被推出意識之外。" },
                                { en: "Sigmund Freud developed the concept of repression in psychoanalysis.", cn: "西格蒙德·佛洛伊德在精神分析中發展了壓抑的概念。" },
                                { en: "Emotional repression can lead to psychological distress later in life.", cn: "情緒壓抑可能導致日後的心理痛苦。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Conformity",
                    phonetic: "[kənˋfɔrmətɪ]",
                    root: "con (together) + form (形式/形狀)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "從眾、遵從", 
                            synonyms: "compliance, obedience, agreement",
                            examples: [
                                { en: "Social pressure often leads to conformity within a group.", cn: "社會壓力通常導致群體內的從眾行為。" },
                                { en: "The Asch conformity experiments demonstrated how much people want to fit in.", cn: "阿希從眾實驗展示了人們多麼想要融入群體。" },
                                { en: "Non-conformity is sometimes punished by social exclusion.", cn: "不從眾有時會受到社會排斥的懲罰。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Empathy",
                    phonetic: "[ˋɛmpəθɪ]",
                    root: "em (in 進入) + pathy (feeling 感覺)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "同理心、共情", 
                            synonyms: "compassion, understanding",
                            examples: [
                                { en: "Empathy is the ability to understand and share the feelings of another.", cn: "同理心是理解並分享他人感受的能力。" },
                                { en: "Psychologists distinguish between cognitive empathy and emotional empathy.", cn: "心理學家區分了認知同理心和情感同理心。" },
                                { en: "Lack of empathy is a characteristic of certain personality disorders.", cn: "缺乏同理心是某些人格障礙的特徵。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Apathy",
                    phonetic: "[ˋæpəθɪ]",
                    root: "a (without 無) + pathy (feeling 感覺)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "冷漠、無動於衷", 
                            synonyms: "indifference, unconcern",
                            examples: [
                                { en: "The voter apathy in the last election was concerning.", cn: "上次選舉中選民的冷漠令人擔憂。" },
                                { en: "Depression is often accompanied by feelings of apathy and lethargy.", cn: "憂鬱症常伴隨著冷漠和嗜睡的感覺。" },
                                { en: "He showed total apathy towards the suffering of others.", cn: "他對他人的痛苦表現出完全的冷漠。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Introspection",
                    phonetic: "[͵ɪntrəˋspɛkʃən]",
                    root: "intro (inward 向內) + spect (look 看)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "內省、反思", 
                            synonyms: "self-examination, reflection",
                            examples: [
                                { en: "Introspection involves looking inward to examine one's own thoughts and emotions.", cn: "內省涉及向內觀察以檢視自己的思想和情緒。" },
                                { en: "Early psychologists used introspection as a research method.", cn: "早期的心理學家使用內省作為研究方法。" },
                                { en: "Deep introspection can lead to greater self-awareness.", cn: "深刻的內省可以導致更高的自我意識。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Ambivalence",
                    phonetic: "[æmˋbɪvələns]",
                    root: "ambi (both 兩者) + val (strength 強度/價值)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "矛盾心理、猶豫不決", 
                            synonyms: "uncertainty, indecision",
                            examples: [
                                { en: "She felt some ambivalence about accepting the promotion.", cn: "她對接受晉升感到有些矛盾。" },
                                { en: "Ambivalence is the state of having mixed feelings about something.", cn: "矛盾心理是對某事有混合感受的狀態。" },
                                { en: "His ambivalence towards the project delayed the decision.", cn: "他對該專案的矛盾態度推遲了決定。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Hallucination",
                    phonetic: "[hə͵lusnˋeʃən]",
                    root: "Latin 'alucinari' (wander in mind 心神遊蕩)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "幻覺", 
                            synonyms: "delusion, illusion, mirage",
                            examples: [
                                { en: "Auditory hallucinations are common in schizophrenia.", cn: "聽幻覺在思覺失調症中很常見。" },
                                { en: "The drug caused him to have vivid hallucinations.", cn: "這種藥物導致他產生生動的幻覺。" },
                                { en: "Sleep deprivation can sometimes lead to hallucinations.", cn: "睡眠剝奪有時會導致幻覺。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Delusion",
                    phonetic: "[dɪˋluʒən]",
                    root: "de + ludere (to play/mock 戲弄) -> deceive",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "妄想、錯覺", 
                            synonyms: "misconception, fallacy",
                            examples: [
                                { en: "He suffers from the delusion that he is a famous king.", cn: "他患有妄想症，認為自己是一位著名的國王。" },
                                { en: "Delusions of persecution are a symptom of paranoia.", cn: "被迫害妄想是偏執狂的一種症狀。" },
                                { en: "We need to distinguish between a hallucination and a delusion.", cn: "我們需要區分幻覺和妄想。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Plasticity",
                    phonetic: "[plæˋstɪsətɪ]",
                    root: "plast (mold 塑造)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "可塑性 (尤指大腦)", 
                            synonyms: "flexibility, adaptability",
                            examples: [
                                { en: "Neuroplasticity refers to the brain's ability to reorganize itself.", cn: "神經可塑性指的是大腦自我重組的能力。" },
                                { en: "The plasticity of the brain allows us to learn new skills throughout life.", cn: "大腦的可塑性讓我們終生都能學習新技能。" },
                                { en: "Brain plasticity is highest during childhood.", cn: "大腦可塑性在兒童時期最高。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Neurotransmitter",
                    phonetic: "[͵njʊrotrænsˋmɪtɚ]",
                    root: "neuro (nerve 神經) + transmit (傳送)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "神經傳導物質", 
                            synonyms: "chemical messenger",
                            examples: [
                                { en: "Dopamine is a neurotransmitter associated with pleasure and reward.", cn: "多巴胺是一種與快樂和獎勵有關的神經傳導物質。" },
                                { en: "Antidepressants work by altering the levels of neurotransmitters in the brain.", cn: "抗憂鬱藥透過改變大腦中神經傳導物質的水平來發揮作用。" },
                                { en: "Neurotransmitters carry signals across the synapse.", cn: "神經傳導物質跨越突觸傳遞訊號。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Syndrome",
                    phonetic: "[ˋsɪndrom]",
                    root: "syn (together 一起) + drome (run 跑)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "症候群、綜合症狀", 
                            synonyms: "condition, disorder",
                            examples: [
                                { en: "Stockholm syndrome describes when hostages develop a bond with their captors.", cn: "斯德哥爾摩症候群描述人質與綁架者建立情感聯繫的情況。" },
                                { en: "Down syndrome is a genetic disorder caused by an extra chromosome.", cn: "唐氏症是一種由多出一條染色體引起的遺傳疾病。" },
                                { en: "Burnout syndrome is common in high-stress jobs.", cn: "職業倦怠症候群在高壓工作中很常見。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Retention",
                    phonetic: "[rɪˋtɛnʃən]",
                    root: "re (back) + ten (hold 握/持)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "保留、記憶力", 
                            synonyms: "preservation, withholding, memory",
                            examples: [
                                { en: "Information retention is improved by spaced repetition.", cn: "間隔重複可以提高資訊的記憶保留率。" },
                                { en: "The retention of key employees is crucial for the company.", cn: "留住關鍵員工對公司至關重要。" },
                                { en: "He has amazing retention for facts and figures.", cn: "他對事實和數字有驚人的記憶力。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Retrieval",
                    phonetic: "[rɪˋtriv!]",
                    root: "re (again) + trouver (find 找)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "提取、檢索 (記憶)", 
                            synonyms: "recovery, recall",
                            examples: [
                                { en: "Memory retrieval can be affected by stress.", cn: "記憶提取可能會受到壓力的影響。" },
                                { en: "The computer system allows for quick data retrieval.", cn: "電腦系統允許快速的數據檢索。" },
                                { en: "Retrieval cues help us access stored memories.", cn: "提取線索幫助我們存取儲存的記憶。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Subjective",
                    phonetic: "[səbˋdʒɛktɪv]",
                    root: "sub (under) + ject (throw 投)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "主觀的", 
                            synonyms: "personal, biased",
                            examples: [
                                { en: "Pain is a subjective experience that varies from person to person.", cn: "疼痛是一種因人而異的主觀體驗。" },
                                { en: "The grading of art is often highly subjective.", cn: "藝術的評分通常是非常主觀的。" },
                                { en: "Please try to avoid being too subjective in your report.", cn: "請盡量避免在報告中過於主觀。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Objective",
                    phonetic: "[əbˋdʒɛktɪv]",
                    root: "ob (against) + ject (throw 投)",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "客觀的", 
                            synonyms: "impartial, unbiased, factual",
                            examples: [
                                { en: "Scientists strive to be objective in their research.", cn: "科學家努力在研究中保持客觀。" },
                                { en: "We need an objective assessment of the situation.", cn: "我們需要對局勢進行客觀的評估。" },
                                { en: "Objective reality exists independently of our minds.", cn: "客觀現實獨立於我們的思想而存在。" }
                            ]
                        },
                        { 
                            pos: "n.", 
                            cn: "目標", 
                            synonyms: "goal, aim, target",
                            examples: [
                                { en: "Our main objective is to improve customer satisfaction.", cn: "我們的主要目標是提高客戶滿意度。" },
                                { en: "He achieved his objective of becoming a pilot.", cn: "他實現了成為飛行員的目標。" },
                                { en: "Learning objectives should be clearly defined.", cn: "學習目標應該被清楚地定義。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Bias",
                    phonetic: "[ˋbaɪəs]",
                    root: "French 'biais' (slant 斜)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "偏見、偏誤", 
                            synonyms: "prejudice, partiality",
                            examples: [
                                { en: "Confirmation bias leads people to ignore evidence that contradicts their beliefs.", cn: "確認偏誤導致人們忽視與其信念相矛盾的證據。" },
                                { en: "The researcher tried to eliminate bias from the study.", cn: "研究人員試圖消除研究中的偏差。" },
                                { en: "Media bias can influence public opinion.", cn: "媒體偏見會影響公眾輿論。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Diagnosis",
                    phonetic: "[͵daɪəgˋnosɪs]",
                    root: "dia (apart) + gno (know 知道)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "診斷", 
                            synonyms: "identification, analysis",
                            examples: [
                                { en: "Early diagnosis is key to treating this disease.", cn: "早期診斷是治療這種疾病的關鍵。" },
                                { en: "The doctor gave a diagnosis of severe depression.", cn: "醫生診斷出嚴重的憂鬱症。" },
                                { en: "The diagnosis was confirmed by further tests.", cn: "進一步的檢查證實了這個診斷。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Therapy",
                    phonetic: "[ˋθɛrəpɪ]",
                    root: "Greek 'therapeia' (curing 治癒)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "治療、療法", 
                            synonyms: "treatment, counseling",
                            examples: [
                                { en: "Cognitive behavioral therapy is effective for anxiety.", cn: "認知行為療法對焦慮症有效。" },
                                { en: "He is undergoing physical therapy for his injured knee.", cn: "他正在為受傷的膝蓋接受物理治療。" },
                                { en: "Group therapy allows patients to share their experiences.", cn: "團體治療讓病人可以分享他們的經驗。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Obsession",
                    phonetic: "[əbˋsɛʃən]",
                    root: "ob (against) + sedere (sit) -> to besiege 圍困",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "強迫觀念、著迷", 
                            synonyms: "fixation, passion, mania",
                            examples: [
                                { en: "Obsessive-Compulsive Disorder (OCD) involves unwanted, recurring thoughts.", cn: "強迫症包含不受歡迎且反覆出現的想法。" },
                                { en: "His obsession with cleanliness made it hard for him to relax.", cn: "他對清潔的執著讓他很難放鬆。" },
                                { en: "She has an unhealthy obsession with that celebrity.", cn: "她對那位名人有一種不健康的痴迷。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Phobia",
                    phonetic: "[ˋfobɪə]",
                    root: "Greek 'phobos' (fear 恐懼)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "恐懼症", 
                            synonyms: "fear, terror, anxiety",
                            examples: [
                                { en: "Arachnophobia is the extreme fear of spiders.", cn: "蜘蛛恐懼症是對蜘蛛的極度恐懼。" },
                                { en: "Exposure therapy is often used to treat specific phobias.", cn: "暴露療法常用於治療特定的恐懼症。" },
                                { en: "His phobia of flying prevents him from traveling abroad.", cn: "他的飛行恐懼症使他無法出國旅行。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Resilience",
                    phonetic: "[rɪˋzɪlɪəns]",
                    root: "re (back) + salire (jump 跳)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "韌性、恢復力", 
                            synonyms: "toughness, adaptability, elasticity",
                            examples: [
                                { en: "Psychological resilience allows people to bounce back from adversity.", cn: "心理韌性讓人類能從逆境中重新振作。" },
                                { en: "Building resilience helps children cope with stress.", cn: "建立韌性有助於兒童應對壓力。" },
                                { en: "The community showed great resilience after the disaster.", cn: "災難發生後，社區展現了極大的恢復力。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Sensation",
                    phonetic: "[sɛnˋseʃən]",
                    root: "sens (feel 感覺)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "感覺、知覺", 
                            synonyms: "feeling, perception, sense",
                            examples: [
                                { en: "Sensation is the physical process of receiving stimuli.", cn: "感覺是接收刺激的生理過程。" },
                                { en: "He lost all sensation in his legs after the accident.", cn: "意外發生後，他的雙腿失去了所有知覺。" },
                                { en: "The burning sensation in his hand was painful.", cn: "他手上的灼熱感很痛。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Stereotype",
                    phonetic: "[ˋstɛrɪə͵taɪp]",
                    root: "stereo (solid 固定的) + type (model 模型)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "刻板印象", 
                            synonyms: "cliché, label, categorization",
                            examples: [
                                { en: "Stereotypes can lead to prejudice and discrimination.", cn: "刻板印象可能導致偏見和歧視。" },
                                { en: "We need to challenge gender stereotypes in the workplace.", cn: "我們需要挑戰職場中的性別刻板印象。" },
                                { en: "The movie relied heavily on racial stereotypes.", cn: "這部電影嚴重依賴種族刻板印象。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Stimulant",
                    phonetic: "[ˋstɪmjələnt]",
                    root: "stimul (goad 刺/激勵)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "興奮劑、刺激物", 
                            synonyms: "booster, tonic, upper",
                            examples: [
                                { en: "Caffeine is a mild stimulant found in coffee.", cn: "咖啡因是咖啡中發現的一種溫和興奮劑。" },
                                { en: "Doctors may prescribe stimulants for ADHD.", cn: "醫生可能會開立興奮劑來治療注意力不足過動症。" },
                                { en: "Stimulants increase activity in the central nervous system.", cn: "興奮劑會增加中樞神經系統的活動。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Suppression",
                    phonetic: "[səˋprɛʃən]",
                    root: "sub (under) + press (壓)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "壓抑 (有意識的)、鎮壓", 
                            synonyms: "restraint, concealment",
                            examples: [
                                { en: "Unlike repression, suppression is the conscious act of pushing away thoughts.", cn: "與潛抑不同，壓抑是有意識地推開想法的行為。" },
                                { en: "The suppression of emotions can lead to physical health issues.", cn: "壓抑情緒可能導致身體健康問題。" },
                                { en: "Thought suppression often makes the unwanted thought return stronger.", cn: "思想壓抑通常會讓不受歡迎的想法更強烈地回來。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Synapse",
                    phonetic: "[ˋsɪnæps]",
                    root: "syn (together) + haptein (to fasten 連結)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "突觸 (神經元連接處)", 
                            synonyms: "junction, connection",
                            examples: [
                                { en: "A synapse is the gap between two nerve cells.", cn: "突觸是兩個神經細胞之間的間隙。" },
                                { en: "Neurotransmitters transmit signals across the synapse.", cn: "神經傳導物質跨越突觸傳遞訊號。" },
                                { en: "Learning involves changes in the strength of synapses.", cn: "學習涉及突觸強度的改變。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Temperament",
                    phonetic: "[ˋtɛmpərəmənt]",
                    root: "temper (mix 混合/調和)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "氣質、性情", 
                            synonyms: "disposition, nature, character",
                            examples: [
                                { en: "Temperament refers to biologically based personality traits.", cn: "氣質指的是基於生物學的人格特質。" },
                                { en: "The baby has a very calm and happy temperament.", cn: "這個嬰兒有非常平靜和快樂的性情。" },
                                { en: "Differences in temperament can be observed from a very young age.", cn: "氣質的差異從很小的時候就可以觀察到。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Threshold",
                    phonetic: "[ˋθrɛʃhold]",
                    root: "thresh (tread 踩踏) + hold",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "門檻、閾值 (感知的極限)", 
                            synonyms: "limit, brink, verge",
                            examples: [
                                { en: "The absolute threshold is the lowest level of a stimulus needed for detection.", cn: "絕對閾值是偵測到刺激所需的最低水平。" },
                                { en: "She has a very high pain threshold.", cn: "她的疼痛閾值很高（很能忍痛）。" },
                                { en: "We are on the threshold of a new discovery.", cn: "我們正處於新發現的門檻上。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Trait",
                    phonetic: "[tret]",
                    root: "tract (draw 拉/引出)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "特質、特徵", 
                            synonyms: "characteristic, feature, attribute",
                            examples: [
                                { en: "Personality traits are relatively stable over time.", cn: "人格特質隨著時間推移是相對穩定的。" },
                                { en: "The Big Five model describes five major personality traits.", cn: "大五人格模型描述了五種主要的人格特質。" },
                                { en: "Honesty is a trait that I value highly.", cn: "誠實是我非常重視的一種特質。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Unconscious",
                    phonetic: "[ʌnˋkɑnʃəs]",
                    root: "un (not) + conscious",
                    details: [
                        { 
                            pos: "adj.", 
                            cn: "無意識的、昏迷的", 
                            synonyms: "senseless, unintentional",
                            examples: [
                                { en: "Many of our motivations are unconscious.", cn: "我們許多的動機是無意識的。" },
                                { en: "He remained unconscious for three days after the crash.", cn: "車禍後他昏迷了三天。" },
                                { en: "She made an unconscious gesture of annoyance.", cn: "她做出了一個無意識的厭煩手勢。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Validation",
                    phonetic: "[͵væləˋdeʃən]",
                    root: "valid (strong/effective 強效的)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "確認、驗證、認可", 
                            synonyms: "confirmation, approval, proof",
                            examples: [
                                { en: "Emotional validation involves accepting another person's feelings.", cn: "情感驗證涉及接受另一個人的感受。" },
                                { en: "The experiment provided validation for the theory.", cn: "這個實驗為該理論提供了驗證。" },
                                { en: "Everyone seeks some form of external validation.", cn: "每個人都在尋求某種形式的外部認可。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Variable",
                    phonetic: "[ˋvɛrɪəb!]",
                    root: "vari (change 變化)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "變數", 
                            synonyms: "factor, element",
                            examples: [
                                { en: "The independent variable is the one manipulated by the researcher.", cn: "自變數是研究者操縱的變數。" },
                                { en: "We need to control for confounding variables.", cn: "我們需要控制干擾變數。" },
                                { en: "Temperature was a key variable in the study.", cn: "溫度是這項研究中的關鍵變數。" }
                            ]
                        }
                    ]
                },
                {
                    en: "Withdrawal",
                    phonetic: "[wɪðˋdrɔəl]",
                    root: "with (away) + draw (pull 拉)",
                    details: [
                        { 
                            pos: "n.", 
                            cn: "戒斷、撤退、退縮", 
                            synonyms: "removal, retreat, detachment",
                            examples: [
                                { en: "Social withdrawal is a common symptom of depression.", cn: "社交退縮是憂鬱症的常見症狀。" },
                                { en: "He experienced severe withdrawal symptoms after quitting smoking.", cn: "戒菸後他經歷了嚴重的戒斷症狀。" },
                                { en: "The troops announced their withdrawal from the region.", cn: "部隊宣佈從該地區撤軍。" }
                            ]
                        }
                    ]
                }
            ],           
            "History": [
                {
                    en: "Civilization",
                    phonetic: "[͵sɪv!əˋzeʃən]",
                    details: [
                        { pos: "n.", cn: "文明", examples: ["The Roman civilization lasted for centuries.", "They studied ancient civilizations."] }
                    ]
                },
                {
                    en: "Artifact",
                    phonetic: "[ˋɑrtɪ͵fækt]",
                    details: [
                        { pos: "n.", cn: "手工藝品、文物", examples: ["The museum displays artifacts from Egypt.", "Archaeologists found ancient artifacts."] }
                    ]
                }
            ],
            "Art": [
                {
                    en: "Portrait",
                    phonetic: "[ˋportret]",
                    details: [
                        { pos: "n.", cn: "肖像畫", examples: ["He painted a portrait of his wife.", "The gallery features portraits of famous leaders."] }
                    ]
                },
                {
                    en: "Symphony",
                    phonetic: "[ˋsɪmfənɪ]",
                    details: [
                        { pos: "n.", cn: "交響樂", examples: ["Beethoven's Ninth Symphony is a masterpiece.", "The orchestra played a beautiful symphony."] }
                    ]
                }
            ],
           "Geology": [
                {
                    en: "Sediment",
                    phonetic: "[ˋsɛdəmənt]",
                    details: [
                        { pos: "n.", cn: "沉積物", examples: ["Layers of sediment formed the rock.", "The river carries a lot of sediment."] }
                    ]
                },
                {
                    en: "Eruption",
                    phonetic: "[ɪˋrʌpʃən]",
                    details: [
                        { pos: "n.", cn: "爆發、噴發", examples: ["The volcanic eruption destroyed the village.", "Scientists predicted the eruption."] }
                    ]
                }
            ], // <--- 注意這裡：Geology 結束，只有逗號，沒有大括號
            "Business": [
                {
                    en: "Entrepreneur",
                    phonetic: "[͵ɑntrəprəˋnɝ]",
                    details: [
                        { pos: "n.", cn: "企業家", examples: ["He is a successful entrepreneur.", "Entrepreneurs take risks."] }
                    ]
                },
                {
                    en: "Merger",
                    phonetic: "[ˋmɝdʒɚ]",
                    details: [
                        { pos: "n.", cn: "合併", examples: ["The merger of the two banks was announced.", "Mergers can lead to job losses."] }
                    ]
                }
            ],
            "LifeScience": [
                {
                    en: "Metabolism",
                    phonetic: "[məˋtæb!͵ɪzəm]",
                    details: [
                        { pos: "n.", cn: "新陳代謝", examples: ["Exercise speeds up your metabolism.", "He has a fast metabolism."] }
                    ]
                },
                {
                    en: "Organism",
                    phonetic: "[ˋɔrgən͵ɪzəm]",
                    details: [
                        { pos: "n.", cn: "生物、有機體", examples: ["Microscopic organisms live in the water.", "All living organisms need energy."] }
                    ]
                }
            ]
        } // 
    }; // 

    const grammarDB = [
        { q: "She _____ to the gym.", ans: "goes", options: ["go", "goes", "going", "gone"], tag: "Grammar" }
    ];
