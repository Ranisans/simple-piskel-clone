export const CHANGE_PRIMARY_PICKER_COLOR = 'CHANGE_PRIMARY_PICKER_COLOR';
export const CHANGE_SECONDARY_PICKER_COLOR = 'CHANGE_SECONDARY_PICKER_COLOR';
export const EXCHANGE_COLORS = 'EXCHANGE_COLORS';

export const changePrimaryPickerColor = ({ color }) => (
  {
    type: CHANGE_PRIMARY_PICKER_COLOR,
    color,
  }
);

export const changeSecondaryPickerColor = ({ color }) => (
  {
    type: CHANGE_SECONDARY_PICKER_COLOR,
    color,
  }
);

export const exchangeColors = () => (
  {
    type: EXCHANGE_COLORS,
  }
);
