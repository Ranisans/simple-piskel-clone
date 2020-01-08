import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import PreviewWindow from '../../src/gui/main/rightBar/preview/PreviewWindow';
import store from '../../src/store';

describe('PreviewWindow tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <PreviewWindow />,
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
