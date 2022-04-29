import ToogleNav from './ToogleNav'
import {NavContainer, Logo, Icon, LogoText} from '../../styles/navbarStyles'
import Link from 'next/link';

function Nav(){
    return(
        <NavContainer>
            <Link href="/">
                <a>
                <span className='forScreenReaders'>Homepage</span>
                    <Logo>
                        <Icon className='centerFlex'>
                            <img src="/Farm_logo.svg" style={{width: '32px', height: '28px'}} alt="Harvest logo"/>
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