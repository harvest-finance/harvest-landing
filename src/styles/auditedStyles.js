import styled from 'styled-components'

export const Container = styled.article`
    margin: 50px 0 100px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 30px 10px;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px 70px;
    }
    @media(min-width: 991px){
        gap: 20px 70px;
    }
`;

export const Text = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 40px;
`;

export const DefaultService = styled.div`
    border-radius: 18px;
    max-width: 150px;
    cursor: default;
    @media(min-width: 768px){
        max-width: unset;
        &:hover{
            filter: invert(92%) sepia(6%) saturate(126%) hue-rotate(142deg) brightness(89%) contrast(85%);
        }
    }
`;