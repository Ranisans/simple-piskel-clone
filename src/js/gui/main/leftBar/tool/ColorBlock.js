import React from 'react';

import ColorButton from './ColorButton';
import { colorsElements } from '../../../../actions/colorAction';

const ColorBlock = () => {
  const colorBlockCls = 'color_block';

  return (
    <div className={colorBlockCls}>
      {colorsElements.map((el, i) => (
        <ColorButton
          key={i}
          className={[`${colorBlockCls}-color`, `${colorBlockCls}-${el.className}`]}
          colorName={el.className}
        />
      ))}
      <div className={`${colorBlockCls}-switch`}></div>
    </div>
  );
};

export default ColorBlock;
