import React from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Foot from '../Footer/Foot';

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
