import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './Navbar.module.css';
import  logo from '../../images/logo.avif'

export default function Navbar(props) {

  function logout(){
    localStorage.removeItem('userToken');
    props.setUserData(null);
  }

//a function for sing-in and signout dropdown list => when clicking on their icon the list should be down(when clicking not hovering)
let clickCounter=0;
function profileDropDown(){
let dropDown = document.getElementById('dropDownClick');

//this will track the clicks =>when clicking for the first time it will down the list, and in the second one it will hide it.
if(clickCounter==0){
  dropDown.style.cssText='visibility:visible; max-height:1000px;'

  clickCounter++;
}else{
  dropDown.style.cssText='max-height:0; visibility:hidden;'

  clickCounter=0;
}
}

//useLocation hook-for changing the color of navlinks according to the component:
let location = useLocation().pathname === "/" ? style.NavIsInHome : style.NavIsInSite; //this made to add modify navbar props. in home and other pages, except position properiteis because position should be modified on the containes div.
let homeNav = useLocation().pathname === "/" ? style.inHome : ''; //this used to make the navbar sticky when in home only, to make navdetails above it in other pages.

//change navbar properities when scrolling:
let scrollHeightClass = props.scrollHeight > 50 ? style.scrollMore50 : '';

//get shop dropdown list, and when the content is available and stable, put them in the list:
const [shopDropDownContent, setShopDropDownContent] = useState([]);
useEffect(()=>{
  setShopDropDownContent(props.categoryName)
},[props.categoryName])


  return (
    <div>

    <div id='navbar' className={`d-flex align-items-center ${style.navbar} ${scrollHeightClass} ${homeNav} w-100`}>

    <div className='navright col-3'>
      <Link to="/">
      <img src={logo} />
      </Link>
    </div>

    <div className='navleft w-100 ps-5 pe-4'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="d-flex navbar-collapse" id="navbarSupportedContent">
          
          <ul className="position-relative col-8 d-flex justify-content-center gap-5 navbar-nav mb-lg-0">

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks} ${location}`} aria-current="page" to="/" >Home</Link>
            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks} ${location}`} aria-current="page" to={`/products/shopping/Women`}>Shop</Link>

            {/* dropdown =>products categories inside since dropdownLinkCat class is for list with subcategories which have different styles*/}
              <ul id='shopDropDown' className={`navbar-nav dropdown gap-5 pb-0 ${style.dropdownList}`}>
                {shopDropDownContent.map((category) => (
              <li className='nav-item'>                
                <h4 className={`fw-semibold text-uppercase nav-link text-black`}>{category}</h4>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>
))}
              </ul>
              {/* end of drop down */}

            </li>

             <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks} ${location}`} aria-current="page" to="pages">Pages</Link>
             
             {/* dropdown */}
             <ul className={`${style.dropdownList} pb-0`}>
              <li className={`nav-item border-bottom ${style.navItemsDrop}`}>

                <Link to='about-us' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>about us <span className={`ms-1 ${style.new}`}>New</span></Link>

              </li>
             
              <li className={`nav-item border-bottom ${style.navItemsDrop}`}>

                <Link to='contact-us' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>contact us</Link>

              </li>

              <li className={`nav-item ${style.navItemsDrop}`}>

                <Link to='faq' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>FAQ's</Link>

              </li>

              </ul>
              {/* end of drop down */}

            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks} ${location}`} aria-current="page" to="blog">Blog</Link>
            </li>    

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase fw-semibold ${style.navlinks} ${location}`} aria-current="page" to="buynow">Buy Now!</Link>
            </li>               

          </ul>

          <div className="d-flex ms-auto" role="search">
            <ul className={`position-relative navbar-nav gap-4 ${style.navIcons}`}>
              <li className={`nav-item ${style.navitems}`}><i className={`fa-solid fa-magnifying-glass ${style.navlinks} ${location}`}></i></li>
              <li className={`position-relative ${style.navitemsClick}`} onClick={profileDropDown}>
                <i className={`fa-regular fa-circle-user ${style.navlinks} ${location}`}></i>
              
             {/* dropdown */}
             <ul id='dropDownClick' className={`${style.dropdownListClick} pb-0`}>

              {!props.userData ? //if not equal to null
              ( 
                <>
                <li className={`nav-item border-bottom ${style.navItemsDrop}`}>
                <Link to='/account/login' className={`nav-link text-black text-uppercase ${style.dropdownLink}`}><i className="fa-solid fa-user-check me-2"></i> <span>login</span></Link>
                </li>

                <li className={`nav-item border-bottom ${style.navItemsDrop}`}>
                <Link to='/account/register' className={`nav-link text-black text-uppercase ${style.dropdownLink}`}><i className="fa-solid fa-user-plus me-2"></i> <span>create account</span></Link> 
                </li>

                <li className={`nav-item ${style.navItemsDrop}`}>
                <Link to='#' className={`nav-link text-black text-uppercase ${style.dropdownLink}`}><i className="fa-solid fa-hand-sparkles me-2"></i> <span>wishlist</span></Link>
                </li>

              </>
              )
              : (
              <>  

                <li id='dropDownlClick' className={`nav-item border-bottom me-2 ${style.navItemsDrop}`}>
                <Link to='/' className={`nav-link text-black ${style.dropdownLink}`} ><i className="fa-solid fa-sack-dollar me-2"></i> <span>Orders</span></Link> 
                </li>

                <li className={`nav-item border-bottom me-2 ${style.navItemsDrop}`}>
                <Link to='/' className={`nav-link text-black ${style.dropdownLink}`} ><i className="fa-solid fa-circle-question me-2" /> <span>Help center</span></Link>
                </li>

                <li className={`nav-item border-bottom me-2 ${style.navItemsDrop}`}>
                <Link to='/' className={`nav-link text-black ${style.dropdownLink}`} ><i className="fa-solid fa-circle-user me-2"></i> <span>Account details</span></Link>  
                </li>

                <li className={`nav-item me-2 ${style.navItemsDrop}`}>
                <Link onClick={logout} to='/account/login' className={`nav-link text-black ${style.dropdownLink}`} > <i className="fa-solid fa-circle-xmark me-2"></i> <span>Logout</span></Link>  
                </li>

             </>     

              )              
            }

              </ul>              
              {/* end of drop down */}
              
              </li>
              <li className={`nav-item ${style.navitems}`}><Link to=''><i className={`fa-solid fa-cart-flatbed-suitcase position-relative ${style.navlinks} ${location}`}><span>0</span></i></Link></li>
            </ul>
          </div>

        </div>

    </nav>
    </div>

    </div>

    </div>
  )
}
