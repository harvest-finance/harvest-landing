import {Box, Container, Grid, FooterBG, BottomText} from '../styles/footerStyles'
import Image from 'next/image'
import Img from './Img'
import {media, navLinks} from '../consts/links'

export default function Footer(){
    const {discord, kakaoTalk, medium, twitter} = media;
    const {tokenomics, statistics, dashboard} = navLinks;
    return(
        <Container>
            <FooterBG>
                <Image src="/field_footer.svg" layout='fill' objectFit="cover" alt="field" priority={true}/>
            </FooterBG>
            <div className='container'>
                <Grid>
                    <Box className='centerFlex' href={twitter} target="_blank">
                        <Img src="/twitter.svg" width={50} height={54} alt="Twitter icon"/>
                        <p>Twitter</p>
                    </Box>
                    <Box className='centerFlex' href={discord} target="_blank">
                        <Img src="/discord.svg" width={54} height={54} alt="Discord icon"/>
                        <p>Discord</p>
                    </Box>
                    <Box className='centerFlex' href={medium} target="_blank">
                        <Img src="/medium.svg" width={54} height={54} alt="Medium icon"/>
                        <p>Medium</p>
                    </Box>
                    <Box className='centerFlex' href={kakaoTalk} target="_blank">
                        <Img src="/talk.svg" width={54} height={50} alt="KakaoTalk icon"/>
                        <p>KakaoTalk</p>
                    </Box>
                </Grid>
                <BottomText>
                    <p>All rights reserved. Harvest Finance 2022.</p>
                    <div>
                        <a href={tokenomics} target="_blank" rel="noreferrer">Tokenomics</a>
                        <a href={statistics} target="_blank" rel="noreferrer">Statistics</a>
                        <a href={dashboard} target="_blank" rel="noreferrer">Dashboard</a>
                    </div>
                </BottomText>
            </div>
        </Container>
    )
}