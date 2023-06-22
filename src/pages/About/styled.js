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
