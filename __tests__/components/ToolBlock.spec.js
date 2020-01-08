import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import ToolBlock from '../../src/gui/main/leftBar/tool/ToolBlock';
import store from '../../src/store';


describe('ToolBlock tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <ToolBlock />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
