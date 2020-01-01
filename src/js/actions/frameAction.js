export const ADD_FRAME = 'ADD_FRAME';
export const UPDATE_FRAME = 'UPDATE_FRAME';
export const REMOVE_FRAME = 'REMOVE_FRAME';

export const addFrame = ({ frameId, imageData = null }) => (
  {
    type: ADD_FRAME,
    frameId,
    imageData,
  }
);

export const updateFrame = ({ frameId, imageData }) => (
  {
    type: UPDATE_FRAME,
    frameId,
    imageData,
  }
);

export const removeFrame = ({ frameId }) => (
  {
    type: REMOVE_FRAME,
    frameId,
  }
);
