import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import ColorButton from '../../src/gui/main/leftBar/tool/ColorButton';


describe('ColorButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <ColorButton />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
