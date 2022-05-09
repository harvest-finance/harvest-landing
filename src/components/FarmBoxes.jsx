import {Container, Box, Icon, Background, Title, Text, Button} from '../styles/farmBoxesStyles'
import {LazyImg} from './MyImg'
import {exploreFarm, exploreOpportunites} from '../consts/links'

export default function FarmBoxes(){
    return(
        <Container>
            <Box>
                <Background>
                    <LazyImg src="/farm_token.svg" layout='fill' alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <LazyImg src="/tractor.svg" width={30} height={30} alt="tractor"/>
                </Icon>
                <Title>
                    FARM TOKEN
                </Title>
                <Text>
                    $FARM is the heart of Harvest. It allows you to capitalize on the growth and success of our platform.
                </Text>
                <Button href={exploreFarm}>Explore FARM</Button>
            </Box>
            <Box>
                <Background>
                    <LazyImg src="/contribute.svg" layout='fill' alt="farm background"/>
                </Background>
                <Icon className='centerFlex'>
                    <LazyImg src="/vegetables.svg" width={30} height={30} alt="vegetables in the box"/>
                </Icon>
                <Title>
                    CONTRIBUTE AND EARN
                </Title>
                <Text>
                    Harvest is platform made for and run by the community. Join us on this adventure and find your place!
                </Text>
                <Button href={exploreOpportunites}>Explore Opportunites</Button>
            </Box>
        </Container>
    )
}