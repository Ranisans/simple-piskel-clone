import * as c from '../../src/actions/canvasAction';

describe('canvasAction tests', () => {
  it('change canvas size', () => {
    const size = 'someSize';
    const data = c.changeCanvasSize({ size });
    expect(data.type).toEqual(c.CHANGE_CANVAS_SIZE);
    expect(data.size).toEqual(size);
  });

  it('change canvas box size', () => {
    const size = 'someSize';
    const data = c.changeCanvasBoxSize({ size });
    expect(data.type).toEqual(c.CHANGE_CANVAS_BOX_SIZE);
    expect(data.size).toEqual(size);
  });
});
