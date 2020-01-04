/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { mainCanvasClass } from '../../../actions/canvasAction';
import CanvasLogic from './CanvasLogic';
import {
  colorsElements,
} from '../../../actions/colorAction';
import {
  changePrimaryPickerColor,
  changeSecondaryPickerColor,
} from '../../../actions/colorPickerAction';
import { updateActiveFrame } from '../../../actions/frameAction';


const Canvas = () => {
  const primaryPickerId = 0;
  const secondaryPickerId = 1;

  const canvasState = useSelector((state) => state.canvas);
  const penSizeState = useSelector((state) => state.penSize);
  const toolState = useSelector((state) => state.tools);
  const colorsState = useSelector((state) => state.color);

  const dispatch = useDispatch();

  const pipetteCallback = ({ colorName, color }) => {
    const colorNamePosition = colorName === colorsElements[primaryPickerId].className
      ? primaryPickerId : secondaryPickerId;

    if (colorNamePosition === primaryPickerId) {
      dispatch(changePrimaryPickerColor({ color }));
    } else {
      dispatch(changeSecondaryPickerColor({ color }));
    }
  };

  const frameUpdateCallback = (imageData) => {
    dispatch(updateActiveFrame({ imageData }));
  };

  const [canvasLogic] = useState(
    new CanvasLogic({ pipetteCallback, frameUpdateCallback }),
  );

  // didMount
  useEffect(() => {
    canvasLogic.initialize();
  }, []);

  // didUpdate canvas box size
  useEffect(() => {
    canvasLogic.settCanvasBoxSize(canvasState.boxSize);
  }, [canvasState.boxSize]);

  // didUpdate pen size
  useEffect(() => {
    canvasLogic.setPixelSize(penSizeState.size);
  }, [penSizeState]);

  // didUpdate canvas size
  useEffect(() => {
    canvasLogic.setCanvasSize(canvasState.size);
  }, [canvasState.size]);

  // didUpdate tool
  useEffect(() => {
    canvasLogic.setTool(toolState.tool);
  }, [toolState]);

  // didUpdate colors
  useEffect(() => {
    canvasLogic.setColors(colorsState);
  }, [colorsState]);

  return (
    <div className="main_canvas_block">
      <div className="main_canvas_container">
        <div className="canvas_background" ></div>
        <canvas className={mainCanvasClass} onContextMenu={(e) => { e.preventDefault(); }}></canvas>
      </div>
    </div>
  );
};

export default Canvas;
