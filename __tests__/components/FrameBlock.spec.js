import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import FrameBlock from '../../src/gui/main/leftBar/frame/FrameBlock';


describe('FrameBlock tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <FrameBlock />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
