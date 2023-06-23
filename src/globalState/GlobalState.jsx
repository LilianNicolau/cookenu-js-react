import { useState } from "react"
import { GlobalContext } from "./globalContext"
import axios from 'axios'

const GlobalState = (props) => {

    const [minhasReceitas, setMinhasReceitas] = useState([])
    const [favorito, setFavorito] = useState({})
    const [mostrarBotao, setMostrarBotao] = useState(false)
    const [data, setData] = useState([])

    const adicionarFavorita = (receita) => {
        const novaReceitaFavorita = minhasReceitas.find((item) => item.id === receita.id)
        if(novaReceitaFavorita === undefined) {
            setMinhasReceitas([...minhasReceitas, receita])
        } else {
            window.alert('Receita já existe nas Minhas Receitas')
        }
    }

    const excluirFavorita = (receita) => {
        // window.alert(`${receita.titulo} excluída`)
        const novaReceitaFavorita = minhasReceitas.filter((item) => {
            return(receita.id !== item.id)
        })
        setMinhasReceitas(novaReceitaFavorita)
    }

    const token = localStorage.getItem('token')

    const getReceitas = async () => {
      try {
          const receitas = await axios.get('https://api-cookenu.onrender.com/recipe/all', {
              headers: {
                Authorization: token
            }

            })
            setData(receitas.data)

          //   console.log(token, 'token');
      } catch (error) {
          alert(error.message)
      }
   
    }
    console.log(data, 'data');

    const context = {minhasReceitas, setMinhasReceitas, adicionarFavorita, excluirFavorita, favorito, setFavorito, mostrarBotao, setMostrarBotao, getReceitas, data, setData}

    return (
    <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
    )
}

export default GlobalState