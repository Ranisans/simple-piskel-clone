import {
  ADD_FRAME, UPDATE_FRAME, REMOVE_FRAME,
} from '../../src/actions/frameAction';
import { initialState, frameReducer } from '../../src/reducers/frameReducer';

const testState = {
  'frame-1': { frameId: 'frame-1', imageData: null },
};

describe('frameReducer tests', () => {
  describe('with state in reducer', () => {
    it('add frame', () => {
      const [frameId, imageData] = [2, 'someData'];
      const action = { type: ADD_FRAME, payload: { frameId, imageData } };
      const nextState = {
        ...testState,
        [`frame-${frameId}`]: { frameId: `frame-${frameId}`, imageData },
      };

      expect(frameReducer(testState, action)).toEqual(nextState);
    });

    it('update frame', () => {
      const [frameId, imageData] = ['frame-1', 'someData'];
      const action = { type: UPDATE_FRAME, payload: { frameId, imageData } };
      const nextState = {
        [frameId]: { frameId, imageData },
      };

      expect(frameReducer(testState, action)).toEqual(nextState);
    });

    it('remove added frame', () => {
      const [secondFrameIdNumber, secondImageData] = [2, 'someData'];
      const secondFrameId = `frame-${secondFrameIdNumber}`;
      const addAction = {
        type: ADD_FRAME,
        payload: { frameId: secondFrameIdNumber, imageData: secondImageData },
      };
      const stateAfterAdd = frameReducer(testState, addAction);

      const [firstFrameId, firstImageData] = ['frame-1', 'someData A'];
      const updateAction = {
        type: UPDATE_FRAME,
        payload: { frameId: firstFrameId, imageData: firstImageData },
      };
      const stateAfterUpdate = frameReducer(stateAfterAdd, updateAction);

      const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
      const stateAfterRemove = {
        [secondFrameId]: {
          frameId: secondFrameId,
          imageData: secondImageData,
        },
      };
      expect(frameReducer(stateAfterUpdate, removeAction)).toEqual(stateAfterRemove);
    });

    it('return current state if action type not tracked', () => {
      const action = { type: 'SOMETHING' };

      expect(frameReducer(testState, action)).toEqual(testState);
    });
  });

  describe('without state in reducer', () => {
    it('add frame', () => {
      const [frameId, imageData] = [2, 'someData'];
      const action = { type: ADD_FRAME, payload: { frameId, imageData } };
      const nextState = {
        [`frame-${frameId}`]: { frameId: `frame-${frameId}`, imageData },
      };

      expect(frameReducer(undefined, action)).toEqual(nextState);
    });

    it('update frame', () => {
      const [frameId, imageData] = ['frame-1', 'someData'];
      const action = { type: UPDATE_FRAME, payload: { frameId, imageData } };

      expect(frameReducer(undefined, action)).toEqual(initialState);
    });

    it('remove last frame', () => {
      const [frameId, imageData] = ['frame-1', 'someData'];
      const updateAction = { type: UPDATE_FRAME, payload: { frameId, imageData } };
      const stateAfterUpdate = frameReducer(undefined, updateAction);

      const removeAction = { type: REMOVE_FRAME, payload: { frameId } };
      expect(frameReducer(stateAfterUpdate, removeAction)).toEqual(initialState);
    });

    it('remove added frame', () => {
      const [secondFrameIdNumber, secondImageData] = [2, 'someData'];
      const secondFrameId = `frame-${secondFrameIdNumber}`;
      const addAction = {
        type: ADD_FRAME,
        payload: { frameId: secondFrameIdNumber, imageData: secondImageData },
      };
      const stateAfterAdd = frameReducer(undefined, addAction);

      const [firstFrameId, firstImageData] = ['frame-1', 'someData A'];
      const updateAction = {
        type: UPDATE_FRAME,
        payload: { frameId: firstFrameId, imageData: firstImageData },
      };
      const stateAfterUpdate = frameReducer(stateAfterAdd, updateAction);

      const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
      const stateAfterRemove = {
        [secondFrameId]: {
          frameId: secondFrameId,
          imageData: secondImageData,
        },
      };
      expect(frameReducer(stateAfterUpdate, removeAction)).toEqual(stateAfterRemove);
    });

    it('return current state if action type not tracked', () => {
      const action = { type: 'SOMETHING' };

      expect(frameReducer(undefined, action)).toEqual(initialState);
    });
  });
});
