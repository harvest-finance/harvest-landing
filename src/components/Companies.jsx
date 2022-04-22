import {DefaultService, Container, CompaniesContainer, Text} from '../styles/companiesStyles'
import Image from 'next/image'

export default function Audited({title, data, grid}){
    return(
        <Container>
            <Text>{title}</Text>
            <CompaniesContainer grid={grid}>
                {
                    data.map(({img, size, link}) =>
                        <DefaultService key={img} href={link} target="_blank">
                            <Image src={`/${img}`} {...size}/>
                        </DefaultService>
                    )
                }
            </CompaniesContainer>
        </Container>
    )
}