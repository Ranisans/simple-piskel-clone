import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import GIFExportButton from '../../src/gui/main/rightBar/action/GIFExportButton';


describe('GIFExportButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <GIFExportButton />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
