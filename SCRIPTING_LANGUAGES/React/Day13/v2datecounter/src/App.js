import React from 'react'
import { useState } from 'react'

const App = () => {
  return (
    <div>
      <Couter/>
    </div>
  )
}

function Couter(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

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
        <input type='range' min={0} max={10} value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        <span>Step: {step}</span>
      </div>
      <div>
        
        <button onClick={handleCount}>-</button>
        <input type='text' value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={handleCountp}>+</button>
      </div>

      <h3>{`${h1} is ${date.toDateString()}`}</h3>

      {count!==0 || step!==1?<div>
        <button onClick={()=>{
          setCount(0)
          setStep(1)
        }}>Reset</button>
      </div>:null}
      
    </div>

  )
}

export default App
