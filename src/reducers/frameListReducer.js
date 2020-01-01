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
      if (state.frames.indexOf(frameId)) {
        if (action.payload.position >= 0) {
          const frames = [...state.frames];
          frames.splice(
            action.payload.position, 0, frameId,
          );
          return {
            frames,
          };
        }
        return {
          frames: [...state.frames, frameId],
        };
      } return state;
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
