import React from 'react'
import '../stylesheets/TheSpecial.css'
import { Link } from 'react-router-dom'

export default function TheSpecial(props){
  return(
  <section id="theSpecial" className="container-sm">
   <h1>La Especial</h1>
   <Link to='/Entree'>
    <div id="special_content">
       <img id="special_image"src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2470,w_3600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/allwayz_hungry_pupusas_houston_argvux.jpg" alt="" />
       <p id="special_paragraph">25% de descuento al pedir dos platos de entree</p>
    </div>
   </Link>
     
   
  </section>
    )
}