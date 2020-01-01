import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid-random';

import AddFrameButton from './AddFrameButton';
import Frame from './Fame';
import { addFrame } from '../../../../actions/frameAction';

const FrameBlock = () => {
  const dispatch = useDispatch();
  const frameList = useSelector((state) => state.frameList);

  const addCleanFrame = () => {
    dispatch(addFrame({ frameId: uuid() }));
  };

  if (frameList.frames.length === 0) {
    addCleanFrame();
  }

  return (
    <div className="frame_block">
      <ul className="preview_list">
        {frameList.frames.map((frameId) => <Frame frameId={frameId} key={frameId} />)}
      </ul>
      <AddFrameButton callback={addCleanFrame} />
    </div>
  );
};
export default FrameBlock;
