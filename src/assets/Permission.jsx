import React from 'react'
import { Link } from 'react-router-dom'

function Permission() {
  return (
    <div className='text-center'>
        <h1>You Donot have Permission to View this Page</h1>
    <h1> Please <Link to={"/"}>Login</Link> to Continue</h1>
    </div>
  )
}

export default Permission