import React from 'react'
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'
import Home from './Components/home/home'
import Signup from './Components/login/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App