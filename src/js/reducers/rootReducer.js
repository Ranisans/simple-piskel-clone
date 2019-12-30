import { combineReducers } from 'redux';

import { toolReducer } from './toolReducer';
import { penSizeReducer } from './penSizeReducer';
import { canvasReducer } from './canvasReducer';

const appReducer = combineReducers({
  tools: toolReducer,
  penSize: penSizeReducer,
  canvas: canvasReducer,
});

export default appReducer;
