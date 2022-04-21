import {Container, TextColumn, PlatformsColumn, Box, Title, Icon, EarningButton} from '../styles/ecosystemStyles'
import {InfoText} from '../styles/infoStyles'
import Link from 'next/link'
import Image from 'next/image'
import trustedPlatforms from '../consts/trusted_platforms'

export default function Ecosystem(){
    return(
        <Container>
            <TextColumn>
                <Title> HARVEST ECOSYSTEM </Title>
                <InfoText> 30+ Trusted Platforms </InfoText>
                <EarningButton href="/">
                    START EARNING
                    <Image src="/arrow_right.svg" width={13} height={13} />
                </EarningButton>
            </TextColumn>
            <PlatformsColumn>
                {
                    trustedPlatforms.map(({name, imgUrl, attr}, i) =>
                        <Box {...attr} key={`${name}.${i}`}>
                            <Icon>
                                <Image src={`/trusted_projects/${imgUrl}`} width={74} height={74} alt={name}/>
                            </Icon>
                            <p>{name}</p>
                        </Box>
                    )
                }
            </PlatformsColumn>
        </Container>
    )
}