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
                    <Box className='centerFlex' href="https://twitter.com/harvest_finance" target="_blank">
                        <Image src="/twitter.svg" width={50} height={54}/>
                        <p>Twitter</p>
                    </Box>
                    <Box className='centerFlex' href="https://discord.gg/xHXe3tYjPY" target="_blank">
                        <Image src="/discord.svg" width={54} height={54}/>
                        <p>Discord</p>
                    </Box>
                    <Box className='centerFlex' href="https://medium.com/harvest-finance" target="_blank">
                        <Image src="/medium.svg" width={54} height={54}/>
                        <p>Medium</p>
                    </Box>
                    <Box className='centerFlex' href="https://open.kakao.com/o/g9z8qgDd" target="_blank">
                        <Image src="/talk.svg" width={54} height={50}/>
                        <p>KakaoTalk</p>
                    </Box>
                </Grid>
                <BottomText>
                    <p>All rights reserved. Harvest Finance 2022.</p>
                    <div>
                        <a href='https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics' target="_blank" rel="noreferrer">Tokenomics</a>
                        <a href='https://dune.com/llama/Harvest-Finance' target="_blank" rel="noreferrer">Statistics</a>
                        <a href='https://app.harvest.finance/' target="_blank" rel="noreferrer">Dashboard</a>
                    </div>
                </BottomText>
            </div>
        </Container>
    )
}