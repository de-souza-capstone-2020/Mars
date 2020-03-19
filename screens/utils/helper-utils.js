const getRandomAppState = appState => {
  let items = Array.from(appState);
  return items[Math.floor(Math.random() * items.length)];
};

const getNextAppState = appState => {
  let items = Array.from(appState);
  return items[0];
};

export { getRandomAppState,getNextAppState };
