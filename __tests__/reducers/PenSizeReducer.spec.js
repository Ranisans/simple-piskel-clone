import {
  CHANGE_PEN_SIZE,
} from '../../src/actions/penSizeAction';
import { initialState, penSizeReducer } from '../../src/reducers/penSizeReducer';

const testsBlock = (startState) => {
  it('update new pen size', () => {
    const size = 4;
    const action = { type: CHANGE_PEN_SIZE, size };
    const nextState = {
      size,
    };

    expect(penSizeReducer(startState, action)).toEqual(nextState);
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(penSizeReducer(startState, action)).toEqual(startState);
    } else {
      expect(penSizeReducer(startState, action)).toEqual(initialState);
    }
  });
};

describe('penSizeReducer tests', () => {
  describe('with state', () => {
    const testState = {
      size: 1,
    };
    testsBlock(testState);
  });
  describe('without state', () => {
    testsBlock(undefined);
  });
});
