import React from 'react'
import '../stylesheets/TheSpecial.css'
import { Link } from 'react-router-dom'

export default function TheSpecial(props){

  const d = new Date()
  const day = d.getDay()

  const [state, setState] = React.useState(null)

  React.useEffect(()=>{
    fetch(`/api/discounts/${day}`)
      .then(res =>res.json())
      .then(data=> setState(data.discount))
  },[])

  function getLink(day){
    switch( day){
      case 0 : return "Desayuno"
      case 2 : 
      case 3 : return "Bebidas"
      case 1 : 
      case 4 : 
      case 5 : 
      case 6 : return "Entree"
      default : return ""
    }
  }

  return(
  <div>
    {state && <section id="theSpecial" className="container-sm">
     <h1>La Especial</h1>
     <Link to={`/${getLink(day)}`}>
      <div id="special_content">
         <img id="special_image"src={state.img} alt="" />
         <p id="special_paragraph">{state.discount}</p>
      </div>
     </Link>
    </section>}
  </div>
    )
}