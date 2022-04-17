import styled from 'styled-components'

export const Container = styled.footer`
    position: relative;
    margin-top: 120px;
    z-index: 10;
`;

export const FooterBG = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 45%;
    border-radius: 80px 80px 0 0;
    overflow: hidden;
    z-index: -1;
    @media(min-width: 768px){
        height: 80%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0 0 75px 0;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0 0 150px 0;
    }
`;

export const Box = styled.a`
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    z-index: 10;
    padding-top: 30px;
    cursor: pointer;
    & p{
        margin: 22px 0 25px 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #888E8F;
    }
    @media(min-width: 768px){
        padding-top: 45px;
        margin: 26px 0 39px 0;
    }
`;

export const BottomText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    z-index: 100;
    color: white;
    & div{
        display: none;
    }
    @media(min-width: 768px){
        font-size: 18px;
        & div{
            display: block;
        }
        & a{
            margin: 0 10px;
            cursor: pointer;
        }
    }
`;