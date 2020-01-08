import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import PenSizeButton from '../../src/gui/main/leftBar/tool/PenSizeButton';
import store from '../../src/store';


describe('PenSizeButton tests', () => {
  it('renders the component', () => {
    const component = shallow(
      <Provider store={store}>
        <PenSizeButton
          className={['super_puper_class']}
          btnPosition={2} colorName={'primary'}
          activeBtnClass={'active'}
        />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
