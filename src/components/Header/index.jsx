import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../Header/style.scss'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="" className="logo-image" />
          <h1 className="logo-texte">SportSee</h1>
        </div>
      </NavLink>

      <div className="navigation">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>

        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </div>
    </header>
  )
}

export default Header
