import React from 'react';
import { shortcuts } from '../../../../logic/shortcuts';

const AddFrameButton = ({ callback }) => (
  <div
    className='add_frame'
    onClick={callback}
    title={`shortcut: ${shortcuts.addFrame}`}
  >
    <div className='add_frame-icon'></div>
    <p className="add_frame-label">Add new frame</p>
  </div>
);

export default AddFrameButton;
