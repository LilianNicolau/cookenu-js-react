import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaCadastroReceita from '../pages/cadastroReceita'
import PaginaCadastroUsuario from '../pages/cadastroUsuario'
import PaginaLogin from '../pages/login'
import Header from '../components/Header'
import DetalhesReceita from '../pages/detalhes'
import Feed from '../pages/feed'
import MinhasReceitas from '../pages/minhasReceitas'


export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Feed/>}/>
        <Route path='/minhas-receitas' element={<MinhasReceitas/>}/>
        <Route path='/detalhes/:id' element={<DetalhesReceita/>}/>
        <Route path='/cadastrar-usuario' element={<PaginaCadastroUsuario/>}/>
        <Route path='/cadastrar-receita' element={<PaginaCadastroReceita/>}/>
        <Route path='/login' element={<PaginaLogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}
