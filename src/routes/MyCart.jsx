import React from 'react'
import { CartContext } from '../components/Layout'


export default function MyCart(){

  const {cartItems, addItem, removeItem} = React.useContext(CartContext)

  return(
  <>
    <h1>This is my cart page</h1>
    <div>{cartItems}</div>
    <button onClick={addItem}>+</button>
    <button onClick={removeItem}> -</button>
  </>)
}