
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'

import { Container, Title, TitleHighLight, Column} from './styles'

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={35} nome='Breno Carneiro' image='https://avatars.githubusercontent.com/u/102473053?v=4' />
            <UserInfo percentual={55} nome='Breno Carneiro' image='https://avatars.githubusercontent.com/u/102473053?v=4' />
            <UserInfo percentual={87} nome='Breno Carneiro' image='https://avatars.githubusercontent.com/u/102473053?v=4' />
            <UserInfo percentual={99} nome='Breno Carneiro' image='https://avatars.githubusercontent.com/u/102473053?v=4' />

        </Column>
    </Container>
    </>)
}
export { Feed }