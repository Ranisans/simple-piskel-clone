import * as ACTION_TYPES from '../actions/toolActionTypes';

export const initialState = {
  tool: ACTION_TYPES.toolBtn.pen,
};

export const toolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_TOOL:
      return {
        ...state,
        tool: action.tool,
      };
    default:
      return state;
  }
};
