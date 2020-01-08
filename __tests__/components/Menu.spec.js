import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Menu from '../../src/gui/menu/Menu';


describe('Menu tests', () => {
  it('create snapshot', () => {
    const component = shallow(
      <Menu />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
