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
  exportAPNG: 'A',
  exportGIF: 'G',
};

export const changeShortcut = (key, value) => {
  shortcuts.key = value;
};
