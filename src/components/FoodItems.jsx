import React, {useState} from 'react'
import '../stylesheets/FoodItems.css'
import { Outlet, Link } from 'react-router-dom'

export default function FoodItems(props){
  const [index, setIndex] = useState(0)

  let foodItems = props.arr.map(item =>{ 
    return(
        <div key={item.id} className="food_item"><Link to={`/${determineLink(props.title)}/${item.id}`}><img id="food_img" src={item.img} alt="" /></Link></div>
      )})
  let displayedItems = foodItems.slice(index, index + 4)


  function incrementIndex(){
    setIndex(prevIndex => prevIndex+1)
  }
  function decrementIndex(){
    setIndex(prevIndex => prevIndex - 1)
  }

  function determineLink(title){
    switch(title){
      case 'Desayuno' : return 'Breakfast'
      break;
      case 'Entree' : return 'Entree'
      break;
      case 'Bebidas' : return 'Drinks'
      break;
      case 'Pastel' : return 'Dessert'
      break  
      }
  }

  return(
      <section className="foodArray container-sm">
        <div className="row">
          <div className="col-9">
            <h3>{props.title}</h3>
          </div>
          <div className="col-3 d-flex align-items-start justify-content-end">
          <Link id="mas" to={`/${determineLink(props.title)}`}className="text-decoration-none">M&aacute;s</Link>
          </div>
        </div>
        
        <div className="foodItems">
          {displayedItems}
          <img onClick={incrementIndex} id="right_arrow" src="/svgs/right_arrow.svg" alt="" className={index + 3=== props.arr.length -1 ? 'disappear' : ''}/>
          <img onClick={decrementIndex} id="left_arrow" src="/svgs/left_arrow.svg" alt="" className={index === 0 ? 'disappear' : ''}/>
        </div>
      </section>
   
  )
}