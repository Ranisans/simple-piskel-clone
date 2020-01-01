import {
  ADD_FRAME, UPDATE_FRAME, REMOVE_FRAME,
} from '../../src/actions/frameAction';
import { initialState, frameReducer } from '../../src/reducers/frameReducer';

describe('frameReducer tests', () => {
  it('add frame', () => {
    const [frameId, imageData] = [2, 'someData'];
    const action = { type: ADD_FRAME, payload: { frameId, imageData } };
    const nextState = {
      ...initialState,
      [`frame-${frameId}`]: { frameId: `frame-${frameId}`, imageData },
    };

    expect(frameReducer(initialState, action)).toEqual(nextState);
  });

  it('add frame without state', () => {
    const [frameId, imageData] = [2, 'someData'];
    const action = { type: ADD_FRAME, payload: { frameId, imageData } };
    const nextState = {
      ...initialState,
      [`frame-${frameId}`]: { frameId: `frame-${frameId}`, imageData },
    };

    expect(frameReducer(undefined, action)).toEqual(nextState);
  });

  it('update frame', () => {
    const [frameId, imageData] = ['frame-1', 'someData'];
    const action = { type: UPDATE_FRAME, payload: { frameId, imageData } };
    const nextState = {
      [frameId]: { frameId, imageData },
    };

    expect(frameReducer(initialState, action)).toEqual(nextState);
  });

  it('update frame without state', () => {
    const [frameId, imageData] = ['frame-1', 'someData'];
    const action = { type: UPDATE_FRAME, payload: { frameId, imageData } };
    const nextState = {
      [frameId]: { frameId, imageData },
    };

    expect(frameReducer(undefined, action)).toEqual(nextState);
  });

  it('remove last frame', () => {
    const [frameId, imageData] = ['frame-1', 'someData'];
    const updateAction = { type: UPDATE_FRAME, payload: { frameId, imageData } };
    const stateAfterUpdate = {
      [frameId]: { frameId, imageData },
    };
    expect(frameReducer(initialState, updateAction)).toEqual(stateAfterUpdate);

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
    const stateAfterAdd = {
      ...initialState,
      [`frame-${secondFrameIdNumber}`]: { frameId: `frame-${secondFrameIdNumber}`, imageData: secondImageData },
    };

    expect(frameReducer(initialState, addAction)).toEqual(stateAfterAdd);

    const [firstFrameId, firstImageData] = ['frame-1', 'someData A'];
    const updateAction = {
      type: UPDATE_FRAME,
      payload: { frameId: firstFrameId, imageData: firstImageData },
    };
    const stateAfterUpdate = {
      ...stateAfterAdd,
      [firstFrameId]: { frameId: firstFrameId, imageData: firstImageData },
    };

    expect(frameReducer(stateAfterAdd, updateAction)).toEqual(stateAfterUpdate);

    const removeAction = { type: REMOVE_FRAME, payload: { frameId: firstFrameId } };
    const stateAfterRemove = {
      [secondFrameId]: {
        frameId: secondFrameId,
        imageData: secondImageData,
      },
    };
    expect(frameReducer(stateAfterAdd, removeAction)).toEqual(stateAfterRemove);
  });
});
