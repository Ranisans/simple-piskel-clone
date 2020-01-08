import React from 'react';

import PreviewWindow from './preview/PreviewWindow';
import Resolution from './action/Resolution';
import APNGExportButton from './action/APNGExportButton';
import GIFExportButton from './action/GIFExportButton';

const RightBar = () => (
  <div className="right_bar">
    <PreviewWindow />
    <Resolution />
    <APNGExportButton />
    <GIFExportButton />
  </div>
);

export default RightBar;
