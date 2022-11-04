import React from 'react'
import { useEffect, useState } from 'react'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import './style.scss'

import { useParams } from 'react-router-dom'

const Bonjour = (props) => {
  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_MAIN_DATA)
    setData(modelisation.formatUserName(paramsId))
  }, [])

  const congrats = props.congrats

  if (data !== null) {
    return (
      <div className="bonjour">
        <h1>
          Bonjour <span>{data.name}</span>
        </h1>
        <p>{congrats}</p>
      </div>
    )
  } else {
    return (
      <div className="bonjour">
        <h1>
          Bonjour <span>!</span>
        </h1>
        <p>{congrats}</p>
      </div>
    )
  }
}

export default Bonjour
