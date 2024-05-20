import React, { useEffect } from 'react'
import joinImg from '../../../src/images/joinwindow.webp'
import style from './JoinWindow.module.css'
import { Link } from 'react-router-dom'

export default function JoinWindow(props) {

let joinWindow=document.getElementById('joinWindow');

    // view the window=>after 5seconds: this could be made in layout component too, but i made this here one time, there is no need to repeat it in each layout.
    useEffect(() => {
        let joinWindowTimeOut;
        if (!props.userData) {
            //view it after 5seconds:
            joinWindowTimeOut= setTimeout(()=>{joinWindow.style.cssText='opacity:1; transition: opacity .5s , visibility .5s; visibility:visible;'}, 1000);        
        };
        return () => {
            clearTimeout(joinWindowTimeOut);
          };
      }, [])


    //close the window:
    function closeBtn(){
        joinWindow.style.cssText='opacity:0; transition: opacity .5s , visibility .5s; visibility:hidden;'
    }

  return (
    <div>
        
        <div id='joinWindow' className={`d-flex justify-content-center align-items-center ${style.joinWindowAll}`}>

        <div className={`d-flex ${style.joinWindow} position-relative`}>
            
            <div className='joinWindowImg col-5'>
                <img src={joinImg} className='w-100' />
            </div>

            <div className='d-flex align-items-center justify-content-center col-5 m-auto'>
            <div className={`${style.joinWindowDesc} text-center`}>
                <h2 className='text-uppercase mt-5'>join our mailing list</h2>

                <p className='text-capitalize py-2'>stay informed! monthly tips, tracks and discount.</p>
                <input type='email' placeholder='Email Address' className='mb-2'></input>
                <button className='btn btn-dark text-uppercase w-100 rounded-0 mb-3'>subscribe</button>
                <ul className='d-flex justify-content-center gap-4 ps-0'>
                    <Link to='' className='nav-link'><li><i className="fa-brands fa-facebook-f"></i></li></Link>
                    <Link to='' className='nav-link'><li><i className="fa-brands fa-twitter"></i></li></Link>
                    <Link to='' className='nav-link'><li><i className="fa-brands fa-pinterest-p "></i></li></Link>
                    <Link to='' className='nav-link'><li><i className="fa-brands fa-instagram"></i></li></Link>
                </ul>
                <div className='d-flex align-items-center justify-content-center'>
                <input type='checkbox' className='me-2'></input>
                <p className='text-uppercase'> <span>don't show this popup again</span></p>

                </div>                
            </div>
            </div>            

            <div className={`position-absolute m-2 end-0 px-1 ${style.closeBtn}`} onClick={closeBtn}>
            <i class="fa-solid fa-xmark"></i>
            </div>

            </div>

        </div>


    </div>
  )
}
