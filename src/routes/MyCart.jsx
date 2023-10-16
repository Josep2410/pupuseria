import React from 'react'
import { CartContext } from '../components/AddToCart'


export default function MyCart(){

  const {numOfItems, addItem, removeItem, clearItems} = React.useContext(CartContext)

  const [state, setState] = React.useState(null)

  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=>res.json())
      .then(data => console.log(data.menus.filter(item=>item.inCart)))
  },[])

  return(
  <div className='container-sm'>
    <h1>This is my cart page</h1>
    
  </div>)
}