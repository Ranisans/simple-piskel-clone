import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PreviewLogic from './PreviewLogic';

const PreviewWindow = () => {
  const previewSize = 200;
  const previewId = 'preview_window';
  const [previewLogic] = useState(new PreviewLogic());
  const [fps, setFps] = useState(5);

  const canvasState = useSelector((state) => state.canvas);
  const frameState = useSelector((state) => state.frame);
  const frameListState = useSelector((state) => state.frameList);

  // didMount
  useEffect(() => {
    previewLogic.initialize(previewId, previewSize);
    previewLogic.startAnimate();
  }, []);

  // didUpdate canvas size
  useEffect(() => {
    previewLogic.setSize(canvasState.size);
  }, [canvasState.size]);

  useEffect(() => {
    previewLogic.setFps(fps);
  }, [fps]);

  useEffect(() => {
    previewLogic.setFrames(frameState);
  }, [frameState]);

  useEffect(() => {
    previewLogic.setFramesQueue(frameListState.frames);
  }, [frameListState]);

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
      <div className="preview_actions">
        <div className="preview_actions-fullscreen" onClick={() => { previewLogic.setFullscreen(); }}></div>
        <p className="preview_actions-fps_label">{`${fps} fps`}</p>
        <input
          type="range" name="fps" id="fps" className="preview_actions-fps"
          min="1" max="24" step="1"
          value={fps}
          onChange={(e) => { setFps(e.target.value); }} />
      </div>
    </div>
  );
};

export default PreviewWindow;
