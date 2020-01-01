import React from 'react';

const AddFrameButton = ({ callback }) => (
  <div className='add_frame' onClick={callback}>
    <div className='add_frame-icon'></div>
    <p className="add_frame-label">Add new frame</p>
  </div>
);

export default AddFrameButton;
