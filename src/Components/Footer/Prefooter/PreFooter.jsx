import React from 'react'
import style from './PreFooter.module.css'
import { Link } from 'react-router-dom'

export default function PreFooter() {
  return (
    <div>

    <div className={`${style.prefooter}`}>

    <div className='d-flex container py-3'>

    <div className='col-7 d-flex align-items-center'>
    <h5 className='text-uppercase'>sign up for deal</h5>

    <div className={`d-flex align-items-center ${style.inputButt}`}>
    <input type="text" placeholder='Email address'/>
    <button className='text-uppercase'>subscribe</button>
    </div>
    </div>

    <div className='col-5 d-flex justify-content-end align-items-center'>
    <h5 className='text-uppercase'>sign up for deal</h5>

    <ul className='d-flex gap-3'>
        <li><Link to=""><i className="fa-brands fa-facebook-f text-dark"></i></Link></li>
        <li><Link to=""><i className="fa-brands fa-twitter text-dark"></i></Link></li>
        <li><Link to=""><i className="fa-brands fa-pinterest-p text-dark"></i></Link></li>
        <li><Link to=""><i className="fa-brands fa-instagram text-dark"></i></Link></li>
    </ul>
    </div>

    </div>


    </div>

    </div>
  )
}
