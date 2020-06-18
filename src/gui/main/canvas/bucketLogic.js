class BucketLogic {
  constructor(context) {
    this.context = context;
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

  _getPixelColor(offsetX, offsetY) {
    const pixelColorBias = 4;
    const pixelStart = (offsetY * this.size + offsetX) * pixelColorBias;
    return `rgba(${this.pixels[pixelStart]}, ${this.pixels[pixelStart + 1]}, ${this.pixels[pixelStart + 2]}, ${this.pixels[pixelStart + 3]})`;
  }

  _findTopAreaInColumn(xFind, yFind, colorRGBA) {
    let nextY = yFind;
    while (
      nextY - this.pixelSize >= 0
      && colorRGBA === this._getPixelColor(xFind, nextY - this.pixelSize)) {
      nextY -= this.pixelSize;
    }
    return { x: xFind, y: nextY };
  }

  fillArea({
    pixelSize, size, x, y, bucketColor,
  }) {
    this.pixelSize = pixelSize;
    this.size = size;

    const imageData = this.context.getImageData(0, 0, this.size, this.size);
    this.pixels = imageData.data;

    const colorOfSelectedPixelRGBA = this._getPixelColor(x, y);
    const brushRGBA = `rgba(${bucketColor.r}, ${bucketColor.g}, ${bucketColor.b}, ${bucketColor.a})`;

    if (colorOfSelectedPixelRGBA === brushRGBA) { return; }

    this.brushColor = [bucketColor.r, bucketColor.g, bucketColor.b, bucketColor.a];

    const columnTopStack = [];
    columnTopStack.push([x, y]);

    const isPixelInArea = (currentX, currentY) => {
      if (currentX >= 0 && currentX < this.size) {
        const thisColorRGBA = this._getPixelColor(currentX, currentY);
        return colorOfSelectedPixelRGBA === thisColorRGBA;
      }
      return false;
    };

    while (columnTopStack.length > 0) {
      let leftIsInArea = false;
      let rightIsInArea = false;
      const currentPoint = this._findTopAreaInColumn(
        ...columnTopStack.pop(),
        colorOfSelectedPixelRGBA,
      );

      while (currentPoint.y < this.size
        && colorOfSelectedPixelRGBA === this._getPixelColor(currentPoint.x, currentPoint.y)) {
        if (!leftIsInArea && isPixelInArea(currentPoint.x - this.pixelSize, currentPoint.y)) {
          columnTopStack.push([currentPoint.x - this.pixelSize, currentPoint.y]);
          leftIsInArea = true;
        }
        if (!rightIsInArea && isPixelInArea(currentPoint.x + this.pixelSize, currentPoint.y)) {
          columnTopStack.push([currentPoint.x + this.pixelSize, currentPoint.y]);
          rightIsInArea = true;
        }
        const rectStartX = Math.floor(currentPoint.x / this.pixelSize) * this.pixelSize;
        const rectStartY = Math.floor(currentPoint.y / this.pixelSize) * this.pixelSize;
        this._fillRect(rectStartX, rectStartY);
        currentPoint.y += this.pixelSize;
        if (isPixelInArea(currentPoint.x - this.pixelSize, currentPoint.y)) {
          leftIsInArea = false;
        }
        if (isPixelInArea(currentPoint.x + this.pixelSize, currentPoint.y)) {
          rightIsInArea = false;
        }
      }
    }

    this.context.putImageData(imageData, 0, 0);
  }
}

export default BucketLogic;
