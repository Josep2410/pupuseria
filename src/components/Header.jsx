import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/Header.css'


export default function Header(){
  const [numOfItems, setNumOfItems] = useState(0)
  const hideItem = numOfItems === 0? 'hide' : ''
  return(
    <header className='container-sm '>
     <h1 className="display-2">Bienvenidos</h1>
     <img className="container-img" src='/svgs/utensils.svg'></img>
     <Link to="cart"  id="cart-link"><img className="container-cart" src="/svgs/cart.svg" alt="" /></Link>
    <div className={`itemsIndicator ${hideItem}`}>{numOfItems > 0 && numOfItems}</div>
    </header>
  )
}