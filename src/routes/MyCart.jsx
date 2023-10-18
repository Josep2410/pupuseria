import React from 'react'
import { CartContext} from '../components/AddToCart'
import '../stylesheets/cartItem.css'
import {getDiscount_Tax_Total, getSubtotal} from '../utils/utils'

export default function MyCart(){

 const {numOfItems, addItem, removeItem} = React.useContext(CartContext)
 const [cartItems, setCartItems] = React.useState(null)
 const d = new Date()
 const dayOfWeek = d.getDay()
 let displayItems = []
 let subTotal = 0;
 let numsObj = {} //holds the discount, tax, and total info

 React.useEffect(()=>{
  fetch(`/api/cartItems`)
    .then(res=>res.json())
    .then(data => setCartItems(data.menus))
 }, [numOfItems])

 if(cartItems){
  subTotal = getSubtotal(cartItems)
 numsObj = {...getDiscount_Tax_Total(6,cartItems, subTotal)}
  displayItems = cartItems.map(item=> { //then map over each item to render JSX
    return(
      <div key={item.id} className='cartItem'>
        <img src={`${item.img}`} alt="" id='cartImage'/>
        <div id='cartInfo'>
          <h6 className={item.item.length > 22? 'small': 'standard'}>{item.item}</h6>
            <div className='flexInfo'>
              <span>Qty:</span>
              <span className='btnLayout flexInfo' >
                <span className='btn-operation' onClick={()=>increaseItemCount(item.id)}>+</span>
                <span >{item.numInCart > 0? item.numInCart: 0}</span>
                <span className={`btn-operation `} onClick={()=>decrementItemCount(item.id)}>-</span>
              </span>
            </div>
            <div className='flexInfo'><span>Price/Item </span> <span >${(item.price).toFixed(2)}</span></div>
            <div className='flexInfo'><span>Price: </span> <span >${(item.price * item.numInCart).toFixed(2) }</span></div>
        </div>
      </div>
  )
})
 }
  
function increaseItemCount(id){
  addItem()
  fetch(`/api/${id}`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}
function decrementItemCount(id){
  removeItem()
  fetch(`/api/decrementCount/${id}`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}


  return(
  <div className='container-sm'>
    {numOfItems > 0? (
      <form action="">
        {displayItems}
        <br />
        <div className='flexInfo'><span >Subtotal : </span> <span>${(subTotal)}</span></div>
        <div className='flexInfo'><span >Discount : </span> <span>- ${numsObj.discount || "0.00" }</span></div>
        <div className='flexInfo'><span >Taxes : </span> <span>${(numsObj.tax)}</span></div>
        <br />
        <div className='divider col-12'></div>
        <div className='flexInfo total'><span >Total : </span> <span>${numsObj.total}</span></div>
        <br />
          <button className='btn btn-primary col-12'>Submit Order</button>
      </form>
    ) : <h1>Your Cart is Empty</h1>}
  
  </div>)
}