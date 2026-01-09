import React from 'react'
import { useState } from 'react'
import { use } from 'react'

const State = () => {
    const counter = useState(0)
    console.log(counter)
  return (
    <div>
      
    </div>
  )
}

export default State

//State:- Is a way to store and manage data that can change over time and affects how the comopnent renders. we define state using the useState Hook, which allows you to set an initail value and provides a way to update that state.

// Hooks:- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

//useState Hook allows us to track state in a functional component. State generally refers to data or properties that need to be tracking in an applications.