import React from 'react'
import Child from './Child'

const App = () => {
  const [count, setCount] = React.useState(0)
  const inputRef = React.useRef()

  React.useEffect(() => {
    console.log('Component mounted')
    inputRef.current.innerHTML = 'Hello World'

    return () => {
      console.log('Component unmounted')
    }
  }, [])
  return (
    <div>
      <h1>Count: {count}</h1>
      <Child count={count} setCount={setCount} inputRef={inputRef}   />
    </div>
  )
}

export default App
