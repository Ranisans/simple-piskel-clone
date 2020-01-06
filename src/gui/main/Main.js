import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LeftBar from './leftBar/LeftBar';
import RightBar from './rightBar/RightBar';
import Canvas from './canvas/Canvas';
import { changeCanvasBoxSize } from '../../actions/canvasAction';
import { toolBtn } from '../../actions/toolActionTypes';
import changeTool from '../../actions/toolAction';

const Main = () => {
  let mainHeight = 0;
  let mainCanvasBlock;
  let mainCanvasContainer;
  const dispatch = useDispatch();

  const resizeWindow = () => {
    if (mainHeight === 0) {
      mainCanvasBlock = document.querySelector('.main_canvas_block');
      mainCanvasContainer = document.querySelector('.main_canvas_container');
      mainHeight = mainCanvasBlock.clientHeight;
    }
    const containerWidth = mainCanvasBlock.clientWidth;
    const newSize = Math.floor(Math.min(mainHeight, containerWidth * 0.9));
    mainCanvasContainer.style.height = `${newSize}px`;
    mainCanvasContainer.style.width = `${newSize}px`;
    mainCanvasContainer.style.marginTop = `${(mainHeight - newSize) / 2}px`;
    mainCanvasContainer.style.marginLeft = `${(containerWidth - newSize) / 2}px`;
    dispatch(changeCanvasBoxSize({ size: newSize }));
  };

  useEffect(() => {
    resizeWindow();
  }, []);

  window.addEventListener('resize', resizeWindow);

  window.addEventListener('keypress', (e) => {
    const { key } = e;
    let tool;
    switch (key) {
      case 'p':
        tool = toolBtn.pen;
        break;
      case 'c':
        tool = toolBtn.pipette;
        break;
      case 'b':
        tool = toolBtn.bucket;
        break;
      case 'e':
        tool = toolBtn.eraser;
        break;
      case 's':
        tool = toolBtn.stroke;
        break;
      default:
        return;
    }
    dispatch(changeTool({ tool }));
  });

  return (
    <main className="main_block">
      <LeftBar />
      <Canvas />
      <RightBar />
    </main>
  );
};

export default Main;
