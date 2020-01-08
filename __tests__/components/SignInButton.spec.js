import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInButton from '../../src/gui/menu/SignInButton';


describe('SignInButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <SignInButton />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
