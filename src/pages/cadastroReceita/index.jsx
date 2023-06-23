import React, { useState } from 'react'
import CampoTextoFormularios from '../../components/CampoTextoForm'
import {Container, Formulario, Titulo, Botao} from './styles'
import { CadastroReceita } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function PaginaCadastroReceita() {

  useProtectedPage()

  const [form, aoAlterado, limpar] =  useForm({
    title: '',
    description: '',
    imageUrl: ''
  })

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const aoSubmeter = (evento) => {
    evento.preventDefault()
    CadastroReceita(form, token, navigate)
    limpar()
  }

  return (
    <Container>
      <Formulario onSubmit={aoSubmeter}>
        <Titulo>Preencha o formulário para cadastrar uma receita</Titulo>
        <CampoTextoFormularios
            obrigatorio={true}
            label='Nome do prato'
            placeholder='Digite o nome do prato/receita '
            valor={form.title}
            name={'title'}
            aoAlterado={aoAlterado}
        />
        <CampoTextoFormularios
            obrigatorio={true}
            label='Intruções'
            placeholder='Digite as instruções da receita '
            valor={form.description}
            name={'description'}
            aoAlterado={aoAlterado}
        />
        <CampoTextoFormularios
            obrigatorio={false}
            label='Foto do prato'
            placeholder='Coloque aqui uma foto do prato'
            valor={form.imageUrl}
            name={'imageUrl'}
            aoAlterado={aoAlterado}
        />
        <Botao type='submit'>Cadastrar receita</Botao>
      </Formulario>

    </Container>
  )
}
