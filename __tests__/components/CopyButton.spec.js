import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import CopyButton from '../../src/gui/main/leftBar/frame/CopyButton';


describe('CopyButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <CopyButton />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
