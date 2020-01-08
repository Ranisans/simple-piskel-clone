import React from 'react';

const ClearButton = () => {
  const onClickHandler = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  return (
    <button
      className='main_menu-button login_btn'
      onClick={onClickHandler}
    >Clear</button>
  );
};

export default ClearButton;
