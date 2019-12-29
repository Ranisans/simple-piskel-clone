import React from 'react';

import ColorBlock from './ColorBlock';
import Button from './Button';
import ToolButton from './ToolButton';

import { toolBtn } from '../../../../actions/toolActionTypes';

const ToolBlock = () => {
  const penBlokCls = 'pen_block';
  const penSizeBtn = ['s1px', 's2px', 's3px', 's4px'];

  const toolBlockCls = 'tool_block';

  return (
    <div className="tools_table">
      <div className="tools">
        <div className={penBlokCls}>
          {penSizeBtn.map((el, i) => (
            <Button
              key={i}
              className={[
                `${penBlokCls}-size`,
                `${penBlokCls}-${el}`,
                i === 0 ? `${penBlokCls}-size--active` : null,
              ]}
            />))}
        </div>

        <div className={toolBlockCls}>
          {Object.keys(toolBtn).map((toolName, i) => (
            <ToolButton
              key={i}
              className={[
                `${toolBlockCls}-button`,
                `${toolBlockCls}-${toolName}`,
              ]}
              toolName={toolName}
              activeBtnClass={`${toolBlockCls}-button--active`}
            />))}
        </div>

        <ColorBlock />
      </div>
    </div>
  );
};

export default ToolBlock;
