import React from 'react'
import '../stylesheets/Navbar.css'
import { Link } from 'react-router-dom'
import {data } from '../data'

export default function Navbar(){
 
  const navJSX = data.map(option => {
    return (
      <Link to={option.link}>
        <div className="nav-item">
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