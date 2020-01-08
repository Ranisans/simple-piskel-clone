class CanvasAbstract {
  async setCanvasSize(canvasSize) {
    if (this.canvasSize !== canvasSize) {
      const oldCanvasSize = this.canvasSize;
      const dataURL = this.canvasObject.toDataURL();
      this.canvasSize = canvasSize;
      this.canvasObject.width = this.canvasSize;
      this.canvasObject.height = this.canvasSize;
      this.context.imageSmoothingEnabled = false;
      if (dataURL !== null) {
        return new Promise((resolve) => {
          const image = new Image();

          image.addEventListener('load', () => {
            const size = Math.min(oldCanvasSize, canvasSize);
            resolve(this.context.drawImage(image, 0, 0, size, size));
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
