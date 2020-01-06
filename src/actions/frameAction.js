export const ADD_FRAME = 'ADD_FRAME';
export const UPDATE_FRAME = 'UPDATE_FRAME';
export const REMOVE_FRAME = 'REMOVE_FRAME';
export const ACTIVATE_FRAME = 'ACTIVATE_FRAME';

export const addFrame = ({ frameId, parentFrame = null }) => (
  {
    type: ADD_FRAME,
    payload: {
      frameId,
      parentFrame,
    },
  }
);

export const updateActiveFrame = ({ imageData = null }) => (
  {
    type: UPDATE_FRAME,
    payload: {
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

export const activateFrame = ({ frameId }) => (
  {
    type: ACTIVATE_FRAME,
    payload: { frameId },
  }
);
