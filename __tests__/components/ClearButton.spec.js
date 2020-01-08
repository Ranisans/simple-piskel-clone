import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ClearButton from '../../src/gui/menu/ClearButton';


describe('ClearButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <ClearButton />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
