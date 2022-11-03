import React from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

//IMPORT PAGE ERROR
import Error from './Error'

//IMPORT ASSETS
import calories from '../assets/calories-icon.png'
import proteines from '../assets/protein-icon.png'
import glucides from '../assets/carbs-icon.png'
import lipides from '../assets/fat-icon.png'

//IMPORT COMPOSANTS
import Welcome from '../components/Bonjour'
import GraphiqueBarres from '../components/GraphiqueBarres'
import DiagrammeCourbe from '../components/DiagrammeCourbe'
import DiagrammeToile from '../components/DiagrammeToile'
import DiagrammeScore from '../components/DiagrammeScore'

import Energie from '../components/Energie'

//IMPORT DATA
import { USER_MAIN_DATA } from '../data/mocked-data.js'

const User = () => {
  let { id } = useParams()

  //on convertit item.id en string pour comparer
  const userData = USER_MAIN_DATA.filter((item) => item.id.toString() === id)

  if (userData.length === 0) {
    return <Error />
  }
  return (
    <div className="user">
      <div className="user-top">
        {userData &&
          userData.map((user, index) => {
            return (
              <Fragment key={`${index}`}>
                <Welcome
                  name={user.userInfos.firstName}
                  congrats="Félicitation ! Vous avez explosé vos objectifs hier 👏"
                />
                <div className="user-bottom">
                  <div className="user-bottom-informations-left">
                    <GraphiqueBarres />

                    <div className="diagrammes">
                      <DiagrammeCourbe className="courbe" />
                      <DiagrammeToile className="toile" />
                      <DiagrammeScore className="score" />
                    </div>
                  </div>
                  <div className="user-bottom-informations-right energie">
                    <Energie
                      image={calories}
                      name="Calories"
                      value={`${user.keyData.calorieCount} Kcal`}
                    />
                    <Energie
                      image={proteines}
                      name="Protéines"
                      value={`${user.keyData.proteinCount} g`}
                    />
                    <Energie
                      image={glucides}
                      name="Glucides"
                      value={`${user.keyData.carbohydrateCount} g`}
                    />
                    <Energie
                      image={lipides}
                      name="Lipides"
                      value={`${user.keyData.lipidCount} g`}
                    />
                  </div>
                </div>
              </Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default User
