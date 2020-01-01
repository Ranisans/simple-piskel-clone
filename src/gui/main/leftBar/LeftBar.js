import React from 'react';

import ToolBlock from './tool/ToolBlock';
import FrameBlock from './frame/FrameBlock';

const LeftBar = () => (
  <div className="left_bar">
    <ToolBlock />
    <FrameBlock />
  </div>
);

export default LeftBar;
