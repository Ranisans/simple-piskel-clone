import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateFrameById } from '../../../../actions/frameAction';
import FrameLogic from './FrameLogic';


const FrameCanvas = ({ frameId }) => {
  const canvasBoxSize = 96;
  const imageData = useSelector((state) => state.frame[frameId].imageData);
  const dispatch = useDispatch();

  const canvasData = useSelector((state) => state.canvas);
  const updateFrameDataAfterResize = (newImageData) => {
    dispatch(updateFrameById({ frameId, imageData: newImageData }));
  };

  const [frameLogic] = useState(new FrameLogic(updateFrameDataAfterResize));

  // didMount
  useEffect(() => {
    frameLogic.initialize(frameId, canvasBoxSize);
  }, []);

  // didUpdate size of canvas
  useEffect(() => {
    frameLogic.setCanvasSize(canvasData.size);
  }, [canvasData.size]);

  // didUpdate if set imageData
  useEffect(() => {
    frameLogic.setImage(imageData);
  }, [imageData]);

  return (
    <>
      <div className="canvas_background"></div>
      <canvas
        className="frame_container-canvas"
        id={frameId}
        width={canvasBoxSize}
        height={canvasBoxSize}
      ></canvas>
    </>
  );
};

export default FrameCanvas;
