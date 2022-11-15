import React, { Fragment } from 'react'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import './style.scss'
import useFetch from '../../hooks/useFetch'

//IMPORT IMAGES
import caloriesImg from '../../assets/calories-icon.png'
import proteinesImg from '../../assets/protein-icon.png'
import glucidesImg from '../../assets/carbs-icon.png'
import lipidesImg from '../../assets/fat-icon.png'

const calories = 'Calories'
const proteines = 'Protéines'
const glucides = 'Glucides'
const lipides = 'Lipides'

function Energie({ userId }) {
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
    return modelisation.formatDataEnergy()
  }

  if (data !== null) {
    return (
      <Fragment>
        <div className="energie-item energie_calories">
          <img src={caloriesImg} alt={calories} />
          <div>
            {/* toLocaleString pour séparation des milliers */}
            <h3>
              {`${getData().calorieCount.toLocaleString('en-IN')}
            kCal`}
            </h3>
            <p>{calories}</p>
          </div>
        </div>
        <div className="energie-item energie_proteines">
          <img src={proteinesImg} alt={proteines} />
          <div>
            <h3>{`${getData().proteinCount}g`}</h3>
            <p>{proteines}</p>
          </div>
        </div>
        <div className="energie-item energie_glucides">
          <img src={glucidesImg} alt={glucides} />
          <div>
            <h3>{`${getData().carbohydrateCount}g`}</h3>
            <p>{glucides}</p>
          </div>
        </div>
        <div className="energie-item energie_lipides">
          <img src={lipidesImg} alt={lipides} />
          <div>
            <h3>{`${getData().lipidCount}g`}</h3>
            <p>{lipides}</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Energie
