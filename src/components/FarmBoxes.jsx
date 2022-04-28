import {Container, Box, Icon, Background, Title, Text, Button} from '../styles/farmBoxesStyles'
import Image from 'next/image'
import Link from 'next/link'
import Img from './Img'

export default function FarmBoxes(){
    return(
        <Container>
            <Box>
                <Background>
                    <Img src="/farm_token.svg" layout='fill' objectFit="cover" objectPosition="center bottom" alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <Img src="/tractor.svg" width={30} height={30} alt="tractor"/>
                </Icon>
                <Title>
                    FARM TOKEN
                </Title>
                <Text>
                    $FARM is the heart of Harvest. It allows you to capitalize on the growth and success of our platform.
                </Text>
                <Button href="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics">Explore FARM</Button>
            </Box>
            <Box>
                <Background>
                    <Img src="/contribute.svg" layout='fill' objectFit="cover" objectPosition="center bottom" alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <Img src="/vegetables.svg" width={30} height={30} alt="vegetables in the box"/>
                </Icon>
                <Title>
                    CONTRIBUTE AND EARN
                </Title>
                <Text>
                    Harvest is platform made for and run by the community. Join us on this adventure and find your place!
                </Text>
                <Button href="https://harvest.finance/work">Explore Opportunites</Button>
            </Box>
        </Container>
    )
}