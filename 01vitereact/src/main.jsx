import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>My custom App!</h2>
    </div>
    
  )
}

const anotherElement=(
  <a href='https//google.com' target='_blank'>Visit Me</a>
)

const anotherUser="deeksha"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <MyApp/>
  // anotherElement
  reactElement
)
