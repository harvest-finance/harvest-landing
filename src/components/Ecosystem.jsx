import {Container, TextColumn, PlatformsColumn, Box, Title, Icon, EarningButton} from '../styles/ecosystemStyles'
import {InfoText} from '../styles/infoStyles'
import MyImg, {LazyImg} from './MyImg'
import trustedPlatforms from '../consts/trusted_platforms'
import {startEarning} from '../consts/links'

export default function Ecosystem(){
    return(
        <Container>
            <TextColumn>
                <Title> HARVEST ECOSYSTEM </Title>
                <InfoText> 30+ Trusted Platforms </InfoText>
                <EarningButton href={startEarning}>
                    START EARNING
                    <MyImg src="/arrow_right.svg" width={13} height={13} alt="arrow right"/>
                </EarningButton>
            </TextColumn>
            <PlatformsColumn>
                {
                    trustedPlatforms.map(({name, imgUrl, attr}, i) =>
                        <Box {...attr} key={`${name}.${i}`}>
                            <Icon>
                                <LazyImg src={`/trusted_projects/${imgUrl}`} width={74} height={74} alt={name}/>
                            </Icon>
                            <p>{name}</p>
                        </Box>
                    )
                }
            </PlatformsColumn>
        </Container>
    )
}