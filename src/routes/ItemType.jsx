import React from 'react'
import { useParams } from 'react-router-dom'
import {menu} from '../menu'
import '../stylesheets/ItemType.css'

export default function ItemType(props){
  const params = useParams()
 
  const category = getCategory(params.itemType)
  console.log(params.itemType)
  const items = menu.filter(dish => dish.category === category)
  const displayItems = items.map(item=> {
    return(
      <div className="grid-child">
        <img src={item.img} />
        <div className='info-container'>
          <h3>{item.item}</h3>
          <div className='price-and-btn'>
            <p>${item.price}</p>
            <button>Add </button>
          </div>
        </div>
      </div>
    )
  })

  function getCategory(category){
    if(category === 'Breakfast') return 'Desayuno'
    else if(category === 'Entree') return 'Entree'
    else if(category === 'Drinks') return 'Bebidas'
    else if(category === 'Dessert') return 'Pastel'
  }
  return(
  <>
    <h1 className="greeter">{params.itemType}</h1>
    <div className="meal-container">
      {displayItems}
    </div>
  </>)
}