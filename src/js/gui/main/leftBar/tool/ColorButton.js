import React, { useState } from 'react';

const ColorButton = ({ className, baseColor }) => {
  const [currentColor, setCurrentColor] = useState(baseColor);

  const changeColor = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <div className={className.join(' ')}>
      <div className="color_button-background"></div>
      <input
        type="color"
        name="color"
        className="color_button-chooser"
        value={currentColor}
        onChange={changeColor}
      />
    </div>
  );
};
export default ColorButton;
