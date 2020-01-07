import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import { loadStorage, saveState } from './localStorage';

const persistedState = loadStorage();

const store = createStore(
  rootReducer,
  persistedState,
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
