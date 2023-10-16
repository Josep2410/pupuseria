import React from 'react'
import '../stylesheets/TheSpecial.css'
import { Link } from 'react-router-dom'

export default function TheSpecial(props){

  const d = new Date()

  const [state, setState] = React.useState(null)

  React.useEffect(()=>{
    fetch(`/api/discounts/${d.getDay()}`)
      .then(res =>res.json())
      .then(data=> setState(data.discount))
  },[])

  return(
  <div>
    {state && <section id="theSpecial" className="container-sm">
     <h1>La Especial</h1>
     <Link to='/Entree'>
      <div id="special_content">
         <img id="special_image"src={state.img} alt="" />
         <p id="special_paragraph">{state.discount}</p>
      </div>
     </Link>
    </section>}
  </div>
    )
}