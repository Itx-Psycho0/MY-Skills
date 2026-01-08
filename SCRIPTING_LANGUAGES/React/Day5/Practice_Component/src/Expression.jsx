import React from 'react'

const Expression = () => {
    const myName = "PSYCHO"
    const multiply = (a,b)=> a*b
  return (
    <div>
      <p>2*2 = {multiply(2,2)}</p>
      <p>My name is {myName}</p>
      <p>My Friend {["Donkey","Monkey","Dog","Ox"]}</p>
    </div>
  )
}

export default Expression


//Expression in jsx :- With jsx you can write expressions inside curly braces. the expressions can be a react variable, or property, or any other valid JavaScript expression. JsX will execute the expression and return the result.
// Const App = ()=>{
  // return(
  //   <p>2 + 2</p>
  // )
  // }

// So above expression will be shown 2 + 2 in browser because react knows as text but if we use curly braces on expression like
// <p> {2+2} </p>
// if we write this inside that we got 4. so expression always written in curly braces in react.

