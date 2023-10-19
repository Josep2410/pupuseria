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

  // Return an array of either breakfast, lunch, drinks or desserts
    function getArray(str){
      return menu.filter(item => item.category === str)
    }

  return( //conditionally render JSX
    <>{
      menu ?
     ( 
       <TheSpecial> 
         {uniqueItems.map(str=> <FoodItems title={str} arr={getArray(str)} key={str}/>) }
       </TheSpecial> 
     ) : <h1>Loading...</h1>
    }
    </>
  
  )
}