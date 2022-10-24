import React from 'react'
import './style.scss'
const Bonjour = (props) => {
  const name = props.name || ' !'
  const congrats = props.congrats
  return (
    <div className="bonjour">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>{congrats}</p>
    </div>
  )
}

export default Bonjour
