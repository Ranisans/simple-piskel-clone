import convertLocalStorageCanvas from '../../src/logic/convertLocalStorageCanvas';

describe('convertLocalStorageCanvas tests', () => {
  it('return same data if imageData.data instanceof Uint8ClampedArray', () => {
    const testObject = { data: new Uint8ClampedArray() };
    expect(convertLocalStorageCanvas(testObject)).toEqual(testObject);
  });
});
