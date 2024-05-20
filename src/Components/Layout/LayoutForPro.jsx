import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Foot from '../Footer/Foot'
import NavDetails from '../Navbar/NavDetails'
import PathDetails from '../Navbar/PathDetails'

export default function LayoutForPro({userData,setUserData,scrollHeight,categoryName}) {

  return (
    <div>

        <NavDetails userData={userData} setUserData={setUserData} />

        <Navbar userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName}/>

        <PathDetails />

        <Outlet userData={userData} setUserData={setUserData} ></Outlet>

        <Foot />


    </div>
  )
}
