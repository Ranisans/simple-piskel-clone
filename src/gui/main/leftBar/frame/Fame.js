import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { activateFrame } from '../../../../actions/frameAction';
import CopyButton from './CopyButton';
import DeleteButton from './DeleteButton';
import FrameCanvas from './FrameCanvas';

const BASE_FRAME_CLASS = 'preview_tile';
const ACTIVE_FRAME_CLASS = `${BASE_FRAME_CLASS} preview_tile--active`;

const Frame = ({ frameId, index }) => {
  const activeFrame = useSelector((state) => state.frame.activeFrame);
  const [frameClass, setFrameClass] = useState(BASE_FRAME_CLASS);

  const dispatch = useDispatch();

  // didUpdate activeFrame
  useEffect(() => {
    if (activeFrame === frameId) {
      if (frameClass !== ACTIVE_FRAME_CLASS) {
        setFrameClass(ACTIVE_FRAME_CLASS);
      }
    } else if (frameClass !== BASE_FRAME_CLASS) {
      setFrameClass(BASE_FRAME_CLASS);
    }
  }, [activeFrame]);

  const setFrameActive = () => {
    dispatch(activateFrame({ frameId }));
  };

  return (
    <Draggable draggableId={frameId} index={index}>
      {(provided) => (
        <div className={frameClass}
          onClick={setFrameActive}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="frame_container">
            <FrameCanvas frameId={frameId} />
            <CopyButton frameId={frameId} />
            <DeleteButton frameId={frameId} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

Frame.propTypes = {
  frameId: PropTypes.string,
  index: PropTypes.number,
};

export default Frame;
