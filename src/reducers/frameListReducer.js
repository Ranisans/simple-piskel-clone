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
        const frames = [...state.frames];
        frames.splice(
          action.payload.position, 0, `frame-${action.payload.frameId}`,
        );
        return {
          frames,
        };
      }
      return {
        frames: [...state.frames, `frame-${action.payload.frameId}`],
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
