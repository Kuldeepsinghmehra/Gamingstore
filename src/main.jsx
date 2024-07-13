import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from './components/Routes/Explore.jsx';
import Article1 from './components/Routes/Article1.jsx';
import Article2 from './components/Routes/Article2.jsx';
import Article3 from './components/Routes/Article3.jsx';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App />

    },
    {
      path:"explore",
      element:<Explore />
    }, 
    {
      path:"Teken",
      element:<Article1 />
    },
    {
      path:"Godofwar",
      element:<Article2 />
    },
    {
      path:"Cod",
      element:<Article3 />
    }
    
    
  

  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
