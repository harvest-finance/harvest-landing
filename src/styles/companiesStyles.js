import styled from 'styled-components'

export const Container = styled.article`
    margin-top: 30px;
    @media(min-width: 768px){
        margin-top: 136px;
    }
`;

export const CompaniesContainer = styled.div`
    ${({grid}) => {
        if(grid) return`
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
        else return`
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-items: center;
            & div{
                margin: 10px;
            }
        `;
    }}

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