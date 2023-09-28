import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemType(props){
  const params = useParams()
  console.log(params)
  return(<>
    <h1>Details a {params.itemType} live here</h1>
    
  </>)
}