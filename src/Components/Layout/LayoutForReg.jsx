import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Foot from '../Footer/Foot'
import PathDetails from '../Navbar/PathDetails'

export default function LayoutForReg({userData,setUserData,scrollHeight,categoryName}) {
  return (
    <div>
    <Navbar userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName}/>

    <PathDetails />

    <Outlet userData={userData} setUserData={setUserData} ></Outlet>

    <Foot />        
    </div>
  )
}
