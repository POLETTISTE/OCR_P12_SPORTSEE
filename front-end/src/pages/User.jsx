import React from 'react'
import Welcome from '../components/Bonjour'
import GraphiqueBarres from '../components/GraphiqueBarres'
import Diagramme from '../components/Diagramme'
import Energie from '../components/Energie'
import calories from '../assets/calories-icon.png'
import proteines from '../assets/protein-icon.png'
import glucides from '../assets/carbs-icon.png'
import lipides from '../assets/fat-icon.png'

const User = () => {
  return (
    <div className="user">
      <div className="user-top">
        {/* remplacer par le prenom user */}
        <Welcome
          name="User"
          congrats="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
      </div>
      <div className="user-bottom">
        <div className="user-bottom-informations-left">
          <GraphiqueBarres />
          <div className="diagrammes">
            <Diagramme className=" courbe" />
            <Diagramme className="toile" />
            <Diagramme className="score" />
          </div>
        </div>
        <div className="user-bottom-informations-right energie">
          <Energie image={calories} name="Calories" value="1,930kCal" />
          <Energie image={proteines} name="Protéines" value="155g" />
          <Energie image={glucides} name="Glucides" value="290g" />
          <Energie image={lipides} name="Lipides" value="50g" />
        </div>
      </div>
    </div>
  )
}

export default User
