import styled from 'styled-components'
import Image from 'next/image'
import {DefaultService} from '../styles/auditedStyles'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 200px 0 50px 0;
    padding-bottom: 23px;
    border-bottom: 1px solid #E9E9E9;
    @media(min-width: 768px){
        padding-bottom: 10px;
    }
`;

const Service = styled.div`
    border-radius: 18px;
    width: 72px;
    height: 72px;
    background: #F6F6F6;
    filter: none;
    cursor: default;
    & p{
        display: none;
    }
    @media(min-width: 768px){
        width: auto;
        height: auto;
        background: transparent;
        filter: invert(92%) sepia(6%) saturate(126%) hue-rotate(142deg) brightness(89%) contrast(85%);
        max-width: unset;
        &:hover{
            filter: grayscale(1);
        }
        & p{
            display: block;
            margin-left: 10px;
            font-weight: bold;
            font-size: 1.5rem;
        }
        &:nth-of-type(3){
            & span{
                display: none!important;
            }
        }
    }
`;

export default function Services(){
    return(
        <Container>
            <Service className='centerFlex'>
                <Image src="/bancor.svg" width={25} height={39}/>
                <p>Bancor</p>
            </Service>
            <Service className='centerFlex'>
                <Image src="/binance.svg" width={25} height={39}/>
                <p>Binance</p>
            </Service>
            <Service className='centerFlex'>
                <Image src="/coinbase.svg" width={25} height={39}/>
                <p>Coinbase</p>
            </Service>
            <Service className='centerFlex'>
                <Image src="/crypto_com.svg" width={25} height={39}/>
                <p>crypto.com</p>
            </Service>
        </Container>
    )
}