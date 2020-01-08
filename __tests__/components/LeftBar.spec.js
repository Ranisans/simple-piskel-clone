import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import LeftBar from '../../src/gui/main/leftBar/LeftBar';


describe('LeftBar tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <LeftBar />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
