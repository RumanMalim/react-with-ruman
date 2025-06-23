import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/ContactUs/Contact'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Home />
   <About/>
   <Contact />
   </>
  )
}

export default App
