import * as c from '../../src/actions/frameAction';

describe('frameAction tests', () => {
  it('add frame without imageData and with parent frame id', () => {
    const [frameId, parentFrame] = ['frame-2', 'frame-1'];
    const data = c.addFrame({ frameId, parentFrame });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.parentFrame).toEqual(parentFrame);
    expect(data.payload.imageData).toEqual(null);
  });

  it('add frame without parent frame id and imageData', () => {
    const frameId = 'frame-2';
    const data = c.addFrame({ frameId });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.parentFrame).toEqual(null);
    expect(data.payload.imageData).toEqual(null);
  });

  it('add frame with imageData and parent frame id', () => {
    const [frameId, parentFrame, imageData] = ['frame-2', 'frame-1', 'someImageData'];
    const data = c.addFrame({ frameId, parentFrame, imageData });
    expect(data.type).toEqual(c.ADD_FRAME);
    expect(data.payload.frameId).toEqual(frameId);
    expect(data.payload.parentFrame).toEqual(parentFrame);
    expect(data.payload.imageData).toEqual(imageData);
  });

  it('update frame without imageData', () => {
    const data = c.updateActiveFrame({});
    expect(data.type).toEqual(c.UPDATE_FRAME);
    expect(data.payload.imageData).toEqual(null);
  });

  it('update active frame without imageData', () => {
    const imageData = 'SomeData';
    const data = c.updateActiveFrame({ imageData });
    expect(data.type).toEqual(c.UPDATE_FRAME);
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
});
