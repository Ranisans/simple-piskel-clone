import * as ACTIONS from '../actions/colorAction';

export const initState = {
  primary: ACTIONS.colorsElements[0].baseColor,
  secondary: ACTIONS.colorsElements[1].baseColor,
};

export const colorChangeReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primary: action.color,
      };
    case ACTIONS.CHANGE_SECONDARY_COLOR:
      return {
        ...state,
        secondary: action.color,
      };
    default:
      return state;
  }
};
