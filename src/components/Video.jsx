import { useRef, useState } from 'react';
import {Container, Frame, PosterImage, PlayButton, IframeContainer} from '../styles/Video'
import Image from 'next/image'

function Video(){
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
                        <Image src="/video_bg.png" layout="fill" objectFit="cover" objectPosition="center"/>
                    </PosterImage>
                    <PlayButton onClick={playVideo} play={play}>
                        <Image src="/play.png" width={78} height={78} />
                    </PlayButton>
                    <iframe
                        width="100%"
                        height="100%"
                        src={play ? `https://www.youtube.com/embed/9kxPiPj9sFc?autoplay=1` : undefined}
                        allow='autoplay; encrypted-media'
                    />
                </IframeContainer>

            </Frame>
        </Container>
    )
}

export default Video;