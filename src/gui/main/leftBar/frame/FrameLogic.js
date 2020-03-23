import CanvasAbstract from '../../CanvasAbstract';

class FrameLogic extends CanvasAbstract {
  constructor(updateFrameDataAfterResize) {
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
    const imageData = this.canvasObject.toDataURL();
    this.updateFrameDataAfterResize(imageData);
  }

  setImage(imageData) {
    if (imageData) {
      const img = new Image();
      img.src = imageData;
      this.context.imageSmoothingEnabled = false;
      img.onload = () => {
        this.context.drawImage(img, 0, 0, this.canvasSize, this.canvasSize);
      };
    } else {
      this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    }
  }
}

export default FrameLogic;
