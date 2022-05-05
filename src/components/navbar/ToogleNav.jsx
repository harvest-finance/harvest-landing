import { useState } from 'react';
import {ToogleNavbar, TooglerButton, Toogler, Bar, ToogleItems, ToogleItem, DashboardButton} from '../../styles/navbarStyles'
import {navLinks} from '../../consts/links'

function ToogleNav(){
    const [open, setOpen] = useState(false);
    const {tokenomics, statistics, blog, dashboard} = navLinks;
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
                    <a href={tokenomics}>Tokenomics</a>
                </ToogleItem>
                <ToogleItem>
                    <a href={statistics}>Statistics</a>
                </ToogleItem>
                <ToogleItem>
                    <a href={blog}>Blog</a>
                </ToogleItem>
            </ToogleItems>
            <DashboardButton href={dashboard}>Dashboard</DashboardButton>
        </ToogleNavbar>
    )
}

export default ToogleNav;