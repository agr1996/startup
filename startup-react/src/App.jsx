import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { home } from './home/home';
import { signin } from './signin/signin';
import { register } from './register/register';
import { share } from './share/share';
import { markup } from './markup/markup';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    
    
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/signin" element={<signin />} />
      <Route path="/register" element={<register />} />
      <Route path="/share" element={<share />} />
      <Route path="/markup" element={<markup />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
    
    
    
    
    
    <footer>
        <strong>Andrew Redd</strong>
        <a href="https://github.com/agr1996/startup">GitHub</a>
    </footer>
    
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App
