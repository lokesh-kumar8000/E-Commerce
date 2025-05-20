import React from 'react'
import Header from './comman/Header'
import Footer from './comman/Footer'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header/>  
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout