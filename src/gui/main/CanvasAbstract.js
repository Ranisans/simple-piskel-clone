class CanvasAbstract {
  clear() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  setCanvasSize(canvasSize) {
    this.canvasSize = canvasSize;
    this.canvasObject.width = this.canvasSize;
    this.canvasObject.height = this.canvasSize;
    this.context.imageSmoothingEnabled = false;
  }
}

export default CanvasAbstract;
