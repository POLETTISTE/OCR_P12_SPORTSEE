import React from 'react'
import './style.scss'

const Diagramme = (props) => {
  const className = props.className

  return (
    <div className={`diagrammes-item diagrammes_diagramme-${className}`}>
      diagramme {className}
    </div>
  )
}

export default Diagramme
