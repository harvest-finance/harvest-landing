import { useState } from "react"
import { useInView } from 'react-intersection-observer'
import styles from '../styles/imageStyles.module.css'
import styled from 'styled-components'

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export default function MyImg(props){
    const {src, layout, width, height, lazy} = props;
    const [loaded, setLoaded] = useState(lazy ? false : true);
    const source = isProduction ? `.${src}` : src;
    const loadingFinished = () => {
        setLoaded(true);
    }
    return(
        <img
            src={source}
            className={layout === 'fill' ? styles.fill : ''}
            style={!lazy ? {width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%'} : {opacity: loaded ? 1 : 0, transition: 'opacity 0.2s ease-in-out'}}
            onLoad={lazy ? loadingFinished : null}/>
    )
}


const LazyImage = styled.div`
    position: relative;
    overflow: hidden;
    ${({fill}) => {
        if(fill) return`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        `;
    }}
    & img{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;
    }
`;

export function LazyImg({...props}){
    const {width, height, layout} = props;
    const fill = layout === 'fill';
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    return(
        <LazyImage
            ref={ref}
            fill={fill ? 'true' : ''}
            style={{
                width: '100%',
                maxWidth: `${width}px`
            }}
        >
            <div style={!fill ? {paddingBottom: `${(height / width) * 100}%`} : {}}>
                {
                    inView && <MyImg {...props} lazy/>
                }
            </div>
        </LazyImage>
    )
}