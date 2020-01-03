class DrawingCanvas {
  constructor(context) {
    this.context = context;
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
    };
  }

  fillArea(x, y, brushColor) {
    const imageData = this.context.getImageData(0, 0, this.size, this.size);
    this.pixels = imageData.data;

    const currentColor = this.getPixelColor(x, y);
    if (currentColor === `rgba(${brushColor[0]}, ${brushColor[1]}, ${brushColor[2]}, ${brushColor[3]})`) { return; }

    this.brushColor = brushColor;

    const columnTopStack = [];
    columnTopStack.push([x, y]);

    const isPixelInArea = (currentX, currentY) => {
      if (currentX >= 0 && currentX < this.size) {
        return currentColor === this.getPixelColor(currentX, currentY);
      }
      return false;
    };

    while (columnTopStack.length > 0) {
      let leftIsInArea = false;
      let rightIsInArea = false;
      const currentPoint = this._findTopAreaInColumn(...columnTopStack.pop(), currentColor);

      while (currentPoint[1] < this.size && currentColor === this.getPixelColor(...currentPoint)) {
        if (!leftIsInArea && isPixelInArea(currentPoint[0] - this.pixelSize, currentPoint[1])) {
          columnTopStack.push([currentPoint[0] - this.pixelSize, currentPoint[1]]);
          leftIsInArea = true;
        }
        if (!rightIsInArea && isPixelInArea(currentPoint[0] + this.pixelSize, currentPoint[1])) {
          columnTopStack.push([currentPoint[0] + this.pixelSize, currentPoint[1]]);
          rightIsInArea = true;
        }
        const rectStartX = Math.floor(currentPoint[0] / this.pixelSize) * this.pixelSize;
        const rectStartY = Math.floor(currentPoint[1] / this.pixelSize) * this.pixelSize;
        this._fillRect(rectStartX, rectStartY);
        currentPoint[1] += this.pixelSize;
        if (isPixelInArea(currentPoint[0] - this.pixelSize, currentPoint[1])) {
          leftIsInArea = false;
        }
        if (isPixelInArea(currentPoint[0] + this.pixelSize, currentPoint[1])) {
          rightIsInArea = false;
        }
      }
    }

    this.content.putImageData(imageData, 0, 0);
  }

  _fillRect(rectStartX, rectStartY) {
    for (let y = rectStartY; y < rectStartY + this.pixelSize; y += 1) {
      for (let x = rectStartX; x < rectStartX + this.pixelSize; x += 1) {
        const pixelStart = (y * this.size + x) * 4;
        [
          this.pixels[pixelStart],
          this.pixels[pixelStart + 1],
          this.pixels[pixelStart + 2],
          this.pixels[pixelStart + 3],
        ] = this.brushColor;
      }
    }
  }

  _findTopAreaInColumn(x, y, color) {
    let nextY = y;
    while (
      nextY - this.pixelSize >= 0
      && color === this.getPixelColor(x, nextY - this.pixelSize)) {
      nextY -= this.pixelSize;
    }
    return [x, nextY];
  }
}

export default DrawingCanvas;
