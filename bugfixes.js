// Core bug fixes kept separate from script.js so the existing UI/logic stays untouched.
// This file is loaded after script.js and overrides only the affected functions.

(() => {
    'use strict';

    const FAVORITE_META_KEY = 'vocabRPG_favorite_meta_v1';
    const MISTAKE_META_KEY = 'vocabRPG_mistake_meta_v1';

    const readJSON = (key, fallback) => {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value == null ? fallback : value;
        } catch (e) {
            return fallback;
        }
    };

    const writeJSON = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const itemKey = (item) => {
        if (!item) return '';
        return String(item.en || item.q || '').trim();
    };

    const cloneMeta = (meta) => {
        const out = {};
        if (!meta || typeof meta !== 'object') return out;
        Object.keys(meta).forEach((key) => {
            const record = meta[key] || {};
            out[key] = {
                updatedAt: Number(record.updatedAt) || 0,
                deleted: Boolean(record.deleted)
            };
        });
        return out;
    };

    const buildItemMap = (items) => {
        const map = new Map();
        (Array.isArray(items) ? items : []).forEach((item) => {
            const key = itemKey(item);
            if (key) map.set(key, item);
        });
        return map;
    };

    const sameItem = (a, b) => {
        try {
            return JSON.stringify(a) === JSON.stringify(b);
        } catch (e) {
            return false;
        }
    };

    // Compare the previous local list with the new local list and record additions,
    // removals and updates. Removed items are kept as tombstones so another device
    // cannot bring them back during the next merge.
    const updateLocalMeta = (storageKey, metaKey, nextItems) => {
        const previousItems = readJSON(storageKey, []);
        const prevMap = buildItemMap(previousItems);
        const nextMap = buildItemMap(nextItems);
        const meta = cloneMeta(readJSON(metaKey, {}));
        const now = Date.now();

        nextMap.forEach((item, key) => {
            const previous = prevMap.get(key);
            if (!previous || !sameItem(previous, item)) {
                meta[key] = { updatedAt: now, deleted: false };
            } else if (!meta[key]) {
                // Legacy data: active, but without a historical timestamp.
                meta[key] = { updatedAt: 0, deleted: false };
            }
        });

        prevMap.forEach((_item, key) => {
            if (!nextMap.has(key)) {
                meta[key] = { updatedAt: now, deleted: true };
            }
        });

        writeJSON(metaKey, meta);
        return meta;
    };

    // Resolve a local/cloud list using per-item timestamps. A newer tombstone wins
    // over an older active copy, which fixes cancelled favourites and mastered
    // mistakes reappearing on another device.
    const mergeTrackedCollection = (localItems, cloudItems, localMetaRaw, cloudMetaRaw) => {
        const localMap = buildItemMap(localItems);
        const cloudMap = buildItemMap(cloudItems);
        const localMeta = cloneMeta(localMetaRaw);
        const cloudMeta = cloneMeta(cloudMetaRaw);
        const keys = new Set([
            ...localMap.keys(),
            ...cloudMap.keys(),
            ...Object.keys(localMeta),
            ...Object.keys(cloudMeta)
        ]);

        const mergedItems = [];
        const mergedMeta = {};

        keys.forEach((key) => {
            const localItem = localMap.get(key);
            const cloudItem = cloudMap.get(key);
            const lState = localMeta[key] || (localItem ? { updatedAt: 0, deleted: false } : null);
            const cState = cloudMeta[key] || (cloudItem ? { updatedAt: 0, deleted: false } : null);

            if (!lState && !cState) return;

            let winner = lState;
            let winnerItem = localItem;

            if (!lState) {
                winner = cState;
                winnerItem = cloudItem;
            } else if (cState) {
                const localTime = Number(lState.updatedAt) || 0;
                const cloudTime = Number(cState.updatedAt) || 0;

                if (cloudTime > localTime) {
                    winner = cState;
                    winnerItem = cloudItem;
                } else if (cloudTime === localTime) {
                    // If timestamps tie, deletion is safer than resurrecting stale data.
                    if (Boolean(cState.deleted) && !Boolean(lState.deleted)) {
                        winner = cState;
                        winnerItem = cloudItem;
                    } else if (!Boolean(cState.deleted) && !Boolean(lState.deleted) && !localItem && cloudItem) {
                        winner = cState;
                        winnerItem = cloudItem;
                    }
                }
            }

            mergedMeta[key] = {
                updatedAt: Number(winner.updatedAt) || 0,
                deleted: Boolean(winner.deleted)
            };

            if (!winner.deleted && winnerItem) {
                mergedItems.push(winnerItem);
            }
        });

        return { items: mergedItems, meta: mergedMeta };
    };

    // -------------------------------------------------------------------------
    // Fix 1: last dungeon stage must use its real question count, not always 20.
    // -------------------------------------------------------------------------
    window.startDungeonBattle = function (allWords, levelIndex) {
        adventureLevelIndex = levelIndex;
        isAdventureMode = true;

        const start = levelIndex * 10;
        const chunkWords = allWords.slice(start, start + 10);
        const battleQuestions = [];

        chunkWords.forEach((word) => {
            battleQuestions.push({
                type: 'en_to_cn',
                q: word.en,
                ans: word.details[0].cn,
                options: generateOptions(allWords, word.details[0].cn, 'cn'),
                audioWord: word.en
            });
            battleQuestions.push({
                type: 'cn_to_en',
                q: word.details[0].cn,
                ans: word.en,
                options: generateOptions(allWords, word.en, 'en'),
                audioWord: word.en
            });
        });

        currentList = battleQuestions.sort(() => 0.5 - Math.random());
        quizTotal = currentList.length;
        currentIndex = 0;
        score = 0;

        document.getElementById('quiz-score').innerText = 0;
        document.getElementById('quiz-bar').style.width = '0%';
        showPage('page-quiz');
        loadDungeonQuestion();
    };

    // -------------------------------------------------------------------------
    // Fix 2: track additions/removals for favourites and mistakes.
    // -------------------------------------------------------------------------
    window.saveFavorites = function (favList) {
        const safeList = Array.isArray(favList) ? favList : [];
        updateLocalMeta('vocabPro_favorites', FAVORITE_META_KEY, safeList);
        writeJSON('vocabPro_favorites', safeList);
        scheduleCloudSave();
    };

    window.saveGameData = function () {
        const safeMistakes = Array.isArray(mistakeDB) ? mistakeDB : [];
        updateLocalMeta('vocabPro_rpg', MISTAKE_META_KEY, safeMistakes);
        writeJSON('vocabPro_rpg', { mistakes: safeMistakes });
        updateMistakeCount();
        scheduleCloudSave();
    };

    // saveGameData stores an object, so its mistake comparison needs the previous
    // mistakes array rather than the whole object. Override it with the correct
    // comparison while preserving the same public function name.
    window.saveGameData = function () {
        const safeMistakes = Array.isArray(mistakeDB) ? mistakeDB : [];
        const previousData = readJSON('vocabPro_rpg', {});
        const previousMistakes = Array.isArray(previousData.mistakes) ? previousData.mistakes : [];
        const prevMap = buildItemMap(previousMistakes);
        const nextMap = buildItemMap(safeMistakes);
        const meta = cloneMeta(readJSON(MISTAKE_META_KEY, {}));
        const now = Date.now();

        nextMap.forEach((item, key) => {
            const previous = prevMap.get(key);
            if (!previous || !sameItem(previous, item)) {
                meta[key] = { updatedAt: now, deleted: false };
            } else if (!meta[key]) {
                meta[key] = { updatedAt: 0, deleted: false };
            }
        });

        prevMap.forEach((_item, key) => {
            if (!nextMap.has(key)) {
                meta[key] = { updatedAt: now, deleted: true };
            }
        });

        writeJSON(MISTAKE_META_KEY, meta);
        writeJSON('vocabPro_rpg', { mistakes: safeMistakes });
        updateMistakeCount();
        scheduleCloudSave();
    };

    // -------------------------------------------------------------------------
    // Fix 3: make cloud writes awaitable and remove reload-based synchronisation.
    // -------------------------------------------------------------------------
    let cloudSaveTimer = null;
    window.scheduleCloudSave = function (delayMs = 600) {
        if (!currentUser) return;
        clearTimeout(cloudSaveTimer);
        cloudSaveTimer = setTimeout(() => {
            Promise.resolve(saveToCloud()).catch((error) => {
                console.error('背景存檔失敗', error);
            });
        }, delayMs);
    };

    window.saveToCloud = async function () {
        if (!currentUser) return;

        const dbRef = (typeof db !== 'undefined' && db) ? db : firebase.firestore();
        const localProg = readJSON('vocabRPG_dungeon_progress', {});
        const localFav = readJSON('vocabPro_favorites', []);
        const localHistory = readJSON('vocabRPG_daily_activity', {});
        const favoriteMeta = cloneMeta(readJSON(FAVORITE_META_KEY, {}));
        const mistakeMeta = cloneMeta(readJSON(MISTAKE_META_KEY, {}));

        // Give legacy active items an explicit active state without pretending we
        // know when they were originally created.
        buildItemMap(localFav).forEach((_item, key) => {
            if (!favoriteMeta[key]) favoriteMeta[key] = { updatedAt: 0, deleted: false };
        });
        buildItemMap(mistakeDB).forEach((_item, key) => {
            if (!mistakeMeta[key]) mistakeMeta[key] = { updatedAt: 0, deleted: false };
        });

        writeJSON(FAVORITE_META_KEY, favoriteMeta);
        writeJSON(MISTAKE_META_KEY, mistakeMeta);

        const masteryByKey = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('vocabRPG_mastery_')) {
                masteryByKey[key.replace('vocabRPG_mastery_', '')] = readJSON(key, {});
            }
        }

        const dataToSend = {
            mistakes: Array.isArray(mistakeDB) ? mistakeDB : [],
            mistakeMeta,
            favorites: Array.isArray(localFav) ? localFav : [],
            favoriteMeta,
            dungeonProgress: localProg || {},
            masteryByKey,
            dailyActivity: localHistory || {},
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await dbRef.collection('users').doc(currentUser.uid).set(dataToSend, { merge: true });
    };

    window.checkCloudSave = async function (user) {
        console.log('☁️ 檢查雲端...');
        const dbRef = (typeof db !== 'undefined' && db) ? db : firebase.firestore();

        try {
            const doc = await dbRef.collection('users').doc(user.uid).get();

            if (!doc.exists) {
                console.log('☁️ 無雲端存檔，正在上傳本地進度...');
                await saveToCloud();
            } else {
                console.log('☁️ 發現雲端存檔，開始合併...');
                loadFromCloud(doc.data());
                await saveToCloud();
                console.log('✅ 雲端進度同步完成');
            }
        } catch (error) {
            console.error('雲端同步錯誤:', error);
        }
    };

    window.loadFromCloud = function (cloudData) {
        if (!cloudData) return;

        console.log('📥 開始處理雲端資料...');

        const safeInt = (value) => {
            const n = parseInt(value, 10);
            return Number.isNaN(n) ? 0 : n;
        };

        // Mistakes: timestamp-aware merge with deletion tombstones.
        const localMistakes = Array.isArray(mistakeDB) ? mistakeDB : [];
        const cloudMistakes = Array.isArray(cloudData.mistakes) ? cloudData.mistakes : [];
        const mergedMistakes = mergeTrackedCollection(
            localMistakes,
            cloudMistakes,
            readJSON(MISTAKE_META_KEY, {}),
            cloudData.mistakeMeta || {}
        );
        mistakeDB = mergedMistakes.items;
        writeJSON('vocabPro_rpg', { mistakes: mistakeDB });
        writeJSON(MISTAKE_META_KEY, mergedMistakes.meta);
        updateMistakeCount();

        // Favourites: same conflict strategy as mistakes.
        const localFavorites = readJSON('vocabPro_favorites', []);
        const cloudFavorites = Array.isArray(cloudData.favorites) ? cloudData.favorites : [];
        const mergedFavorites = mergeTrackedCollection(
            Array.isArray(localFavorites) ? localFavorites : [],
            cloudFavorites,
            readJSON(FAVORITE_META_KEY, {}),
            cloudData.favoriteMeta || {}
        );
        writeJSON('vocabPro_favorites', mergedFavorites.items);
        writeJSON(FAVORITE_META_KEY, mergedFavorites.meta);

        // Dungeon progress: keep the furthest unlocked level.
        const localProgress = readJSON('vocabRPG_dungeon_progress', {}) || {};
        const cloudProgress = cloudData.dungeonProgress || {};
        const progressKeys = new Set([...Object.keys(localProgress), ...Object.keys(cloudProgress)]);
        const mergedProgress = {};
        progressKeys.forEach((key) => {
            mergedProgress[key] = Math.max(safeInt(localProgress[key]), safeInt(cloudProgress[key]));
        });
        writeJSON('vocabRPG_dungeon_progress', mergedProgress);

        // Daily activity: preserve the larger count for each day.
        const localDaily = readJSON('vocabRPG_daily_activity', {}) || {};
        const cloudDaily = cloudData.dailyActivity || {};
        const dailyKeys = new Set([...Object.keys(localDaily), ...Object.keys(cloudDaily)]);
        const mergedDaily = {};
        dailyKeys.forEach((key) => {
            mergedDaily[key] = Math.max(safeInt(localDaily[key]), safeInt(cloudDaily[key]));
        });
        writeJSON('vocabRPG_daily_activity', mergedDaily);

        // SRS/mastery: preserve whichever side has the greater mastery count.
        const cloudMastery = cloudData.masteryByKey || {};
        Object.keys(cloudMastery).forEach((key) => {
            const localKey = `vocabRPG_mastery_${key}`;
            const localValue = readJSON(localKey, {}) || {};
            const cloudValue = cloudMastery[key] || {};
            const mergedValue = { ...localValue };

            Object.keys(cloudValue).forEach((level) => {
                const localRecord = localValue[level] || { count: 0, nextPlay: 0 };
                const cloudRecord = cloudValue[level] || { count: 0, nextPlay: 0 };
                if (safeInt(cloudRecord.count) > safeInt(localRecord.count)) {
                    mergedValue[level] = cloudRecord;
                }
            });

            writeJSON(localKey, mergedValue);
        });

        // No location.reload(): the in-memory/local state above is already current.
        console.log('✅ 雲端資料合併完成');
    };
})();
