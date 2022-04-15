import {Container, Title, InfoPart, List, ListItem, Icon, BarsContainer, BarsBg, BarsLegend, Circle, Bars, Bar, Column, Fill} from '../styles/earnStyles'
import {InfoText} from '../styles/infoStyles'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function Earn(){
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true
    });

    return(
        <Container>
            <BarsContainer ref={ref}>
                <BarsBg>
                    <Image src="/plant_bg.png" width={461} height={461}/>
                </BarsBg>
                <BarsLegend>
                    <div className='centerFlex'><Circle/>Yield without Harvest</div>
                    <div className='centerFlex'><Circle half/>Yield with Harvest</div>
                </BarsLegend>
                <Bars>
                    <Column>
                        <Bar><Fill height={inView ? 180 : 0}/></Bar>
                        <p className='centerFlex'>Liquidity Provision</p>
                    </Column>
                    <Column>
                        <Bar style={{height: '320px'}}><Fill height={inView ? 240 : 0} style={{transitionDelay: '0.2s'}}/></Bar>
                        <p className='centerFlex'>Lending</p>
                    </Column>
                    <Column>
                        <Bar><Fill height={inView ? 180 : 0} style={{transitionDelay: '0.4s'}}/></Bar>
                        <p className='centerFlex'>Staking</p>
                    </Column>
                </Bars>
            </BarsContainer>
            <InfoPart>
                <Title>
                    EARN EXTRA YIELD
                </Title>
                <InfoText>
                    Let Harvest do the hard work.
                </InfoText>
                <List>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Image src="/compounding.png" width={30} height={30} />
                        </Icon>
                        Auto-compounding
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Image src="/auto_rewards.png" width={30} height={30} />
                        </Icon>
                        Auto-harvested rewards
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Image src="/farm_rewards.png" width={30} height={30} />
                        </Icon>
                        FARM Rewards
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Image src="/token_rewards.png" width={30} height={30} />
                        </Icon>
                        Unique DAO token rewards
                    </ListItem>
                </List>
            </InfoPart>
        </Container>
    )
}

export default Earn;