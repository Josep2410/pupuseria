import React from 'react'
import { useParams , Link} from 'react-router-dom'
import '../stylesheets/ItemType.css'

export default function ItemType(props){

  const params = useParams()
  const category = params.itemType
  const [filteredItems, setFilteredItems] = React.useState(null)

  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=> res.json())
      .then(data=>setFilteredItems(data.menus.filter(dish => dish.category == category)))
  },[])
  
  return(
  <>
    <h1 className="greeter">{params.itemType}</h1>
    {filteredItems && (
       <div className="meal-container">
       {filteredItems.map(item=> {
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
                    })}
        </div>) }
  </>)
}