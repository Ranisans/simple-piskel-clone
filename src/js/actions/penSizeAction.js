export const penSize = [1, 2, 3, 4];

export const CHANGE_PEN_SIZE = 'CHANGE_PEN_SIZE';

export const changePenSize = ({ size }) => (
  {
    type: CHANGE_PEN_SIZE,
    size,
  }
);
