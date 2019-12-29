import { combineReducers } from 'redux';

import { toolReducer } from './toolReducer';

const appReducer = combineReducers({
  tools: toolReducer,
});

export default appReducer;
