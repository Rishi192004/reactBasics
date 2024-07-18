import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(5);

  const addValue=()=>{
    if(counter<20){
    counter=counter+1
    setCounter(counter)
    } 
  }
  const decValue=()=>{
    if(counter>0){
    counter=counter-1;
    setCounter(counter)
    }
  }

  return (
    <>
       <h1>hi bro</h1>
       <h2>counter value {counter}</h2>
       <button onClick={addValue}>Add Value:{counter}</button>
       <br />
       <br />
       <button onClick={decValue}>Decrease Value: {counter}</button>
        <br />
        <br />
       <footer>footer value is: {counter}</footer>
    </>
  )
}

export default App
