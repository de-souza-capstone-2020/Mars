const getRandomAppState = appState => {
  let items = Array.from(appState);
  return items[Math.floor(Math.random() * items.length)];
};

export { getRandomAppState };
