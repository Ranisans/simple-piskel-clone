import React from 'react';

const SignInButton = () => {
  const onClickHandler = () => {
    console.log('TCL: onClickHandler -> onClickHandler');
  };
  return (
    <button
      className='main_menu-button login_btn'
      onClick={onClickHandler}
    >SignIn</button>
  );
};

export default SignInButton;
