import { createStore } from 'redux';

import rootReducer from '../../src/reducers/rootReducer';

describe('rootReducer tests', () => {
  it('should ', () => {
    rootReducer.default = jest.fn();
    const store = createStore(rootReducer.default);
    store.dispatch({
      type: 'TestAction',
    });
    expect(rootReducer.default).toHaveBeenCalled();
  });
});
