import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PreviewLogic from './PreviewLogic';

const PreviewWindow = () => {
  const previewSize = 200;
  const previewId = 'preview_window';
  const [previewLogic] = useState(new PreviewLogic());

  const canvasState = useSelector((state) => state.canvas);

  // didMount
  useEffect(() => {
    previewLogic.initialize(previewId, previewSize);
  }, []);

  // didUpdate canvas size
  useEffect(() => {
    previewLogic.setSize(canvasState.size);
  }, [canvasState.size]);

  return (
    <div className="preview_container">
      <div className="preview_canvas_container">
        <div className="canvas_background"></div>
        <canvas
          id={previewId}
          className="preview_canvas_container-canvas"
          width={previewSize}
          height={previewSize}
        ></canvas>
      </div>
    </div>
  );
};

export default PreviewWindow;
