import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

const CartContext = React.createContext()

export default function Layout(){
  const [cartItems, setCartItems] = React.useState(0) 

  function addItem(){
    setCartItems(prevItems => prevItems + 1)
  }
  function removeItem(){
    setCartItems(prevItems => prevItems - 1)
  }

  return(
  <CartContext.Provider value={{cartItems, addItem, removeItem}}>
      <div className="container-sm">
        <Header/>
        <Outlet/>
        <Navbar/>
      </div>
  </CartContext.Provider>
  )
}

export {CartContext}