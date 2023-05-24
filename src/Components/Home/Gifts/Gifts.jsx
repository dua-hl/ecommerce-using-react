import React from 'react'
import style from './Gifts.module.css'

export default function Gifts() {
  return (
    <div>

        <div className={`d-flex align-items-center ${style.gifts}`}>
        <div className='container'>
        <div className={`me-auto ${style.giftsContent}`}>
            <h1 className='text-capitalize'>gift for her</h1>
            <h3 className=''>The latest collection from italian brands</h3>
            <button className='text-uppercase'>shop now</button>
        </div>
        </div>
        </div>
        </div> 
  )
}
