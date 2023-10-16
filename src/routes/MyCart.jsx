import React from 'react'
import { CartContext } from '../components/AddToCart'
import '../stylesheets/cartItem.css'


export default function MyCart(){

 const {numOfItems, addItem, removeItem} = React.useContext(CartContext)
 let total = React.useRef(0)

 const [displayItems, setDisplayItems] = React.useState(null)


  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=>res.json())
      .then(data => {
        total.current = 0
        setDisplayItems(data.menus
          .filter(item=>item.inCart) //filter the array returned from fetch
          .map(item=> { //then map over each item to render JSX
            total.current = total.current + (item.numInCart * item.price)
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
                    <div className='flexInfo'><span>Price: </span> <span >${item.price }</span></div>
                </div>
              </div>
          )
        }))})
  },[numOfItems])


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
       <div className='divider col-12'></div>
       <div className='flexInfo'><span >Subtotal : </span> <span>${total.current}</span></div>
       <br />
        <button className='btn btn-primary col-12'>Submit Order</button>
    </form>
    ) : <h1>Your Cart is Empty</h1>}
  
  </div>)
}