import BucketLogic from './bucketLogic';

class DrawingCanvas {
  constructor(context) {
    this.context = context;
    this.BucketLogic = new BucketLogic(this.context);
  }

  setPixelSize(size) {
    this.pixelSize = size;
  }

  setCanvasSize(size) {
    this.size = size;
  }

  drawRect(rectStartX, rectStartY, color) {
    const virtualPixel = this.context.getImageData(
      rectStartX, rectStartY, this.pixelSize, this.pixelSize,
    );
    const pixelData = virtualPixel.data;

    for (let i = 0; i < pixelData.length; i += 4) {
      [pixelData[i], pixelData[i + 1], pixelData[i + 2], pixelData[i + 3]] = color;
    }

    this.context.putImageData(virtualPixel, rectStartX, rectStartY);
  }

  drawWithBresenhamAlgorithm(x0, y0, x1, y1, color) {
    let error = 0;
    const doubling = 2;

    const plotLineLow = (xStart, yStart, xEnd, yEnd) => {
      const deltaX = xEnd - xStart;
      const deltaY = Math.abs(yEnd - yStart);
      const yDirection = (yEnd - yStart) > 0 ? 1 : -1;
      let y = yStart;

      error = doubling * deltaY - deltaX;
      for (let x = xStart; x <= xEnd; x += 1) {
        this.drawRect(x * this.pixelSize, y * this.pixelSize, color);

        if (error > 0) {
          y += yDirection;
          error -= doubling * deltaX;
        }
        error += doubling * deltaY;
      }
    };

    const plotLineHigh = (xStart, yStart, xEnd, yEnd) => {
      const deltaX = Math.abs(xEnd - xStart);
      const deltaY = yEnd - yStart;
      const xDirection = (xEnd - xStart) > 0 ? 1 : -1;
      let x = xStart;

      error = doubling * deltaX - deltaY;
      for (let y = yStart; y <= yEnd; y += 1) {
        this.drawRect(x * this.pixelSize, y * this.pixelSize, color);

        if (error > 0) {
          x += xDirection;
          error -= doubling * deltaY;
        }
        error += doubling * deltaX;
      }
    };

    if (Math.abs(x1 - x0) > Math.abs(y1 - y0)) {
      if (x0 > x1) {
        plotLineLow(x1, y1, x0, y0);
      } else {
        plotLineLow(x0, y0, x1, y1);
      }
    } else if (y0 > y1) {
      plotLineHigh(x1, y1, x0, y0);
    } else {
      plotLineHigh(x0, y0, x1, y1);
    }
  }

  getPixelColor(offsetX, offsetY) {
    function rgb2hex(rgb) {
      return (rgb && rgb.length === 4) ? `#${
        (`0${rgb[0].toString(16)}`).slice(-2)}`
        + `${(`0${rgb[1].toString(16)}`).slice(-2)}`
        + `${(`0${rgb[2].toString(16)}`).slice(-2)}`
        + `${(`0${rgb[3].toString(16)}`).slice(-2)}` : '';
    }
    const pixelColor = this.context.getImageData(offsetX, offsetY, 1, 1).data;
    return {
      r: pixelColor[0],
      g: pixelColor[1],
      b: pixelColor[2],
      a: pixelColor[3],
      hex: rgb2hex(pixelColor),
      rgba: `rgba(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]}, ${pixelColor[3]})`,
    };
  }

  fillArea(x, y, bucketColor) {
    this.BucketLogic.fillArea({
      pixelSize: this.pixelSize, size: this.size, x, y, bucketColor,
    });
  }
}

export default DrawingCanvas;
