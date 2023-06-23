import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastrarReceita } from '../../router/coordinator'
import { Botao } from './styles'

export default function BotaoAdicionarReceita({ irPara, texto }) {

    const navigate = useNavigate()

    const path = window.location.pathname

  return (
    <Botao onClick={() => irPara(navigate)}>
     {texto}
    </Botao>
  )
}
