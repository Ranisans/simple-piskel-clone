export const mainCanvasClass = 'main_canvas';

export const canvasSizes = [32, 64, 128];

export const CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE';

export const changeCanvasSize = ({ size }) => (
  {
    type: CHANGE_CANVAS_SIZE,
    size,
  }
);
