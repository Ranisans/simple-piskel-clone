import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activateFrame } from '../../../../actions/frameAction';


const Frame = ({ frameId }) => {
  let canvas;
  let context;
  let canvasSize = 0;
  const canvasBoxSize = 96;
  const frameData = useSelector((state) => state.frame);
  const canvasData = useSelector((state) => state.canvas);

  const dispatch = useDispatch();

  // didMount
  useEffect(() => {
    canvas = document.querySelector(`#${frameId}`);
    context = canvas.getContext('2d');
  }, []);

  // didUpdate if set imageData or change size of canvas
  useEffect(() => {
    if (canvasSize !== canvasData.size) {
      canvasSize = canvasData.size;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      context.imageSmoothingEnabled = false;
    }

    const newImageData = frameData[frameId].imageData;
    if (newImageData) {
      context.putImageData(newImageData, 0, 0);
    } else if (newImageData === null) {
      context.clearRect(0, 0, canvasData.size, canvasData.size);
    }
  }, [frameData[frameId].imageData, canvasData.size]);

  const setFrameActive = () => {
    dispatch(activateFrame({ frameId }));
  };

  return (
    <li className={[
      'preview_tile',
      frameData.activeFrame === frameId ? 'preview_tile--active' : null,
    ].join(' ')} onClick={setFrameActive}>
      <div className="canvas_container">
        <div className="canvas_background"></div>
        <canvas
          className="single_frame-canvas"
          id={frameId}
          width={canvasBoxSize}
          height={canvasBoxSize}
        ></canvas>
      </div>
    </li>
  );
};

export default Frame;
