/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { mainCanvasClass, additionalCanvasClass } from '../../../actions/canvasAction';
import CanvasLogic from './CanvasLogic';
import StrokeLogic from './StrokeLogic';
import {
  colorsElements,
} from '../../../actions/colorAction';
import {
  changePrimaryPickerColor,
  changeSecondaryPickerColor,
} from '../../../actions/colorPickerAction';
import { updateActiveFrame } from '../../../actions/frameAction';
import { toolBtn } from '../../../actions/toolActionTypes';


const Canvas = () => {
  const primaryPickerId = 0;
  const secondaryPickerId = 1;

  const canvasState = useSelector((state) => state.canvas);
  const penSizeState = useSelector((state) => state.penSize);
  const toolState = useSelector((state) => state.tools);
  const colorsState = useSelector((state) => state.color);
  const frameState = useSelector((state) => state.frame);

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

  const drawLine = ({ line, color }) => {
    canvasLogic.drawLine({ line, color });
  };

  const [strokeLogic] = useState(
    new StrokeLogic(drawLine),
  );


  // didMount
  useEffect(() => {
    strokeLogic.initialize();
    canvasLogic.initialize();
  }, []);

  // didUpdate canvas box size
  useEffect(() => {
    canvasLogic.settCanvasBoxSize(canvasState.boxSize);
    strokeLogic.settCanvasBoxSize(canvasState.boxSize);
  }, [canvasState.boxSize]);

  // didUpdate pen size
  useEffect(() => {
    canvasLogic.setPixelSize(penSizeState.size);
    strokeLogic.setPixelSize(penSizeState.size);
  }, [penSizeState]);

  // didUpdate canvas size
  useEffect(() => {
    canvasLogic.setCanvasSize(canvasState.size);
    strokeLogic.setCanvasSize(canvasState.size);
  }, [canvasState.size]);

  // didUpdate tool
  useEffect(() => {
    // if tool is stroke - Stroke logic;
    canvasLogic.setTool(toolState.tool);
  }, [toolState]);

  // didUpdate colors
  useEffect(() => {
    canvasLogic.setColors(colorsState);
    strokeLogic.setColors(colorsState);
  }, [colorsState]);

  // didUpdate activeFrame
  useEffect(() => {
    canvasLogic.setImageData(frameState[frameState.activeFrame].imageData);
  }, [frameState.activeFrame]);

  return (
    <div className="main_canvas_block">
      <div className="main_canvas_container">
        <div className="canvas_background" ></div>
        <canvas
          className={mainCanvasClass}
          onContextMenu={(e) => { e.preventDefault(); }}
        ></canvas>
        <canvas
          className={
            [additionalCanvasClass,
              toolState.tool !== toolBtn.stroke
                ? `${additionalCanvasClass}--hidden`
                : null].join(' ')}
          onContextMenu={(e) => { e.preventDefault(); }}
        ></canvas>
      </div>
    </div>
  );
};

export default Canvas;
