import {
  ADD_FRAME, UPDATE_FRAME, REMOVE_FRAME,
} from '../actions/frameAction';

export const initialState = {
  'frame-1': { frameId: 'frame-1', imageData: null },
};

export const frameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME:
      return {
        ...state,
        [`frame-${action.payload.frameId}`]: {
          frameId: `frame-${action.payload.frameId}`,
          imageData: action.payload.imageData,
        },
      };
    case UPDATE_FRAME:
      return {
        ...state,
        [action.payload.frameId]: {
          ...state[action.payload.frameId],
          imageData: action.payload.imageData,
        },
      };
    case REMOVE_FRAME: {
      const { frameId } = action.payload;
      const { [frameId]: discard, ...newState } = state;
      if (Object.keys(newState).length === 0) { return initialState; }
      return newState;
    }

    default:
      return state;
  }
};
