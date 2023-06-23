import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../globalState/globalContext'
import { irParaCadastrarReceita, irParaFeed, irParaMinhasReceitas } from '../../router/coordinator'
import BotaoHeader from '../BotaoHeader'
import Imagem from '../Imagem'
import { HeaderContainer, Titulo, Nav, BotaoDetalhes } from './styles'
import BotaoAdicionarReceita from '../BotaoAdicionarReceita'

export default function Header() {

  const context = useContext(GlobalContext)
  const { adicionarFavorita, excluirFavorita, favorito, mostrarBotao } = context

  const navigate = useNavigate()

  const path = window.location.pathname

  const token = localStorage.getItem('token')
  const logout = () => {
    localStorage.clear()
  }

  return (
    <>
        <HeaderContainer>
            <Titulo onClick={() => irParaFeed(navigate)}>Cookenu</Titulo>
            <Nav>
              {path === '/' && <Imagem />}
              {path === '/minhas-receitas' && <Imagem />}
              {path === '/cadastrar-receita' && <Imagem />}
              {path.includes('/detalhes') && <Imagem />}
              {path === '/' && <BotaoHeader irPara={irParaMinhasReceitas} texto={'Minhas receitas'}/>}
              {path === '/minhas-receitas' && <BotaoHeader irPara={irParaFeed} texto={'Feed'}/> }
              {path.includes('/detalhes') && (mostrarBotao ? 
                <BotaoDetalhes onClick={()=>excluirFavorita(favorito)}>Excluir</BotaoDetalhes> :
                <BotaoDetalhes onClick={()=>adicionarFavorita(favorito)}>Adicionar</BotaoDetalhes>)
              } 
              {path === '/' && <BotaoAdicionarReceita irPara={irParaCadastrarReceita} texto={'Cadastrar receita'}/>}
              {path === '/cadastrar-receita' && <BotaoAdicionarReceita irPara={irParaFeed} texto={'Feed'}/>}
              {token && <button onClick={logout}>Logout</button>}
            </Nav>
            
        </HeaderContainer>
    </>
  )
}
