import DrawingCanvas from './DrawingCanvas';

class CanvasLogicAbstract {
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
      this.canvasProportion = canvasSize / this.canvasBoxSize;
      this.canvasSize = canvasSize;
      this.canvasObject.width = canvasSize;
      this.canvasObject.height = canvasSize;
      this.DrawingCanvas.setCanvasSize(canvasSize);
      this.context.imageSmoothingEnabled = false;
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
