import React, { useState } from 'react'

const App = () => {
  const [bill,setBill] = useState("")
  const [tip,setTip] = useState(0)
  const [tip2,setTip2]= useState(0)
  const percent = bill * ((tip + tip2) / 2 / 100)
  function handlereset(){
    setBill("")
    setTip(0)
    setTip2(0)
  }
  return (
    <div>
      <Price bill={bill} setBill={setBill}/>
      <Tip tip={tip} setTip={setTip}> 1st tips </Tip>
      <Tip tip={tip2} setTip={setTip2}> 2nd tips </Tip>
      {bill > 0 && (
        <>
          <CalcFull bill={bill} percent={percent} />
          <Rbutton onReset={handlereset} />
        </>
      )}
    </div>
  )
}

function Price({bill,setBill}){
  return(
    <div>
      <span>Price</span>
      <input type='text' placeholder='bill' value={bill} onChange={(e)=>setBill(Number(e.target.value))}></input>
    </div>
  )
}
function Tip({children, tip, setTip}){
  return(
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e)=>setTip(Number(e.target.value))}>
        <option value={"0"}>0%</option>
        <option value={"5"}>5%</option>
        <option value={"10"}>10%</option>
        <option value={"15"}>15%</option>
        <option value={"20"}>20%</option>
      </select>
    </div>
  )
}
function CalcFull({bill, percent}){
  return(
    <div>
       <h3>You pay ${bill + percent} (${bill} + ${percent} tip)</h3>
    </div>
  )
}
function Rbutton({onReset}){
  return(
    <button onClick={onReset}>Reset</button>
  )
}
export default App
