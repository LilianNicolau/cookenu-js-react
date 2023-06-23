import axios from 'axios'
import { irParaFeed } from '../router/coordinator';

export const CadastroDeUsuario = (body, navigate) => {

    axios.post('https://api-cookenu.onrender.com/user/signup', body)
    .then((response)=>{
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token)
        irParaFeed(navigate)
    })
    .catch((error)=>{
        console.log(error);
    }) 
} 

export const LoginUsuario = (body, navigate) => {
   
    axios.post('https://api-cookenu.onrender.com/user/login', body)
    .then((response)=>{
        localStorage.setItem('token', response.data.token)
        irParaFeed(navigate)
    })
    .catch((error)=>{
        console.log(error);
    }) 
} 

export const CadastroReceita = (body, token, navigate) => {
    
    axios.post('https://api-cookenu.onrender.com/recipe', body, {
        headers: {
          Authorization: token
        }
      }).then((response)=>{
        alert(response.data.message)
        irParaFeed(navigate)
      })
      .catch((error)=>{
        alert(error.message, 'Receita não enviada')
      })
}

export const DeletarReceita = (id, token, navigate) => {
    
    axios.delete(`https://api-cookenu.onrender.com/recipe/${id}`, {
        headers: {
          Authorization: token
        }
      }).then((response)=> {
        alert(response.data.message)
        irParaFeed(navigate)
      })
      .catch((error)=> {
        alert(error.message, 'Receita não deletada')
      })
}
