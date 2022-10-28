import React from 'react'
import { useParams } from 'react-router-dom'

//renseigner les props relatives a cet ID
import calories from '../assets/calories-icon.png'
import proteines from '../assets/protein-icon.png'
import glucides from '../assets/carbs-icon.png'
import lipides from '../assets/fat-icon.png'
import Welcome from '../components/Bonjour'
import GraphiqueBarres from '../components/GraphiqueBarres'
import Diagramme from '../components/Diagramme'
import Energie from '../components/Energie'

import { USER_MAIN_DATA } from '../data/mocked-data.js'
import { Fragment } from 'react'

//regarder ID dans barre adresse

//filtrer les données en fn de l''id

const User = () => {
  let { id } = useParams()
  //convertir id en string
  const userData = USER_MAIN_DATA.filter((item) => item.id.toString() === id)

  if (userData.length === 0) {
    // return <Error />
    return 'error'
  }
  return (
    <div className="user">
      <div className="user-top">
        {/* remplacer par le prenom user */}

        {userData &&
          userData.map((user, index) => {
            return (
              <Fragment key={`${index}`}>
                <Welcome
                  // key={`${index} welcome`}
                  name={user.userInfos.firstName}
                  congrats="Félicitation ! Vous avez explosé vos objectifs hier 👏"
                />
                <div className="user-bottom">
                  <div className="user-bottom-informations-left">
                    <GraphiqueBarres
                    // key={`${index} GraphiqueBarres`}
                    />
                    <div className="diagrammes">
                      <Diagramme className="courbe" />
                      <Diagramme className="toile" />
                      <Diagramme className="score" />
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
