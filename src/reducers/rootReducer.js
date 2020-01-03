import { combineReducers } from 'redux';

import { toolReducer } from './toolReducer';
import { penSizeReducer } from './penSizeReducer';
import { canvasReducer } from './canvasReducer';
import { colorChangeReducer } from './colorReducer';
import { colorPickerReducer } from './colorPickerReducer';
import { frameReducer } from './frameReducer';
import { frameListReducer } from './frameListReducer';

const appReducer = combineReducers({
  tools: toolReducer,
  penSize: penSizeReducer,
  canvas: canvasReducer,
  color: colorChangeReducer,
  colorPicker: colorPickerReducer,
  frame: frameReducer,
  frameList: frameListReducer,
});

export default appReducer;
