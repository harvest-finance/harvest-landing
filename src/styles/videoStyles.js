import styled, {keyframes} from 'styled-components';

export const Container = styled.article`
    margin-top: 30px;
    @media(min-width: 768px){
        margin-top: 90px;
    }
`;

export const Frame = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 0px;
    @media(min-width: 768px){
        height: 500px;
        padding: 20px 25px;
    }
    @media(min-width: 991px){
        height: 654px;
    }
`;

export const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    & iframe{
        border: none;
    }
`;

export const PosterImage = styled.div`
    opacity: ${({play}) => play ? '0' : '1'};
    pointer-events: ${({play}) => play ? 'none' : 'all'};
    position: absolute;
    left: -2px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    & span{
        border-radius: 20px;
    }
`;

const shake = keyframes`
    0% { transform: translate(-51%, -51%) rotate(3deg); }
    10% { transform: translate(-52%, -53%) rotate(-6deg); }
    20% { transform: translate(-51%, -50%) rotate(1deg); }
    30% { transform: translate(-50%, -50%) rotate(0deg); }
    40% { transform: translate(-52%, -52%) rotate(1deg); }
    50% { transform: translate(-50%, -50%) rotate(-1deg); }
    60% { transform: translate(-50%, -51%) rotate(0deg); }
    70% { transform: translate(-52%, -51%) rotate(-1deg); }
    80% { transform: translate(-51%, -50%) rotate(1deg); }
    90% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -51%) rotate(-1deg); }
`;

export const PlayButton = styled.button`
    opacity: ${({play}) => play ? '0' : '1'};
    pointer-events: ${({play}) => play ? 'none' : 'all'};
    position: absolute;
    width: 78px;
    height: 78px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-color: white;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: white;
    z-index: 10;
    transition: opacity 0.3s ease-in-out;
    margin: 0;
    padding: 0;
    @media(min-width: 768px){
        width: 98px;
        height: 98px;
        &:hover{
            animation: ${shake} 0.5s;
        }
    }
`;

export const Effect = styled.div`
    z-index: 100;
    padding: 20px;
    cursor: pointer;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        background: rgba(255,255,255,0.5);
        border-radius: 50%;
        z-index: -1;
        transition: transform 0.2s ease-in-out;
    }
    &::after{
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transition: transform 0.2s ease-in-out;
        z-index: -1;
    }
    &:hover::before{
        transform: scale(1.4);
    }
    &:hover::after{
        transform: scale(1.8);
    }
`;