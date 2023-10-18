const DISCOUNT_RATE = .10
const TAX_RATE = 0.0825
const DRINK_DISCOUNT_RATE = .50


function getDiscount_Tax_Total(dayOfWeek, cartItems, subTotal){
    let discount = getDiscount(dayOfWeek, cartItems, subTotal)
    let tax = getTaxes(subTotal, discount)
    let total = getTotal(subTotal ,discount, tax)
    return {discount, tax, total}
    
  }
  
  function getSubtotal(arr){
    return formatNumber(arr.reduce((total, item) => total + (item.price * item.numInCart), 0))
  }
  ///////////////  FUNCTIONS BELOW FOR THIS FILE ONLY  ////////////

function getDiscount(day, cartItems, subTotal){
  switch(day){
    case 0: {
      const bfItems = cartItems.filter(item => item.category == 'Desayuno')
      const numOfItems = getNumOfItems(bfItems)
      if(numOfItems >=2) return  formatNumber(subTotal * DISCOUNT_RATE)
      break;
    }
    case 1: { 
      const entreeItems = cartItems.filter(item => item.category == 'Entree')
      const numOfItems = getNumOfItems(entreeItems)
      if(numOfItems >=2) return  formatNumber(subTotal * DISCOUNT_RATE)
      break;
    }
    case 2: {
      const drinks = cartItems.filter(item => item.category == 'Bebidas')
      if(drinks){
        const drinkPrice = getSubtotal(drinks)
        return formatNumber(drinkPrice * DRINK_DISCOUNT_RATE)
      }
      break;
    }
    case 3:{
      const coffee = cartItems.filter(item => item.item == 'coffee')
      const dessert = cartItems.filter(item => item.category == 'Pastel')
      if(coffee.length  && dessert.length) return formatNumber(subTotal * DISCOUNT_RATE)
      break;
    }
    case 4: {
      const entreeItems = cartItems.filter(item => item.category == 'Entree')
      const drinks = cartItems.filter(item => item.category == 'Bebidas')
      if(entreeItems.length && drinks.length) return formatNumber(subTotal * DISCOUNT_RATE)
      break;
    }
    case 5 : {
      const entreeItems = cartItems.filter(item => item.category == 'Entree')
      const numOfItems = getNumOfItems(entreeItems)
      if(numOfItems >=4) return  formatNumber(subTotal * DISCOUNT_RATE)
      break;
    }
    case 6 : {
      let totalDiscount = 0;
      const entreeItems = cartItems.filter(item => item.category == 'Entree')
      const bfItems = cartItems.filter(item => item.category == 'Desayuno')
      if(entreeItems.length ){
        totalDiscount+= entreeItems.reduce((total,item) => total + ((item.price * item.numInCart) * DISCOUNT_RATE) , 0)
      }
      if(bfItems.length ){
        totalDiscount+= bfItems.reduce((total,item) => total + ((item.price * item.numInCart) * DISCOUNT_RATE) , 0)
      }
      return totalDiscount > 0? formatNumber(totalDiscount) : "0.00"
  
    }
    default : {
      return "Error" //change to throw eventually
    }
  }
}


function getTaxes(subTotal, discount = 0.00){
  return formatNumber((subTotal - discount) * TAX_RATE)
}

function getTotal(subtotal, discount = 0.00, tax){
  return formatNumber((subtotal - discount)+ tax )
}

function getNumOfItems(arr){
  return arr.reduce((total, item)=> total + item.numInCart, 0)
}
function formatNumber(num){
  return (Math.floor(num * 100)) / 100
}

//////////////////////////////////////////////////////////////////
export {getDiscount_Tax_Total, getSubtotal}

