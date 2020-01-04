import {
  ADD_FRAME,
  UPDATE_FRAME,
  REMOVE_FRAME,
  ACTIVATE_FRAME,
  SET_ACTIVE_IMAGE_DATA,
} from '../actions/frameAction';

export const initialState = {};

export const frameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME: {
      if (!state[`frame-${action.payload.frameId}`]) {
        return {
          ...state,
          [`frame-${action.payload.frameId}`]: {
            frameId: `frame-${action.payload.frameId}`,
            imageData: action.payload.imageData,
          },
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
    case SET_ACTIVE_IMAGE_DATA:
      return {
        ...state,
        activeImageData: action.payload.imageData,
      };
    default:
      return state;
  }
};
