import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Botao } from './styles'

export default function BotaoCard({ adicionarFavorita, receita, excluirFavorita }) {

  const navigate = useNavigate()

  const path = window.location.pathname

  return (
    <>
      <Botao onClick={path === '/' ? ()=>adicionarFavorita(receita) : ()=>excluirFavorita(receita)}>
        {path === '/' ? 'Adicionar receita' : 'Exluir receita'}
      </Botao>
    </>
  )
}
