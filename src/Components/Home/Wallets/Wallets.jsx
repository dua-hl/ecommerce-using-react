import React from 'react'
import style from './Wallets.module.css'

export default function Wallets() {
  return (
    <div>

    <div className={`d-flex align-items-center ${style.wallet}`}>
        <div className='container'>
        <div className={`m-auto ${style.contentWallet}`}>
            <h1 className=''>Women Wallets</h1>
            <h3 className=''>Carry this stylist wallets for party</h3>
            <button className='text-uppercase'>explore more</button>
        </div>
        </div>
    </div> 

    </div>
  )
}
