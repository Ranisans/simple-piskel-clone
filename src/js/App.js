import React from 'react';

import Menu from './gui/menu/Menu';
import Main from './gui/main/Main';

import '../assets/scss/main.scss';

const App = () => (
  <div className="root">
    <h1>Simple Piskel Clone</h1>
    <Menu />
    <Main />
  </div>
);

export default App;
