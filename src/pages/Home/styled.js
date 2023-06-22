import styled from 'styled-components';

export const Card = styled.div`
    background-color: #FFF;
    width: 100%;
    border-radius: 22px;
    height: ${props => props.height};
    * {
        background-color: #FFF;
    }
    margin-top: ${props => props.marginTop}
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
  margin-right: 30px;
  margin-left: 30px;
`;