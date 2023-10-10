import React from 'react'
import { CartContext } from '../components/AddToCart'


export default function MyCart(){

  const {numOfItems, addItem, removeItem, clearItems} = React.useContext(CartContext)

  return(
  <div className='container-sm'>
    <h1>This is my cart page</h1>
    <div>{numOfItems > 0 ? numOfItems: 0}</div>
    <button onClick={addItem}>+</button>
    <button onClick={removeItem}> -</button>
    
  </div>)
}