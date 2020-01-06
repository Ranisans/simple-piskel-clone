import {
  ADD_FRAME, REMOVE_FRAME,
} from '../actions/frameAction';

export const initialState = {
  frames: [],
};

export const frameListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRAME: {
      const frameId = `frame-${action.payload.frameId}`;
      if (!(state.frames.indexOf(frameId) >= 0)) {
        const parentFrameId = action.payload.parentFrame;
        const parentPosition = state.frames.indexOf(parentFrameId);
        if (parentPosition >= 0) {
          const frames = [...state.frames];
          frames.splice(parentPosition + 1, 0, frameId);

          return {
            ...state,
            frames,
          };
        }
        return {
          ...state,
          frames: [...state.frames, frameId],
        };
      }
      return state;
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
