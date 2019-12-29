import { penSize, CHANGE_PEN_SIZE } from '../actions/penSizeAction';

export const initialState = {
  size: penSize[0],
};

export const penSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PEN_SIZE:
      return {
        ...state,
        size: action.size,
      };
    default:
      return state;
  }
};
