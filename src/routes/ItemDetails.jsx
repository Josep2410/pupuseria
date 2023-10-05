import React from 'react'
import { useParams} from 'react-router-dom'
import {menu} from '../menu'

export default function ItemType(props){
  const {itemID} = useParams()

  const myItem = menu.filter(item => item.id == itemID)[0]
  console.log(myItem)
  
  return(
    <div className='container-sm'>
      <div className='row'><img src={myItem.img} alt="" /></div>
      <div className='row'>
        <h4>{myItem.item}</h4>
      </div>
      <div className='row'>
        <p>${myItem.price}</p>
      </div>
      <div className='row'>
      <button className='btn btn-primary'>Add to Cart</button>
      </div>
     
    
    </div>
 )
}