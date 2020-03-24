import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const FrameCanvas = ({ frameId, frameLogic }) => {
  const canvasBoxSize = 96;
  const imageData = useSelector((state) => state.frame[frameId].imageData);
  const size = useSelector((state) => state.canvas.size);

  const [currentSize, setCurrentSize] = useState(size);

  // didMount
  useEffect(() => {
    frameLogic.initialize(frameId, canvasBoxSize, size, imageData);
  }, []);

  // didUpdate size of canvas
  useEffect(() => {
    if (size !== currentSize) {
      frameLogic.updateCanvasSize(size);
      setCurrentSize(size);
    }
  }, [size]);

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

FrameCanvas.propTypes = {
  frameId: PropTypes.string,
};

export default FrameCanvas;
