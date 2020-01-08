import {
  CHANGE_CANVAS_SIZE,
  CHANGE_CANVAS_BOX_SIZE,
} from '../../src/actions/canvasAction';
import { initialState, canvasReducer } from '../../src/reducers/canvasReducer';

const testsBlock = (startState) => {
  it('update canvas size', () => {
    const size = 2;
    const action = { type: CHANGE_CANVAS_SIZE, size };

    let nextState;
    if (startState) {
      nextState = {
        ...startState,
        size,
      };
    } else {
      nextState = {
        ...initialState,
        size,
      };
    }
    expect(canvasReducer(startState, action)).toEqual(nextState);
  });

  it('update canvas box size', () => {
    const size = 2;
    const action = { type: CHANGE_CANVAS_BOX_SIZE, size };

    if (startState) {
      const nextState = {
        ...startState,
        boxSize: size,
      };

      expect(canvasReducer(startState, action)).toEqual(nextState);
    } else {
      const nextState = {
        ...initialState,
        boxSize: size,
      };

      expect(canvasReducer(startState, action)).toEqual(nextState);
    }
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(canvasReducer(startState, action)).toEqual(startState);
    } else {
      expect(canvasReducer(startState, action)).toEqual(initialState);
    }
  });
};


describe('canvasReducer tests', () => {
  describe('with state', () => {
    const testState = {
      size: 2,
      boxSize: 88,
    };

    testsBlock(testState);
  });

  describe('without state', () => {
    testsBlock(undefined);
  });
});
