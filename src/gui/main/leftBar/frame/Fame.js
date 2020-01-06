import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { activateFrame } from '../../../../actions/frameAction';
import FrameLogic from './FrameLogic';
import CopyButton from './CopyButton';
import DeleteButton from './DeleteButton';


const Frame = ({ frameId }) => {
  const canvasBoxSize = 96;
  const frameData = useSelector((state) => state.frame);
  const canvasData = useSelector((state) => state.canvas);

  const [frameLogic] = useState(new FrameLogic());

  const dispatch = useDispatch();

  // didMount
  useEffect(() => {
    frameLogic.initialize(frameId, canvasBoxSize);
  }, []);

  // didUpdate size of canvas
  useEffect(() => {
    frameLogic.setSize(canvasData.size);
  }, [canvasData.size]);

  // didUpdate if set imageData
  useEffect(() => {
    frameLogic.setImage(frameData[frameId].imageData);
  }, [frameData[frameId].imageData]);

  const setFrameActive = () => {
    dispatch(activateFrame({ frameId }));
  };

  return (
    <li className={[
      'preview_tile',
      frameData.activeFrame === frameId ? 'preview_tile--active' : null,
    ].join(' ')} onClick={setFrameActive}>
      <div className="frame_container">
        <div className="canvas_background"></div>
        <canvas
          className="frame_container-canvas"
          id={frameId}
          width={canvasBoxSize}
          height={canvasBoxSize}
        ></canvas>
        <CopyButton frameId={frameId} />
        <DeleteButton frameId={frameId} />
      </div>
    </li>
  );
};

Frame.propTypes = {
  frameId: PropTypes.string,
};

export default Frame;
