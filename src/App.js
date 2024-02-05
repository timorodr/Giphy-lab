import {useState} from 'react'
import { useEffect } from 'react';
import Button from './components/Button.js'
import Gifs from './components/Gifs'

import './App.css';

function App() {

  const [giph, setGiph] = useState(null)

  const getGiph = async () => {

    const apiKey = "5ag9w1a5ImtywEKTQw71FzOohPKG3Q9R"
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`

    const response = await fetch(url)

    const data = await response.json()

    setGiph(data)

  }

  useEffect(() => {
    console.log("This is the useEffect bro")
    // getGiph(null)
  }, [])




  return (
    <div className="App">
      <Button handleSubmitFromApp={getGiph}/>
      <Gifs giph={giph}/>

    </div>
  );
}

export default App;
