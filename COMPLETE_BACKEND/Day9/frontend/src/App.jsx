import { useState, useEffect} from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(()=>{
    axios.get("/api/quote")
    .then(res=>{
      setQuotes(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <>
      <h1>Psycho</h1>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <h2>{quote.name}</h2>
          <p>{quote.description}</p>
        </div>
      ))}
    </>
  )
}

export default App
