import * as c from '../../src/actions/penSizeAction';

describe('colorAction test', () => {
  it('change primary picker color', () => {
    const size = 'someSize';
    const data = c.changePenSize({ size });
    expect(data.type).toEqual(c.CHANGE_PEN_SIZE);
    expect(data.size).toEqual(size);
  });
});
