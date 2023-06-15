import React from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Foot from '../Footer/Foot';

export default function LayoutAccount(props) {
  let navigate = useNavigate();

  return (
    <div>

        <Navbar userData={props.userData} setUserData={props.setUserData}/>

        <div className='container'>
        <Outlet></Outlet>
        </div>

        <Foot />

    </div>
  )
}
