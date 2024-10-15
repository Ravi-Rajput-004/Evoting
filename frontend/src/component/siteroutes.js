import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './signup'
import Login from './login'

const Siteroutes = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<h2>PAGE NOT FOUND</h2>}/>        
      </Routes>
    </div>
  )
}

export default Siteroutes;
