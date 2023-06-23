import React from 'react'
import { Link } from 'react-router-dom'
import PrimeiraLetraMaiuscula from '../../utils/primeiraLetraMaiuscula'
import { Container, CardImagem, CardBody, NomeReceita, DetalhesReceita, NomeDonoReceita } from './styles'
import { BsTrash } from 'react-icons/bs';

export default function CardDetalhes({receita, deletarReceita}) {

   return (
    // <Link to={`/detalhes/${receita.id}`}>
      <Container>
        <CardImagem src={receita.imageUrl}/>
        <CardBody>
          <NomeReceita>{PrimeiraLetraMaiuscula(receita.title)}</NomeReceita>
          <DetalhesReceita>{PrimeiraLetraMaiuscula(receita.description)}</DetalhesReceita>
          <NomeDonoReceita>Por {PrimeiraLetraMaiuscula(receita.creatorName)}</NomeDonoReceita>
          <BsTrash size={30} cursor='pointer' onClick={deletarReceita}>Apagar receita</BsTrash>
        </CardBody>
      </Container>
    // </Link>
  )
}
