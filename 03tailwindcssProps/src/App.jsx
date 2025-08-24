import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"deeksha",
    age:21
  };
  let myArr=[1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username="deeksha" btnText="Click me"/>
      <Card username="hs" btnText="Visit Me"/>
    </>
  )
}

export default App
