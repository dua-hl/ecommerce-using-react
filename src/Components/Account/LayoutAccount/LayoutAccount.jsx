import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Foot from '../../Footer/Foot'
import { Outlet } from 'react-router'

export default function LayoutAccount() {
  return (
    <div>
        <Navbar />

        <div className='container'>
        <Outlet></Outlet>
        </div>

        <Foot />
    </div>
  )
}
