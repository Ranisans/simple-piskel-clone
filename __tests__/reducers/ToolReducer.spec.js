import {
  CHANGE_TOOL,
} from '../../src/actions/toolActionTypes';
import { initialState, toolReducer } from '../../src/reducers/toolReducer';

const testsBlock = (startState) => {
  it('set primary color', () => {
    const tool = 'saw';
    const action = { type: CHANGE_TOOL, tool };
    const nextState = {
      tool,
    };

    expect(toolReducer(startState, action)).toEqual(nextState);
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(toolReducer(startState, action)).toEqual(startState);
    } else {
      expect(toolReducer(startState, action)).toEqual(initialState);
    }
  });
};


describe('colorReducer tests', () => {
  describe('colorReducer tests', () => {
    const testState = {
      tool: 'hammer',
    };
    testsBlock(testState);
  });

  describe('colorReducer tests', () => {
    testsBlock(undefined);
  });
});
