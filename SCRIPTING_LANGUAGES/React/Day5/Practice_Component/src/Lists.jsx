// Lists :- In react, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.
import React from 'react'

const Lists = () => {
    const numbers = [1,2,3,4,5]

  return (
    <div>
      {numbers.map((number)=>(
        <ul key={number}>
            <li>{number}</li>
        </ul>))}
    </div>
  )
}

export default Lists
