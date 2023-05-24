import React from 'react'
import style from './Midsale.module.css'

export default function Midsale() {
  return (
    <div>

    <div className={`d-flex align-items-center ${style.sale}`}>
        <div className='container'>
        <div className={`me-auto ${style.contentSale}`}>
            <h1 className=''>The mid season SALE.<span className='d-block'>UP TO 50% OFF</span></h1>
            <h3 className=''>Live life Comfortable. <span className='d-block fw-bold'>FREE SHIPPING on all orders over $199</span></h3>
            <button className='text-uppercase'>persolnalize now</button>
        </div>
        </div>
    </div> 




    </div>
  )
}
