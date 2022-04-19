import {Container, Box, Icon, Background, Title, Text, Button} from '../styles/farmBoxesStyles'
import Image from 'next/image'
import Link from 'next/link'

export default function FarmBoxes(){
    return(
        <Container>
            <Box>
                <Background>
                    <Image src="/farm_token.jpg" layout='fill' objectFit="cover" objectPosition="center bottom"/>
                </Background>
                <Icon className='centerFlex'>
                    <Image src="/tractor.svg" width={30} height={30} />
                </Icon>
                <Title>
                    FARM TOKEN
                </Title>
                <Text>
                    $FARM is the heart of Harvest. It allows you to capitalize on the growth and success of our platform.
                </Text>
                <Link href="/">
                    <a><Button>Explore FARM</Button></a>
                </Link>
            </Box>
            <Box>
                <Background>
                    <Image src="/contribute.svg" layout='fill' objectFit="cover" objectPosition="center bottom"/>
                </Background>
                <Icon className='centerFlex'>
                    <Image src="/vegetables.png" width={30} height={30} />
                </Icon>
                <Title>
                    CONTRIBUTE AND EARN
                </Title>
                <Text>
                    Harvest is platform made for and run by the community. Join us on this adventure and find your place!
                </Text>
                <Link href="/">
                    <a><Button>Explore Opportunites</Button></a>
                </Link>
            </Box>
        </Container>
    )
}