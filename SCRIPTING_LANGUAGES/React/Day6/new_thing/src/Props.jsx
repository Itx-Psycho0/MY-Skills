import React from 'react'

const Props = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.name}</h1>
      
    </div>
  )
}

export default Props


//Props
//Props/properties are argument passed into react components.

//Props allows us to pass data from parent component to a child component.

// Props are passed to components via html attributes