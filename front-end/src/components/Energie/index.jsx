import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import './style.scss'
import { useParams } from 'react-router-dom'

//IMPORT IMAGES
import caloriesImg from '../../assets/calories-icon.png'
import proteinesImg from '../../assets/protein-icon.png'
import glucidesImg from '../../assets/carbs-icon.png'
import lipidesImg from '../../assets/fat-icon.png'

const calories = 'Calories'
const proteines = 'Protéines'
const glucides = 'Glucides'
const lipides = 'Lipides'

const Energie = () => {
  const [data, setData] = useState(null)
  const paramsId = useParams()

  useEffect(() => {
    const modelisation = new Modelisation(USER_MAIN_DATA)
    setData(modelisation.formatDataEnergy(paramsId))
  }, [])

  if (data !== null) {
    return (
      <Fragment>
        <div
          className={`energie-item energie_${calories
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')}`}
        >
          <img src={caloriesImg} alt={calories} />
          <div>
            {/* toLocaleString pour séparation des milliers */}
            <h3>{`${data.calorieCount.toLocaleString('en-IN')}kCal`}</h3>
            <p>{calories}</p>
          </div>
        </div>
        <div
          className={`energie-item energie_${proteines
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')}`}
        >
          <img src={proteinesImg} alt={proteines} />
          <div>
            <h3>{`${data.proteinCount}g`}</h3>
            <p>{proteines}</p>
          </div>
        </div>
        <div
          className={`energie-item energie_${glucides
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')}`}
        >
          <img src={glucidesImg} alt={glucides} />
          <div>
            <h3>{`${data.carbohydrateCount}g`}</h3>
            <p>{glucides}</p>
          </div>
        </div>
        <div
          className={`energie-item energie_${lipides
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')}`}
        >
          <img src={lipidesImg} alt={lipides} />
          <div>
            <h3>{`${data.lipidCount}g`}</h3>
            <p>{lipides}</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Energie
