import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css';
import  logo from '../../images/logo.avif'

export default function Navbar(props) {

  function logout(){
    localStorage.removeItem('userToken')
    props.setUserData(null)
  }

  return (
    <div>

    <div className={`container d-flex align-items-center fixed-top ${style.navbar}`}>

    <div className='navright col-3'>
      <Link to="/">
      <img src={logo} />
      </Link>
    </div>

    <div className='navleft w-100 ps-5 pe-4'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="d-flex navbar-collapse" id="navbarSupportedContent">
          
          <ul className="col-8 d-flex justify-content-center gap-5 navbar-nav mb-2 mb-lg-0">

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks}`} aria-current="page" to="/" >Home</Link>
            </li>

            <li className={`position-relative nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks}`} aria-current="page" to="shopping">Shop</Link>

            {/* dropdown =>products categories inside since dropdownLinkCat class is for list with subcategories which have different styles*/}
              <ul className={`bg-danger navbar-nav dropdown gap-5 pb-0 ${style.dropdownList}`}>
              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>

              <li className='nav-item'>
                <Link to='#' className={`fw-semibold text-uppercase nav-link text-black ${style.dropdownLinkCat}`}>Category Name</Link>

                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 1</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 2</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 3</Link>
                <Link to='#' className={`nav-link text-black ${style.dropdownLinkCat}`}>link 4</Link>

              </li>              

              </ul>
              {/* end of drop down */}

            </li>

             <li className={`position-relative nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks}`} aria-current="page" to="pages">Pages</Link>
             
             {/* dropdown */}
             <ul className={`${style.dropdownList} pb-0`}>
              <li className={`nav-item border-bottom ${style.navItemsDrop}`}>

                <Link to='#' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>about us <span className={`ms-1 ${style.new}`}>New</span></Link>

              </li>
             
              <li className={`nav-item border-bottom ${style.navItemsDrop}`}>

                <Link to='#' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>contact us</Link>

              </li>

              <li className={`nav-item ${style.navItemsDrop}`}>

                <Link to='#' className={`nav-link text-black text-capitalize ${style.dropdownLink}`}>FAQ's</Link>

              </li>

              </ul>
              {/* end of drop down */}

            </li>

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks}`} aria-current="page" to="blog">Blog</Link>
            </li>    

            <li className={`nav-item ${style.navitems}`}>
              <Link className={`nav-link text-uppercase ${style.navlinks}`} aria-current="page" to="buynow">Buy Now!</Link>
            </li>               

          </ul>

          <div className="d-flex ms-auto" role="search">
            <ul className={`navbar-nav gap-4 ${style.navIcons}`}>
              <li className={`nav-item ${style.navitems}`}><Link to=''><i className={`fa-solid fa-magnifying-glass ${style.navlinks}`}></i></Link></li>
              <li className={`position-relative ${style.navitems}`}>
                <Link to='/enterAccount'><i className={`fa-regular fa-circle-user ${style.navlinks}`}></i></Link>
              
             {/* dropdown */}
             <ul className={`${style.dropdownList} pb-0`}>

              {props.userData ? 
              (
                <>

                <li className={`nav-item border-bottom me-2 ${style.navItemsDrop}`}>
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

                <li className={`nav-item border-bottom me-2 ${style.navItemsDrop}`}>
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
              <li className={`nav-item ${style.navitems}`}><Link to=''><i className={`fa-solid fa-cart-flatbed-suitcase position-relative ${style.navlinks}`}><span>0</span></i></Link></li>
            </ul>
          </div>

        </div>

    </nav>
    </div>

    </div>

    </div>
  )
}
