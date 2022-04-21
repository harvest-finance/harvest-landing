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
                        <Image src="/video_bg.svg" layout="fill" objectFit="cover" objectPosition="center"/>
                    </PosterImage>
                    <PlayButton onClick={playVideo} play={play}>
                        <Effect className='relativeContainer'>
                            <Image src="/play.png" width={78} height={78} />
                        </Effect>
                    </PlayButton>
                    <iframe
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