import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, FazerLogin, SmallText } from './styles'
import { api } from '../../services/api'
import { IFormData } from './types'

const schema = yup.object({email: yup.string().email('Email inválido').required('Campo obrigatório'),
               password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório')}).required();

const Cadastro = () => {
    const navigate = useNavigate ()

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    }

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='fullname' placeholder='Nome completo' control={control} leftIcon={<MdPerson color='#8647AD'/>}/>
                    <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail color='#8647AD'/>}/>
                    <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock color='#8647AD'/>}/>
                    <Button title='Criar minha conta' variant ='secondary' type='submit'/>
                </form>
                <Row>
                    <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                </Row>
                <Row>
                <SmallText>Já tenho conta. <FazerLogin>Fazer Login</FazerLogin></SmallText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </>
    )
}
export { Cadastro }