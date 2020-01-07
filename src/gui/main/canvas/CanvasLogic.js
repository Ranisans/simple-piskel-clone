import { mainCanvasClass } from '../../../actions/canvasAction';
import { toolBtn } from '../../../actions/toolActionTypes';
import { eraserColor, colorsElements } from '../../../actions/colorAction';
import CanvasLogicAbstract from './CanvasLogicAbstract';

class CanvasLogic extends CanvasLogicAbstract {
  constructor({ pipetteCallback, frameUpdateCallback }) {
    super();
    this.pipetteCallback = pipetteCallback;
    this.frameUpdateCallback = frameUpdateCallback;
  }

  initialize() {
    this.canvasObject = document.querySelector(`.${mainCanvasClass}`);
    this.context = this.canvasObject.getContext('2d');
    super.initialize();

    this._drawInitialization();
  }

  setPixelSize(penSize) {
    super.setPixelSize(penSize);
    this.DrawingCanvas.setPixelSize(penSize);
  }

  setCanvasSize(canvasSize) {
    super.setCanvasSize(canvasSize);
    this.DrawingCanvas.setCanvasSize(canvasSize);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  setImageData(imageData) {
    if (imageData) {
      this.context.putImageData(imageData, 0, 0);
    } else {
      this.clear();
    }
  }

  drawLine({ line, color }) {
    this.DrawingCanvas.drawWithBresenhamAlgorithm(
      line.startX, line.startY, line.endX, line.endY,
      [color.r, color.g, color.b, color.a],
    );
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
      if (!isDrawing) { return; }

      const offsetX = Math.floor(e.offsetX * this.canvasProportion);
      const offsetY = Math.floor(e.offsetY * this.canvasProportion);

      if (this.currentTool === toolBtn.pipette) {
        const currentColor = this.DrawingCanvas.getPixelColor(offsetX, offsetY);
        this.pipetteCallback({ colorName, color: currentColor });
        return;
      }
      if (this.currentTool === toolBtn.bucket) {
        this.DrawingCanvas.fillArea(offsetX, offsetY, color);
      } else if (offsetX !== latestX || offsetY !== latestY) {
        if (latestX === -1) {
          this.DrawingCanvas.drawRect(
            offsetX,
            offsetY,
            [color.r, color.g, color.b, color.a],
          );
        } else {
          this.DrawingCanvas.drawWithBresenhamAlgorithm(
            latestX, latestY, offsetX, offsetY,
            [color.r, color.g, color.b, color.a],
          );
        }

        latestX = offsetX;
        latestY = offsetY;
      }


      const imageData = this.context.getImageData(0, 0, this.canvasSize, this.canvasSize);
      this.frameUpdateCallback(imageData);
    };

    const thisDraw = draw.bind(this);

    this.canvasObject.addEventListener('mousemove', thisDraw);
    this.canvasObject.addEventListener('mousedown', (e) => {
      const { button } = e;
      if (this.currentTool === toolBtn.eraser) {
        color = eraserColor;
      } else if (button === this.LEFT_BUTTON) {
        color = this.colors.primary;
        colorName = colorsElements[0].className;
      } else if (button === this.RIGHT_BUTTON) {
        color = this.colors.secondary;
        colorName = colorsElements[1].className;
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
