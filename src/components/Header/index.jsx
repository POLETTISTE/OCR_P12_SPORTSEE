import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="" />
        <h1>Sportsee</h1>
      </NavLink>
      <nav>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>

        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </nav>
    </header>
  )
}

export default Header
