import React from 'react';

import { mainCanvasClass } from '../../../actions/canvasAction';


const Canvas = () => (
  <div className="main_canvas_block">
    <div className="main_canvas_container">
      <div className="canvas_background" ></div>
      <canvas className={mainCanvasClass} onContextMenu={(e) => { e.preventDefault(); }}></canvas>
    </div>
  </div>
);

export default Canvas;
