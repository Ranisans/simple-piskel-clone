import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import DeleteButton from '../../src/gui/main/leftBar/frame/DeleteButton';


describe('DeleteButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <DeleteButton />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
