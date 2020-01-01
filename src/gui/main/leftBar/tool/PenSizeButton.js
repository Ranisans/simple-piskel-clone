import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { penSize, changePenSize } from '../../../../actions/penSizeAction';

const PenSizeButton = ({ className, btnPosition, activeBtnClass }) => {
  const dispatch = useDispatch();
  const currentPenSize = useSelector((state) => state.penSize);

  const onClickHandle = () => {
    dispatch(changePenSize({ size: penSize[btnPosition] }));
  };

  return (
    <div className={[
      ...className,
      currentPenSize.size === penSize[btnPosition] ? activeBtnClass : null,
    ].join(' ')}
      onClick={onClickHandle}
    ></div>
  );
};

export default PenSizeButton;
