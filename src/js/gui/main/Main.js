import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LeftBar from './leftBar/LeftBar';
import RightBar from './rightBar/RightBar';
import Canvas from './canvas/Canvas';
import { changeCanvasBoxSize, mainCanvasClass } from '../../actions/canvasAction';
import CanvasLogic from './canvas/CanvasLogic';

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
    const canvas = document.querySelector(`.${mainCanvasClass}`);
    const canvasLogic = new CanvasLogic();

    canvas.addEventListener('changeCanvasSize', () => {
      canvasLogic.settingCanvasSize();
    });

    canvas.addEventListener('changePenSize', () => {
      canvasLogic.settingPixelSize();
    });

    canvas.addEventListener('changeTool', () => {
      canvasLogic.settingTool();
    });

    canvas.addEventListener('reset', () => {
      canvasLogic.resetAll();
    });

    canvasLogic.settingPixelSize();
    canvasLogic.settingCanvasSize();
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
