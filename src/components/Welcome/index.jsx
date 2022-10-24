import React from 'react'
import './style.scss'
const Welcome = (props) => {
  const name = props.name
  return (
    <div>
      <h1>Bonjour {name}</h1>
    </div>
  )
}

export default Welcome
