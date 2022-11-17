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
    const userData = USER_MAIN_DATA.find((user) => +user.id === +userId)

    console.log('usermaindat')
    console.log(USER_MAIN_DATA)
    console.log('mock')
    console.log(userData)
    return userData
  }

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatUserName()
  }

  // if (error) {
  //   redirect react rooter ereur 404
  // }

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
