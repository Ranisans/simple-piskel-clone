import { colorsElements } from '../actions/colorAction';
import * as ACTIONS from '../actions/colorPickerAction';


export const initialState = {
  primaryPicker: colorsElements[0].baseColor,
  secondaryPicker: colorsElements[1].baseColor,
};

export const colorPickerReducer = (state = initialState, action) => {
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
    case ACTIONS.EXCHANGE_COLORS:
      return {
        ...state,
        primaryPicker: state.secondaryPicker,
        secondaryPicker: state.primaryPicker,
      };
    default:
      return state;
  }
};
