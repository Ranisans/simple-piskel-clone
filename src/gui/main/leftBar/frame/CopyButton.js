import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-random';

import { addFrame } from '../../../../actions/frameAction';

const CopyButton = ({ frameId }) => {
  const dispatch = useDispatch();

  const pushHandle = (e) => {
    e.preventDefault();
    dispatch(addFrame({ frameId: uuid(), parentFrame: frameId }));
  };

  return (
    <div className="copy_frame frame_button" onClick={pushHandle}></div>
  );
};

export default CopyButton;
