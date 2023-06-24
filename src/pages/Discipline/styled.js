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

export const TitlePage = styled.span`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-left: 30px;
    border-radius: 22px;
    text-align: start;
`;

export const Button = styled.button`
    border: none;
    color: #8E9FFB;
    text-decoration-line: underline;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-top: 8px;
`;

export const Image = styled.img`
    margin-bottom: -4px;
    width: 25px;
    height: 25px; 
    margin-left: 30px;
`;

export const ButtonSend = styled.button`
    border-radius: 6px;
    background: ${props => props.background ? props.background : "#A8A8A8"};
    width: 51px;
    height: 19px;
    flex-shrink: 0;
    border: none;
    color: #FFF;
    text-align: center;
    font-size: 8px;
    font-weight: 700;
`;