import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from './components/Routes/Explore.jsx';
import Article1 from './components/Routes/Article1.jsx';
import Article2 from './components/Routes/Article2.jsx';
import Article3 from './components/Routes/Article3.jsx';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
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
    <Auth0Provider
      domain="dev-7p7s5dr1rh11ar51.us.auth0.com"
      clientId="ao6Nym3akKWDIoz1xoABftlGlm8SfYnt"
      authorizationParams={{
        redirect_uri: window.location.origin
      }} 
    >
    <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
