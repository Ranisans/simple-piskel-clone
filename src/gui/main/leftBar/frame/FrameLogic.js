import CanvasAbstract from '../../CanvasAbstract';

class FrameLogic extends CanvasAbstract {
  constructor({ updateFrameDataAfterResize }) {
    super();
    this.updateFrameDataAfterResize = updateFrameDataAfterResize;
  }

  initialize(frameId, canvasBoxSize) {
    this.canvasObject = document.querySelector(`#${frameId}`);
    this.canvasObject.width = canvasBoxSize;
    this.canvasObject.height = canvasBoxSize;
    this.context = this.canvasObject.getContext('2d');
  }

  async setCanvasSize(size) {
    await super.setCanvasSize(size);
    const imageData = this.context.getImageData(0, 0, this.canvasSize, this.canvasSize);
    this.updateFrameDataAfterResize(imageData);
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
