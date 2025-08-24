import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)
  //let counter=15;
  const addValue=()=>{
    console.log("Clicked",counter);
    /*if(counter!=20){
      counter=counter+1;
    }*/
    //setCounter(counter); //adds only 1 at a time
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    //Updates 2 at a time as we have 2 here bundler function works
  }
  const subtractValue=()=>{
    console.log("Clicked",counter);
    if(counter!=0){
      counter=counter-1;
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
