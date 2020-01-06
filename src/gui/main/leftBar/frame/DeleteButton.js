import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFrame } from '../../../../actions/frameAction';

const DeleteButton = ({ frameId }) => {
  const dispatch = useDispatch();

  const pushHandle = (e) => {
    dispatch(removeFrame({ frameId }));
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="delete_frame frame_button" onClick={pushHandle}></div>
  );
};

export default DeleteButton;
