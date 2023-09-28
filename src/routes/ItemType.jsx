import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemType(props){
  const params = useParams()
  return(<>
    <h1>Welcome to my {params.itemType} Page!!</h1>
    
  </>)
}