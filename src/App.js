import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import LayoutAccount from './Components/Account/LayoutAccount/LayoutAccount.jsx';
import CreateAccount from './Components/Account/CreateAccount/CreateAccount';
import Login from './Components/Account/Login/Login';
import EnterAccount from './Components/Account/EnterAccount/EnterAccount';


function App() {

const router = createBrowserRouter([

  {path:'' , element: <Layout /> , children:[
    {index:true , element: <Home />},
  ]},

  {path:'account', element:<LayoutAccount /> ,children:[
    {path:'register', element:<CreateAccount />},
    {path:'login', element:<Login />},
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
