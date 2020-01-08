import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Frame from '../../src/gui/main/leftBar/frame/Fame';


describe('Frame tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <Frame />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
