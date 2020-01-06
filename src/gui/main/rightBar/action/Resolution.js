import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCanvasSize } from '../../../../actions/canvasAction';


const Resolution = () => {
  const dispatch = useDispatch();

  const canvasResolutions = [32, 64, 128];
  const [resolution, setResolution] = useState(canvasResolutions[0]);

  const menuClass = 'resolution_menu';

  const resolutionHandle = (e) => {
    const { value } = e.target;
    setResolution(value);
    dispatch(changeCanvasSize({ size: value }));
  };

  return (
    <div>
      <label htmlFor={menuClass} className={`${menuClass}_label`}>Canvas Resolution</label>
      <select
        id={menuClass}
        name={menuClass}
        className={menuClass}
        onChange={resolutionHandle}
        value={resolution}
      >
        {canvasResolutions.map(
          (item, key) => <option
            key={key}
            className={`${menuClass}-item`}
            value={item}
          > {`${item}x${item}`}</option>,
        )}
      </select>
    </div >
  );
};

export default Resolution;
