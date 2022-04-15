import {Column, FarmImage, HarvestProjects, InfoContainer, Button, HarvestCircle, HarvestProject, Icon, Money, MoneyImg} from '../styles/infoStyles'
import Image from 'next/image'
import projects from '../consts/projects'
import Link from 'next/link'

function Info(){
    return(
        <InfoContainer>
            <Column>
                <h1>
                    EARN YIELD ON YOUR CRYPTO
                </h1>
                <p>Put your idle assets to work.</p>
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
                <HarvestProjects>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <HarvestCircle>
                            <Image src="/harvest_icon.svg" width={50} height={50}/>
                            <span>Harvest</span>
                        </HarvestCircle>
                        {
                            projects.map(({name, imgUrl, imgDimensions, background, position}) => 
                                <HarvestProject key={name} style={position}>
                                    <Icon className='centerFlex' style={background}>
                                        <Image src={`/projects/${imgUrl}`} {...imgDimensions} />
                                    </Icon>
                                    {name}
                                </HarvestProject>
                            )
                        }
                        <Money className='centerFlex'>
                            <MoneyImg className='centerFlex'>
                                <Image src="/money.svg" width={47} height={43} />
                            </MoneyImg>
                        </Money>
                    </div>
                </HarvestProjects>
            </Column>
            <FarmImage/>
        </InfoContainer>
    )
}

export default Info;