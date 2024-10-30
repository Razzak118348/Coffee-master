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
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-henna-three.vercel.app/coffee')
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-henna-three.vercel.app/coffee/${params.id}`)
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
        path: '/user',
        element: <User></User>,
        loader: () => fetch('https://coffee-store-server-henna-three.vercel.app/user')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi children={<RouterProvider router={router} />}></ContextApi>
  </StrictMode>,
)
