import {
  ADD_FRAME, REMOVE_FRAME,
} from '../../src/actions/frameAction';

import { initialState, frameListReducer } from '../../src/reducers/frameListReducer';

describe('frameListReducer tests', () => {
  describe('with state in reducer', () => {
    it('add frame without position', () => {
      const frameId = 2;
      const action = { type: ADD_FRAME, payload: { frameId } };
      const nextState = {
        frames: [...initialState.frames, `frame-${frameId}`],
      };

      expect(frameListReducer(initialState, action)).toEqual(nextState);
    });

    it('add frame with position', () => {
      const [frameId, position] = [2, 0];
      const action = { type: ADD_FRAME, payload: { frameId, position } };
      const nextState = {
        frames: [`frame-${frameId}`, ...initialState.frames],
      };

      expect(frameListReducer(initialState, action)).toEqual(nextState);
    });

    it('remove frame', () => {
      const secondFrameIdNumber = 2;
      const secondFrameId = `frame-${secondFrameIdNumber}`;
      const addAction = { type: ADD_FRAME, payload: { frameId: secondFrameIdNumber } };
      const stateAfterAdd = frameListReducer(initialState, addAction);

      const firstFrameId = 'frame-1';
      const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
      const stateAfterRemove = {
        frames: [secondFrameId],
      };

      expect(frameListReducer(stateAfterAdd, removeAction)).toEqual(stateAfterRemove);
    });

    it('return current state if action type not tracked', () => {
      const action = { type: 'SOMETHING' };

      expect(frameListReducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('without state in reducer', () => {
    it('add frame without position', () => {
      const frameId = 2;
      const action = { type: ADD_FRAME, payload: { frameId } };
      const nextState = {
        frames: [...initialState.frames, `frame-${frameId}`],
      };

      expect(frameListReducer(undefined, action)).toEqual(nextState);
    });

    it('add frame with position', () => {
      const [frameId, position] = [2, 0];
      const action = { type: ADD_FRAME, payload: { frameId, position } };
      const nextState = {
        frames: [`frame-${frameId}`, ...initialState.frames],
      };

      expect(frameListReducer(undefined, action)).toEqual(nextState);
    });

    it('remove frame', () => {
      const secondFrameIdNumber = 2;
      const secondFrameId = `frame-${secondFrameIdNumber}`;
      const addAction = { type: ADD_FRAME, payload: { frameId: secondFrameIdNumber } };
      const stateAfterAdd = frameListReducer(undefined, addAction);

      const firstFrameId = 'frame-1';
      const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
      const stateAfterRemove = {
        frames: [secondFrameId],
      };

      expect(frameListReducer(stateAfterAdd, removeAction)).toEqual(stateAfterRemove);
    });

    it('return current state if action type not tracked', () => {
      const action = { type: 'SOMETHING' };

      expect(frameListReducer(undefined, action)).toEqual(initialState);
    });
  });
});
