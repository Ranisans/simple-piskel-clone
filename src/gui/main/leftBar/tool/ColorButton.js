import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputColor from 'react-input-color';


import { colorsElements, changePrimaryColor, changeSecondaryColor } from '../../../../actions/colorAction';


const ColorButton = ({ className, colorName }) => {
  const dispatch = useDispatch();
  const colorPickerState = useSelector((state) => state.colorPicker);

  const currentColor = { hex: colorPickerState[`${colorName}Picker`].hex };

  const primaryPickerId = 0;
  const secondaryPickerId = 1;
  const paramArrayPosition = colorName === colorsElements[primaryPickerId].className
    ? primaryPickerId : secondaryPickerId;

  const dispatchColor = (colorObj) => {
    dispatch(
      paramArrayPosition === primaryPickerId
        ? changePrimaryColor({ color: colorObj })
        : changeSecondaryColor({ color: colorObj }),
    );
  };

  const changeColor = (color) => {
    const reactInputColorOpacity = 100;
    const defaultColorOpacity = 255;
    const currentOpacity = Math.floor((color.a / reactInputColorOpacity) * defaultColorOpacity);
    const colorWithTrueAlpha = {
      hex: color.hex,
      r: color.r,
      g: color.g,
      b: color.b,
      a: currentOpacity,
    };
    dispatchColor(colorWithTrueAlpha);
  };

  useEffect(() => {
    const nextPickerColors = colorPickerState[`${colorName}Picker`];
    if (nextPickerColors.hex !== currentColor.hex) {
      currentColor.hex = nextPickerColors.hex;
    }
    dispatchColor(nextPickerColors);
  }, [colorPickerState]);

  return (
    <div >
      <InputColor
        className={className.join(' ')}
        initialHexColor={currentColor.hex}
        onChange={changeColor}
        placement="right"
      />
    </div>
  );
};
export default ColorButton;
