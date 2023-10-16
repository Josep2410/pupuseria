import React from 'react'
import { CartContext } from '../components/AddToCart'
import '../stylesheets/cartItem.css'


export default function MyCart(){

 const {numOfItems} = React.useContext(CartContext)
 //let total = React.useRef(0)

 const [displayItems, setDisplayItems] = React.useState(null)


  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=>res.json())
      .then(data => {

        setDisplayItems(data.menus
          .filter(item=>item.inCart) //filter the array returned from fetch
          .map(item=> { //then map over each item to render JSX
            //total.current = total.current + (item.numInCart  * item.price)
            return(
              <div key={item.id} className='cartItem'>
                <img src={`${item.img}`} alt="" id='cartImage'/>
                <div id='cartInfo'>
                  <h6 className={item.item.length > 22? 'small': 'standard'}>{item.item}</h6>
                    <div className='flexInfo'>
                      <span>Qty:</span>
                      <span className='btnLayout flexInfo' >
                        <span className='btn-operation'>+</span>
                        <span >{item.numInCart > 0? item.numInCart: 0}</span>
                        <span className='btn-operation'>-</span>
                      </span>
                    </div>
                    <div className='flexInfo'><span>Price: </span> <span >${item.price }</span></div>
                </div>
              </div>
          )
        }))})
  },[])




  return(
  <div className='container-sm'>
    {numOfItems > 0? (
        <form action="">
       {displayItems}
       <br />
       <div className='divider col-12'></div>
       <div className='flexInfo'><span >Total : </span> <span>$XXXX</span></div>
       <br />
        <button className='btn btn-primary col-12'>Submit Order</button>
    </form>
    ) : <h1>Your Cart is Empty</h1>}
  
  </div>)
}