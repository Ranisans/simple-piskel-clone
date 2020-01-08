import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFrame } from '../../../../actions/frameAction';
import { shortcuts } from '../../../../logic/shortcuts';

const DeleteButton = ({ frameId }) => {
  const dispatch = useDispatch();

  const pushHandle = (e) => {
    dispatch(removeFrame({ frameId }));
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="delete_frame frame_button"
      onClick={pushHandle}
      title={`shortcut: ${shortcuts.deleteActiveFrame}`}
    ></div>
  );
};

export default DeleteButton;
