import styled from 'styled-components'
import {Button} from './infoStyles'

export const Container = styled.article`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    margin: 10px 0;
    min-height: 0;
    min-width: 0;
    gap: 0 30px;
    padding-bottom: 100px;
    @media(min-width: 768px){
        margin: 90px 0 0 0;
        grid-template-columns: 310px 1fr;
        padding-bottom: 0;
    }
`;

export const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media(min-width: 768px){
        align-items: flex-start;
        text-align: left;
    }
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    margin: 20px 0 0 0;
    @media(min-width: 1100px){
        margin: 40px 0 0 0;
        font-size: 65px;
        line-height: 72px;
    }
`;

export const PlatformsColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    flex-wrap: wrap;
    &:nth-of-type(odd){
        margin: 40px 80px; //80px horizontally - half of the box
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    grid-column: span 4;
    margin-top: 16px;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition: box-shadow 0.2s ease-in-out;
    &:hover{
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        box-shadow: 0px 64px 74px rgba(0, 0, 0, 0.15);
    }
    & p{
        margin: 10px 0 0 0;
    }
    &:last-of-type{
        display: none;
    }
    @media(min-width: 768px){
        width: 120px;
        height: 120px;
        grid-column: span ${({more}) => more ? '4' : '4'};
        margin-top: 40px;
    }
    @media(min-width: 991px){
        margin-left: ${({rowLeft}) => rowLeft ? '60px' : '0'};
        margin-right: ${({rowRight}) => rowRight ? '60px' : '0'};
        grid-column: span ${({more}) => more ? '3' : '4'};
        &:last-of-type{
            display: flex;
        }
    }
    @media(min-width: 1100px){
        width: 160px;
        height: 160px;
        margin-left: ${({rowLeft}) => rowLeft ? '80px' : '0'};
        margin-right: ${({rowRight}) => rowRight ? '80px' : '0'};
        & p{
            margin: 20px 0 0 0;
        }
    }
`;

export const Icon = styled.div`
    width: 45px;
    height: 45px;
    @media(min-width: 991px){
        width: 65px;
        height: 65px;
    }
    @media(min-width: 1100px){
        width: 74px;
        height: 74px;
    }
`;

export const EarningButton = styled(Button)`
    @media(max-width: 767px){
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;