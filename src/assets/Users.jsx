import React from 'react'
import Permission from './Permission'
import useAuth from './useAuth'
function Users() {
    const{isLoggedIn}=useAuth()
    
  return (<>
    {isLoggedIn ?<div>Users</div> :
    <Permission/>
    }
    </>
  )
}

export default Users