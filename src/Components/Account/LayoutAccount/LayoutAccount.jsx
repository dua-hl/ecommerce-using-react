import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Foot from '../../Footer/Foot'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'

export default function LayoutAccount({user,setUserData}) {
  let navigate = useNavigate();

  function logout(){
    localStorage.removeItem('userToken')
    setUserData(null)
    navigate('/account/login')
  }

  return (
    <div>
        <Navbar user={user} logOut={logout}/>

        <div className='container'>
        <Outlet></Outlet>
        </div>

        <Foot />
    </div>
  )
}
