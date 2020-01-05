import React from 'react';

import PreviewWindow from './preview/PreviewWindow';
import Resolution from './Resolution';

const RightBar = () => (
  <div className="right_bar">
    <PreviewWindow />
    <Resolution />
  </div>
);

export default RightBar;
