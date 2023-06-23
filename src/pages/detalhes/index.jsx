import React, { useContext, useEffect, useState } from 'react'
import CardDetalhes from '../../components/CardDetalhes'
import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../globalState/globalContext'
import axios from 'axios'
import { DeletarReceita } from '../../service/api'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function DetalhesReceita() {

  useProtectedPage()

  const [detalheReceita, setDetalheReceita] = useState({})
  const context = useContext(GlobalContext)
  const {setFavorito, minhasReceitas, setMostrarBotao, data} = context

  const navigate = useNavigate()
    
  const {id} = useParams()
  // console.log(id);
  
  const token = localStorage.getItem('token')

  const getReceitaPorId = async () => {
   
    try {
      const receita = await axios.get(`https://api-cookenu.onrender.com/recipe/${id}`, {
        headers: {
          Authorization: token
        }
      })
      setDetalheReceita(receita.data)
      console.log(receita.data, 'receita.data');
    } catch (error) {
      console.log(error, 'erro')
    }

  }
  
  useEffect(()=> {
    getReceitaPorId()
  },[])
   
  const receitaFavorita = minhasReceitas.find((item) => {
    return item.id === id
  })
  
  const receita = data.find((item) => {
    return item.id === id
  })
  console.log(data,'receita ');

  if(receitaFavorita) {
    setFavorito(receitaFavorita) 
    setMostrarBotao(true)
  } else {
    setFavorito(receita)
    setMostrarBotao(false)
  }
 

  return (
    <Container > 
      {!!detalheReceita.id && 
        <CardDetalhes
          receita={detalheReceita}
          key={detalheReceita.id}
          deletarReceita={()=>DeletarReceita(detalheReceita.id, token, navigate)}
        />
      }
    </Container>
  )
}
