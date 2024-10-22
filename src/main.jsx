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
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
