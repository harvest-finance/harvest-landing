import { useRef, useState } from 'react';
import {Container, Frame, PosterImage, PlayButton, IframeContainer, Effect} from '../styles/videoStyles'
import Image from 'next/image'

export default function Video(){
    const [play, setPlay] = useState(false);
    const playVideo = () => {
        if(!play){
            setPlay(true);
        }
    }
    return(
        <Container>
            <Frame>
                <IframeContainer>
                    <PosterImage play={play}>
                        <Image src="/video_bg.png" layout="fill" objectFit="cover" objectPosition="center" alt="video background" priority={true}quality={60}/>
                    </PosterImage>
                    <PlayButton onClick={playVideo} play={play}>
                        <span className='forScreenReaders'>Play Video</span>
                        <Effect className='relativeContainer'>
                            <Image src="/play.png" width={78} height={78} alt="play button"/>
                        </Effect>
                    </PlayButton>
                    <iframe
                        title="Harvest 3: The New Beginning"
                        width="100%"
                        height="100%"
                        src={play ? `https://www.youtube.com/embed/dkC2_qNNHys?autoplay=1` : undefined}
                        allow='autoplay; encrypted-media'
                    />
                </IframeContainer>

            </Frame>
        </Container>
    )
}