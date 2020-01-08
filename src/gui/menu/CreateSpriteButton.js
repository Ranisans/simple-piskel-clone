import React from 'react';

const CreateSpriteButton = () => {
  const onClickHandler = () => {
    console.log('TCL: onClickHandler -> onClickHandler');
  };
  return (
    <button
      className='main_menu-button login_btn'
      onClick={onClickHandler}
    >Create Sprite</button>
  );
};

export default CreateSpriteButton;
