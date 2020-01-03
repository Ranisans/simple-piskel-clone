import { colorsElements } from '../actions/colorAction';
import * as ACTIONS from '../actions/colorPickerAction';

export const initState = {
  primaryPicker: colorsElements[0].baseColor,
  secondaryPicker: colorsElements[1].baseColor,
};

export const colorPickerReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_PRIMARY_PICKER_COLOR:
      return {
        ...state,
        primaryPicker: action.color,
      };
    case ACTIONS.CHANGE_SECONDARY_PICKER_COLOR:
      return {
        ...state,
        secondaryPicker: action.color,
      };
    default:
      return state;
  }
};
