import {Box, Container, Grid, FooterBG, BottomText} from '../styles/footerStyles'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <Container>
            <FooterBG>
                <Image src="/field_footer.svg" layout='fill' objectFit="cover" />
            </FooterBG>
            <div className='container'>
                <Grid>
                    <Box className='centerFlex' href="https://twitter.com/" target="_blank">
                        <Image src="/twitter.png" width={50} height={54}/>
                        <p>Twitter</p>
                    </Box>
                    <Box className='centerFlex' href="https://discord.com/" target="_blank">
                        <Image src="/discord.png" width={54} height={54}/>
                        <p>Discord</p>
                    </Box>
                    <Box className='centerFlex' href="https://medium.com/" target="_blank">
                        <Image src="/medium.png" width={54} height={54}/>
                        <p>Medium</p>
                    </Box>
                    <Box className='centerFlex' href="https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=en" target="_blank">
                        <Image src="/talk.png" width={54} height={50}/>
                        <p>KakaoTalk</p>
                    </Box>
                </Grid>
                <BottomText>
                    <p>All rights reserved. Harvest Finance 2022.</p>
                    <div>
                        <a>Tokenomics</a>
                        <a>Statistics</a>
                        <a>Dashboard</a>
                    </div>
                </BottomText>
            </div>
        </Container>
    )
}