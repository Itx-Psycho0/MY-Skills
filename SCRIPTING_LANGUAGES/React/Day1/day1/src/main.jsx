import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//     type: 'a',
//     props: {
//         href:"https://www.google.com",
//         target: "_blank"
//     },
//     children: "Click me",
// }
//just compare same as.
const createElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'google'
)

console.log(
  createElement
)


createRoot(document.getElementById('root')).render(
    // <App />
    createElement
)
