import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import ColorBlock from '../../src/gui/main/leftBar/tool/ColorBlock';
import store from '../../src/store';


describe('ColorBlock tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <ColorBlock />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
