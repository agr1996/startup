import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Markup from './Markup/Markup'
import Register from './Register/Register'
import Share from './Share/Share'
import SignIn from './SignIn/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Markup" element={<Markup />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Share" element={<Share />} />
    <Route path="/SignIn" element={<SignIn />} />    
  </Routes>
  )
}

export default App
