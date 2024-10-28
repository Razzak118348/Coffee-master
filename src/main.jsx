import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import AddCoffee from './Components/AddCoffee/AddCoffee';
import UpdateCoffee from './Pages/UpdateCoffee/UpdateCoffee';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import ContextApi from './Context/ContextApi';
import User from './Components/User/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader : ()=>fetch('http://localhost:5000/coffee')
      },
      {
        path:'/addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updatecoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader : ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
      path:'/user',
      element:<User></User>,
      loader : ()=>fetch('http://localhost:5000/user')
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextApi children={<RouterProvider router={router} />}></ContextApi>
  </StrictMode>,
)
