import {DefaultService, Container, CompaniesContainer, Text} from '../styles/companiesStyles'
import {LazyImg} from './MyImg'
import {companies} from '../consts/links'

export default function Audited({id, title, data, grid}){
    return(
        <Container>
            <Text>{title}</Text>
            <CompaniesContainer grid={grid}>
                {
                    data.map(({name, img, linkId, size}) =>
                        <DefaultService key={name} href={companies[id][linkId]} target="_blank">
                            <span className='forScreenReaders'>{name}</span>
                            <LazyImg src={`/${img}`} alt={name} {...size}/>
                        </DefaultService>
                    )
                }
            </CompaniesContainer>
        </Container>
    )
}