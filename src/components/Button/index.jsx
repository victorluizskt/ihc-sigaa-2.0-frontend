import React from 'react';
import {
  ContainerButton,
  StyledButton,
} from './styled';

const Button = ({ title, action, styleButton }) => {
  return (
    <ContainerButton styleButton>
      <StyledButton styleButton={styleButton} onClick={action}>{title}</StyledButton>
    </ContainerButton>
  );
};

export default Button;