import React from 'react'
import style from './PageNotFound.module.css'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>

    <div className={`${style.pageNotFound} d-flex align-items-center justify-content-center `}>

        <div>  
        <h2 className='text-center text-capitalize pb-3'>Page Not Found</h2>
        <p className='py-2'>The page you requested does not exist.</p>
        <Link to='/pro/shopping' className={`${style.button} btn my-1 text-uppercase d-block m-auto`}>continue shopping</Link>
        </div> 

    </div>

    </div>
  )
}
