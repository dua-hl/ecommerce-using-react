import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Foot from '../Footer/Foot'
import JoinWindow from '../JoinWindow/JoinWindow'

export default function Layout({userData,setUserData,scrollHeight,categoryName}) {

  return (
    <div>
    <JoinWindow />
    <Navbar userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName}/>
    <Outlet userData={userData} setUserData={setUserData}></Outlet>
    <Foot />

    </div>
  )
}
