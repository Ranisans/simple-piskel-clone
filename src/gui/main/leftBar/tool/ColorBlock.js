import React from 'react';
import { useDispatch } from 'react-redux';

import ColorButton from './ColorButton';
import { colorsElements } from '../../../../actions/colorAction';
import { exchangeColors } from '../../../../actions/colorPickerAction';

const ColorBlock = () => {
  const colorBlockCls = 'color_block';
  const dispatch = useDispatch();

  const colorExchangeHandler = () => {
    dispatch(exchangeColors());
  };

  return (
    <div className={colorBlockCls}>
      {colorsElements.map((el, i) => (
        <ColorButton
          key={i}
          className={[`${colorBlockCls}-color`, `${colorBlockCls}-${el.className}`]}
          colorName={el.className}
        />
      ))}
      <div className={`${colorBlockCls}-switch`} onClick={colorExchangeHandler}></div>
    </div>
  );
};

export default ColorBlock;
