import styled from 'styled-components';

export const StyledField = styled.div`
  text-align: initial;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 26px;
`;

export const Input = styled.input`
  width: 210px;
  height: 31px;
  left: 418px;
  top: 305px;
  border: 1px;
  background: #FAFAFA;
  border-radius: 5px;
`;

export const SpanField = styled.span`
  font-size: 14px !important;
  margin-bottom: 4px;
`;

export const TooltipText = styled.div`
  color: black;
  width: 20px;
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -25px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 10px 10px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: black;
    background-color: white;
    width: 230px;
    padding: 15px 15px;
    font-size: 12px;
    &:before {
      border-color: transparent transparent white
        white;
    }
  }
`;