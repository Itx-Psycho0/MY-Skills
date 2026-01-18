import React, { use } from 'react'
import { useState } from 'react'

const App = () => {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  async function fetchSomeAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const data = await response.json()
    setAdvice(data.slip.advice)
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchSomeAdvice}>Fetch Advice</button> 
      <p>You have read <strong>{count}</strong> pieces of advice.</p> 
    </div>
  )
}

export default App

