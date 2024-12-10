import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Header/Home';
import HomePage from './components/Pages/HomePage';


const router = createBrowserRouter([
  {
   

    element: <Home/>,
    children:[
      {

        path:"/",
        element: <HomePage/>,
      },
      

    ]
    
    }
  ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
