import React from 'react';
import { StyledButtom } from './styled';

interface ButtonProps {
  title: string,
  action: () => void,
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <StyledButtom>
      <button onClick={action}>{title}</button>
    </StyledButtom>
  );
};

export default Button;