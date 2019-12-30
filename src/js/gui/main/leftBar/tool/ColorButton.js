import React from 'react';
import { useDispatch } from 'react-redux';
import InputColor from 'react-input-color';


import { colorsElements, changePrimaryColor, changeSecondaryColor } from '../../../../actions/colorAction';


const ColorButton = ({ className, colorName }) => {
  const dispatch = useDispatch();
  const paramArrayPosition = colorName === colorsElements[0].className ? 0 : 1;

  const changeColor = (color) => {
    dispatch(
      paramArrayPosition === 0
        ? changePrimaryColor({ color })
        : changeSecondaryColor({ color }),
    );
  };

  return (
    <div >
      <InputColor
        className={className.join(' ')}
        initialHexColor={colorsElements[paramArrayPosition].baseColor.hex}
        onChange={changeColor}
        placement="right"
      />
    </div>
  );
};
export default ColorButton;
