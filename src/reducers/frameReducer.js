import {
  ADD_FRAME,
  UPDATE_FRAME,
  REMOVE_FRAME,
  ACTIVATE_FRAME,
} from '../actions/frameAction';

export const initialState = {};

export const frameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME: {
      const frameId = `frame-${action.payload.frameId}`;
      if (!state[frameId]) {
        let imageData = null;
        const { parentFrame } = action.payload;
        if (state[parentFrame]) {
          const parentImageData = state[parentFrame].imageData;
          imageData = parentImageData || null;
        }
        return {
          ...state,
          [frameId]: {
            frameId,
            imageData,
          },
          activeFrame: frameId,
        };
      } return state;
    }
    case UPDATE_FRAME: {
      if (state.activeFrame) {
        return {
          ...state,
          [state.activeFrame]: {
            ...state[state.activeFrame],
            imageData: action.payload.imageData,
          },
        };
      } return state;
    }
    case REMOVE_FRAME: {
      const { frameId } = action.payload;
      const { [frameId]: discard, ...newState } = state;
      return newState;
    }
    case ACTIVATE_FRAME: {
      if (state[action.payload.frameId]) {
        return {
          ...state,
          activeFrame: action.payload.frameId,
        };
      } return state;
    }
    default:
      return state;
  }
};
