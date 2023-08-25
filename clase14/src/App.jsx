import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dog, setDog] = useState("")

  useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(response => setDog(response.message))
    .catch((error) => console.log(error))
  },[])

  return (
    <div>
      <h1>Your dog is: </h1>
      {dog ? (<img src={dog}></img>) : (<h2>Loading...</h2>)}
    </div>
  )
}

export default App
