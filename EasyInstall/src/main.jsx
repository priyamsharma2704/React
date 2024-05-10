import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import CartBadge from './Components/CartBadge.jsx';
import Cart from './Components/Cart.jsx';
import NotFound from './Components/NotFound.jsx';
import ReactDom from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<NotFound/>
    },
    {
        path:'/cartBadge',
        element:<CartBadge></CartBadge>,
    },
    {
        path:'/cart',
        element:<Cart></Cart>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
