import React from 'react'
import '../stylesheets/Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar(){
  const data = [
    { link: '/' , imgSrc : 'home.svg' , text: 'Home'},
    { link: 'Desayuno' , imgSrc : 'breakfast.svg' , text: 'Desayuno'},
    { link: 'Entree' , imgSrc : 'steak.svg' , text: 'Entree'},
    { link: 'Pastel' , imgSrc : 'dessert.svg' , text: 'Pastel'},
    { link: 'Bebidas' , imgSrc : 'soda.svg' , text: 'Bebidas'}
    
  ]
 
  const navJSX = data.map(option => {
    return (
      <Link to={option.link} key={option.text}>
        <div className="nav-item" >
          <img src={`/svgs/${option.imgSrc}`}></img>
          <span>{option.text}</span>
        </div>
      </Link>)
  })
  return(
    <nav className='container-sm p-0'>
      {navJSX}
    </nav>
  )
}