import * as c from '../../src/actions/colorPickerAction';

describe('colorAction test', () => {
  it('change primary picker color', () => {
    const color = 'someColor';
    const data = c.changePrimaryPickerColor({ color });
    expect(data.type).toEqual(c.CHANGE_PRIMARY_PICKER_COLOR);
    expect(data.color).toEqual(color);
  });

  it('change secondary picker color', () => {
    const color = 'someColor';
    const data = c.changeSecondaryPickerColor({ color });
    expect(data.type).toEqual(c.CHANGE_SECONDARY_PICKER_COLOR);
    expect(data.color).toEqual(color);
  });

  it('change secondary picker color', () => {
    const data = c.exchangeColors();
    expect(data.type).toEqual(c.EXCHANGE_COLORS);
  });
});
