import React, { useContext } from 'react'
import { Container, CardImagem, CardBody, NomeReceita } from './styles'
import PrimeiraLetraMaiuscula from '../../utils/primeiraLetraMaiuscula'
import { irParaDetalhes } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
import BotaoCard from '../BotaoCard'
import { GlobalContext } from '../../globalState/globalContext'

export default function CardFeed({receita}) {

  const context = useContext(GlobalContext)
  const {adicionarFavorita, excluirFavorita} = context

  const navigate = useNavigate()
    
  return (
    <Container>
        <CardImagem src={receita.imageUrl} onClick={() => irParaDetalhes(navigate, receita.id)}/>
        <CardBody >
            <NomeReceita onClick={() => irParaDetalhes(navigate, receita.id)}>
              {PrimeiraLetraMaiuscula(receita.title)}
            </NomeReceita>
            <BotaoCard receita={receita} adicionarFavorita={adicionarFavorita} excluirFavorita={excluirFavorita}/>
        </CardBody>
    </Container>
  )
}
