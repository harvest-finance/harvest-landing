import styled from 'styled-components'

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

export const Button = styled.span`
    display: table;
    padding: 15px 35px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #2D2D2D 0%, #000000 100%);
    border-radius: 10px;
    margin-top: 30px;
    font-size: 0.5em;
    @media(min-width: 768px){
        font-size: 0.4em;
        position: absolute;
        left: 40px;
        bottom: 120px;
    }
`;