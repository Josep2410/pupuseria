import React from 'react'
import { useParams , Link} from 'react-router-dom'
import {menu} from '../menu'
import '../stylesheets/ItemType.css'

export default function ItemType(props){

  const params = useParams()
  const category = params.itemType

  
  const items = menu.filter(dish => dish.category == category)

  const displayItems = items.map(item=> {
    return(
      <Link to={`${item.id}`} key={item.id}>
        <div className="grid-child ">
          <img src={item.img} />
          <div className='info-container container-sm'>
            <p>{item.item}</p>
            <span>${item.price}</span>
          </div>
         </div>
      </Link>
    )
  })


  return(
  <>
    <h1 className="greeter">{params.itemType}</h1>
    <div className="meal-container">
      {displayItems}
    </div>
  </>)
}