import React from 'react';

const Button = ({ className }) => (<div className={[...className].join(' ')}></div>);

export default Button;
