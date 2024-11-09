import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Markup from './Markup/Markup'
import Register from './Register/Register'
import Share from './Share/Share'
import SignIn from './SignIn/SignIn'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import NotFound from './NotFound'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Markup" element={<Markup />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Share" element={<Share />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App
