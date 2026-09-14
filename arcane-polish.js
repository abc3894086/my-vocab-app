(() => {
  'use strict';

  function findWord(word) {
    if (!word || typeof vocabDB === 'undefined') return null;
    const toeic = Array.isArray(vocabDB.TOEIC) ? vocabDB.TOEIC : [];
    let found = toeic.find(item => item.en === word);
    if (found) return found;
    const toefl = vocabDB.TOEFL || {};
    for (const list of Object.values(toefl)) {
      if (!Array.isArray(list)) continue;
      found = list.find(item => item.en === word);
      if (found) return found;
    }
    return null;
  }

  document.addEventListener('click', event => {
    const mini = event.target.closest('.arcane-mini-card[data-word]');
    if (mini) {
      const item = findWord(mini.dataset.word);
      if (!item) return;
      try {
        currentMode = 'learn';
        isAdventureMode = false;
        currentCategoryLabel = '精選卡牌';
        currentList = [item];
        currentIndex = 0;
        showPage('page-flashcard');
        loadCard();
      } catch (err) {
        console.error('Unable to open featured card', err);
      }
      return;
    }

    const authButton = event.target.closest('[data-auth]');
    if (!authButton) return;
    try {
      if (typeof auth !== 'undefined' && auth.currentUser && typeof saveToCloud === 'function') {
        event.preventDefault();
        event.stopImmediatePropagation();
        Promise.resolve(saveToCloud())
          .then(() => {
            const old = authButton.textContent;
            authButton.textContent = '已同步';
            setTimeout(() => { if (authButton.isConnected) authButton.textContent = old; }, 1300);
          })
          .catch(err => console.error('Manual sync failed', err));
      }
    } catch (err) {
      console.error('Arcane auth action failed', err);
    }
  }, true);
})();
