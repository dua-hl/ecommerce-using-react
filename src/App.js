import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import CreateAccount from './Components/Account/CreateAccount/CreateAccount';
import Login from './Components/Account/Login/Login';
import EnterAccount from './Components/Account/EnterAccount/EnterAccount';
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react';
import Shopping from './Components/Shopping/Shopping';
import LayoutAccount from './Components/Layout/LayoutAccount';
import ProtectedRouter from './Components/Account/ProtectedRouter/ProtectedRouter';


function App() {

let [userData,setUserData] = useState(null)

function decodingData(){
  let token = localStorage.getItem('userToken');
  let decodedToken = jwt(token);
  setUserData(decodedToken)
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

  {path:'account', element:<LayoutAccount userData={userData} setUserData={setUserData} /> ,children:[
    {path:'register', element:<CreateAccount />},
    {path:'login', element:<Login decodedData={decodingData} user={userData} />},
    {path:'enteraccount', element:<ProtectedRouter> <EnterAccount /> </ProtectedRouter>},

  ]},


])

  return (
    <div className="App">
   
    <RouterProvider router={router} /> 

    </div>
  );
}

export default App;
