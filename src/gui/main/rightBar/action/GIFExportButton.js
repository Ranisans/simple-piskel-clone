import React from 'react';
import { useSelector } from 'react-redux';
import download from 'downloadjs';
import GIF from 'gif.js-upgrade';
import { shortcuts } from '../../../../logic/shortcuts';

const GIFExportButton = () => {
  const frameListState = useSelector((state) => state.frameList);
  const canvasState = useSelector((state) => state.canvas);

  const exportHandler = () => {
    const gif = new GIF({
      workers: 4,
      width: canvasState.size,
      height: canvasState.size,
      background: '#00000000',
      transparent: 'rgba(0,0,0,0)',
    });

    const second = 1000;
    const fps = second / parseInt(
      document.querySelector('.preview_actions-fps').value, 10,
    );

    frameListState.frames.forEach((frameId) => {
      const canvasObject = document.querySelector(`#${frameId}`);
      const context = canvasObject.getContext('2d');
      const imageData = context.getImageData(0, 0, canvasState.size, canvasState.size);
      gif.addFrame(imageData, { copy: true, delay: fps });
    });

    gif.on('finished', (blob) => {
      download(blob, 'export.gif', 'gif');
    });

    gif.render();
  };

  return (
    <button
      className='export_to_gif export_animation'
      onClick={exportHandler}
      title={`shortcut: ${shortcuts.exportGIF}`}
    >Export to GIF</button>
  );
};

export default GIFExportButton;
