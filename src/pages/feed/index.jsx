import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CardFeed from '../../components/CardFeed'
import { Container } from './styles'
import { GlobalContext } from '../../globalState/globalContext'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function Feed() {

  useProtectedPage()

  const context = useContext(GlobalContext)
  const {adicionarFavorita, minhasReceitas, getReceitas, data, setData} = context

  useEffect(()=> {
    getReceitas()
  },[])
  //[] array vazio - executa quando a página carregar

  return (
    <Container>
      {data.map((item)=> {
        return (
          <CardFeed
            receita={item}
            key={item.id}
            adicionarFavorita={adicionarFavorita}
          />
        )
      })}
    </Container>
  )
}
