import React from 'react';

import Label from './Label';
import CreateSpriteButton from './CreateSpriteButton';
import SignInButton from './SigtInButton';

const Menu = () => (
  <section className="main_menu">
    <h2 className="section_label">Main Menu</h2>
    <h3 className="main_menu-label">Simple Piskel Clone</h3>
    <Label />
    <CreateSpriteButton />
    <SignInButton />
  </section>
);

export default Menu;
