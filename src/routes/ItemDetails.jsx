import React from 'react'
import { useParams, Link} from 'react-router-dom'
import '../stylesheets/itemDetails.css'
import {CartContext} from '../components/AddToCart'

export default function ItemType(props){

  const {itemID} = useParams()
  const { addItem} = React.useContext(CartContext)
  const [myItem, setMyItem] = React.useState(null)

  React.useEffect(()=>{
    fetch(`/api/menu/${itemID}`)
      .then(res=>res.json())
      .then(data=> setMyItem(data.menu))
  }, [])
 
 

  function buttonClicked(){
    addItem()
                fetch(`/api/${itemID}`, {
                  method: "POST",
                  body: JSON.stringify(myItem),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                })
  }
  

  return(
    <div className='container-sm'>
     {
      myItem? ( 
        <div>
          <Link to=".." relative='path'><img id="backArrow"src="/svgs/backArrow.svg" alt="" /></Link>
          <div className='row' id='img-container'><img id="item-img" src={myItem.img} alt="" /></div>
          <div className='row'>
            <h3>{myItem.item}</h3>
          </div>
          <div className='row'>
            <h6>${(myItem.price).toFixed(2)}</h6>
          </div>
          <div  className='row'>
            <p id='descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente quae atque tempora nam aliquid deserunt ea, non debitis? Voluptatibus dolorum tenetur dolore? Dolorum, error?</p>
          </div>
            <div className='row'>
              <button className='btn btn-primary' onClick={buttonClicked}>Add to Cart</button>
            </div>
           
        </div>
      ) : <h1>Loading...</h1>
     }
    </div>
 )
}