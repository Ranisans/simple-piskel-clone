export const shortcuts = {
  pen: 'p',
  pipette: 'c',
  bucket: 'b',
  eraser: 'e',
  stroke: 's',
  colorswap: 'w',
  addFrame: 'N',
  copyActiveFrame: 'C',
  deleteActiveFrame: 'D',
};

export const changeShortcut = (key, value) => {
  shortcuts.key = value;
};
