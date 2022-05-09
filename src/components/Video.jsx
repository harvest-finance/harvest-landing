import { useState } from 'react';
import {Container, Frame, PosterImage, PlayButton, IframeContainer, Effect} from '../styles/videoStyles'
import MyImg from './MyImg'

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
                        <MyImg src="/video_bg.png" layout="fill" alt="video background"/>
                    </PosterImage>
                    <PlayButton onClick={playVideo} play={play}>
                        <span className='forScreenReaders'>Play Video</span>
                        <Effect className=''>
                            <MyImg src="/play.png" alt="play button"/>
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