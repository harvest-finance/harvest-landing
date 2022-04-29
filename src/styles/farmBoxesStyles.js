import styled from 'styled-components'
import {DashboardButton} from './navbarStyles'

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 30px;
    margin-top: 35px;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr;
        margin-top: 70px;
    }
`;

export const Box = styled.div`
    position: relative;
    border-radius: 20px;
    padding: 70px 30px 70px 30px;
    overflow: hidden;
    z-index: 10;
    color: white;
    font-size: 30px;
    &:first-of-type{
        background: rgb(47,103,212);
        background: linear-gradient(90deg, rgba(47,103,212,1) 0%, rgba(49,126,242,1) 48%, rgba(54,144,254,1) 100%);
    }
    &:last-of-type{
        background: rgb(49,172,187);
        background: linear-gradient(180deg, rgba(49,172,187,1) 24%, rgba(179,120,164,1) 50%, rgba(230,111,96,1) 82%);
    }
    @media(min-width: 768px){
        font-size: 35px;
        padding: 110px 40px 180px 40px;
    }
    @media(min-width: 991px){
        font-size: 40px;
    }
`;

export const Icon = styled.div`
    width: 68px;
    height: 68px;
    background-color: white;
    border-radius: 50%;
    z-index: 10;
`;

export const Background = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    height: 100%;
    top: 0;
    border-radius: 20px;
    z-index: -1;
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #FFFFFF;
    margin: 30px 0 20px 0;
    font-size: 1em;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-right: 10px;
    font-size: 0.5em;
    @media(min-width: 768px){
        font-size: 0.45em;
    }
`;

export const Button = styled(DashboardButton)`
    display: table;
    margin-top: 30px;
    padding: 15px 40px;
    @media(min-width: 768px){
        font-size: 0.4em;
        position: absolute;
        left: 40px;
        bottom: 120px;
        padding: 15px 40px;
    }
`;