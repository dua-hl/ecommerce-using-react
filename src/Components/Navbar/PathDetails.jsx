import React from 'react'
import style from './PathDetails.module.css'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

export default function PathDetails() {
    let location = useLocation().pathname;
    //to get eachwork of the path seperately we can use split function which split the words according to a specific seperator and return an array contains the separated words.
    let splittedPath = location.split('/').filter(segment => segment !== '');
    // console.log(location);

  return (
    <div>

        <div className={`${style.pathDetails} d-flex`}>
        <Link to='/' className='text-capitalize d-inline pe-1 text-decoration-none'><h4>home ></h4> </Link>
            {splittedPath.map((segmant,index)=>(
                <Link to={segmant} className='text-capitalize d-inline pe-1 text-decoration-none'> <h4>{segmant} ></h4> </Link>
            ))}


        </div>

    </div>
  )
}
