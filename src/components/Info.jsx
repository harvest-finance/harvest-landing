import {Column, FarmImage, HarvestProjects, InfoText, InfoContainer, Button, HarvestCircle, HarvestProject, Icon, Money, MoneyImg, Vector, Arrows} from '../styles/infoStyles'
import Image from 'next/image'
import projects from '../consts/projects'
import Link from 'next/link'

export default function Info(){
    return(
        <InfoContainer>
            <Column>
                <h1>
                    EARN YIELD ON YOUR CRYPTO
                </h1>
                <InfoText>Put your idle assets to work.</InfoText>
                <Link href="/">
                    <a>
                        <Button>
                            START EARNING
                            <Image src="/arrow_right.png" width={13} height={13} />
                        </Button>
                    </a>
                </Link>
            </Column>
            <Column>
                <div className='relativeContainer centerFlex'>
                    <HarvestProjects>
                        <div className='relativeContainer'>
                            <HarvestCircle>
                                <Image src="/harvest_icon.svg" width={50} height={50}/>
                                <span>Harvest</span>
                            </HarvestCircle>
                            {
                                projects.map(({name, imgUrl, dimensions, background, position}) =>
                                    <div key={name} style={{...position[0], position: 'absolute'}}>
                                        <div className='relativeContainer'>
                                            <HarvestProject>
                                                <Icon className='centerFlex' style={background}>
                                                    <Image src={`/projects/${imgUrl}.png`} {...dimensions.img} alt={name}/>
                                                </Icon>
                                                {name}
                                            </HarvestProject>
                                            <Vector style={{...position[1]}}>
                                                <Image src={`/projects/${imgUrl}-vector.png`} {...dimensions.vector} alt={`${name}-vector`} />
                                            </Vector>
                                        </div>
                                    </div>
                                )
                            }
                            <Arrows>
                                <Image src="/down_arrow.png" width={18} height={10}/>
                                <Image src="/down_arrow.png" width={18} height={10} style={{opacity: 0.7}}/>
                                <Image src="/down_arrow.png" width={18} height={10} style={{opacity: 0.4}}/>
                            </Arrows>
                            <Money className='centerFlex'>
                                <MoneyImg className='centerFlex'>
                                    <Image src="/money.svg" width={47} height={43} />
                                </MoneyImg>
                            </Money>
                        </div>
                    </HarvestProjects>
                </div>
                <FarmImage/>
            </Column>
        </InfoContainer>
    )
}