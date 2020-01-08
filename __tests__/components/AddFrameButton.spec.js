import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AddFrameButton from '../../src/gui/main/leftBar/frame/AddFrameButton';

describe('AddFrameButton tests', () => {
  it('create snapshot', () => {
    const component = shallow(
      <AddFrameButton callback={() => { }} />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('calling callback', () => {
    const fakeCallback = jest.fn();
    const component = shallow(
      <AddFrameButton callback={fakeCallback} />,
    );
    component.find('div.add_frame').simulate('click');
    expect(fakeCallback).toHaveBeenCalledTimes(1);
  });
});
