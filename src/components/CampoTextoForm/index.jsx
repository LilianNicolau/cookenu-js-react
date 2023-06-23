import React, { useState } from 'react'
import { Container, Label, Input, IconeOlho, ContainerInput } from './style'
import {BsEyeSlash, BsEye} from 'react-icons/bs'

export default function CampoTextoFormularios({ type, label, placeholder, valor, name, isError , obrigatorio = false, aoAlterado, ...rest }) {

  const [mostrarSenha, setMostrarSenha] = useState(false)

  return (
    <Container>
        <Label>{label}</Label>
        <ContainerInput>
          <Input
            type={mostrarSenha ? 'text' : type}
            value={valor} 
            name={name}
            onChange={aoAlterado} 
            required={obrigatorio} 
            placeholder={placeholder}
            isError={isError}
            {...rest}
          />
          {type === 'password' && 
          <IconeOlho onClick={()=> setMostrarSenha(!mostrarSenha)}> 
            {mostrarSenha ? <BsEyeSlash size={30}/> : <BsEye size={30}/>}
          </IconeOlho>}
        </ContainerInput>
        {isError && 'Campo inválido'}
       
    </Container>
  )
}
