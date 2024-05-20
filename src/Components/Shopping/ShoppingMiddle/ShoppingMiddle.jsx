import React, { useEffect, useState } from 'react'
import style from './ShoppingMiddle.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Timer from "react-compound-timerv2-ocuco";

export default function ShoppingMiddle({productList}) {
    
    let [pageNumber , setPageNumber] =useState(1)
    let [resultNumber,setResultNumber]= useState();

    let [viewType,setViewType]= useState(true);

    let [viewedProducts , setViewedProducts] = useState([]);

    let limit = 6
    let skip = (pageNumber -1)*limit

  useEffect(() =>{
    setResultNumber(productList.length)
    // console.log(productList)

  },[productList])

  useEffect(() =>{

    let viewedProductsInstant = []
    for (let i=skip; i<(pageNumber*limit); i++){
        viewedProductsInstant.push(productList[i])
    }

    setViewedProducts(viewedProductsInstant)

  },[pageNumber,productList])

  
  return (
    <div>

{/* top bar */}
    <div className={`d-flex justify-content-between ${style.productNav}`}>

    <div className='d-flex gap-2'>
    <i className="fa-solid fa-table-cells" role="button" onClick={() => {setViewType(true)}}></i>
    <i className="fa-solid fa-list text-secondary" role="button" onClick={() => {setViewType(false)}}></i>
    </div>

    <div className={`${style.ProductsNumber}`} >
        <h4>Showing: result {resultNumber}</h4>
    </div>

    <div className={`position-relative ${style.productFilter}`} >

        <h4 className={`m-0 ps-2 pb-2 text-capitalize ${style.sortBy}`} aria-current="page">sort by <span className='ps-5'>▼</span></h4>

        {/* dropdown */}
        <ul className={`border navbar-nav ${style.dropDownList}`}>

        <li className={`px-2 border-bottom ${style.dropItem}`}>
            <Link to='/' className={`text-capitalize nav-link p-0 ${style.navlink}`}>best selling</Link>
        </li>

        <li className={`px-2 border-bottom ${style.dropItem}`}>
            <Link to='/' className={`text-capitalize nav-link p-0 ${style.navlink}`}>A-Z</Link>
        </li>

        <li className={`px-2 border-bottom ${style.dropItem}`}>
            <Link to='/' className={`text-capitalize nav-link p-0  ${style.navlink}`}>lowest price</Link>
        </li>              

        <li className={`px-2 border-bottom ${style.dropItem}`}>
            <Link to='/' className={`text-capitalize nav-link p-0  ${style.navlink}`}>highest price</Link>
        </li>   

        <li className={`px-2 ${style.dropItem}`}>
            <Link to='/' className={`text-capitalize nav-link p-0  ${style.navlink}`}>new to old</Link>
        </li>     

        </ul>
        {/* end of drop down */}
    </div>    

    </div>

{/* view products */}

    {viewType ? 
    
        (

        <div className={`mt-5 d-flex flex-wrap gap-3 ${style.allProducts}`}> 
        <div className={`${style.allProductsItem}`} key={productList[29]?.code}>

    <div className={`${style.productImg} position-relative`}>

        <Link to=''>
            <img src={productList[29]?.galleryImages[0].baseUrl} alt="" />
            <img src={productList[29]?.galleryImages[0].url} className={`${style.productImgHover} position-absolute`} alt="" />
        </Link>

        <div className={`${style.saleTimer} text-center position-absolute d-flex gap-1 justify-content-center align-items-center`}>

        <Timer initialTime={150000 * 60 * 48 + 1500000 * 60 * 48 + 60000 * 60 * 48 + 60000 * 60 * 48 + 5000} direction="backward">
    {() => (
        <React.Fragment>

                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Days /></h3> <span>days</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Hours /></h3> <span>hrs</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Minutes /></h3> <span>min</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Seconds /></h3> <span>sec</span></div>
        </React.Fragment>
    )}
    </Timer>
        </div>

        <div className={`${style.discountTab} position-absolute`}>
            <span>-16%</span>
        </div>

        <Link to='/' className={`${style.productSectionHoverLink} position-absolute text-center text-uppercase`}>
            quick shop
        </Link>

        <div className={`${style.productSectionHoverTools} position-absolute d-flex flex-column gap-2`}>
        
            <div className={`d-flex align-items-center justify-content-end`}>
                <i class='fa-regular fa-heart order-2'></i>
                <span className='me-3 position-relative order-1'>Add to wishlist</span>
            </div>

            <div className={`d-flex align-items-center justify-content-end`}>
                <i class="fa-solid fa-magnifying-glass order-2"></i>
                <span className='me-3 position-relative order-1'>Quick view</span>
            </div>
        </div>
        
    </div>

    <div className={`${style.productDetails} text-center`}>

        <Link to='/' className={`${style.productName}`}>{productList[29]?.name}</Link>

        <div className={`${style.productPrice} d-flex justify-content-center align-items-center gap-2`}>
            <span>$300</span>
            <h3 className={`m-0`}>{productList[29]?.price.formattedValue}</h3>
        </div>


        <ul className={`${style.productStars} d-flex gap-1 justify-content-center align-items-center p-0 m-0`}>
            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
        </ul>

        <div className={`${style.productColors} d-flex gap-2 justify-content-center align-items-center p-0 m-0`}>

        {(productList[29]?.rgbColors)?.map(color => {
                return (
                    <span style={{backgroundColor:color}}></span>
                )
        })}
        </div>
    </div>
        </div>

            {viewedProducts?.map(product => {

                return (

                    <div className={`${style.allProductsItem}`} key={product?.code}>

                    <div className={`${style.productImg} position-relative`}>

                        <Link to=''>
                            <img src={product?.galleryImages[0].baseUrl} alt="" />
                            <img src={product?.galleryImages[0].url} className={`${style.productImgHover} position-absolute`} alt="" />
                        </Link>

                        {/* <div className={`${style.saleTimer} text-center position-absolute d-flex gap-1 justify-content-center align-items-center`}>
                                <div className='d-flex flex-column align-items-center justify-content-center'><h3>1</h3> <span>days</span></div>
                                <div className='d-flex flex-column align-items-center justify-content-center'><h3>13</h3> <span>hrs</span></div>
                                <div className='d-flex flex-column align-items-center justify-content-center'><h3>34</h3> <span>min</span></div>
                                <div className='d-flex flex-column align-items-center justify-content-center'><h3>60</h3> <span>sec</span></div>
                        </div> */}

                        {/* <div className={`${style.discountTab} position-absolute`}>
                            <span>-16%</span>
                        </div> */}

                        <Link to='/' className={`${style.productSectionHoverLink} position-absolute text-center text-uppercase`}>
                            quick shop
                        </Link>

                        <div className={`${style.productSectionHoverTools} position-absolute d-flex flex-column gap-2`}>
                        
                            <div className={`d-flex align-items-center justify-content-end`}>
                                <i class='fa-regular fa-heart order-2'></i>
                                <span className='me-3 position-relative order-1'>Add to wishlist</span>
                            </div>

                            <div className={`d-flex align-items-center justify-content-end`}>
                                <i class="fa-solid fa-magnifying-glass order-2"></i>
                                <span className='me-3 position-relative order-1'>Quick view</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className={`${style.productDetails} text-center`}>

                        <Link to='/' className={`${style.productName}`}>{product?.name}</Link>

                        <div className={`${style.productPrice} d-flex justify-content-center align-items-center`}>
                            <span></span>
                            <h3 className={`m-0`}>{product?.price.formattedValue}</h3>
                        </div>


                        <ul className={`${style.productStars} d-flex gap-1 justify-content-center align-items-center p-0 m-0`}>
                            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                            <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                        </ul>

                        <div className={`${style.productColors} d-flex gap-2 justify-content-center align-items-center p-0 m-0`}>

                        {(product?.rgbColors)?.map(color => {
                                return (
                                    <span style={{backgroundColor:color}}></span>
                                )
                        })}
                        </div>
                    </div>
                    </div>
                )
            })
        }

        </div>
        )
    :
    (
        <>
        <div className={`mt-5 ${style.allProducts}`}>
            <div className={`d-flex ${style.allProductsItem} ${style.allProductsItemList}`} key={productList[29]?.code}>
            <div className={`${style.productImg} col-3 position-relative`}>

        <Link to=''>
            <img src={productList[29]?.galleryImages[0].baseUrl} alt="" />
            <img src={productList[29]?.galleryImages[0].url} className={`${style.productImgHover} position-absolute`} alt="" />
        </Link>

        <div className={`${style.saleTimer} text-center position-absolute d-flex gap-1 justify-content-center align-items-center`}>

        <Timer initialTime={150000 * 60 * 48 + 1500000 * 60 * 48 + 60000 * 60 * 48 + 60000 * 60 * 48 + 5000} direction="backward">
    {() => (
        <React.Fragment>

                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Days /></h3> <span>days</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Hours /></h3> <span>hrs</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Minutes /></h3> <span>min</span></div>
                <div className='d-flex flex-column align-items-center justify-content-center'><h3><Timer.Seconds /></h3> <span>sec</span></div>
        </React.Fragment>
    )}
        </Timer>
        </div>

        <div className={`${style.discountTab} position-absolute`}>
            <span>-16%</span>
        </div>

        <Link to='/' className={`${style.productSectionHoverLink} position-absolute text-center text-uppercase`}>
            quick shop
        </Link>

        <div className={`${style.productSectionHoverTools} position-absolute d-flex flex-column gap-2`}>
        
            <div className={`d-flex align-items-center justify-content-end`}>
                <i class='fa-regular fa-heart order-2'></i>
                <span className='me-3 position-relative order-1'>Add to wishlist</span>
            </div>

            <div className={`d-flex align-items-center justify-content-end`}>
                <i class="fa-solid fa-magnifying-glass order-2"></i>
                <span className='me-3 position-relative order-1'>Quick view</span>
            </div>
        </div>
        
            </div>

            <div className={`${style.productDetails}`}>

                <Link to='/' className={`${style.productName}`}>{productList[29]?.name}</Link>
                <ul className={`${style.productStars} d-flex gap-1 align-items-center p-0 mt-1`}>
                    <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                    <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                    <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                    <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                    <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                </ul>

                <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non minus delectus optio quia odio soluta mollitia, iusto amet expedita repudiandae ab dolore consequatur quibusdam cumque nostrum, eaque exercitationem corporis eum qui nesciunt explicabo ex. Recusandae quam aliquid eos nulla veniam iste eaque, molestias dolor voluptatem sed ipsam porro voluptas!</p>

                <div className={`${style.productPrice} d-flex align-items-center gap-2 pt-4`}>
                    <h3 className='p-0 m-0'>Price :</h3>
                    <span>110$</span>
                    <h3 className={`m-0`}>{productList[29]?.price.formattedValue}</h3>
                </div>


                <div className={`${style.productColors} d-flex gap-2 align-items-center py-5 m-0`}>

                {(productList[29]?.rgbColors)?.map(color => {
                        return (
                            <span style={{backgroundColor:color}}></span>
                        )
                })}
                </div>
            </div>

    <div>

    </div>
            </div>
        </div>

        {viewedProducts?.map(product => {

            return (
                <div className={`mt-5 ${style.allProducts}`}>

                <div className={`d-flex ${style.allProductsItem} ${style.allProductsItemList}`} key={productList[29]?.code}>
                <div className={`${style.productImg} col-3 position-relative`}>

            <Link to=''>
                <img src={product?.galleryImages[0].baseUrl} alt="" />
                <img src={product?.galleryImages[0].url} className={`${style.productImgHover} position-absolute`} alt="" />
            </Link>

            <Link to='/' className={`${style.productSectionHoverLink} position-absolute text-center text-uppercase`}>
                quick shop
            </Link>

            <div className={`${style.productSectionHoverTools} position-absolute d-flex flex-column gap-2`}>
            
                <div className={`d-flex align-items-center justify-content-end`}>
                    <i class='fa-regular fa-heart order-2'></i>
                    <span className='me-3 position-relative order-1'>Add to wishlist</span>
                </div>

                <div className={`d-flex align-items-center justify-content-end`}>
                    <i class="fa-solid fa-magnifying-glass order-2"></i>
                    <span className='me-3 position-relative order-1'>Quick view</span>
                </div>
            </div>
            
                </div>

                <div className={`${style.productDetails}`}>

                    <Link to='/' className={`${style.productName}`}>{product?.name}</Link>
                    <ul className={`${style.productStars} d-flex gap-1 align-items-center p-0 mt-1`}>
                        <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                        <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                        <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                        <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                        <li className='d-flex'><i class="fa-solid fa-star"></i></li>
                    </ul>

                    <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non minus delectus optio quia odio soluta mollitia, iusto amet expedita repudiandae ab dolore consequatur quibusdam cumque nostrum, eaque exercitationem corporis eum qui nesciunt explicabo ex. Recusandae quam aliquid eos nulla veniam iste eaque, molestias dolor voluptatem sed ipsam porro voluptas!</p>

                    <div className={`${style.productPrice} d-flex align-items-center gap-2 pt-4`}>
                        <h3 className='p-0 m-0'>Price :</h3>
                        <span></span>
                        <h3 className={`m-0`}>{product?.price.formattedValue}</h3>
                    </div>


                    <div className={`${style.productColors} d-flex gap-2 align-items-center py-5 m-0`}>

                    {(product?.rgbColors)?.map(color => {
                            return (
                                <span style={{backgroundColor:color}}></span>
                            )
                    })}
                    </div>
                </div>

        <div>

        </div>
                </div>

                </div>

            )
        
        })
        }
        </>
    )
    }

{/* pagination */}
        <nav className='mt-5'>
            <ul class="pagination d-flex justify-content-center align-items-center">

                {pageNumber ==1 ? 
                (
                    <li class="page-item disabled">
                    <button to='/' class="page-link">Previous</button>
                    </li>
                ) 
                : 
                (
                    <li class="page-item" onClick={()=>setPageNumber(pageNumber-1)}>
                    <button to='/' class="page-link">Previous</button>
                    </li>
                )          
            }

                {Array.from({ length: resultNumber/6 }, (_, index) => (
                <li class="page-item" onClick={()=>setPageNumber(index+1)}><button key={index} to='/' className="page-link">{index + 1}</button></li>
                ))}

                { pageNumber == (resultNumber/6) ? 
                (
                    <li class="page-item disabled">
                    <button to='/' class="page-link" href="#">Next</button>
                    </li>                    
                )
                :
                (
                    <li class="page-item" onClick={()=>setPageNumber(pageNumber+1)}>
                    <button to='/' class="page-link" href="#">Next</button>
                    </li>                    
                )

                }

            </ul>
        </nav>
    </div>
  )
}
