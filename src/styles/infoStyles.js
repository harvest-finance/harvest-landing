import styled from 'styled-components'

export const InfoContainer = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 30px;
    & h1{
        font-weight: 700;
        font-size: 50px;
        line-height: 42px;
        text-align: center;
        margin: 30px 0;
    }
    & p{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #888E8F;
    }
    @media(min-width: 768px){
        grid-template-columns: 0.6fr 0.4fr;
        & h1{
            font-size: 60px;
            padding-right: 50px;
            line-height: 62px;
            text-align: left;
        }
    }
    @media(min-width: 991px){
        & h1{
            font-size: 80px;
            line-height: 82px;
        }
    }
    @media(min-width: 1100px){
        & h1{
            font-size: 90px;
            line-height: 82px;
        }
    }
`;

export const Column = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    @media(min-width: 768px){
        align-items: flex-start;
    }
`;

export const FarmImage = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    max-height: 640px;
    max-width: 770px;
    width: 40%;
    border-radius: 0 0 0 100px;
    background-image: url("/field.svg");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    @media(min-width: 768px){
        display: block;
    }
    @media(min-width: 991px){
        & {
            max-height: 700px;
        }
    }
    @media(min-width: 1100px){
        & {
            max-height: 770px;
        }
    }
`;

export const HarvestOffers = styled.div`
    position: relative;
    width: 320px;
    height: 370px;
    background: #FFFFFF;
    box-shadow: 0px 104px 224px rgba(0, 0, 0, 0.05);
    border-radius: 90px 40px;
    @media(min-width: 768px){
        position: absolute;
        left: -50px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }
`;

export const HarvestOffer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(24, 24, 24, 0.1);
    border-radius: 27px;
    padding: 10px 12px;
`;

export const HarvestCircle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 104px;
    height: 104px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%);
    border-radius: 48px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 70px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%);
    border-radius: 10px;
`;