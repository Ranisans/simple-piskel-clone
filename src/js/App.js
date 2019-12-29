import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Menu from './gui/menu/Menu';
import Main from './gui/main/Main';

import '../assets/scss/main.scss';

const App = () => (
  <Provider store={store}>
    <div className="root">
      <h1>Simple Piskel Clone</h1>
      <Menu />
      <Main />
    </div>
  </Provider>
);

export default App;
