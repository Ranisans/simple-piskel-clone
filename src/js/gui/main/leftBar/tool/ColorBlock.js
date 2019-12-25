import React from 'react';

import ColorButton from './ColorButton';

const ColorBlock = () => {
  const colorBlockCls = 'color_block';
  const colorsElements = [
    { className: 'primary', baseColor: '#000000' },
    { className: 'secondary', baseColor: '#FFFFFF' },
  ];

  return (
    <div className={colorBlockCls}>
      {colorsElements.map((el, i) => (
        <ColorButton
          key={i}
          className={[`${colorBlockCls}-color`, `${colorBlockCls}-${el.className}`]}
          baseColor={el.baseColor}
        />
      ))}
      <div className={`${colorBlockCls}-switch`}></div>
    </div>
  );
};

export default ColorBlock;
