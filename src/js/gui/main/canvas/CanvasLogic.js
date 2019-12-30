import { mainCanvasClass } from '../../../actions/canvasAction';
import DrawingCanvas from './DrawingCanvas';
import { toolBtn } from '../../../actions/toolActionTypes';
import store from '../../../store';

class CanvasLogic {
  constructor() {
    this.canvasObject = document.querySelector(`.${mainCanvasClass}`);
    this.context = this.canvasObject.getContext('2d');
    this.DrawingCanvas = new DrawingCanvas(this.context);
    this.state = store.getState();
    this.LEFT_BUTTON = 0;
    this.RIGHT_BUTTON = 2;

    this._drawInitialization();
  }

  settingPixelSize() {
    this.pixelSize = this.state.penSize.size;
    this.DrawingCanvas.setPixelSize(this.pixelSize);
  }

  settingCanvasSize() {
    const canvasSize = this.state.canvas.size;
    if (this.canvasSize !== canvasSize) {
      const canvasBoxSize = this.state.canvas.boxSize;
      this.canvasProportion = canvasSize / canvasBoxSize;
      this.canvasSize = canvasSize;
      this.canvasObject.width = canvasSize;
      this.canvasObject.height = canvasSize;
      this.DrawingCanvas.setCanvasSize(canvasSize);
      this.context.imageSmoothingEnabled = false;
    }
  }

  settingTool() {
    this.currentTool = this.state.tools.tool;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  _drawInitialization() {
    let isDrawing = false;
    let latestX = -1;
    let latestY = -1;

    function resetLatestPixelPos() {
      isDrawing = false;
      latestX = -1;
      latestY = -1;
    }
    let color;
    let colorName;

    const draw = (e) => {
      e.preventDefault();
      if (!isDrawing) { return; }

      const offsetX = Math.floor(e.offsetX * this.canvasProportion);
      const offsetY = Math.floor(e.offsetY * this.canvasProportion);

      if (this.currentTool === toolBtn.pipette) {
        const currentColor = this.DrawingCanvas.getPixelColor(offsetX, offsetY);
        this.state.color = {
          ...this.state.color,
          [colorName]: currentColor,
        };
      } else if (this.currentTool === toolBtn.bucket) {
        this._fillArea(offsetX, offsetY);
      } else {
        const rectStartX = Math.floor(offsetX / this.pixelSize);
        const rectStartY = Math.floor(offsetY / this.pixelSize);

        if (rectStartX !== latestX || rectStartY !== latestY) {
          if (latestX === -1) {
            this.DrawingCanvas.drawRect(
              offsetX,
              offsetY,
              [color.r, color.g, color.b, color.a],
            );
          } else {
            this.DrawingCanvas.drawWithBresenhamAlgorithm(
              latestX, latestY, rectStartX, rectStartY,
              [color.r, color.g, color.b, color.a],
            );
          }

          latestX = rectStartX;
          latestY = rectStartY;
        }
      }
    };

    const thisDraw = draw.bind(this);

    this.canvasObject.addEventListener('mousemove', thisDraw);
    this.canvasObject.addEventListener('mousedown', (e) => {
      const { button } = e;
      if (button === this.LEFT_BUTTON) {
        color = this.state.color.primary;
        colorName = 'primary';
      } else if (button === this.RIGHT_BUTTON) {
        color = this.state.color.secondary;
        colorName = 'secondary';
      } else { return; }
      isDrawing = true;
      e.preventDefault();
      thisDraw(e);
    });
    this.canvasObject.addEventListener('mouseup', (e) => {
      resetLatestPixelPos();
      e.preventDefault();
    });
    this.canvasObject.addEventListener('mouseout', (e) => {
      resetLatestPixelPos();
      e.preventDefault();
    });
  }
}

export default CanvasLogic;
