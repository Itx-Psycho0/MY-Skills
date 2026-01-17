// Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltips, or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM.

import React from 'react'
import { useState } from 'react'

const Portal = () => {
    const [inputValue,setInputValue]= useState('')
    const [copied, setCopied] = useState(false)
  return (
    <div>
        
      
    </div>
  )
}

export default Portal

//class classComponent extend component(){
//render(
// all code
//)
//}
// but now we didn't use classes , industry use functional .