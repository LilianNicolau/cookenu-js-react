import React, { useContext } from 'react'
import { Container } from './styles'
import { GlobalContext } from '../../globalState/globalContext'
import CardFeed from '../../components/CardFeed'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function MinhasReceitas() {

  useProtectedPage()

  const context = useContext(GlobalContext)
  const {minhasReceitas, setMinhasReceitas, adicionarFavorita} = context

  const mostrarMinhasReceitas = minhasReceitas.map((receita) => {
    return  <CardFeed 
      adicionarFavorita={adicionarFavorita}
      key={receita.id}
      receita={receita}
    />
  })
  return (
    <Container adicionarFavorita={adicionarFavorita}>
       {mostrarMinhasReceitas}
    </Container>
  )
}
