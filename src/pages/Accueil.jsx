// import React, { Fragment } from 'react'
import React from 'react'
import Bonjour from '../components/Bonjour'

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-top">
        {/* remplacer par le prenom user */}
        <Bonjour />
      </div>
      <div className="accueil-bottom"></div>
    </div>
  )
}

export default Accueil
