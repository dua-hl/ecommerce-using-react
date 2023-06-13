import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import LayoutAccount from './Components/Account/LayoutAccount/LayoutAccount.jsx';
import CreateAccount from './Components/Account/CreateAccount/CreateAccount';
import Login from './Components/Account/Login/Login';
import EnterAccount from './Components/Account/EnterAccount/EnterAccount';
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react';
import Shopping from './Components/Shopping/Shopping';


function App() {

let [userData,setUserData] = useState(null)

function decodingData(){
  let token = localStorage.getItem('userToken');
  let decoded = jwt(token);
  setUserData(decoded)
}

useEffect( ()=>{
  if(localStorage.getItem('userToken')){
    decodingData();
  }
},[])

const router = createBrowserRouter([

  {path:'' , element: <Layout /> , children:[
    {index:true , element: <Home />},
    {path:'shopping' , element:<Shopping />},
  ]},

  {path:'account', element:<LayoutAccount user={userData,setUserData}/> ,children:[
    {path:'register', element:<CreateAccount />},
    {path:'login', element:<Login decodedData={decodingData} />},
    {path:'enterAccount', element:<EnterAccount />},

  ]},


])

  return (
    <div className="App">
   
    <RouterProvider router={router} /> 

    </div>
  );
}

export default App;
