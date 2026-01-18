import React from 'react'

const App = () => {
  const [advice, setAdvice] = useState("")
        async function fetchSomeAdvice() {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const data = await response.json()
        setAdvice(data.slip.advice)
    }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchSomeAdvice}>Fetch Advice</button>  
    </div>
  )
}

export default App

