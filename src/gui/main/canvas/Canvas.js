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
  const penSize = useSelector((state) => state.penSize.size);
  const currentTool = useSelector((state) => state.tools.tool);
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
    canvasLogic.setCanvasBoxSize(canvasState.boxSize);
    strokeLogic.setCanvasBoxSize(canvasState.boxSize);
  }, [canvasState.boxSize]);

  // didUpdate pen size
  useEffect(() => {
    canvasLogic.setPixelSize(penSize);
    strokeLogic.setPixelSize(penSize);
  }, [penSize]);

  // didUpdate canvas size
  useEffect(() => {
    canvasLogic.setCanvasSize(canvasState.size);
    strokeLogic.setCanvasSize(canvasState.size);
  }, [canvasState.size]);

  // didUpdate tool
  useEffect(() => {
    // if tool is stroke - Stroke logic;
    canvasLogic.setTool(currentTool);
  }, [currentTool]);

  // didUpdate colors
  useEffect(() => {
    canvasLogic.setColors(colorsState);
    strokeLogic.setColors(colorsState);
  }, [colorsState]);

  // didUpdate activeFrame
  useEffect(() => {
    canvasLogic.setImageData(frameState[frameState.activeFrame].imageData);
  }, [frameState.activeFrame, frameState[frameState.activeFrame].imageData]);

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
              currentTool !== toolBtn.stroke
                ? `${additionalCanvasClass}--hidden`
                : null].join(' ')}
          onContextMenu={(e) => { e.preventDefault(); }}
        ></canvas>
      </div>
    </div>
  );
};

export default Canvas;
