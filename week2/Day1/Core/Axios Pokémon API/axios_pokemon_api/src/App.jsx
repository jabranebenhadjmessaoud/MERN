import { useEffect, useState } from 'react'
import axios from 'axios' 

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  const AxiosDATA = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })

  }
  useEffect((AxiosDATA),[])
  
  return (
    <>
      <h1>Pokemon API</h1>
      {pokemons.map((poo,index) =>{
        return (
              <h2 key={index}> {poo.name}</h2> 
        )
      }
    )}

    </>
  )
}

export default App
