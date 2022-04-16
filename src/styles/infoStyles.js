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
        margin: 45px 0 0 0;
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

export const InfoText = styled.span`
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #888E8F;
    margin: 15px 0;
    padding: 0;
    @media(min-width: 768px){
        font-size: 24px;
        margin: 29px 0;
    }
`;

export const Column = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    &:nth-of-type(2){
        position: relative;
    }
    @media(min-width: 768px){
        padding: 50px 0;
        align-items: flex-start;
        &:nth-of-type(2){
            position: static;
        }
    }
`;

export const FarmImage = styled.div`
    position: absolute;
    right: -10px;
    left: -10px;
    height: 300px;
    top: 50%;
    border-radius: 50px 50px 0 0;
    background-image: url("/field.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media(min-width: 768px){
        right: 0;
        top: 0;
        left: unset;
        height: 100%;
        max-height: 640px;
        max-width: 770px;
        width: 40%;
        border-radius: 0 0 0 100px;
    }
    @media(min-width: 991px){
        & {
            max-height: 700px;
        }
    }
    @media(min-width: 1100px){
        & {
            max-height: 750px;
        }
    }
`;

export const HarvestProjects = styled.div`
    position: relative;
    width: 250px;
    height: 315px;
    background: #FFFFFF;
    box-shadow: 0px 104px 224px rgba(0, 0, 0, 0.05);
    border-radius: 90px 40px;
    z-index: 1;
    @media(min-width: 768px){
        position: absolute;
        width: 290px;
        height: 350px;
        left: -50px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media(min-width: 991px){
        width: 320px;
        height: 370px;
    }
`;

export const HarvestProject = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #FFFFFF;
    box-shadow: 2px 4px 10px rgba(24, 24, 24, 0.1);
    border-radius: 27px;
    padding: 10px 12px;
    font-size: 11px;
    cursor: default;
    @media(min-width: 768px){
        font-size: 15px;
        &:hover{
            transform: scale(1.07);
            transition: transform 0.2s ease-in-out;
        }
    }
`;

export const Icon = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 5px;
    @media(min-width: 768px){
        width: 26px;
        height: 26px;
    }
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

export const Money = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: 98px;
    height: 98px;
    background: #FFFFFF;
    box-shadow: 1.69856px 3.39713px 8.49282px rgba(24, 24, 24, 0.1);
    border-radius: 50%;
`;

export const MoneyImg = styled.div`
    width: 83px;
    height: 83px;
    background: #E5EEED;
    border-radius: 50%;
`;

export const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    width: 200px;
    height: 55px;
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%);
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    @media(min-width: 768px){
        width: 260px;
        height: 70px;
    }
`;