import React from 'react'
import style from './NavDetails.module.css'
import { Link } from 'react-router-dom'

export default function NavDetails({userData,setUserData}) {

  function logout(){
    localStorage.removeItem('userToken');
    setUserData(null);
  }

  return (
    <div>

    <div className={`${style.navDetailsAll}`}>
    <div className={`${style.navDetails} d-flex justify-content-between`}>

    <ul className='d-flex mb-0'>  
    
    <li className={`position-relative ${style.navitem}`}>
              <h4 className={`text-uppercase`} aria-current="page">USD $ ▼</h4>

            {/* dropdown */}
              <ul className={`${style.dropDownList}`}>

              <li className={`border-bottom ${style.dropItem}`}>
                <h4 className={`text-uppercase ${style.navlink}`}>nis ₪</h4>
              </li>

              <li className={`border-bottom ${style.dropItem}`}>
                <h4 className={`text-uppercase ${style.navlink}`}>euro €</h4>
              </li>

              <li className={`${style.dropItem}`}>
                <h4 className={`text-uppercase ${style.navlink}`}>jod </h4>
              </li>              

              </ul>
              {/* end of drop down */}

    </li>

    <li className={`position-relative ${style.navitem}`}>
              <h4 className={` text-uppercase`} aria-current="page">english ▼</h4>

            {/* dropdown */}
              <ul className={`${style.dropDownList}`}>

              <li className={`border-bottom ${style.dropItem}`}>
                <h4 className={`text-capitalize ${style.navlink}`}>arabic</h4>
              </li>

              <li className={`border-bottom ${style.dropItem}`}>
                <h4 className={`text-capitalize ${style.navlink}`}>german</h4>
              </li>

              <li className={` ${style.dropItem}`}>
                <h4 className={`text-capitalize ${style.navlink}`}>french </h4>
              </li>              

              </ul>
              {/* end of drop down */}

    </li>    

    <li className={`position-relative nav-item ${style.navitem}`}>
        <h4> <span><i class="fa-solid fa-phone-volume"></i></span> +440 0(111) 044 833</h4>
    </li>

    </ul>   

    {!userData ? 
    <ul className={`d-flex mb-0 ${style.navDetailsRight}`}>  
    
    <li className={`position-relative ${style.navitem}`}>
        <Link to='/account/login' className={`text-uppercase ${style.navLink}`} aria-current="page">login</Link>
    </li>

    <li className={`position-relative ${style.navitem}`}>
        <Link to='/account/register' className={` text-uppercase ${style.navLink}`} aria-current="page">create account</Link>
    </li>    

    <li className={`position-relative nav-item ${style.navitem}`}>
        <Link to='/' className={` text-uppercase ${style.navLink}`} aria-current="page">wishlist</Link>
    </li>

    </ul>      
  :

  <ul className={`d-flex mb-0 ${style.navDetailsRight}`}>  
    
  <li className={`position-relative ${style.navitem}`}>
      <Link to='/account/login' onClick={logout} className={`text-uppercase ${style.navLink}`} aria-current="page">logout</Link>
  </li>

  <li className={`position-relative ${style.navitem}`}>
      <Link to='' className={` text-uppercase ${style.navLink}`} aria-current="page">my account</Link>
  </li>   

  <li className={`position-relative ${style.navitem}`}>
      <Link to='' className={` text-uppercase ${style.navLink}`} aria-current="page">wishlist</Link>
  </li>    

  </ul> 
  }
      

    </div>
    </div>
    </div>
  )
}
