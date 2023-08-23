import { useState } from 'react'
import './App.css'
import Hijo from './Hijo'

function App() {

  const [frase, setFrase] = useState();

  const frases = ['Hola', 'Chau', 'Genial', 'Sarasa'];

  const randomFrase = ()=>{
    const position = Math.floor(Math.random() * 4);
    setFrase(frases[position]);
  }

  return (
    <>
      <h1>Clase 5 - Mesa 9</h1>
      <button onClick={()=> randomFrase()}>Pintar frase</button>
      <Hijo frase={frase}/>
    </>
  )
}

export default App