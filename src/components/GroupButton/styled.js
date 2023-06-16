import styled from 'styled-components';

export const ButtonBack = styled.button`
    width: 75px;
    height: 28px;
    background-color: #F3F3F3;
    border: none;
    margin-left: 16px;
    font-weight: ${props => props.styleButton ? "": "bold"};
    color: rgba(33, 32, 66, 0.56);
    border-radius: 6px;
    &:hover {
        cursor: pointer;
    }
`;

export const ButtonRecover = styled.button`
    width: 130px;
    height: 28px;
    background: #5E5BFF;
    border-radius: 6px;
    border: none;
    text-align: center;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;