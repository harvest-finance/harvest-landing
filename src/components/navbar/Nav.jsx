import ToogleNav from './ToogleNav'
import {NavContainer, Logo, Icon, LogoText} from '../../styles/navbarStyles'
import Link from 'next/link';
import MyImg from '../MyImg'

function Nav(){
    return(
        <NavContainer>
            <Link href="/">
                <a>
                <span className='forScreenReaders'>Homepage</span>
                    <Logo>
                        <Icon className='centerFlex'>
                            <MyImg src="/Farm_logo.svg" width={32} height={28} alt="Harvest logo" preload/>
                        </Icon>
                        <LogoText>Harvest</LogoText>
                    </Logo>
                </a>
            </Link>
            <ToogleNav/>
        </NavContainer>
    )
}

export default Nav;