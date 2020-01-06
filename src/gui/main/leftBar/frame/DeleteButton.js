import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFrame } from '../../../../actions/frameAction';

const DeleteButton = ({ frameId }) => {
  const dispatch = useDispatch();

  const pushHandle = (e) => {
    e.preventDefault();
    dispatch(removeFrame({ frameId }));
  };

  return (
    <div className="delete_frame frame_button" onClick={pushHandle}></div>
  );
};

export default DeleteButton;
