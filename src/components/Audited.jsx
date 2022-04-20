import {DefaultService, Container, Grid, Text} from '../styles/auditedStyles'
import Image from 'next/image'

export default function Audited(){
    return(
        <Container>
            <Text>AUDITED BY</Text>
            <Grid>
                <DefaultService>
                    <Image src="/least.svg" width={242} height={49}/>
                </DefaultService>
                <DefaultService>
                    <Image src="/haechi.svg" width={192} height={40}/>
                </DefaultService>
                <DefaultService>
                    <Image src="/peck.svg" width={199} height={56}/>
                </DefaultService>
                <DefaultService>
                    <Image src="/certik.svg" width={206} height={53}/>
                </DefaultService>
            </Grid>
        </Container>
    )
}