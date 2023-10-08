import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/Header.css'
import { CartContext } from './Layout'

export default function Header(){
  const {cartItems} = React.useContext(CartContext)
  const hideItem = cartItems <= 0? 'hide' : ''
  return(
    <header className='container-sm '>
     <h1 className="display-2">Bienvenidos</h1>
     <img className="container-img" src='/svgs/utensils.svg'></img>
     <Link to="cart"  id="cart-link"><img className="container-cart" src="/svgs/cart.svg" alt="" /></Link>
    <div className={`itemsIndicator ${hideItem}`}>{cartItems > 0 && cartItems}</div>
    </header>
  )
}