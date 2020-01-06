import {
  ADD_FRAME, REMOVE_FRAME, MOVE_FRAME,
} from '../../src/actions/frameAction';

import { initialState, frameListReducer } from '../../src/reducers/frameListReducer';

const testState = {
  frames: ['frame-1'],
};

const testBlock = (startState) => {
  it('add frame without parentId', () => {
    const frameId = 2;
    const action = { type: ADD_FRAME, payload: { frameId } };
    if (startState) {
      const nextState = {
        frames: [...startState.frames, `frame-${frameId}`],
      };
      expect(frameListReducer(startState, action)).toEqual(nextState);
    } else {
      const nextState = {
        frames: [`frame-${frameId}`],
      };
      expect(frameListReducer(undefined, action)).toEqual(nextState);
    }
  });

  it('add frame with parentId', () => {
    const secondFrame = 2;
    const addAction = { type: ADD_FRAME, payload: { frameId: secondFrame } };
    const stateAfterAdd = frameListReducer(startState, addAction);

    const [thirdFrame, parentFrame] = [3, 'frame-1'];
    const addAfterParentAction = {
      type: ADD_FRAME,
      payload: { frameId: thirdFrame, parentFrame },
    };

    if (startState) {
      const stateAfterAddWithParent = {
        frames: ['frame-1', 'frame-3', 'frame-2'],
      };
      expect(
        frameListReducer(stateAfterAdd, addAfterParentAction),
      ).toEqual(stateAfterAddWithParent);
    } else {
      const stateAfterAddWithParent = {
        frames: ['frame-2', 'frame-3'],
      };
      expect(
        frameListReducer(stateAfterAdd, addAfterParentAction),
      ).toEqual(stateAfterAddWithParent);
    }
  });

  it('add frame with exist id', () => {
    const frameId = 1;
    const addAction = { type: ADD_FRAME, payload: { frameId } };

    if (startState) {
      expect(
        frameListReducer(startState, addAction),
      ).toEqual(startState);
    } else {
      const stateAfterAdd = {
        frames: [`frame-${frameId}`],
      };
      expect(
        frameListReducer(startState, addAction),
      ).toEqual(stateAfterAdd);
    }
  });

  it('remove frame', () => {
    const secondFrameIdNumber = 2;
    const secondFrameId = `frame-${secondFrameIdNumber}`;
    const addAction = { type: ADD_FRAME, payload: { frameId: secondFrameIdNumber } };
    const stateAfterAdd = frameListReducer(startState, addAction);

    const firstFrameId = 'frame-1';
    const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
    const stateAfterRemove = {
      frames: [secondFrameId],
    };

    expect(frameListReducer(stateAfterAdd, removeAction)).toEqual(stateAfterRemove);
  });

  it('move frame in the List from source to destination', () => {
    // function called only if framesList length > 1
    if (startState) {
      const firstFrameId = 'frame-1';
      const secondFrameIdNumber = 2;
      const secondFrameId = `frame-${secondFrameIdNumber}`;
      const addAction = { type: ADD_FRAME, payload: { frameId: secondFrameIdNumber } };
      const stateAfterAdd = frameListReducer(startState, addAction);

      const moveAction = {
        type: MOVE_FRAME,
        payload: {
          source: stateAfterAdd.frames.indexOf(secondFrameId),
          destination: stateAfterAdd.frames.indexOf(firstFrameId),
        },
      };
      const resultState = {
        frames: [secondFrameId, firstFrameId],
      };

      expect(frameListReducer(stateAfterAdd, moveAction)).toEqual(resultState);
    }
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(frameListReducer(startState, action)).toEqual(startState);
    } else {
      expect(frameListReducer(startState, action)).toEqual(initialState);
    }
  });
};

describe('frameListReducer tests', () => {
  describe('with state in reducer', () => {
    testBlock(testState);
  });

  describe('without state in reducer', () => {
    testBlock(undefined);
  });
});
