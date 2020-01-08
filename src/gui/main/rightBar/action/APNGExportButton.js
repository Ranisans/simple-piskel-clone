import React from 'react';
import { useSelector } from 'react-redux';
import download from 'downloadjs';
import { shortcuts } from '../../../../logic/shortcuts';

const UPNG = require('upng-js');

const APNGExportButton = () => {
  const frameState = useSelector((state) => state.frame);
  const frameListState = useSelector((state) => state.frameList);
  const canvasState = useSelector((state) => state.canvas);

  const exportHandler = () => {
    const second = 1000;

    const buffers = [];

    frameListState.frames.forEach((frameId) => {
      const { imageData } = frameState[frameId];
      buffers.push(imageData.data.buffer);
    });
    const fps = second / parseInt(
      document.querySelector('.preview_actions-fps').value, 10,
    );
    const delays = new Array(frameListState.frames.length).fill(fps);

    const image = UPNG.encode(
      buffers,
      canvasState.size,
      canvasState.size,
      0,
      delays,
    );
    download(image, 'export.apng', 'apng');
  };

  return (
    <button
      className='export_to_apng export_animation'
      onClick={exportHandler}
      title={`shortcut: ${shortcuts.exportAPNG}`}
    >Export to APNG</button>
  );
};

export default APNGExportButton;
