import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import AddToCart from './AddToCart'
export default function Layout(){

  return(
      <div className="container-sm">
        <AddToCart >
          <Header/>
          <Outlet/>
          <Navbar/>
        </AddToCart>
      </div>
  )
}
