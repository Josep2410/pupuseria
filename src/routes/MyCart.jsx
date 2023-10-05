import React, {useState} from 'react'

export default function MyCart(){
  const [state, setState] = useState(0)

  function add(){
    setState(prevState=> prevState + 1)
  }
  function sub(){
    setState(prevState=> prevState - 1)
  }

  return(
  <>
    <h1>This is my cart page</h1>
    <div>{state}</div>
    <button  onClick={add}>+</button>
    <button onClick={sub}> -</button>
  </>)
}