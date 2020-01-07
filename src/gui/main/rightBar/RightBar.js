import React from 'react';

import PreviewWindow from './preview/PreviewWindow';
import Resolution from './action/Resolution';
import ExportButton from './action/ExportButton';

const RightBar = () => (
  <div className="right_bar">
    <PreviewWindow />
    <Resolution />
    <ExportButton />
  </div>
);

export default RightBar;
