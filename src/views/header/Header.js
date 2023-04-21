import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import logo from '../../assets/LOGO.png'

export default function Navbar() {
  return (
    <div className='header'>
      <Link to="/">
        <img className="logoKasa" src={logo} alt="Logo de Kasa" />
      </Link>
      <nav>
        <NavLink to="/" className="navText" activeclassname="activeLink">
          Accueil
        </NavLink>
        <NavLink to="/Propos" className="navText" activeclassname="activeLink">
          A propos
        </NavLink>
      </nav>
    </div>
  )
}
