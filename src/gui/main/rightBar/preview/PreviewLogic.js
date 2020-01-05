class PreviewLogic {
  initialize(previewId, previewBoxSize) {
    this.canvas = document.querySelector(`#${previewId}`);
    this.canvas.width = previewBoxSize;
    this.canvas.height = previewBoxSize;
    this.context = this.canvas.getContext('2d');
  }

  setSize(size) {
    this.canvasSize = size;
    this.canvas.width = this.canvasSize;
    this.canvas.height = this.canvasSize;
    this.context.imageSmoothingEnabled = false;
  }
}

export default PreviewLogic;
