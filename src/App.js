import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';


function App() {

const router = createBrowserRouter([

  {path:'' , element: <Layout /> , children:[
    {path:'home', element:<Home />},
  ]}


])

  return (
    <div className="App">
   
    <RouterProvider router={router} /> 

    </div>
  );
}

export default App;
