import React from 'react'
import style from './Foot.module.css'
import { Link } from 'react-router-dom'

export default function Foot() {
  return (
    <div>

    <div className={`${style.footer}`}>
    <div className='container pt-5 '>

        <div className='d-flex'>
        <div className='col-3'>
            <ul className='navbar-nav'>
                <li className='text-uppercase pb-3'>
                    <h3 className=''>quick shop</h3>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>women</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>men</Link>
                </li>                
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>kids</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>sportwear</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>sale</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>accesories</Link>
                </li>
            </ul>
        </div>

        <div className='col-3'>
            <ul className='navbar-nav'>
                <li className='text-uppercase pb-3'>
                    <h3 className=''>information</h3>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>About us</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>careers</Link>
                </li>                
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>privacy policy</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>terms & condition</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>my account</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>FAQs</Link>
                </li>
            </ul>
        </div>

        <div className='col-2'>
            <ul className='navbar-nav'>
                <li className='text-uppercase pb-3'>
                    <h3 className=''>customer service</h3>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>request personal data</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>FAQ's</Link>
                </li>                
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>contact us</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>orders and returns</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>support center</Link>
                </li>
                <li className='text-capitalize'>
                    <Link to='' className={`nav-link ${style.navlinks}`}>shipping & delivery</Link>
                </li>
            </ul>
        </div>

        <div className='col-3 ps-5'>
            <ul className='navbar-nav'>
                    <h3 className='text-uppercase pb-3'>newsletter</h3>
                    <p className='text-capitalize'>Enter your email to receive daily news and get 20% off coupon for all items. NO spam, we promise</p>
                    <input type="text" placeholder='Email address' className='mb-2 px-3 py-2 border' />
                    <button className='text-uppercase mt-1'>subscribe</button>
            </ul>
        </div>
        </div>

        <div className='text-center pt-5 pb-2'><p>© 2022 Belle. All Rights Reserved.</p></div>
       
    </div>
    

    </div>

    <div className= {`bg-white ${style.fwhite}`}> 
    </div>

    <div className={`${style.arrowup} fixed-bottom text-end mx-4 my-5 `}>
    <Link to=''> <i class="fa-solid fa-arrow-up rounded-circle"></i> </Link>
    </div>

    </div>
  )
}
