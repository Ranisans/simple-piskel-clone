import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import { loadStorage, saveState } from './localStorage';

const persistedState = loadStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
