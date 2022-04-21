import styled from 'styled-components';

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 23px 0 0 0;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoText = styled.span`
    position: relative;
    display: none;
    margin-left: 11px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28.15px;
    @media(min-width: 768px){
        display: block;
    }
`;

export const Icon = styled.div`
    width: 52px;
    height: 52px;
    background: #F6F6F6;
    border-radius: 18px;
    cursor: pointer;
`;

export const ToogleNavbar = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    z-index: 10;
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const TooglerButton = styled.div`
    width: 40px;
    height: 40px;
    padding: 12px;
    margin-left: 10px;
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    @media(min-width: 768px){
        display: none;
    }
`;

export const Toogler = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    ${({open}) => {
        if(open) return`
            & span:nth-of-type(1){
                top: 50%;
                transform: rotate(45deg);
            }
            & span:nth-of-type(2){
                opacity: 0;
                transition: none;
            }
            & span:nth-of-type(3){
                top: 50%;
                transform: rotate(-45deg);
            }
        `;
        else return`
            & span:nth-of-type(1){
                top: 0;
            }
            & span:nth-of-type(2){
                top: 50%;
            }
            & span:nth-of-type(3){
                top: 100%;
            }
        `;
    }}
`;

export const Bar = styled.span`
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.2s ease-in-out;
`;


export const ToogleItems = styled.ul`
    display: ${({open}) => open ? ' block' : 'none'};
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: -100px;
    padding: 50px 20px;
    list-style: none;
    background-color: white;
    z-index: 1000;
    @media(min-width: 768px){
        position: relative;
        display: flex;
        align-items: center;
        margin: 0  0 0 56px;
        top: unset;
        bottom: unset;
        padding: 0;
        background-color: transparent;
        &::before{
            content: '';
            position: absolute;
            left: -24px;
            height: 32px;
            border-left: 2px solid #C4C9CA;
        }
    }
`;

export const ToogleItem = styled.li`
    display: table;
    cursor: pointer;
    padding: 3px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 180%;
    user-select: none;
    @media(min-width: 768px){
        margin-right: 31px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }
`;

export const DashboardButton = styled.a`
    background: radial-gradient(81.9% 81.9% at 50% 18.1%, #2D2D2D 0%, #000000 100%);
    border-radius: 10px;
    color: white;
    padding: 10px 25px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    &:hover{
        background: radial-gradient(81.9% 81.9% at 50% 18.1%, #2D2D2D 0%, #000000 100%);
        box-shadow: 0px 14px 24px rgba(2, 2, 2, 0.2);
        transition: all 0.2s ease-in-out;
    }
    &:active{
        background: #000000;
        transition: none;
    }
    @media(min-width: 768px){
        padding: 13px 40px;
    }
`;