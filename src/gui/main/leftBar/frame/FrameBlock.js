import React from 'react';

import AddFrameButton from './AddFrameButton';
import Frame from './Fame';

const FrameBlock = () => {
  const addFrame = () => {
    console.log('Add Frame');
  };
  return (
    <div className="frame_block">
      <ul className="preview_list">
        <Frame />
      </ul>
      <AddFrameButton callback={addFrame} />
    </div>
  );
};
export default FrameBlock;
