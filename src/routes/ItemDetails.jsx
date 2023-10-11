import React from 'react'
import { useParams, Link} from 'react-router-dom'
import {menu} from '../menu'
import '../stylesheets/itemDetails.css'
import {CartContext} from '../components/AddToCart'

export default function ItemType(props){
  const {itemID} = useParams()
  const { addItem} = React.useContext(CartContext)
  const myItem = menu.filter(item => item.id == itemID)[0]

function addedItem(){
  addItem()
}

  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=> res.json())
      .then(data => console.log(data))
      
  },[])
  
  return(
    <div className='container-sm'>
      <Link to=".." relative='path'><img id="backArrow"src="/svgs/backArrow.svg" alt="" /></Link>
      <div className='row' id='img-container'><img id="item-img" src={myItem.img} alt="" /></div>
      <div className='row'>
        <h3>{myItem.item}</h3>
      </div>
      <div className='row'>
        <h6>${myItem.price}</h6>
      </div>
      <div  className='row'>
        <p id='descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente quae atque tempora nam aliquid deserunt ea, non debitis? Voluptatibus dolorum tenetur dolore? Dolorum, error?</p>
      </div>
      
        <div className='row'>
          <button className='btn btn-primary' onClick={addedItem}>Add to Cart</button>
        </div>
    </div>
 )
}