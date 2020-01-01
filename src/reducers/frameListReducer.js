import {
  ADD_FRAME, REMOVE_FRAME,
} from '../actions/frameAction';

export const initialState = {
  frames: ['frame-1'],
};

export const frameListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME: {
      if (action.payload.position >= 0) {
        return {
          frames: [...state.frames].splice(
            action.payload.position, 0, action.payload.frameId,
          ),
        };
      }
      return {
        frames: [...state.frames].push(action.payload.frameId),
      };
    }
    case REMOVE_FRAME:
      return {
        ...state,
        frames: state.frames.filter((frameId) => frameId !== action.payload.frameId),
      };
    default:
      return state;
  }
};
