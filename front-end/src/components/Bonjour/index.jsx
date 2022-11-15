import React from 'react'
import useFetch from '../../hooks/useFetch'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import './style.scss'

const Bonjour = ({ userId }) => {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}`,
    getUserDataMockWithId()
  )

  function getUserDataMockWithId() {
    const userData = USER_MAIN_DATA.find((user) => +user.userId === +userId)
    return userData
  }

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatUserName()
  }

  if (data !== null) {
    return (
      <div className="bonjour">
        <h1>
          Bonjour <span>{getData()}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    )
  }
}

export default Bonjour
