import React from 'react'
import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo } from './styles'
import { FiThumbsUp } from 'react-icons/fi'
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://img.freepik.com/fotos-gratis/textura-de-parede-de-estuque-azul-marinho-de-relevo-decorativo-grunge-abstrato-fundo-colorido-aspero-de-angulo-amplo_1258-28311.jpg?w=2000'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/102473053?v=4' />
                <div>
                    <h4>Breno Carneiro</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p><FiThumbsUp /> 10</p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }