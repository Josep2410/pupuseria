//import './server.js'

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=> res.json())
  .then(data => console.log(data)) */
  

/* 
  const promise = new Promise((resolve, reject )=> {
    resolve('it worked')
    reject()
  })

promise.then(res => console.log(res)) */

/* async function getTodos(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  console.log(data)
}

getTodos() */


async function getMessage(x, y){
  
  let sum = await x + y
  return sum
}

console.log(getMessage(1,2).then(res => console.log(res)))
