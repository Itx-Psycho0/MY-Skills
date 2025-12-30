import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)// its called state, why we nned because its update ui. unless the normal , the count is variable and the secount is function that update count then its update on web, useState is a fucntion that inherit from react , set count also get callback function as previous value of its near variable.
  console.log(count)
  const addValue = () => {
    setCount(prev=>prev+1)
  }
  const subValue = () => {
    setCount((prev)=>prev-1)
  }



  return (
    <>
    <h1>COUNTER {count}</h1>
    <button onClick={addValue}>Add</button>

    <button onClick={subValue}>Sub</button>
    <p>{count}</p>

    </>
  )
}

export default App
