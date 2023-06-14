import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Foot from '../Footer/Foot'

export default function Layout() {
  return (
    <div>

    <Navbar />
    <Outlet></Outlet>
    <Foot />


    </div>
  )
}
