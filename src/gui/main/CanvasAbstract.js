class CanvasAbstract {
  setCanvasSize(canvasSize) {
    if (this.canvasSize) {
      const oldImageData = this.context.getImageData(0, 0, this.canvasSize, this.canvasSize);

      this._setCanvasSize(canvasSize);

      this.context.putImageData(oldImageData, 0, 0);
    } else {
      this._setCanvasSize(canvasSize);
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
  }

  _setCanvasSize(canvasSize) {
    this.canvasSize = canvasSize;
    this.canvasObject.width = this.canvasSize;
    this.canvasObject.height = this.canvasSize;
    this.context.imageSmoothingEnabled = false;
  }
}

export default CanvasAbstract;
