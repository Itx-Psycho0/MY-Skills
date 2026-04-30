import React from 'react'

const Child = ({ count, setCount, inputRef }) => {
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input  type="text" name="" id="" ref={inputRef} />
    </div>
  )
}

export default Child
