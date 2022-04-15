import { useState } from 'react';
import {ToogleNavbar, TooglerButton, Toogler, Bar, ToogleItems, ToogleItem, DashboardButton} from '../../styles/navbarStyles'
import Link from 'next/link'

function ToogleNav(){
    const [open, setOpen] = useState(false);
    const toogle = () => {
        if (open) document.body.style.overflow = '';
        else document.body.style.overflow = 'hidden';
        setOpen(!open);
    }
    return(
        <ToogleNavbar>
            <TooglerButton onClick={toogle}>
                <Toogler open={open}>
                    <Bar/>
                    <Bar/>
                    <Bar/>
                </Toogler>
            </TooglerButton>
            <ToogleItems open={open}>
                <ToogleItem>
                    <Link href="/tokenomics"><a>Tokenomics</a></Link>
                </ToogleItem>
                <ToogleItem>
                    <Link href="/statistics"><a>Statistics</a></Link>
                </ToogleItem>
                <ToogleItem>
                    <Link href="/blog"><a>Blog</a></Link>
                </ToogleItem>
            </ToogleItems>
            <Link href="/">
                <a>
                    <DashboardButton>Dashboard</DashboardButton>
                </a>
            </Link>
        </ToogleNavbar>
    )
}

export default ToogleNav;