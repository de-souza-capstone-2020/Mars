const getRandomAppState = appState => {
  let items = Array.from(appState);
  return items[Math.floor(Math.random() * items.length)];
};

const getCurAppState = appState => {
  let items = Array.from(appState);
  return items[1];
};

export { getRandomAppState , getCurAppState };
