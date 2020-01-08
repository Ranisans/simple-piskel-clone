import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-random';

import LeftBar from './leftBar/LeftBar';
import RightBar from './rightBar/RightBar';
import Canvas from './canvas/Canvas';
import { changeCanvasBoxSize } from '../../actions/canvasAction';
import { toolBtn } from '../../actions/toolActionTypes';
import changeTool from '../../actions/toolAction';
import { shortcuts } from '../../logic/shortcuts';
import { addFrame } from '../../actions/frameAction';

const Main = () => {
  let mainHeight = 0;
  let mainCanvasBlock;
  let mainCanvasContainer;
  const dispatch = useDispatch();

  const addCleanFrame = () => {
    dispatch(addFrame({ frameId: uuid() }));
  };

  const copyActiveFrame = () => {
    const activeFrame = document.querySelector('.preview_tile--active');
    const copyButton = activeFrame.querySelector('.copy_frame');
    copyButton.click();
  };

  const deleteActiveFrame = () => {
    const activeFrame = document.querySelector('.preview_tile--active');
    const deleteButton = activeFrame.querySelector('.delete_frame');
    deleteButton.click();
  };

  const exportAnimationToAPNG = () => {
    const exportButton = document.querySelector('.export_to_apng');
    exportButton.click();
  };

  const exportAnimationToGIF = () => {
    const exportButton = document.querySelector('.export_to_gif');
    exportButton.click();
  };

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
      case shortcuts.pen:
        tool = toolBtn.pen;
        break;
      case shortcuts.pipette:
        tool = toolBtn.pipette;
        break;
      case shortcuts.bucket:
        tool = toolBtn.bucket;
        break;
      case shortcuts.eraser:
        tool = toolBtn.eraser;
        break;
      case shortcuts.stroke:
        tool = toolBtn.stroke;
        break;
      case shortcuts.colorswap:
        tool = toolBtn.colorswap;
        break;
      case shortcuts.addFrame:
        addCleanFrame();
        return;
      case shortcuts.copyActiveFrame:
        copyActiveFrame();
        return;
      case shortcuts.deleteActiveFrame:
        deleteActiveFrame();
        return;
      case shortcuts.exportAPNG:
        exportAnimationToAPNG();
        return;
      case shortcuts.exportGIF:
        exportAnimationToGIF();
        return;
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
