import React from 'react';
import { useSelector } from 'react-redux';
// import UPNG from 'upng-js';
import download from 'downloadjs';

const UPNG = require('upng-js');

const ExportButton = () => {
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
    console.log('TCL: exportToGif -> image', image);
    download(image, 'export.apng', 'apng');
  };

  return (
    <button className='export_to_apng' onClick={exportHandler}>Export to APNG</button>
  );
};

export default ExportButton;
