const getRandomAppState = appState => {
  let items = Array.from(appState);
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomGenericTip = () => { //three options to randomly select from
  let items = [1,2,3];
  return items[Math.floor(Math.random() * items.length)];
};

const getNextAppState = appState => {
  let items = Array.from(appState);
  return items[0];
};

const getNextModule = modState=> {
  let items = Array.from(modState);
  return items[mod];
};

export { getRandomAppState,getNextAppState,getRandomGenericTip,getNextModule };
