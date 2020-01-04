class FrameLogic {
  initialize(frameId, canvasBoxSize) {
    this.canvas = document.querySelector(`#${frameId}`);
    this.canvas.width = canvasBoxSize;
    this.canvas.height = canvasBoxSize;
    this.context = this.canvas.getContext('2d');
  }

  setSize(size) {
    this.canvasSize = size;
    this.canvas.width = this.canvasSize;
    this.canvas.height = this.canvasSize;
    this.context.imageSmoothingEnabled = false;
  }

  setImage(imageData) {
    if (imageData) {
      this.context.putImageData(imageData, 0, 0);
    } else {
      this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    }
  }
}

export default FrameLogic;
