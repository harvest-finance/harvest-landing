import {DefaultService, Container, CompaniesContainer, Text} from '../styles/companiesStyles'
import Image from 'next/image'

export default function Audited({title, data, grid}){
    return(
        <Container>
            <Text>{title}</Text>
            <CompaniesContainer grid={grid}>
                {
                    data.map(({name, img, size, link}) =>
                        <DefaultService key={name} href={link} target="_blank">
                            <span className='forScreenReaders'>{name}</span>
                            <Image src={`/${img}`} {...size} alt={name}/>
                        </DefaultService>
                    )
                }
            </CompaniesContainer>
        </Container>
    )
}