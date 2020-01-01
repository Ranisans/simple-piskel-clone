import * as ACTION_TYPES from './toolActionTypes';

const changeTool = ({ tool }) => (
  {
    type: ACTION_TYPES.CHANGE_TOOL,
    tool,
  }
);

export default changeTool;
