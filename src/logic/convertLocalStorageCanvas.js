const convertLocalStorageCanvas = (imageData, size) => {
  if (imageData.data instanceof Uint8ClampedArray) {
    return imageData;
  }
  const data = new Uint8ClampedArray(Object.values(imageData.data));
  const newImageData = new ImageData(data, size, size);
  return newImageData;
};

export default convertLocalStorageCanvas;
