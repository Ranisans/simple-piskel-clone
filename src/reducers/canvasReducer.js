import { canvasSizes, CHANGE_CANVAS_SIZE, CHANGE_CANVAS_BOX_SIZE } from '../actions/canvasAction';

export const initialState = {
  size: canvasSizes[0],
  boxSize: 0,
};

export const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CANVAS_SIZE:
      return {
        ...state,
        size: action.size,
      };
    case CHANGE_CANVAS_BOX_SIZE:
      return {
        ...state,
        boxSize: action.size,
      };
    default:
      return state;
  }
};
