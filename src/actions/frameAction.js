export const ADD_FRAME = 'ADD_FRAME';
export const UPDATE_FRAME = 'UPDATE_FRAME';
export const REMOVE_FRAME = 'REMOVE_FRAME';

export const addFrame = ({ frameId, position = -1, imageData = null }) => (
  {
    type: ADD_FRAME,
    payload: {
      frameId,
      position,
      imageData,
    },
  }
);

export const updateFrame = ({ frameId, imageData = null }) => (
  {
    type: UPDATE_FRAME,
    payload: {
      frameId,
      imageData,
    },
  }
);

export const removeFrame = ({ frameId }) => (
  {
    type: REMOVE_FRAME,
    payload: { frameId },
  }
);
