import React from 'react'
import Header from './comman/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './compont/Products';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Testmonal from './compont/Testmonal';
import Reviews from './pages/Reviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children:[ 
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/> 
      },
      {
        path : "/products",
        element : <Product/> 
      },
      {
        path : "/blog",
        element : <Blog/> 
      },
      {
        path : "/testmonial",
        element : <Reviews/>   
      },
    ]
  },
]);

function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App