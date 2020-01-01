import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import changeTool from '../../../../actions/toolAction';

const ToolButton = ({ className, toolName, activeBtnClass }) => {
  const currentTool = useSelector((state) => state.tools);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(changeTool({ tool: toolName }));
  };

  return (
    <div className={[
      ...className,
      toolName === currentTool.tool ? activeBtnClass : null,
    ].join(' ')}
      onClick={onClickHandler}
    ></div>
  );
};

ToolButton.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  toolName: PropTypes.string,
  activeBtnClass: PropTypes.string,
};


export default ToolButton;
