import {DefaultService, Container, CompaniesContainer, Text} from '../styles/companiesStyles'
import Img from './Img'
import {companies} from '../consts/links'

export default function Audited({id, title, data, grid}){
    return(
        <Container>
            <Text>{title}</Text>
            <CompaniesContainer grid={grid}>
                {
                    data.map(({name, img, size, linkId}) =>
                        <DefaultService key={name} href={companies[id][linkId]} target="_blank">
                            <span className='forScreenReaders'>{name}</span>
                            <Img src={`/${img}`} {...size} alt={name}/>
                        </DefaultService>
                    )
                }
            </CompaniesContainer>
        </Container>
    )
}