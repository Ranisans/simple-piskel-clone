import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import RightBar from '../../src/gui/main/rightBar/RightBar';


describe('RightBar tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <RightBar />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
