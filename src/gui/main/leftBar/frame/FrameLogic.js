import CanvasAbstract from '../../CanvasAbstract';

class FrameLogic extends CanvasAbstract {
  constructor(updateFrameDataAfterResize) {
    super();
    this.updateFrameDataAfterResize = updateFrameDataAfterResize;
  }

  initialize(frameId, canvasBoxSize, size, imageData) {
    this.canvasObject = document.querySelector(`#${frameId}`);
    this.canvasObject.width = canvasBoxSize;
    this.canvasObject.height = canvasBoxSize;
    this.context = this.canvasObject.getContext('2d');
    this.setCanvasSize(size);
    this.setImage(imageData);
  }

  async updateCanvasSize(size) {
    const imageData = this.canvasObject.toDataURL();
    const oldSize = this.canvasSize;
    this.setCanvasSize(size);
    this.setImage(imageData, oldSize, true);
  }

  setImage(imageData, imageSize = this.canvasSize, isNeededUpdate = false) {
    this.clear();
    if (imageData) {
      const img = new Image();
      img.src = imageData;
      this.context.imageSmoothingEnabled = false;
      img.onload = () => {
        this.context.drawImage(img, 0, 0, imageSize, imageSize);
        if (isNeededUpdate) {
          const currentImageData = this.canvasObject.toDataURL();
          this.updateFrameDataAfterResize(currentImageData);
        }
      };
    } else {
      this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    }
  }
}

export default FrameLogic;
