import changeTool from '../../src/actions/toolAction';
import { CHANGE_TOOL } from '../../src/actions/toolActionTypes';

describe('colorAction test', () => {
  it('change primary picker color', () => {
    const tool = 'someTool';
    const data = changeTool({ tool });
    expect(data.type).toEqual(CHANGE_TOOL);
    expect(data.tool).toEqual(tool);
  });
});
