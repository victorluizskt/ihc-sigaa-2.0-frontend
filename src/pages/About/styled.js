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

export const TextTitle = styled.span`
    font-size: 18px;
    font-weight: 600; 
    margin-left: 14px;
    margin-top: 15px;
`;

export const TitlePage = styled.span`
    font-size: 24px; 
    font-weight: 700; 
    text-align: center; 
    display: flex; 
    justify-content: center;
    border-radius: 22px;
    padding-top: 56px;
`;

export const Button = styled.button`
    border: none;
    color: #8E9FFB;
    text-decoration-line: underline;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
`;
