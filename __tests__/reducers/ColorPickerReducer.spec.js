import {
  CHANGE_PRIMARY_PICKER_COLOR,
  CHANGE_SECONDARY_PICKER_COLOR,
  EXCHANGE_COLORS,
} from '../../src/actions/colorPickerAction';
import { initialState, colorPickerReducer } from '../../src/reducers/colorPickerReducer';

const testsBlock = (startState) => {
  it('set primary color', () => {
    const color = '#ffffff';
    const action = { type: CHANGE_PRIMARY_PICKER_COLOR, color };
    let nextState;
    if (startState) {
      nextState = {
        ...startState,
        primaryPicker: color,
      };
    } else {
      nextState = {
        ...initialState,
        primaryPicker: color,
      };
    }

    expect(colorPickerReducer(startState, action)).toEqual(nextState);
  });

  it('set secondary color', () => {
    const color = '#ffffff';
    const action = { type: CHANGE_SECONDARY_PICKER_COLOR, color };
    let nextState;
    if (startState) {
      nextState = {
        ...startState,
        secondaryPicker: color,
      };
    } else {
      nextState = {
        ...initialState,
        secondaryPicker: color,
      };
    }

    expect(colorPickerReducer(startState, action)).toEqual(nextState);
  });

  it('exchange colors', () => {
    const action = { type: EXCHANGE_COLORS };
    let nextState;
    if (startState) {
      nextState = {
        primaryPicker: startState.secondaryPicker,
        secondaryPicker: startState.primaryPicker,
      };
    } else {
      nextState = {
        primaryPicker: initialState.secondaryPicker,
        secondaryPicker: initialState.primaryPicker,
      };
    }

    expect(colorPickerReducer(startState, action)).toEqual(nextState);
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(colorPickerReducer(startState, action)).toEqual(startState);
    } else {
      expect(colorPickerReducer(startState, action)).toEqual(initialState);
    }
  });
};


describe('colorPickerReducer tests', () => {
  describe('with state', () => {
    const testState = {
      primaryPicker: '#ff3344',
      secondaryPicker: '#ffaa11',
    };
    testsBlock(testState);
  });

  describe('without state', () => {
    testsBlock(undefined);
  });
});
