import { additionalCanvasClass } from '../../../actions/canvasAction';
import CanvasLogicAbstract from './CanvasLogicAbstract';

class StrokeLogic extends CanvasLogicAbstract {
  constructor(drawLineCallback) {
    super();
    this.drawLineCallback = drawLineCallback;
    this.baseAlphaChanel = 255;
  }

  initialize() {
    this.canvasObject = document.querySelector(`.${additionalCanvasClass}`);
    this.context = this.canvasObject.getContext('2d');
    super.initialize();

    this._drawInitialization();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  _drawInitialization() {
    let isDrawing = false;
    let startX = -1;
    let startY = -1;
    let color;
    let endX;
    let endY;

    const endLineDrawing = () => {
      isDrawing = false;
      startX = -1;
      startY = -1;
    };

    const draw = (e) => {
      if (!isDrawing) { return; }
      const offsetX = Math.floor(e.offsetX * this.canvasProportion);
      const offsetY = Math.floor(e.offsetY * this.canvasProportion);

      this.clear();

      if (startX === -1 || startY === -2) {
        [startX, startY] = [offsetX, offsetY];
      }

      [endX, endY] = [offsetX, offsetY];

      this.DrawingCanvas.drawWithBresenhamAlgorithm(
        startX, startY, endX, endY,
        [color.r, color.g, color.b, color.a],
      );
    };

    const thisDraw = draw.bind(this);

    this.canvasObject.addEventListener('mousemove', thisDraw);

    this.canvasObject.addEventListener('mousedown', (e) => {
      const { button } = e;
      if (button === this.LEFT_BUTTON) {
        color = this.colors.primary;
      } else if (button === this.RIGHT_BUTTON) {
        color = this.colors.secondary;
      } else { return; }
      isDrawing = true;
      thisDraw(e);
    });

    this.canvasObject.addEventListener('mouseup', (e) => {
      const line = {
        startX, startY, endX, endY,
      };
      this.clear();
      this.drawLineCallback({ line, color });
      endLineDrawing();
      e.preventDefault();
    });
    this.canvasObject.addEventListener('mouseout', (e) => {
      this.clear();
      endLineDrawing();
      e.preventDefault();
    });
  }
}

export default StrokeLogic;
