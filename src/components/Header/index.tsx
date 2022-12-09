import React from "react";
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles'
import { Button } from "../Button";
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da dio'/>
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autenticado ? (<UserPicture src='https://avatars.githubusercontent.com/u/102473053?v=4' />) : (
                        <>
                        <Link to="/"><MenuRight>Home</MenuRight></Link>
                        <Link to="/login"><Button title='Entrar'/></Link>
                        <Link to="/cadastro"><Button title='Cadastrar'/></Link>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }