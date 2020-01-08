import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../src/store';
import APNGExportButton from '../../src/gui/main/rightBar/action/APNGExportButton';


describe('APNGExportButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <APNGExportButton />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
