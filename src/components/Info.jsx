import {Column, FarmImage, HarvestOffers, InfoContainer, Button, HarvestCircle, HarvestOffer} from '../styles/infoStyles'
import Image from 'next/image'

function Info(){
    return(
        <InfoContainer>
            <Column>
                <h1>
                    EARN YIELD ON YOUR CRYPTO
                </h1>
                <p>Put your idle assets to work.</p>
                <Button>START EARNING</Button>
            </Column>
            <Column>
                <HarvestOffers>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <HarvestCircle>
                            <Image src="/harvest_icon.svg" width={50} height={50}/>
                            <span>Harvest</span>
                        </HarvestCircle>
                        <HarvestOffer style={{left: '-20px', top: '60%'}}>
                            <Image src="/uniswap.svg" width={26} height={26}/>
                            Uniswap
                        </HarvestOffer>
                        <HarvestOffer>
                            <Image src="/uniswap.svg" width={26} height={26}/>
                            Uniswap
                        </HarvestOffer>
                    </div>
                </HarvestOffers>
            </Column>
            <FarmImage>
                {/* <Image src="/field.svg" width={620} height={770} /> */}
            </FarmImage>
        </InfoContainer>
    )
}

export default Info;