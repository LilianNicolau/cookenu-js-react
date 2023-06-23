import React, { useState } from 'react'
import CampoTextoFormularios from '../../components/CampoTextoForm'
import {Container, Formulario, Titulo, Botao, ContainerSenha, IconeOlho, LinkLogin} from './styles'
import {BsEyeSlash, BsEye} from 'react-icons/bs'
import { CadastroDeUsuario } from '../../service/api'
import { irParaFeed, irParaLogin } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'

export default function PaginaCadastroUsuario() {

  const navigate = useNavigate()
  const [form, aoAlterado, limpar] =  useForm({
    name: '',
    email: '',
    password: ''
  })

  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false
  })

  const aoSubmeter = (evento) => {
    evento.preventDefault()
   
    const nameIsValid = form.name.length >= 4 && form.name.includes(' ')
    const emailIsValid = form.email.includes('@')
    const passwordIsValid = form.password.length >= 8 //&& form.password.includes('/^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/')
    if(!nameIsValid) {
      setIsError({
      ...isError, name: true
      }) 
      return false
    } else if(!emailIsValid) {
      setIsError({
        ...isError, email: true,
      })
      return false
    } else if(!passwordIsValid) {
      setIsError({
        ...isError, password: true,
      })
      return false
    }
    CadastroDeUsuario(form, navigate)
    limpar()
  } 

  return (
    <Container>
      <Formulario onSubmit={aoSubmeter}>
      <Titulo>Preencha o formulário para se cadastrar na nossa plataforma de receitas</Titulo>
      <CampoTextoFormularios
          obrigatorio={true}
          type={'text'}
          label='Nome'
          placeholder='Digite seu nome e sobrenome'
          valor={form.name}
          name={'name'}
          aoAlterado={aoAlterado}
          isError={isError.name}
      />
      <CampoTextoFormularios
          obrigatorio={true}
          type={'email'}
          label='E-mail'
          placeholder='Digite seu email '
          valor={form.email}
          name={'email'}
          aoAlterado={aoAlterado}
          isError={isError.email}
      />
 
      <CampoTextoFormularios
          obrigatorio={true}
          type={'password'}
          label='Senha'
          placeholder='Digite sua senha forte'
          valor={form.password}
          name={'password'}
          aoAlterado={aoAlterado}
          isError={isError.password}
      />
      <Botao type='submit'>Cadastrar</Botao>
      <LinkLogin onClick={()=>irParaLogin(navigate)}>Ir para o login</LinkLogin>
      </Formulario>
    </Container>
  )
}
