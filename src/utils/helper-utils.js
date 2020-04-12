
//not used - we decided that app state should be pre-determined
const getRandomAppState = appState => {
  let items = Array.from(appState);
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomGenericTip = () => { //five options to randomly select from
  let items = [1,2,3,4,5];
  return items[Math.floor(Math.random() * items.length)];
};

const getNextAppState = appState => {
  let items = Array.from(appState);
  return items[0];
};

//not used
const getNextModule = ()=> { //three modules to randomly select from
  let items = [1,2,3];
  return items[Math.floor(Math.random() * items.length)];
};

export { getRandomAppState,getNextAppState,getRandomGenericTip,getNextModule };
