class PreviewLogic {
  constructor() {
    this.second = 1000;
  }

  initialize(previewId, previewBoxSize) {
    this.canvas = document.querySelector(`#${previewId}`);
    this.canvas.width = previewBoxSize;
    this.canvas.height = previewBoxSize;
    this.context = this.canvas.getContext('2d');
    this.container = document.querySelector('.preview_canvas_container');
  }

  setSize(size) {
    this.canvasSize = size;
    this.canvas.width = this.canvasSize;
    this.canvas.height = this.canvasSize;
    this.context.imageSmoothingEnabled = false;
  }

  setFullscreen() {
    this.container.requestFullscreen();
  }

  setFps(fps) {
    this.fps = fps;
    clearInterval(this.intervalId);
    this.startAnimate();
  }

  setFrames(frames) {
    this.frames = frames;
    clearInterval(this.intervalId);
    this.startAnimate();
  }

  setFramesQueue(framesQueue) {
    this.framesQueue = framesQueue;
    this.animatePosition = 0;
    clearInterval(this.intervalId);
    this.startAnimate();
  }

  startAnimate() {
    const animate = this._animate.bind(this);
    this.intervalId = setInterval(animate, this.second / this.fps);
  }

  _animate() {
    if (!this.frames || !this.framesQueue) { return; }
    const { imageData } = this.frames[this.framesQueue[this.animatePosition]];
    if (imageData) {
      this.context.putImageData(imageData, 0, 0);
    } else {
      this.context.fillStyle = 'rgba(0,0,0,0)';
      this.context.clearRect(0, 0, this.canvasSize, this.canvasSize);
    }
    if (this.animatePosition + 1 >= this.framesQueue.length) {
      this.animatePosition = 0;
    } else {
      this.animatePosition += 1;
    }
  }
}

export default PreviewLogic;
