const storageName = 'redux_state';

export const loadStorage = () => {
  try {
    const serializedState = localStorage.getItem(storageName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageName, serializedState);
  } catch (e) {
    // nothing
  }
};
