import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <div>

    <div className={`container d-flex align-items-center fixed-top ${style.navbar}`}>

    <div className='navright col-3'>
      <Link to="">
      <img src='images/logo.avif' />
      </Link>
    </div>

    <div className='navleft w-100 ps-5 pe-4'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="" >Home</Link>
            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="shop">Shop</Link>
            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="product">Product</Link>
            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="pages">Pages</Link>
            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="blog">Blog</Link>
            </li>    

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase text-white ${style.navlinks}`} aria-current="page" to="buynow">Buy Now!</Link>
            </li>               

          </ul>

          <div className="d-flex ms-auto " role="search">
            <ul className={`navbar-nav gap-4 ${style.navIcons}`}>
              <li><Link to=''><i className={`fa-solid fa-magnifying-glass text-white ${style.navlinks}`}></i></Link></li>
              <li><Link to=''><i className={`fa-regular fa-circle-user text-white ${style.navlinks}`}></i></Link></li>
              <li><Link to=''><i className={`fa-solid fa-bag-shopping text-white position-relative ${style.navlinks}`}><span>0</span></i></Link></li>
            </ul>

          </div>

        </div>

    </nav>
    </div>

    </div>

    </div>
  )
}
