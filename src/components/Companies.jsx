import {DefaultService, Container, CompaniesContainer, Text} from '../styles/companiesStyles'
import Img from './Img'

export default function Audited({title, data, grid}){
    return(
        <Container>
            <Text>{title}</Text>
            <CompaniesContainer grid={grid}>
                {
                    data.map(({name, img, size, link}) =>
                        <DefaultService key={name} href={link} target="_blank">
                            <span className='forScreenReaders'>{name}</span>
                            <Img src={`/${img}`} {...size} alt={name}/>
                        </DefaultService>
                    )
                }
            </CompaniesContainer>
        </Container>
    )
}