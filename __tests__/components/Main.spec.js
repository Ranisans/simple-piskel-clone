import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Main from '../../src/gui/main/Main';


describe('Main tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
