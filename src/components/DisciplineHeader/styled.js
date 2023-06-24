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

export const TitlePage = styled.span`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: start;
    margin-left: 30px;
    border-radius: 22px;
    padding-top: 26px;
`;

export const Fields = styled.span`
    color: var(--color-gray-3, #A098AE);
    font-size: 14px;
    margin-left: 5px;
`;

export const DisciplineContainer = styled.div`
    display: grid;
    grid-template-rows: 65% 65%;
    margin-left: 30px; 
    margin-top: 10px;
`;

export const Image = styled.img`
    margin-bottom: -4px;
    width: 20px;
    height: 20px; 
`;