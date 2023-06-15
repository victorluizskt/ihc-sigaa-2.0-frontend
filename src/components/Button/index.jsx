import React from 'react';
import { StyledButtom } from './styled';

const Button = ({ title, action }) => {
  return (
    <StyledButtom>
      <button onClick={action}>{title}</button>
    </StyledButtom>
  );
};

export default Button;