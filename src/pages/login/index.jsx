import React, { useState } from 'react'
import CampoTextoFormularios from '../../components/CampoTextoForm'
import {Container, Formulario, Botao, LinkCadastro} from './styles'
import { LoginUsuario } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../router/coordinator'
import useForm from '../../hooks/useForm'

export default function PaginaLogin() {

 const [form, aoAlterado, limpar] =  useForm({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  function handleValidarLogin() {
      return form.email.length > 0 && form.password.length > 0
  }   

  function handleSubmit(event) {
      event.preventDefault()
      handleValidarLogin()
      LoginUsuario(form, navigate)
      limpar()
  }
 
  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
        <CampoTextoFormularios
          obrigatorio={true}
          type='email'
          label={'E-mail'}
          placeholder="Digite seu email"
          valor={form.email}
          name={'email'}
          aoAlterado={aoAlterado}
        />
          <CampoTextoFormularios
            obrigatorio={true}
            type={'password'}
            label={'Senha'}
            placeholder="Digite sua senha"
            valor={form.password}
            name={'password'}
            aoAlterado={aoAlterado}
          />
        <Botao type="submit">Entrar</Botao>
        <LinkCadastro onClick={()=>irParaCadastro(navigate)}>Quero me cadastrar</LinkCadastro>
      </Formulario>
    </Container>
  )
}
