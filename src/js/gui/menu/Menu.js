import React from 'react';

import Button from './Button';

const Menu = () => {
  const buttons = [
    { className: 'create_sprite', value: 'Create Sprite' },
    { className: 'login_btn', value: 'SignIn' },
  ];
  return (
    <section className="main_menu">
      <h2 className="section_label">Main Menu</h2>
      <h3 className="main_menu-label">Simple Piskel Clone</h3>
      {buttons.map((el, i) => (
        <Button
          key={i}
          className={el.className}
          value={el.value}
        />
      ))}
    </section>
  );
};

export default Menu;
