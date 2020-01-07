class CanvasAbstract {
  async setCanvasSize(canvasSize) {
    if (this.canvasSize !== canvasSize) {
      const dataURL = this.canvasObject.toDataURL();
      this.canvasSize = canvasSize;
      this.canvasObject.width = this.canvasSize;
      this.canvasObject.height = this.canvasSize;
      this.context.imageSmoothingEnabled = false;
      if (dataURL !== null) {
        return new Promise((resolve) => {
          const image = new Image();

          image.addEventListener('load', () => {
            resolve(this.context.drawImage(image, 0, 0, this.canvasSize, this.canvasSize));
          });
          image.src = dataURL;
        });
      }
      return new Promise();
    }
    return new Promise();
  }
}

export default CanvasAbstract;
