import React from 'react'
const validPassword = () => <h1>Password is valid</h1>
const invalidPassword = () => <h1>Password is invalid</h1>
const Password = ({isvalid}) => {
  if(isvalid){
    return validPassword()
  }
  return invalidPassword()
}
const App = () => {
  return (
    <div style = {{backgroundColor:'aliceblue',width:100,height:100}}>
      <Password isvalid = {true} />
      
    </div>
  )
}

export default App

// Conditonal rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences