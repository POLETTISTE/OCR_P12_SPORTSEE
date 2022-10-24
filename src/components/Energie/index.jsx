import React from 'react'
import './style.scss'

const Energie = (props) => {
  const { image, name, value } = props

  return (
    <div className={`energie-item energie_${name}`}>
      <img src={image} alt={name} />
      <div>
        <h3>{value}</h3>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Energie
