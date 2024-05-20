import React, { useEffect, useState } from 'react'
import style from './ShoppingSide.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import colorNames from 'color-names'
import saleimg from '../../../images/wintersale.webp'

export default function ShoppingSide({allCategories,colorCode}) {

let circle = document.getElementById('circle');
let newX;
let pageLeft;
let screenX;

  function draggingCircle(e) {

    pageLeft = e.screenX;

    //the distance from the left of the page to a place where mouse is down(constant)
    console.log(e.screenX)


    function moveCircle(e) {
    screenX=e.screenX
    newX= screenX - pageLeft;
    console.log(e.screenX)

    //e.screenX => the distance between the left of the page and where mouse moves.

    // Restrict the circle within the bar's bounds
      if (newX < 0) {
        newX = 0;
      } else if (newX > 250) {
        newX = 250;
      }

    //   let lastPosition = newX;
    //   let currentPosition = Math.max(0,newX)

      circle.style.left = newX + 'px';

    console.log(newX)

    }
  
    function stopDrag() {
      window.removeEventListener('mousemove', moveCircle);
      window.removeEventListener('mouseup', stopDrag);
    }
  
    window.addEventListener('mousemove', moveCircle);
    window.addEventListener('mouseup', stopDrag);
  }

  let categoryName = useParams();

  let categoryOfPage = (allCategories!=[{}]) ? (allCategories?.find(name => name.CatName == categoryName.category))?.CategoriesArray : [{}];
// console.log(categoryOfPage)
  let buttonStyle=''
  let nameOfColor=''

  return (
    <div className=''>

{/* categories */}
<div className={`${style.categoriesSide} mb-5 me-4`}>
<h3 className={`${style.catgrs} pb-3`}>{categoryName.category} Section</h3>

<ul className={`ps-0 ${style.catList}`}>
{categoryOfPage?.map((category) => (
  <li className={`${style.catItem}`}>
    <Link className="nav-link" aria-current="page" to={`/products/shopping/${category.CatName} `}>
      {category.CatName}
    </Link>
  </li>
))}

</ul>

</div>
{/* categories */}


{/* color */}
<div className={`${style.categoriesSide} mb-5 me-2`}>
<h3 className={`${style.catgrs} pb-3`}>Colors</h3>

<ul className={`ps-0 ${style.colList}`}>

{colorCode.map((color) => {
  buttonStyle = { backgroundColor: `#${color}` };
  nameOfColor = colorNames[`#${color}`];
  // {console.log(nameOfColor)}
  return (
    <li className={`d-inline-flex position-relative ${style.colorItem}`}>
      <Link to={nameOfColor} className={`btn ${style.colorLink}`} style={buttonStyle}></Link>
      <span className={`${style.colorName} position-absolute`}>{nameOfColor}</span>
    </li>
  );
})}


</ul>

</div>
{/* color */}


{/* Price */}
<div className={`${style.categoriesSide} mb-5 pb-3 me-1`}>

<h3 className={`${style.catgrs} pb-3`}>Price</h3>

<div className={`position-relative ${style.priceRange}`}>

<div className={`position-relative ${style.priceRangeCircle}`} onMouseDown={(e)=>draggingCircle(e)} id='circle'></div>

</div>

</div>
{/* Price */}


{/* Sizes */}
<div className={`${style.categoriesSide} mb-5`}>

<h3 className={`${style.catgrs} pb-3`}>Sizes</h3>

<div className={`d-flex`}>

<div className='col-5'>
<Link to='xs' className='d-flex gap-2 mb-2 text-decoration-none'>
  <input type="checkbox" className='m-0 p-0 col-2'/>
  <span className='text-uppercase'> xs </span>
</Link>

<Link to='s' className='d-flex gap-2 mb-2 text-decoration-none'>
    <input type="checkbox" className='m-0 p-0 col-2'/>   
    <span className='text-uppercase'> s </span>
</Link>

<Link to='m' className='d-flex gap-2 text-decoration-none'>
    <input type="checkbox" className='col-2 m-0 p-0'/>   
    <span className='text-uppercase'> m </span>
</Link>
</div>

<div className='col-5'>
<Link to='l' className='d-flex gap-2 mb-2 text-decoration-none'>
    <input type="checkbox" className='col-2 m-0 p-0'/>   
    <span className='text-uppercase'> l </span>
</Link>

<Link to='xl' className='d-flex gap-2 mb-2 text-decoration-none'>
    <input type="checkbox" className='col-2 m-0 p-0'/>   
    <span className='text-uppercase'> xl </span>
</Link>

<Link to='xxl' className='d-flex gap-2 text-decoration-none'>
    <input type="checkbox" className='col-2 m-0 p-0'/>   
    <span className='text-uppercase'> xxl </span>
</Link>
</div>

</div>
</div>
{/* Sizes */}


{/* Availability */}
<div className={`${style.categoriesSide} mb-5`}>

<h3 className={`${style.catgrs} pb-3`}>Availability</h3>

<Link to='available' className='d-flex gap-2 mb-2 text-decoration-none'>
  <input type="checkbox" className='m-0 p-0 col-1'/>
  <span className=''> In stock </span>
</Link>

<Link to='notAvailable' className='d-flex gap-2 mb-2 text-decoration-none'>
  <input type="checkbox" className='m-0 p-0 col-1'/>
  <span className=''> Out of stock </span>
</Link>

</div>
{/* Availability */}


{/* sale */}
<div className={`${style.categoriesSide} mb-5`}>
  <Link to=''><img src={saleimg} alt="sale" className={style.saleImg} /></Link>
</div>
{/* sale */}


{/* text */}
<div className={`${style.categoriesSide} mb-5`}>
<h3 className={`${style.catgrs} pb-3`}>Static Text Block</h3>
<p>Use this text to share information about your brand with your customers. <br />
Describe a product, share announcements, or welcome <br /> customers to your <br /> store.</p>
</div>
{/* text */}

</div>


  )
}
