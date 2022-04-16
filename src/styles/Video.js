import styled from 'styled-components';

export const Container = styled.article`
    margin: 100px 0;
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
        padding: 20px;
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

export const PlayButton = styled.button`
    opacity: ${({play}) => play ? '0' : '1'};
    pointer-events: ${({play}) => play ? 'none' : 'all'};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-color: white;
    outline: none;
    border: none;
    border-radius: 50%;
    padding: 20px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
`;