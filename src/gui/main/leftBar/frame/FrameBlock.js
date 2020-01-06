import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid-random';

import AddFrameButton from './AddFrameButton';
import Frame from './Fame';
import { addFrame, activateFrame, moveFrame } from '../../../../actions/frameAction';

const FrameBlock = () => {
  const dispatch = useDispatch();
  const frameListState = useSelector((state) => state.frameList);

  const addCleanFrame = () => {
    dispatch(addFrame({ frameId: uuid() }));
  };

  if (frameListState.frames.length === 0) {
    addCleanFrame();
  } else if (frameListState.frames.length === 1) {
    const [frameId] = frameListState.frames;
    dispatch(activateFrame({ frameId }));
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    dispatch(moveFrame({ source: result.source.index, destination: result.destination.index }));
  };

  const FramesList = React.memo(
    ({ frameList }) => frameList.frames.map(
      (frameId, index) => <Frame frameId={frameId} index={index} key={index} />,
    ),
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="frame_block">
        <Droppable droppableId="frames">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <FramesList frameList={frameListState} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <AddFrameButton callback={addCleanFrame} />
      </div>
    </DragDropContext>
  );
};
export default FrameBlock;
