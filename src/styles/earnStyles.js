import styled from 'styled-components';

export const Container = styled.article`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    margin: 82px 0;
`;

export const InfoPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    padding: 0;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 16px;
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    background: rgba(237, 174, 80, 0.1);
    border-radius: 12px;
    margin-right: 20px;
`;

export const BarsContainer = styled.div`
    position: relative;
    width: 460px;
    height: 500px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%);
    border-radius: 20px;
    padding: 20px 30px;
    z-index: 10;
`;

export const BarsBg = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    pointer-events: none;
    z-index: -10;
    opacity: 0.7;
`;

export const BarsLegend = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 100;
    & p{
        display: flex;
        align-items: center;
    }
`;

export const Bars = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 20px;
    margin-top: 50px;
    & p{
        height: 40px;
        width: auto;
        text-align: center;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
`;

export const Bar = styled.div`
    position: relative;
    background-color: white;
    width: 70px;
    height: 270px;
    border-radius: 20px;
    overflow: hidden;
`;

export const Fill = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${({height}) => height}px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #2D2D2D 0%, #000000 100%);
    border-radius: 20px;
    transition: height 1s ease-in-out;
`;

export const Circle = styled.div`
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    background: black;
    border-radius: 10px;
    margin-right: 10px;
    ${({half}) => {
        if(half) return`
            &:before{
                content: '';
                position: absolute;
                left: -1px;
                top: 0;
                bottom: 0;
                width: 50%;
                background-color: white;
                border-radius: 10px 0 0 10px;
            }
        `;
    }}
`;