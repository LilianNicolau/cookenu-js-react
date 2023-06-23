import React from 'react'
import { ImagemUsuario } from './styles'
import imagem from '../../assets/foto-lilian-3.png'

export default function Imagem() {
  return (
    <>
      <ImagemUsuario src={imagem} alt='Foto do usuário'/>
    </>
  )
}