// 1. 確保全域變數存在 (防呆)
window.vocabDB = window.vocabDB || {};
window.vocabDB["TOEFL"] = window.vocabDB["TOEFL"] || {};

// 2. 填入 "Astronomy" (天文) 的完整 50 個單字
window.vocabDB["TOEFL"]["Astronomy"] = [
    {
        en: "Celestial",
        phonetic: "[sɪˋlɛstʃəl]",
        root: "celest (heavenly 天上的) + ial",
        details: [{ pos: "adj.", cn: "天體的、天空的", synonyms: "heavenly, astronomical, stellar", examples: [{ en: "The sun, moon, and stars are all celestial bodies.", cn: "太陽、月亮和星星都是天體。" }, { en: "Ancient sailors used celestial navigation to find their way across the ocean.", cn: "古代水手使用天體導航在海洋中尋找方向。" }, { en: "Astronomy is the scientific study of celestial objects and phenomena.", cn: "天文學是對天體和天文現象的科學研究。" }] }]
    },
    {
        en: "Orbit",
        phonetic: "[ˋɔrbɪt]",
        root: "orb (circle 圓圈/盤)",
        details: [{ pos: "n.", cn: "軌道", synonyms: "path, course, trajectory", examples: [{ en: "The satellite was launched into a stable orbit around the Earth.", cn: "衛星被發射進入繞地球的穩定軌道。" }, { en: "It takes 365 days for the Earth to complete one orbit around the Sun.", cn: "地球繞太陽運行一週需要 365 天。" }, { en: "The moon's orbit is elliptical rather than perfectly circular.", cn: "月球的軌道是橢圓形的，而不是完美的圓形。" }] }, { pos: "v.", cn: "環繞軌道運行", forms: "orbits / orbited / orbited", examples: [{ en: "Many communication satellites orbit the planet.", cn: "許多通訊衛星繞著地球運行。" }, { en: "The spacecraft will orbit Mars for two years to collect data.", cn: "太空船將繞行火星兩年以收集數據。" }, { en: "Electrons orbit the nucleus of an atom.", cn: "電子繞著原子核運行。" }] }]
    },
    {
        en: "Eclipse",
        phonetic: "[ɪˋklɪps]",
        root: "ec (out) + leipein (leave 離開) -> to fail to appear",
        details: [{ pos: "n.", cn: "蝕 (日蝕、月蝕)", synonyms: "obscuration, blocking", examples: [{ en: "A solar eclipse occurs when the moon passes between the sun and the earth.", cn: "當月球經過太陽和地球之間時，就會發生日蝕。" }, { en: "Never look directly at the sun during a solar eclipse.", cn: "在日蝕期間，切勿直視太陽。" }, { en: "Lunar eclipses can only happen during a full moon.", cn: "月蝕只能發生在滿月期間。" }] }, { pos: "v.", cn: "遮蔽光線、使黯然失色", forms: "eclipses / eclipsed / eclipsed", examples: [{ en: "The moon eclipsed the sun, causing darkness during the day.", cn: "月球遮蔽了太陽，導致白天出現黑暗。" }, { en: "His recent achievements have eclipsed his earlier success.", cn: "他最近的成就使他早期的成功黯然失色。" }, { en: "The scandal threatened to eclipse the candidate's campaign.", cn: "這醜聞威脅要掩蓋候選人的競選活動。" }] }]
    },
    {
        en: "Meteorite",
        phonetic: "[ˋmitɪər͵aɪt]",
        root: "meta (high) + aero (air) + ite (rock/stone)",
        details: [{ pos: "n.", cn: "隕石 (已掉落到地面的)", synonyms: "fallen star, meteoroid", examples: [{ en: "Unlike a meteor, a meteorite survives its passage through the atmosphere and hits the ground.", cn: "與流星不同，隕石在通過大氣層後倖存並撞擊地面。" }, { en: "Scientists study meteorites to learn about the early solar system.", cn: "科學家研究隕石以了解早期太陽系。" }, { en: "A massive crater was formed by the impact of a meteorite.", cn: "一個巨大的隕石坑是由隕石撞擊形成的。" }] }]
    },
    {
        en: "Galaxy",
        phonetic: "[ˋgæləksɪ]",
        root: "gala (milk 乳汁 -> Milky Way)",
        details: [{ pos: "n.", cn: "星系、銀河系", synonyms: "star system", examples: [{ en: "The Milky Way is the galaxy that contains our solar system.", cn: "銀河系是包含我們太陽系的星系。" }, { en: "Astronomers estimate there are billions of galaxies in the universe.", cn: "天文學家估計宇宙中有數十億個星系。" }, { en: "Andromeda is the closest spiral galaxy to us.", cn: "仙女座星系是距離我們最近的螺旋星系。" }] }]
    },
    {
        en: "Constellation",
        phonetic: "[͵kɑnstəˋleʃən]",
        root: "con (together) + stella (star 星星)",
        details: [{ pos: "n.", cn: "星座、星群", synonyms: "star group, configuration", examples: [{ en: "Orion is one of the most recognizable constellations in the night sky.", cn: "獵戶座是夜空中最容易辨認的星座之一。" }, { en: "Ancient cultures used constellations for navigation and storytelling.", cn: "古代文化利用星座來導航和講故事。" }, { en: "The constellations appear to move across the sky as the Earth rotates.", cn: "隨著地球自轉，星座似乎在天空中移動。" }] }]
    },
    {
        en: "Comet",
        phonetic: "[ˋkɑmɪt]",
        root: "Latin 'cometa' (long-haired 長髮的 -> 彗尾)",
        details: [{ pos: "n.", cn: "彗星", synonyms: "celestial body", examples: [{ en: "A comet is often described as a dirty snowball made of ice and dust.", cn: "彗星常被形容為由冰和塵埃組成的髒雪球。" }, { en: "As a comet approaches the sun, it develops a glowing tail.", cn: "當彗星接近太陽時，它會產生發光的尾巴。" }, { en: "Halley's Comet is visible from Earth every 75 to 76 years.", cn: "哈雷彗星每 75 到 76 年從地球上可見一次。" }] }]
    },
    {
        en: "Asteroid",
        phonetic: "[ˋæstə͵rɔɪd]",
        root: "aster (star) + oid (resembling 像...的)",
        details: [{ pos: "n.", cn: "小行星", synonyms: "minor planet", examples: [{ en: "Most asteroids are found in the asteroid belt between Mars and Jupiter.", cn: "大多數小行星發現於火星和木星之間的小行星帶。" }, { en: "The extinction of the dinosaurs is believed to have been caused by an asteroid impact.", cn: "恐龍的滅絕被認為是由小行星撞擊造成的。" }, { en: "Scientists are monitoring asteroids that could potentially hit Earth.", cn: "科學家正在監測可能撞擊地球的小行星。" }] }]
    },
    {
        en: "Gravity",
        phonetic: "[ˋgrævətɪ]",
        root: "grav (heavy 重) + ity",
        details: [{ pos: "n.", cn: "重力、地心引力", synonyms: "attraction, force, pull", examples: [{ en: "Gravity holds the planets in orbit around the sun.", cn: "重力使行星保持在繞太陽的軌道上。" }, { en: "Astronauts experience zero gravity when they are in space.", cn: "太空人在太空中會經歷零重力。" }, { en: "The gravity on the moon is one-sixth of that on Earth.", cn: "月球上的重力是地球的六分之一。" }] }]
    },
    {
        en: "Atmosphere",
        phonetic: "[ˋætməs͵fɪr]",
        root: "atmos (vapor 蒸氣) + sphaira (sphere 球體)",
        details: [{ pos: "n.", cn: "大氣層", synonyms: "air, sky, ozone", examples: [{ en: "The Earth's atmosphere protects us from harmful solar radiation.", cn: "地球的大氣層保護我們免受有害的太陽輻射。" }, { en: "Mars has a very thin atmosphere compared to Earth.", cn: "與地球相比，火星的大氣層非常稀薄。" }, { en: "Meteors usually burn up upon entering the atmosphere.", cn: "流星通常在進入大氣層時燃燒殆盡。" }] }]
    },
    {
        en: "Cosmos",
        phonetic: "[ˋkɑzməs]",
        root: "Greek 'kosmos' (order/world 秩序/世界)",
        details: [{ pos: "n.", cn: "宇宙 (強調秩序與和諧)", synonyms: "universe, space", examples: [{ en: "Cosmology is the study of the origin and development of the cosmos.", cn: "宇宙學是研究宇宙起源和發展的學科。" }, { en: "We are just a tiny speck in the vast cosmos.", cn: "我們只是浩瀚宇宙中的一個微小斑點。" }, { en: "The ancient Greeks viewed the cosmos as an orderly system.", cn: "古希臘人將宇宙視為一個有序的系統。" }] }]
    },
    {
        en: "Nebula",
        phonetic: "[ˋnɛbjələ]",
        root: "Latin 'nebula' (mist/cloud 霧/雲)",
        details: [{ pos: "n.", cn: "星雲 (複數 nebulae)", synonyms: "cloud of gas and dust", examples: [{ en: "A nebula is a giant cloud of dust and gas in space.", cn: "星雲是太空中巨大的塵埃和氣體雲。" }, { en: "Stars are often born inside nebulae.", cn: "恆星通常誕生於星雲內部。" }, { en: "The Orion Nebula is visible to the naked eye.", cn: "獵戶座星雲是肉眼可見的。" }] }]
    },
    {
        en: "Supernova",
        phonetic: "[͵supɚˋnovə]",
        root: "super (above) + nova (new)",
        details: [{ pos: "n.", cn: "超新星 (恆星爆炸)", synonyms: "stellar explosion", examples: [{ en: "A supernova occurs when a star explodes at the end of its life.", cn: "超新星發生在恆星生命盡頭爆炸時。" }, { en: "The light from a supernova can outshine an entire galaxy.", cn: "超新星的光芒可以勝過整個星系。" }, { en: "Supernovae distribute elements like iron and carbon into space.", cn: "超新星將鐵和碳等元素散布到太空中。" }] }]
    },
    {
        en: "Telescope",
        phonetic: "[ˋtɛlə͵skop]",
        root: "tele (far 遠) + skopein (to look 看)",
        details: [{ pos: "n.", cn: "望遠鏡", synonyms: "optical instrument", examples: [{ en: "Galileo was the first to use a telescope for astronomical observation.", cn: "伽利略是第一個使用望遠鏡進行天文觀測的人。" }, { en: "The Hubble Space Telescope has taken amazing images of deep space.", cn: "哈伯太空望遠鏡拍攝了深空的驚人影像。" }, { en: "Modern telescopes use mirrors instead of lenses to gather light.", cn: "現代望遠鏡使用鏡子而不是透鏡來聚集光線。" }] }]
    },
    {
        en: "Axis",
        phonetic: "[ˋæksɪs]",
        root: "Latin 'axis' (axle 軸)",
        details: [{ pos: "n.", cn: "軸、軸線", synonyms: "center line, pivot", examples: [{ en: "The Earth rotates on its axis once every 24 hours.", cn: "地球每 24 小時繞其軸自轉一次。" }, { en: "The tilt of the Earth's axis causes the seasons.", cn: "地球軸的傾斜導致了季節的變化。" }, { en: "The planet's axis is tilted at an angle of 23.5 degrees.", cn: "這顆行星的軸傾斜了 23.5 度。" }] }]
    },
    {
        en: "Latitude",
        phonetic: "[ˋlætə͵tjud]",
        root: "lat (wide 寬/廣)",
        details: [{ pos: "n.", cn: "緯度", synonyms: "parallel", examples: [{ en: "Regions at high latitudes receive less sunlight.", cn: "高緯度地區接收到的陽光較少。" }, { en: "The climate varies significantly depending on the latitude.", cn: "氣候隨緯度不同而有顯著變化。" }, { en: "Lines of latitude run parallel to the equator.", cn: "緯線與赤道平行。" }] }]
    },
    {
        en: "Longitude",
        phonetic: "[ˋlɑndʒə͵tjud]",
        root: "long (long 長)",
        details: [{ pos: "n.", cn: "經度", synonyms: "meridian", examples: [{ en: "Longitude is measured in degrees east or west of the Prime Meridian.", cn: "經度是以本初子午線向東或向西的度數來測量的。" }, { en: "Sailors use longitude and latitude to determine their position.", cn: "水手使用經緯度來確定他們的位置。" }, { en: "The concept of longitude was crucial for maritime navigation.", cn: "經度的概念對海上航行至關重要。" }] }]
    },
    {
        en: "Equator",
        phonetic: "[ɪˋkwetɚ]",
        root: "equi (equal 平等)",
        details: [{ pos: "n.", cn: "赤道", synonyms: "central line", examples: [{ en: "The equator divides the Earth into the Northern and Southern Hemispheres.", cn: "赤道將地球分為北半球和南半球。" }, { en: "Temperatures near the equator remain warm throughout the year.", cn: "赤道附近的氣溫全年保持溫暖。" }, { en: "Day and night are of approximately equal length at the equator.", cn: "在赤道，白天和黑夜的長度大約相等。" }] }]
    },
    {
        en: "Hemisphere",
        phonetic: "[ˋhɛməs͵fɪr]",
        root: "hemi (half 半) + sphere (ball 球)",
        details: [{ pos: "n.", cn: "半球 (地球或大腦)", synonyms: "half", examples: [{ en: "Australia is located in the Southern Hemisphere.", cn: "澳洲位於南半球。" }, { en: "The left hemisphere of the brain controls language functions.", cn: "大腦左半球控制語言功能。" }, { en: "Winter in the Northern Hemisphere occurs when it is tilted away from the sun.", cn: "當北半球背向太陽傾斜時，就是冬天。" }] }]
    },
    {
        en: "Lunar",
        phonetic: "[ˋlunɚ]",
        root: "Latin 'luna' (moon 月亮)",
        details: [{ pos: "adj.", cn: "月亮的、陰曆的", synonyms: "moony", examples: [{ en: "The lunar surface is covered with craters.", cn: "月球表面佈滿了隕石坑。" }, { en: "Chinese New Year is based on the lunar calendar.", cn: "農曆新年是基於陰曆。" }, { en: "A lunar eclipse occurs when the Earth casts a shadow on the moon.", cn: "當地球將陰影投射在月球上時，就會發生月蝕。" }] }]
    },
    {
        en: "Solar",
        phonetic: "[ˋsolɚ]",
        root: "Latin 'sol' (sun 太陽)",
        details: [{ pos: "adj.", cn: "太陽的", synonyms: "sun-related", examples: [{ en: "Solar energy is a renewable source of power.", cn: "太陽能是一種可再生能源。" }, { en: "The solar system consists of the sun and the objects that orbit it.", cn: "太陽系由太陽及繞其運行的物體組成。" }, { en: "Solar flares can disrupt radio communications on Earth.", cn: "太陽閃焰會干擾地球上的無線電通訊。" }] }]
    },
    {
        en: "Rotation",
        phonetic: "[roˋteʃən]",
        root: "rot (wheel 輪子/轉)",
        details: [{ pos: "n.", cn: "自轉、旋轉", synonyms: "spinning, turning, revolution", examples: [{ en: "The Earth's rotation causes day and night.", cn: "地球的自轉造成了晝夜更替。" }, { en: "It takes 24 hours for the Earth to complete one full rotation.", cn: "地球完成一次完整的自轉需要 24 小時。" }, { en: "The rotation of the tires ensures even wear.", cn: "輪胎的輪調確保磨損均勻。" }] }]
    },
    {
        en: "Revolution",
        phonetic: "[͵rɛvəˋluʃən]",
        root: "re (back) + volu (roll 滾)",
        details: [{ pos: "n.", cn: "公轉、革命", synonyms: "orbit, circuit, rebellion", examples: [{ en: "The Earth makes one revolution around the sun every year.", cn: "地球每年繞太陽公轉一圈。" }, { en: "The Industrial Revolution changed how goods were produced.", cn: "工業革命改變了商品的生產方式。" }, { en: "Copernicus proposed that planets revolve around the sun.", cn: "哥白尼提出行星繞太陽運行的理論。" }] }]
    },
    {
        en: "Satellite",
        phonetic: "[ˋsæt!͵aɪt]",
        root: "Latin 'satelles' (attendant 隨從)",
        details: [{ pos: "n.", cn: "衛星 (天然或人造)", synonyms: "orbiter, spacecraft, moon", examples: [{ en: "The moon is Earth's only natural satellite.", cn: "月球是地球唯一的天然衛星。" }, { en: "GPS relies on a network of satellites orbiting the Earth.", cn: "全球定位系統依賴繞地球運行的衛星網絡。" }, { en: "Weather satellites provide data for forecasting.", cn: "氣象衛星為天氣預報提供數據。" }] }]
    },
    {
        en: "Magnitude",
        phonetic: "[ˋmægnə͵tjud]",
        root: "magn (great 大)",
        details: [{ pos: "n.", cn: "[天文] 星等 (亮度)、震級、巨大", synonyms: "brightness, intensity, size", examples: [{ en: "The star has a visual magnitude of 1.5.", cn: "這顆恆星的視星等為 1.5。" }, { en: "An earthquake of magnitude 7.0 struck the region.", cn: "該地區發生了規模 7.0 的地震。" }, { en: "They didn't realize the sheer magnitude of the problem.", cn: "他們沒有意識到問題的巨大規模。" }] }]
    },
    {
        en: "Observatory",
        phonetic: "[əbˋzɝvə͵torɪ]",
        root: "ob (over) + serv (watch 看/守)",
        details: [{ pos: "n.", cn: "天文台、觀測站", synonyms: "watchtower, station", examples: [{ en: "The observatory is located on top of the mountain for clear skies.", cn: "天文台位於山頂以獲得晴朗的天空。" }, { en: "Astronomers at the observatory discovered a new comet.", cn: "天文台的天文學家發現了一顆新彗星。" }, { en: "The Greenwich Observatory marks the Prime Meridian.", cn: "格林威治天文台標誌著本初子午線。" }] }]
    },
    {
        en: "Phase",
        phonetic: "[fez]",
        root: "Greek 'phasis' (appearance 外觀)",
        details: [{ pos: "n.", cn: "(月亮/行星的) 盈虧、階段", synonyms: "stage, step, period", examples: [{ en: "The moon goes through different phases each month.", cn: "月亮每個月都會經歷不同的盈虧階段。" }, { en: "We are entering the final phase of the project.", cn: "我們正進入專案的最後階段。" }, { en: "The new moon is the first phase of the lunar cycle.", cn: "新月是月球週期的第一階段。" }] }]
    },
    {
        en: "Radiation",
        phonetic: "[͵redɪˋeʃən]",
        root: "radi (ray 光線/輻射)",
        details: [{ pos: "n.", cn: "輻射", synonyms: "emission, rays", examples: [{ en: "The ozone layer protects us from ultraviolet radiation.", cn: "臭氧層保護我們免受紫外線輻射。" }, { en: "High levels of radiation were detected near the reactor.", cn: "反應爐附近檢測到高水平的輻射。" }, { en: "Background radiation is present everywhere in the universe.", cn: "背景輻射存在於宇宙的每個角落。" }] }]
    },
    {
        en: "Spectrum",
        phonetic: "[ˋspɛktrəm]",
        root: "spect (look 看/景象)",
        details: [{ pos: "n.", cn: "光譜、範圍", synonyms: "range, scale, gamut", examples: [{ en: "A prism breaks white light into a spectrum of colors.", cn: "稜鏡將白光分解成彩色光譜。" }, { en: "The survey covered a wide spectrum of opinions.", cn: "這項調查涵蓋了廣泛的意見。" }, { en: "Astronomers analyze the light spectrum of stars to determine their composition.", cn: "天文學家分析恆星的光譜以確定其組成。" }] }]
    },
    {
        en: "Interstellar",
        phonetic: "[͵ɪntɚˋstɛlɚ]",
        root: "inter (between 之間) + stella (star 星星)",
        details: [{ pos: "adj.", cn: "星際的", synonyms: "cosmic, space", examples: [{ en: "Interstellar space is the region between stars.", cn: "星際空間是恆星之間的區域。" }, { en: "The movie depicts interstellar travel through wormholes.", cn: "這部電影描繪了穿越蟲洞的星際旅行。" }, { en: "Dust and gas clouds are common in the interstellar medium.", cn: "塵埃和氣體雲在星際介質中很常見。" }] }]
    },
    {
        en: "Terrestrial",
        phonetic: "[təˋrɛstrɪəl]",
        root: "terra (earth 地球/土地)",
        details: [{ pos: "adj.", cn: "類地的(行星)、陸地的、地球的", synonyms: "earthly, land-dwelling", examples: [{ en: "Mercury, Venus, Earth, and Mars are terrestrial planets.", cn: "水星、金星、地球和火星是類地行星。" }, { en: "Terrestrial animals live on land rather than in water.", cn: "陸生動物生活在陸地上而不是水中。" }, { en: "The search for extra-terrestrial life continues.", cn: "尋找地外生命的行動仍在繼續。" }] }]
    },
    {
        en: "Jovian",
        phonetic: "[ˋdʒovɪən]",
        root: "Jove (Jupiter 木星)",
        details: [{ pos: "adj.", cn: "類木的(行星)、木星的", synonyms: "gas giant", examples: [{ en: "Jupiter and Saturn are examples of Jovian planets.", cn: "木星和土星是類木行星的例子。" }, { en: "Jovian planets are primarily composed of gas.", cn: "類木行星主要由氣體組成。" }, { en: "These planets are much larger than terrestrial planets.", cn: "這些行星比類地行星大得多。" }] }]
    },
    {
        en: "Debris",
        phonetic: "[dəˋbri]",
        root: "French 'débris' (broken 破碎)",
        details: [{ pos: "n.", cn: "殘骸、碎片、垃圾", synonyms: "rubble, wreckage, waste", examples: [{ en: "Space debris poses a threat to satellites.", cn: "太空垃圾對衛星構成威脅。" }, { en: "The explosion scattered debris over a wide area.", cn: "爆炸將碎片散佈在廣大區域。" }, { en: "After the storm, the streets were filled with debris.", cn: "暴風雨過後，街道上滿是殘骸。" }] }]
    },
    {
        en: "Composition",
        phonetic: "[͵kɑmpəˋzɪʃən]",
        root: "com (together) + pos (put 放)",
        details: [{ pos: "n.", cn: "組成、成分、作文", synonyms: "structure, constitution, makeup", examples: [{ en: "We studied the chemical composition of the soil.", cn: "我們研究了土壤的化學成分。" }, { en: "The composition of the atmosphere is mainly nitrogen and oxygen.", cn: "大氣的成分主要是氮氣和氧氣。" }, { en: "Mozart began writing musical compositions at a young age.", cn: "莫札特很小就開始創作音樂作品。" }] }]
    },
    {
        en: "Velocity",
        phonetic: "[vəˋlɑsətɪ]",
        root: "veloc (swift 快/速)",
        details: [{ pos: "n.", cn: "速度、速率", synonyms: "speed, pace, rate", examples: [{ en: "Light travels at a velocity of approximately 300,000 km/s.", cn: "光以每秒約 30 萬公里的速度傳播。" }, { en: "Escape velocity is the speed needed to break free from a planet's gravity.", cn: "逃逸速度是擺脫行星重力所需的速度。" }, { en: "The velocity of the wind increased during the storm.", cn: "風速在暴風雨期間增加了。" }] }]
    },
    {
        en: "Zenith",
        phonetic: "[ˋzinɪθ]",
        root: "Arabic 'samt' (path over head 頭頂的路徑)",
        details: [{ pos: "n.", cn: "天頂、頂點", synonyms: "peak, apex, summit", examples: [{ en: "The sun reaches its zenith at noon.", cn: "太陽在中午到達天頂。" }, { en: "At the zenith of his career, he was known worldwide.", cn: "在他的事業頂峰時期，他聞名於世。" }, { en: "The star is directly overhead at the zenith.", cn: "那顆星星正位於頭頂的天頂位置。" }] }]
    },
    {
        en: "Meteor",
        phonetic: "[ˋmitɪɚ]",
        root: "meta (high) + aero (air) -> high in the air",
        details: [{ pos: "n.", cn: "流星 (在大氣層中燃燒)", synonyms: "shooting star, falling star", examples: [{ en: "We saw a bright meteor streak across the night sky.", cn: "我們看到一顆明亮的流星劃過夜空。" }, { en: "Most meteors burn up before they hit the ground.", cn: "大多數流星在撞擊地面前就燃燒殆盡了。" }, { en: "A meteor shower occurs when Earth passes through debris.", cn: "當地球穿過殘骸帶時，就會發生流星雨。" }] }]
    },
    {
        en: "Light-year",
        phonetic: "[ˋlaɪt͵jɪr]",
        root: "light (光) + year (年)",
        details: [{ pos: "n.", cn: "光年 (距離單位)", synonyms: "astronomical distance", examples: [{ en: "The nearest star is over four light-years away.", cn: "最近的恆星距離我們超過四光年。" }, { en: "A light-year is the distance light travels in one year.", cn: "一光年是光在一年內傳播的距離。" }, { en: "This galaxy is millions of light-years from Earth.", cn: "這個星系距離地球數百萬光年。" }] }]
    },
    {
        en: "Cosmology",
        phonetic: "[kɑzˋmɑlədʒɪ]",
        root: "cosmos (universe) + logy (study)",
        details: [{ pos: "n.", cn: "宇宙學", synonyms: "study of the universe", examples: [{ en: "Cosmology explores the origins and fate of the universe.", cn: "宇宙學探討宇宙的起源和命運。" }, { en: "The Big Bang theory is a cornerstone of modern cosmology.", cn: "大霹靂理論是現代宇宙學的基石。" }, { en: "Advances in cosmology have changed our view of space.", cn: "宇宙學的進步改變了我們對太空的看法。" }] }]
    },
    {
        en: "Planetarium",
        phonetic: "[͵plænəˋtɛrɪəm]",
        root: "planet (行星) + arium (place 場所)",
        details: [{ pos: "n.", cn: "天文館", synonyms: "observatory building", examples: [{ en: "We visited the planetarium to learn about the constellations.", cn: "我們參觀了天文館以了解星座。" }, { en: "The planetarium projector displayed the night sky on the dome.", cn: "天文館的投影機在圓頂上展示了夜空。" }, { en: "School children often go on field trips to the planetarium.", cn: "小學生經常去天文館校外教學。" }] }]
    },
    {
        en: "Solstice",
        phonetic: "[ˋsɑlstɪs]",
        root: "sol (sun) + stit (stand still 靜止)",
        details: [{ pos: "n.", cn: "至點 (夏至或冬至)", synonyms: "turning point", examples: [{ en: "The summer solstice is the longest day of the year.", cn: "夏至是一年中白晝最長的一天。" }, { en: "Ancient monuments were often aligned with the winter solstice.", cn: "古代遺跡通常與冬至對齊。" }, { en: "The sun reaches its highest or lowest point at the solstice.", cn: "太陽在至點時達到最高或最低點。" }] }]
    },
    {
        en: "Equinox",
        phonetic: "[ˋikwə͵nɑks]",
        root: "equi (equal) + nox (night) -> equal night",
        details: [{ pos: "n.", cn: "分點 (春分或秋分)", synonyms: "equal day and night", examples: [{ en: "During the equinox, day and night are of equal length.", cn: "在分點期間，白天和黑夜的長度相等。" }, { en: "The spring equinox marks the beginning of spring.", cn: "春分標誌著春天的開始。" }, { en: "Many cultures celebrate festivals around the autumn equinox.", cn: "許多文化在秋分前後慶祝節日。" }] }]
    },
    {
        en: "Parallax",
        phonetic: "[ˋpærə͵læks]",
        root: "Greek 'parallaxis' (change/alteration 改變)",
        details: [{ pos: "n.", cn: "視差 (天文測距法)", synonyms: "displacement, shift", examples: [{ en: "Astronomers use parallax to measure distances to nearby stars.", cn: "天文學家使用視差來測量到附近恆星的距離。" }, { en: "Parallax is the apparent shift of an object when viewed from different angles.", cn: "視差是從不同角度觀察物體時的視位移。" }, { en: "The parallax effect is greater for closer objects.", cn: "對於較近的物體，視差效應更大。" }] }]
    },
    {
        en: "Luminosity",
        phonetic: "[͵luməˋnɑsətɪ]",
        root: "lumen (light 光) + osity",
        details: [{ pos: "n.", cn: "光度、亮度", synonyms: "brightness, radiance, glow", examples: [{ en: "The luminosity of a star depends on its size and temperature.", cn: "恆星的光度取決於它的大小和溫度。" }, { en: "Supernovae have incredibly high luminosity.", cn: "超新星擁有極高的光度。" }, { en: "Astronomers classify stars based on their luminosity.", cn: "天文學家根據光度對恆星進行分類。" }] }]
    },
    {
        en: "Elliptical",
        phonetic: "[ɪˋlɪptɪk!]",
        root: "ellipse (oval 橢圓) + al",
        details: [{ pos: "adj.", cn: "橢圓的", synonyms: "oval-shaped", examples: [{ en: "Planets travel in elliptical orbits around the sun.", cn: "行星以橢圓軌道繞太陽運行。" }, { en: "Some galaxies are elliptical in shape.", cn: "有些星系的形狀是橢圓的。" }, { en: "Kepler discovered that orbits are elliptical, not circular.", cn: "克卜勒發現軌道是橢圓形的，而不是圓形的。" }] }]
    },
    {
        en: "Geocentric",
        phonetic: "[͵dʒioˋsɛntrɪk]",
        root: "geo (earth) + center",
        details: [{ pos: "adj.", cn: "以地球為中心的 (地心說)", synonyms: "Earth-centered", examples: [{ en: "The ancient geocentric model placed Earth at the center of the universe.", cn: "古代的地心模型將地球置於宇宙的中心。" }, { en: "Galileo challenged the geocentric view of the solar system.", cn: "伽利略挑戰了太陽系的地心觀點。" }, { en: "Aristotle was a proponent of the geocentric theory.", cn: "亞里斯多德是地心說的支持者。" }] }]
    },
    {
        en: "Heliocentric",
        phonetic: "[͵hilɪoˋsɛntrɪk]",
        root: "helio (sun) + center",
        details: [{ pos: "adj.", cn: "以太陽為中心的 (日心說)", synonyms: "Sun-centered", examples: [{ en: "Copernicus proposed the heliocentric model of the solar system.", cn: "哥白尼提出了太陽系的日心模型。" }, { en: "The heliocentric theory was confirmed by later observations.", cn: "日心說被後來的觀測所證實。" }, { en: "A heliocentric orbit circles around the sun.", cn: "日心軌道是繞著太陽運行的。" }] }]
    },
    {
        en: "Retrograde",
        phonetic: "[ˋrɛtrə͵gred]",
        root: "retro (backward 向後) + grad (step 走)",
        details: [{ pos: "adj.", cn: "逆行的、倒退的", synonyms: "backward, reverse", examples: [{ en: "Retrograde motion is an optical illusion caused by Earth's orbit.", cn: "逆行運動是由地球軌道引起的一種視錯覺。" }, { en: "Mars appears to move in a retrograde direction periodically.", cn: "火星似乎週期性地以逆行方向移動。" }, { en: "The planet has a retrograde rotation, spinning clockwise.", cn: "這顆行星有逆行自轉，是順時針旋轉的。" }] }]
    },
    {
        en: "Crater",
        phonetic: "[ˋkretɚ]",
        root: "Greek 'krater' (mixing bowl 碗/盆)",
        details: [{ pos: "n.", cn: "隕石坑、火山口", synonyms: "pit, hollow, cavity", examples: [{ en: "The moon's surface is covered with impact craters.", cn: "月球表面佈滿了撞擊坑。" }, { en: "A large crater marks the spot where the asteroid hit.", cn: "一個巨大的隕石坑標記了小行星撞擊的地點。" }, { en: "We hiked to the edge of the volcanic crater.", cn: "我們徒步走到了火山口的邊緣。" }] }]
    },
    {
        en: "Aurora",
        phonetic: "[ɔˋrɔrə]",
        root: "Roman goddess of dawn (黎明女神)",
        details: [{ pos: "n.", cn: "極光", synonyms: "northern lights (aurora borealis)", examples: [{ en: "The aurora borealis is a spectacular light display in the north.", cn: "北極光是北方壯觀的燈光秀。" }, { en: "Auroras are caused by solar wind interacting with the atmosphere.", cn: "極光是由太陽風與大氣層相互作用引起的。" }, { en: "Tourists travel to Iceland to see the aurora.", cn: "遊客前往冰島觀看極光。" }] }]
    }
];