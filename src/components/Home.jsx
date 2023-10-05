import React from 'react'
import FoodItems from '../components/FoodItems'
import TheSpecial from '../components/TheSpecial'
import {menu} from '../menu'

export default function Home(props){

    //get all catergories from menu, then add only unique catergories =>breakfast , entree, bebidas, and pastel
    const categories = [...new Set(menu.map(item => item.category)) ]

    //filter the menu data into arrays. BF items array, entree items array, etc
    const breakfastItems = menu.filter(item => item.category === 'Desayuno')
    const entreeItems = menu.filter(item => item.category === 'Entree')
    const drinks = menu.filter(item => item.category === 'Bebidas')
    const desserts = menu.filter(item=> item.category === 'Pastel')

    const sections = categories.map(title=> <FoodItems title={title} arr={getArray(title)} key={title}/>) 
    
    function getArray(title){
      if(title === 'Desayuno') return breakfastItems
      else if(title === 'Entree') return entreeItems
      else if(title ==='Bebidas') return drinks
      else if(title === 'Pastel') return desserts
    }

  return(
    <>
      <TheSpecial/>
      {sections}
    </>
  
  )
}