import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const username="deeksha"
  return (
    <>
    <h1> Hello React-{username}</h1>
    {/*username is evaluated expression*/}
    </>
  )
}

export default App;
