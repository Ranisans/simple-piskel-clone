import React from 'react';

import PreviewWindow from './preview/PreviewWindow';
import Resolution from './action/Resolution';
import APNGExportButton from './action/APNGExportButton';

const RightBar = () => (
  <div className="right_bar">
    <PreviewWindow />
    <Resolution />
    <APNGExportButton />
  </div>
);

export default RightBar;
