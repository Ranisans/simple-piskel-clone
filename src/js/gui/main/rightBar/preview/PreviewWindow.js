import React from 'react';

const PreviewWindow = () => (
  <div className="preview_container">
    <div className="preview_canvas_container">
      <div className="canvas_background"></div>
      <canvas className="preview_canvas_container-canvas"></canvas>
    </div>
  </div>
);

export default PreviewWindow;
