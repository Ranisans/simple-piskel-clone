import { combineReducers } from 'redux';

import { toolReducer } from './toolReducer';
import { penSizeReducer } from './penSizeReducer';

const appReducer = combineReducers({
  tools: toolReducer,
  penSize: penSizeReducer,
});

export default appReducer;
