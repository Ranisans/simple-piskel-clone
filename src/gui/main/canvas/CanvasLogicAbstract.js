import DrawingCanvas from './DrawingCanvas';
import CanvasAbstract from '../CanvasAbstract';

class CanvasLogicAbstract extends CanvasAbstract {
  initialize() {
    this.DrawingCanvas = new DrawingCanvas(this.context);
  }

  setPixelSize(penSize) {
    this.pixelSize = penSize;
    this.DrawingCanvas.setPixelSize(this.pixelSize);
  }

  settCanvasBoxSize(boxSize) {
    this.canvasBoxSize = boxSize;
    this.canvasProportion = this.canvasSize / this.canvasBoxSize;
    this.LEFT_BUTTON = 0;
    this.RIGHT_BUTTON = 2;
  }

  setCanvasSize(canvasSize) {
    if (this.canvasSize !== canvasSize) {
      super.setCanvasSize(canvasSize);
      this.canvasProportion = canvasSize / this.canvasBoxSize;
      this.DrawingCanvas.setCanvasSize(canvasSize);
    }
  }

  setTool(tool) {
    this.currentTool = tool;
  }

  setColors(colors) {
    this.colors = colors;
  }
}

export default CanvasLogicAbstract;
