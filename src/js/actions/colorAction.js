export const colorsElements = [
  {
    className: 'primary',
    baseColor: {
      hex: '#000000', r: 0, g: 0, b: 0, a: 255,
    },
  },
  {
    className: 'secondary',
    baseColor: {
      hex: '#FFFFFF', r: 255, g: 255, b: 255, a: 255,
    },
  },
];

export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';
export const CHANGE_SECONDARY_COLOR = 'CHANGE_SECONDARY_COLOR';

export const changePrimaryColor = ({ color }) => (
  {
    type: CHANGE_PRIMARY_COLOR,
    color,
  }
);

export const changeSecondaryColor = ({ color }) => (
  {
    type: CHANGE_SECONDARY_COLOR,
    color,
  }
);
