import React, { useEffect } from 'react';

import LeftBar from './leftBar/LeftBar';
import RightBar from './rightBar/RightBar';
import Canvas from './canvas/Canvas';

const Main = () => {
  let mainHeight = 0;
  let canvasContainer;
  let mainCanvas;

  const resizeWindow = () => {
    if (mainHeight === 0) {
      canvasContainer = document.querySelector('.main_canvas_container');
      mainCanvas = document.querySelector('.main_canvas');
      mainHeight = canvasContainer.clientHeight;
    }
    const containerWidth = canvasContainer.clientWidth;
    const newSize = Math.floor(Math.min(mainHeight, containerWidth * 0.9));
    mainCanvas.style.height = `${newSize}px`;
    mainCanvas.style.width = `${newSize}px`;
    mainCanvas.style.marginTop = `${(mainHeight - newSize) / 2}px`;
    mainCanvas.style.marginLeft = `${(containerWidth - newSize) / 2}px`;
  };

  useEffect(() => {
    resizeWindow();
  }, []);

  window.addEventListener('resize', resizeWindow);

  return (
    <main className="main_block">
      <LeftBar />
      <Canvas />
      <RightBar />
    </main>
  );
};

export default Main;
