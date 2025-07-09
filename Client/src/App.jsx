import { useState } from 'react'

import './App.css'
import Allroutes from './routes/Allroutes'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Allroutes/>
      
    </>
  )
}

export default App
