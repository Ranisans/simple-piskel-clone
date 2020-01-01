import React from 'react';
import { useDispatch } from 'react-redux';
import InputColor from 'react-input-color';


import { colorsElements, changePrimaryColor, changeSecondaryColor } from '../../../../actions/colorAction';


const ColorButton = ({ className, colorName }) => {
  const dispatch = useDispatch();
  const primaryPickerId = 0;
  const secondaryPickerId = 1;
  const paramArrayPosition = colorName === colorsElements[primaryPickerId].className
    ? primaryPickerId : secondaryPickerId;

  const changeColor = (color) => {
    const reactInputColorOpacity = 100;
    const defaultColorOpacity = 255;
    const colorWithTrueAlpha = {
      ...color,
      a: (color.a / reactInputColorOpacity) * defaultColorOpacity,
    };
    dispatch(
      paramArrayPosition === primaryPickerId
        ? changePrimaryColor({ color: colorWithTrueAlpha })
        : changeSecondaryColor({ color: colorWithTrueAlpha }),
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
