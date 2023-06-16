import styled from 'styled-components';

export const ContainerButton = styled.div`
  margin-left: 94px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  width: ${props => props.styleButton ? "132px": "75px"};
  height: 28px;
  margin-left: ${props => props.styleButton ? "-22px": ""};
  background-color: ${props => props.styleButton ? "#F3F3F3": "#5E5BFF"};
  border: none;
  font-weight: ${props => props.styleButton ? "": "bold"};
  color: ${props => props.styleButton ? "#5E5BFF": "white"};
  border-radius: 6px;
`;