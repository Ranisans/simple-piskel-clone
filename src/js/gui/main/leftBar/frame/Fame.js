import React from 'react';

const Frame = ({ canvasId }) => (
  <li className="preview_tile">
    <div className="canvas_container">
      <div className="canvas_container-background"></div>
      <canvas
        className="single_frame-canvas"
        id={canvasId}
        width="96"
        height="96"
      ></canvas>
    </div>
  </li>
);

export default Frame;
