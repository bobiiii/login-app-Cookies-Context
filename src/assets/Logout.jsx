import React, { useEffect } from 'react'
import { delete_cookie } from 'sfcookies'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const {setIsLoggedIn} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        setIsLoggedIn(false)
        delete_cookie("login")
        setTimeout(()=>{
            navigate("/")
        },2000)
        
    },[])
    return (
    <div className='text-center'>
        <h1>You have Been Logged out</h1>
        <h1>Thanks! for Visiting Our Site </h1>
        
        </div>
  )
}

export default Logout