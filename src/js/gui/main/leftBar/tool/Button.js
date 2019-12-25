import React from 'react';

const Button = ({ className, value }) => (<div className={[...className].join(' ')}>{value}</div>);

export default Button;
