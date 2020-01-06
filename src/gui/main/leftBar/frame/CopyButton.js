import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-random';

import { addFrame } from '../../../../actions/frameAction';

const CopyButton = ({ frameId }) => {
  const dispatch = useDispatch();

  const pushHandle = (e) => {
    dispatch(addFrame({ frameId: uuid(), parentFrame: frameId }));
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="copy_frame frame_button" onClick={pushHandle}></div>
  );
};

export default CopyButton;
