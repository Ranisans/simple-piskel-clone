import {
  ADD_FRAME,
  UPDATE_FRAME,
  REMOVE_FRAME,
  ACTIVATE_FRAME,
} from '../../src/actions/frameAction';
import { frameReducer } from '../../src/reducers/frameReducer';

const testsBlock = (startState) => {
  it('add frame without parent', () => {
    const frameId = 2;
    const action = { type: ADD_FRAME, payload: { frameId } };
    const nextState = {
      ...startState,
      [`frame-${frameId}`]: { frameId: `frame-${frameId}`, imageData: null },
      activeFrame: 'frame-2',
    };

    expect(frameReducer(startState, action)).toEqual(nextState);
  });

  it('add frame with parent', () => {
    const [frameId, parentFrame] = [2, 'frame-1'];
    const action = { type: ADD_FRAME, payload: { frameId, parentFrame } };

    if (startState) {
      const nextState = {
        ...startState,
        [`frame-${frameId}`]: {
          frameId: `frame-${frameId}`,
          imageData: startState['frame-1'].imageData,
        },
        activeFrame: 'frame-2',
      };
      expect(frameReducer(startState, action)).toEqual(nextState);
    } else {
      const nextState = {
        ...startState,
        [`frame-${frameId}`]: {
          frameId: `frame-${frameId}`,
          imageData: null,
        },
        activeFrame: 'frame-2',
      };
      expect(frameReducer(startState, action)).toEqual(nextState);
    }
  });

  it('update frame', () => {
    const [frameId, imageData] = ['frame-1', 'someData'];
    const setActiveFrameAction = { type: ACTIVATE_FRAME, payload: { frameId } };
    const activatedFrameState = frameReducer(startState, setActiveFrameAction);

    const setUpdateFrame = { type: UPDATE_FRAME, payload: { imageData } };
    const nextState = {
      ...activatedFrameState,
      [frameId]: { frameId, imageData },
    };

    if (startState) {
      expect(frameReducer(activatedFrameState, setUpdateFrame)).toEqual(nextState);
    } else {
      expect(frameReducer(activatedFrameState, setUpdateFrame)).toEqual({});
    }
  });

  it('remove added frame', () => {
    const [secondFrameIdNumber, parentFrame] = [2, 'frame-1'];
    const secondFrameId = `frame-${secondFrameIdNumber}`;
    const addAction = {
      type: ADD_FRAME,
      payload: { frameId: secondFrameIdNumber, parentFrame },
    };
    const stateAfterAdd = frameReducer(startState, addAction);

    const [firstFrameId, firstImageData] = ['frame-1', 'someData A'];
    const updateAction = {
      type: UPDATE_FRAME,
      payload: { frameId: firstFrameId, imageData: firstImageData },
    };
    const stateAfterUpdate = frameReducer(stateAfterAdd, updateAction);

    const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
    if (startState) {
      const stateAfterRemove = {
        [secondFrameId]: {
          frameId: secondFrameId,
          imageData: stateAfterUpdate['frame-2'].imageData,
        },
        activeFrame: 'frame-2',
      };
      expect(frameReducer(stateAfterUpdate, removeAction)).toEqual(stateAfterRemove);
    }
  });

  it('set active frame Id', () => {
    const [secondFrameIdNumber, parentFrame] = [2, 'frame-1'];
    const secondFrameId = `frame-${secondFrameIdNumber}`;
    const addAction = {
      type: ADD_FRAME,
      payload: { frameId: secondFrameIdNumber, parentFrame },
    };
    const stateAfterAdd = frameReducer(startState, addAction);
    const setActiveFrameAction = { type: ACTIVATE_FRAME, payload: { frameId: secondFrameId } };

    if (startState) {
      const resultState = {
        ...stateAfterAdd,
        activeFrame: secondFrameId,
      };

      expect(frameReducer(stateAfterAdd, setActiveFrameAction)).toEqual(resultState);
    }
  });

  it('return current state if action type not tracked', () => {
    const action = { type: 'SOMETHING' };

    if (startState) {
      expect(frameReducer(startState, action)).toEqual(startState);
    } else {
      expect(frameReducer(startState, action)).toEqual({});
    }
  });
};

describe('frameReducer tests', () => {
  describe('with state in reducer', () => {
    const testState = {
      'frame-1': { frameId: 'frame-1', imageData: null },
    };
    testsBlock(testState);
  });

  // describe('without state in reducer', () => {
  //   const startState = undefined;
  //   testsBlock(startState);
  // });
});
