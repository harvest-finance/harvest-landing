import {Column, FarmImage, HarvestProjects, InfoText, InfoContainer, Button, HarvestCircle, HarvestProject, Icon, Money, MoneyImg, Vector, Arrows} from '../styles/infoStyles'
import Image from 'next/image'
import projects from '../consts/projects'

export default function Info(){
    return(
        <InfoContainer>
            <Column>
                <h1>
                    EARN YIELD ON YOUR CRYPTO
                </h1>
                <InfoText>Put your idle assets to work.</InfoText>
                <Button href="https://app.harvest.finance/">
                    START EARNING
                    <Image src="/arrow_right.png" width={13} height={13} alt="Arrow right" priority={true}/>
                </Button>
            </Column>
            <Column>
                <div className='relativeContainer centerFlex'>
                    <HarvestProjects>
                        <div className='relativeContainer'>
                            <HarvestCircle>
                                <Image src="/harvest_icon.png" width={50} height={50} alt="harvest growth" priority={true} quality={60}/>
                                <span>Harvest</span>
                            </HarvestCircle>
                            {
                                projects.map(({name, imgUrl, dimensions, background, position}) =>
                                    <div key={name} style={{...position[0], position: 'absolute'}}>
                                        <div className='relativeContainer'>
                                            <HarvestProject>
                                                <Icon className='centerFlex' style={background}>
                                                    <Image src={`/projects/${imgUrl}.svg`} {...dimensions.img} alt={name} priority={true}/>
                                                </Icon>
                                                {name}
                                            </HarvestProject>
                                            <Vector style={{...position[1]}}>
                                                <Image src={`/projects/${imgUrl}-vector.svg`} {...dimensions.vector} alt="vector"/>
                                            </Vector>
                                        </div>
                                    </div>
                                )
                            }
                            <Arrows>
                                <Image src="/down_arrow.svg" width={18} height={10} alt="arrow down" priority={true}/>
                                <Image src="/down_arrow.svg" width={18} height={10} style={{opacity: 0.7}} alt="arrow down" priority={true}/>
                                <Image src="/down_arrow.svg" width={18} height={10} style={{opacity: 0.4}} alt="arrow down" priority={true}/>
                            </Arrows>
                            <Money className='centerFlex'>
                                <MoneyImg className='centerFlex'>
                                    <Image src="/money.png" width={47} height={43} alt="money" priority={true} quality={60}/>
                                </MoneyImg>
                            </Money>
                        </div>
                    </HarvestProjects>
                </div>
                <FarmImage>
                    <Image src="/field.jpeg" layout='fill' objectFit="cover" alt="field" priority={true} quality={100}/>
                </FarmImage>
            </Column>
        </InfoContainer>
    )
}