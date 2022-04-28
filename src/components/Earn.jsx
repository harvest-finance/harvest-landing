import {Container, Title, InfoPart, List, ListItem, Icon, BarsContainer, BarsBg, BarsLegend, Circle, Bars, Bar, Column, Fill, Apy} from '../styles/earnStyles'
import {InfoText} from '../styles/infoStyles'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Img from './Img'

export default function Earn(){
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true
    });

    return(
        <Container>
            <BarsContainer ref={ref}>
                <BarsBg>
                    <Image src="/plant_bg.svg" width={461} height={461} alt="plant"/>
                </BarsBg>
                <BarsLegend>
                    <div className='centerFlex'><Circle/>Yield without Harvest</div>
                    <div className='centerFlex'><Circle half/>Yield with Harvest</div>
                </BarsLegend>
                <Bars>
                    <Column>
                        <Bar><Apy>APY</Apy><Fill height={inView ? 0.7 : 0}/></Bar>
                        <p className='centerFlex'>Liquidity Provision</p>
                    </Column>
                    <Column>
                        <Bar top><Apy>APY</Apy><Fill top height={inView ? 0.9 : 0} style={{transitionDelay: '0.2s'}}/></Bar>
                        <p className='centerFlex'>Lending</p>
                    </Column>
                    <Column>
                        <Bar><Apy>APY</Apy><Fill height={inView ? 0.7 : 0} style={{transitionDelay: '0.4s'}}/></Bar>
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
                            <Img src="/compounding.svg" width={30} height={30} alt="Auto-compounding"/>
                        </Icon>
                        Auto-compounding
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Img src="/auto_rewards.svg" width={30} height={30} alt="Auto-harvested rewards"/>
                        </Icon>
                        Auto-harvested rewards
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Img src="/farm_rewards.svg" width={30} height={30} alt="FARM Rewards"/>
                        </Icon>
                        FARM Rewards
                    </ListItem>
                    <ListItem>
                        <Icon className='centerFlex'>
                            <Img src="/token_rewards.svg" width={30} height={30} alt="Unique DAO token rewards"/>
                        </Icon>
                        Unique DAO token rewards
                    </ListItem>
                </List>
            </InfoPart>
        </Container>
    )
}