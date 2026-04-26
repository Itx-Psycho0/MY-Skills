import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleInc = () => {
        setCount(prevcount => prevcount + 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    const handleDec = () => {
        setCount(prevcount => prevcount - 1)
    }
    return (
        <div>
            <h1 className='heading'>Counter</h1>
            <h1 className='heading'>{count}</h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDec}>-</button>
        </div>
    )
}

export default Counter