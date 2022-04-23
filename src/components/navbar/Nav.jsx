import ToogleNav from './ToogleNav'
import {NavContainer, Logo, Icon, LogoText} from '../../styles/navbarStyles'
import Image from 'next/image'
import Link from 'next/link';

function Nav(){
    return(
        <NavContainer>
            <Link href="/">
                <a>
                <span className='forScreenReaders'>Homepage</span>
                    <Logo>
                        <Icon className='centerFlex'>
                            <Image src="/Farm_logo.svg" width={32} height={28} alt="Harvest logo"/>
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