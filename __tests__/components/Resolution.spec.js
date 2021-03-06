import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Resolution from '../../src/gui/main/rightBar/action/Resolution';


describe('Resolution tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <Resolution />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
