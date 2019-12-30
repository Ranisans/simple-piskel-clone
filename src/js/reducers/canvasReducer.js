import { canvasSizes, CHANGE_CANVAS_SIZE } from '../actions/canvasAction';

export const initialState = {
  size: canvasSizes[0],
};

export const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CANVAS_SIZE:
      return {
        ...state,
        size: action.size,
      };
    default:
      return state;
  }
};
