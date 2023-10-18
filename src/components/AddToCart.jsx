import React from 'react'

const CartContext = React.createContext()

export default function AddToCart({children}){

  const [numOfItems, SetNumOfItems] = React.useState(0)

  function addItem(){
    SetNumOfItems(prevItems => prevItems + 1)
  }
  function removeItem(){
    SetNumOfItems(prevItems => {
      if(prevItems <=0) return prevItems
      else return prevItems - 1
    })
  }

  function clearItems(){
    SetNumOfItems(0)
    fetch(`api/clearCart`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }



  return(
  <CartContext.Provider value={{numOfItems, addItem, removeItem, clearItems}}>
    {children}
  </CartContext.Provider>)
}

export {CartContext}