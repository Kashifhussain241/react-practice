import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>My name is {props.name} </h2>
      <p>and I am {props.age} years old</p> 
    </div>
  )
}


export default Person