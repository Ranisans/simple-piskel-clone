import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Canvas from '../../src/gui/main/canvas/Canvas';


describe('Canvas tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <Canvas />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
