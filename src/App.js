import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import CreateAccount from './Components/Account/CreateAccount/CreateAccount';
import Login from './Components/Account/Login/Login';
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react';
import Shopping from './Components/Shopping/Shopping';
import ProtectedRouter from './Components/Account/ProtectedRouter/ProtectedRouter';
import axios from 'axios';
import JoinWindow from './Components/JoinWindow/JoinWindow';
import LayoutForReg from './Components/Layout/LayoutForReg';
import LayoutForPro from './Components/Layout/LayoutForPro';
import PageNotFound from './Components/PageNotFound/PageNotFound';


function App() {

//decoding data:  
let [userData,setUserData] = useState('')

 function decodingData(){
  let token = localStorage.getItem('userToken');
  let decodedToken =jwt(token);

  setUserData(decodedToken);
}

//**************//
// get all categories available in the website, then send it to outlet to display it in pages.
let [allCategories, setAllCategories] = useState([{}]); //=> the result from api is empty array of object
let [categoryName, setCategoryName] = useState([]); //=> the result from api is empty array of object
let [subCategoryName, setSubCategoryName] = useState([]); //=> the result from api is empty array of object

async function GetAllCategories(){

    //define an object to put api data in it.
    const options = {
      method: 'GET',
      url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
      params: {
        lang: 'en',
        country: 'us'
      },
      headers: {
        'X-RapidAPI-Key': 'c44cc9d7e6msha0993b9035c00e2p1ef144jsn156c10749f7d',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };
    
    //get data from api:
    const {data} = await axios.request(options);
    setAllCategories(data);
    // console.log(allCategories);
  }

    //save categoryName:
    async function GetCategoryName(){
      let categoryNameArray=[];
      for(let i=0; i<allCategories.length; i++) {
        categoryNameArray.push(allCategories[i].CatName)      
    }
    await setCategoryName(categoryNameArray); //all categories name are saved in this variable=>should be sent to navbar
  }

//subcategoryNAme:
// async function GetSubCategoryName(){
//   let subCategoryNameArray=[];
//   for(let i=0; i<allCategories.length; i++) {
//     subCategoryNameArray.push(allCategories[i].CategoriesArray.      )      
// }
// await setSubCategoryName(subCategoryNameArray); //all categories name are saved in this variable=>should be sent to navbar
// }

//a function to measure scrolling in Y to change background color:
let [scrollHeight,setScrollHeight]=useState()
function scrollX(){
  document.addEventListener('scroll',function(e){
    // console.log(e.target.defaultView.scrollY);
    let scrollY = e.target.defaultView.scrollY;
    setScrollHeight(scrollY)
  })
  
}

//**************//

useEffect(() => {
  if (localStorage.getItem('userToken')) {
    decodingData();
  }
  scrollX();
  // GetAllCategories(); //=> to be uncommented
}, []);

//to be uncommented:
// useEffect(() => {
//   // console.log(allCategories);
//   GetCategoryName();
//   // console.log(categoryName)
// }, [allCategories]);


const router = createBrowserRouter([

  {path:'' , element: <Layout userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName}/> , children:[
    {index:true , element: <Home />},
    {path:'*', element: <PageNotFound />},
  ]},

  {path:'products' , element: <LayoutForPro userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName} /> , children:[
    {path: 'shopping/:category/(:color)?/(:size)?/(:availability)?', element: <Shopping allCategories={allCategories} />},
    {path:'*', element:<PageNotFound />},
  ]},

  {path:'account' , element: <LayoutForReg userData={userData} setUserData={setUserData} scrollHeight={scrollHeight} categoryName={categoryName} /> , children:[
    {path:'register', element:<CreateAccount />},
    {path:'login', element:<Login decodedData={decodingData} user={userData} setUserData={setUserData} />},
    {path:'*', element:<PageNotFound />},
  ]},

])

  return (
    <div className="App">
   
    <RouterProvider router={router} /> 

    </div>
  );
}

export default App;
