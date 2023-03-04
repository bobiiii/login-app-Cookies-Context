import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Login from './assets/Login'
import Logout from './assets/Logout'
import Signup from './assets/Signup'
import Users from './assets/Users'
import Permission from './assets/Permission'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/permission' element={<Permission/>}/>

    </Routes>
    
    </>
    )
}

export default App