import { combineReducers } from 'redux';

import { toolReducer } from './toolReducer';
import { penSizeReducer } from './penSizeReducer';
import { canvasReducer } from './canvasReducer';
import { colorChangeReducer } from './colorReducer';

const appReducer = combineReducers({
  tools: toolReducer,
  penSize: penSizeReducer,
  canvas: canvasReducer,
  color: colorChangeReducer,
});

export default appReducer;
