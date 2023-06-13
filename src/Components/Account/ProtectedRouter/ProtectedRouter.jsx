import React from 'react'

export default function ProtectedRouter({children}) {
  return (
    <div>

        if(localStorage.getItem('userToken')){ return <>{children}</>}
        else {return <Navigate to='/account/login'></Navigate>}
        

    </div>
  )
}
