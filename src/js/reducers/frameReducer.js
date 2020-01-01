import {
  ADD_FRAME, UPDATE_FRAME, REMOVE_FRAME,
} from '../actions/frameAction';

export const initialState = {
  'frame-1': { frameId: 'frame-1', imageData: null },
};

export const frameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME:
    case UPDATE_FRAME:
      return {
        ...state,
        [action.frameId]: {
          frameId: action.frameId,
          imageData: action.imageData,
        },
      };
    case REMOVE_FRAME: {
      const { frameId } = action;
      const { [frameId]: discard, ...newState } = state;
      return newState;
    }

    default:
      return state;
  }
};
