import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom React</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://instagram.com',
//         target: '_blank'
//     },
//     children: 'Click me to vist instagram'
// }

const anotherElement = (
    <a href="https://instagram.com" target='_blank'>visit instagram</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: "https://instagram.com", target: "_blank"},
    'click to open instagram',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    // ReactElement
    // anotherElement
    reactElement
    // <App/>

)
