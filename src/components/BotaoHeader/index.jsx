import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botao } from './styles'

export default function BotaoHeader({ irPara, texto }) {

  const navigate = useNavigate()

  const path = window.location.pathname

  return (
    <>
      <Botao onClick={() => irPara(navigate)}>
        {texto}
      </Botao>
    </>
  )
}
