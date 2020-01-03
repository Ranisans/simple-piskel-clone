import * as c from '../../src/actions/frameAction';

describe('frameAction tests', () => {
  it('add frame without imageData', () => {
    const [frameId, position] = ['frame-2', 2];
    const data = c.addFrame({ frameId, position });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.position).toEqual(position);
    expect(data.payload.imageData).toEqual(null);
  });

  it('add frame without position', () => {
    const frameId = 'frame-2';
    const data = c.addFrame({ frameId });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.position).toEqual(-1);
    expect(data.payload.imageData).toEqual(null);
  });

  it('add frame without imageData', () => {
    const [frameId, position, imageData] = ['frame-2', 2, 'someImageData'];
    const data = c.addFrame({ frameId, position, imageData });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.position).toEqual(position);
    expect(data.payload.imageData).toEqual(imageData);
  });

  it('update frame without imageData', () => {
    const [frameId] = ['frame-2'];
    const data = c.updateFrame({ frameId });
    expect(data.type).toEqual(c.UPDATE_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.imageData).toEqual(null);
  });

  it('update frame without imageData', () => {
    const [frameId, imageData] = ['frame-2', 'SomeData'];
    const data = c.updateFrame({ frameId, imageData });
    expect(data.type).toEqual(c.UPDATE_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.imageData).toEqual(imageData);
  });

  it('remove frame', () => {
    const frameId = 'frame-2';
    const data = c.removeFrame({ frameId });
    expect(data.type).toEqual(c.REMOVE_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
  });

  it('activate frame by id', () => {
    const frameId = 'frame-1';
    const data = c.activateFrame({ frameId });
    expect(data.type).toEqual(c.ACTIVATE_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
  });

  it('set active imageData', () => {
    const imageData = 'someImageData';
    const data = c.setActiveImageData({ imageData });
    expect(data.type).toEqual(c.SET_ACTIVE_IMAGE_DATA);
    expect(data.payload.imageData).toEqual(imageData);
  });
});
