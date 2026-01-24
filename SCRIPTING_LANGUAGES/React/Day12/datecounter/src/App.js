// Date Counter
import React from 'react'
import { useState } from 'react'

const App = () => {
  return <Couter/>
}

function Couter(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlestep(){
    setStep(step+1)
  }
  function handlestepminus(){
    setStep(step-1)
  }

  function handleCount(){
    setCount(count-step)
  }
  function handleCountp(){
    setCount(count+step)
  }
  const h1 = count===0?`Today `:count>0?`${Math.abs(count)} days from today`:`${Math.abs(count)} days ago from today`
  const date = new Date("january 24 2026")
  date.setDate(date.getDate()+count)
  // function formatedDate(date){
  //   let p = date.split('/');
  //   let dateobj = new Date(p[2],p[1]-1,p[0])
  //   let f = dateobj.toDateString()
  //   return f
  // }
  return(
    <div>
      <h1>Date Counter</h1>
      <div>
        <button onClick={handlestepminus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlestep}>+</button>
      </div>
      <div>
        <button onClick={handleCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountp}>+</button>
      </div>

      <h3>{`${h1} is ${date.toDateString()}`}</h3>
      
    </div>

  )
}

export default App
