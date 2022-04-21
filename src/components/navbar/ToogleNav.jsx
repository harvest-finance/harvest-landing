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
                    <a href="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics">Tokenomics</a>
                </ToogleItem>
                <ToogleItem>
                    <a href="https://dune.com/llama/Harvest-Finance">Statistics</a>
                </ToogleItem>
                <ToogleItem>
                    <a href="https://medium.com/harvest-finance">Blog</a>
                </ToogleItem>
            </ToogleItems>
            <DashboardButton href="https://app.harvest.finance/">Dashboard</DashboardButton>
        </ToogleNavbar>
    )
}

export default ToogleNav;