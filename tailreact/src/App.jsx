import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  
  const [count, setCount] = useState(0)
  let myobj={
    username:"ruman",
    age:19,
  }
  let newArr=[1,2,3,4]

  return (
    <>
     
      <h1>Vite + React</h1>
      
       <Card channel="prop value" btntext="click me" />
       <Card channel="done value" btntext="visit me"/>
    </>
  )
}

export default App
