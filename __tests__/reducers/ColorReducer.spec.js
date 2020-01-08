import {
  CHANGE_PRIMARY_COLOR,
  CHANGE_SECONDARY_COLOR,
} from '../../src/actions/colorAction';
import { initialState, colorChangeReducer } from '../../src/reducers/colorReducer';

const testsBlock = (startState) => {
  it('set primary color', () => {
    const color = '#ffffff';
    const action = { type: CHANGE_PRIMARY_COLOR, color };
    let nextState;
    if (startState) {
      nextState = {
        ...startState,
        primary: color,
      };
    } else {
      nextState = {
        ...initialState,
        primary: color,
      };
    }

    expect(colorChangeReducer(startState, action)).toEqual(nextState);
  });

  it('set secondary color', () => {
    const color = '#ffffff';
    const action = { type: CHANGE_SECONDARY_COLOR, color };
    let nextState;
    if (startState) {
      nextState = {
        ...startState,
        secondary: color,
      };
    } else {
      nextState = {
        ...initialState,
        secondary: color,
      };
    }

    expect(colorChangeReducer(startState, action)).toEqual(nextState);
  });


  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(colorChangeReducer(startState, action)).toEqual(startState);
    } else {
      expect(colorChangeReducer(startState, action)).toEqual(initialState);
    }
  });
};


describe('colorReducer tests', () => {
  describe('colorReducer tests', () => {
    const testState = {
      primary: '#ff3344',
      secondary: '#ffaa11',
    };
    testsBlock(testState);
  });

  describe('colorReducer tests', () => {
    testsBlock(undefined);
  });
});
