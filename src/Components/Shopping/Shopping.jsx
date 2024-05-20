import React, { useEffect, useState } from 'react'
import style from './Shopping.module.css'
import ShoppingNav from './ShoppingNav/ShoppingNav'
import women from '../../images/Women.jpg'
import ShoppingSide from './ShoppingSide/ShoppingSide'
import ShoppingMiddle from './ShoppingMiddle/ShoppingMiddle'
import { useParams } from 'react-router'
import axios from 'axios'

export default function Shopping({allCategories}) {

  let {category} = useParams();
  // console.log(category);

  let categoryDetails = allCategories == [{}] ?  '' : allCategories.find((item) => item.CatName == category); //object

  // console.log(allCategories)

  let tagCodes = allCategories == [{}] ? '' : (categoryDetails?.tagCodes[0]); //will be used for product list api
// console.log(tagCodes);

  // let [productList,setProductList] = useState([])
  let [colorCode,setColorCode] = useState([])
  let [productList , setProductList] = useState([])

//to get product lsit
  async function getProductList(tagCodes){
    const options = {
      method: 'GET',
      url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
      params: {
        country: 'us',
        lang: 'en',
        currentpage: '0',
        // categories: `${tagCodes}` //we have to put ` ` to define whats inside as a variable.
        categories:'men_all',
      
      },
      headers: {
        'X-RapidAPI-Key': '8c4fe57aa8mshf7962dc97eb0c78p13b120jsnd19d5ee052da',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };


    let {data} = await axios.request(options)
    // console.log(data.results)

    setProductList(data.results)

    //its better to call it in useEffect when productList is ready, but to save time i connect it directly with data.
    getColorCode(data); //to be uncommented
  } 

//in product list we need color value:
 function getColorCode(data){

  //colors in value array from data
  let colorList = data.facets[14].values;

  //get color code only from value array
  let allCodes = colorList.map((value) => value.code);

  //split code and save the code only without color number => splitting result will be an array with two part, we will take the second part related to code:
  let splittedCode = allCodes.map((code) => (code.split('_').filter(segment => segment !== ''))[1])

//these arrays contains color name and color code, and they will be sent to shopping side for 
  setColorCode(splittedCode);

  // console.log(splittedCode);
  
}

  useEffect(() =>{
    getProductList(tagCodes);
  },[])


  return (
    <div>
      <div className={`${style.shopping} mt-4`}>

      <div className={`${style.photo} position-relative`}>
        <img src={women} alt="women" className={`${style.catImg}`} />
        <h3 className='position-absolute top-50 end-50 text-uppercase'>{category}</h3>
      </div>
      <ShoppingNav allCategories={allCategories} />

    <div className={`${style.shoppingDetail}`}>
      <div className='d-flex mt-5'>

        <div className={`${style.shoppingSide}`}>
        <ShoppingSide allCategories={allCategories} colorCode={colorCode} />
        </div>

        <div className={`${style.shoppingMiddle} ps-4`}>
        <ShoppingMiddle productList={productList}/>
        </div>

    </div>

    </div>
      </div>
    </div>
  )
}
