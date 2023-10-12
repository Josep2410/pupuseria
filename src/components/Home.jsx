import React from 'react'
import FoodItems from '../components/FoodItems'
import TheSpecial from '../components/TheSpecial'

export default function Home(props){

  const [menu, setMenu] = React.useState(null) //becomes array of object after useEffect
  let uniqueItems = React.useRef(null)

  React.useEffect(()=>{
    fetch('/api/menu')
      .then(res=>res.json())
      .then(data=>{
        setMenu(data.menus) //returns full menu
      })
  },[])
  
  if(menu){
    uniqueItems = ([...new Set(menu.map(item => item.category)) ]) //an array of unique strings
  }
    
    function determineArray(title){
      if(title === 'Desayuno')  return menu.filter(item => item.category === 'Desayuno')
      else if(title === 'Entree') return menu.filter(item => item.category === 'Entree')
      else if(title ==='Bebidas') return menu.filter(item => item.category === 'Bebidas')
      else if(title === 'Pastel')  return menu.filter(item=> item.category === 'Pastel')
    }

  return( //conditionally render JSX
    <>{
      menu ?
     ( <div>
       <TheSpecial/>
      {uniqueItems.map(str=> <FoodItems title={str} arr={determineArray(str)} key={str}/>) }
      </div>) : <h1>Loading...</h1>
    }
    </>
  
  )
}