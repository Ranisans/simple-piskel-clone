import * as c from '../../src/actions/colorAction';

describe('colorAction test', () => {
  it('change primary color', () => {
    const color = 'someColor';
    const data = c.changePrimaryColor({ color });
    expect(data.type).toEqual(c.CHANGE_PRIMARY_COLOR);
    expect(data.color).toEqual(color);
  });

  it('change secondary color', () => {
    const color = 'someColor';
    const data = c.changeSecondaryColor({ color });
    expect(data.type).toEqual(c.CHANGE_SECONDARY_COLOR);
    expect(data.color).toEqual(color);
  });
});
