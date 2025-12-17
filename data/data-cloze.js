// 建立一個全域變數 clozeDB，它直接就是一個大陣列 (Array)
window.clozeDB = [
    {
        q: "The earth ______ around the sun once every year.",
        ans: "revolves",
        options: ["revolves", "rotates", "jumps", "floats"],
        cn: "地球每年繞太陽公轉一次。"
    },
    {
        q: "Photosynthesis allows plants to convert sunlight into ______.",
        ans: "energy",
        options: ["energy", "water", "soil", "wind"],
        cn: "光合作用讓植物將陽光轉化為能量。"
    },
    {
        q: "He ______ a lucrative contract with the team yesterday.",
        ans: "signed",
        options: ["signed", "signs", "sign", "signing"], // 故意考時態
        cn: "他昨天與球隊簽了一份利潤豐厚的合約。"
    },
    // ... 你可以在這裡無限新增題目 ...
];