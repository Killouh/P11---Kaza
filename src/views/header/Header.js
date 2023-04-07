import React from 'react'
import {Link } from 'react-router-dom'
import './Header.css';
import logo from '../../assets/LOGO.png'

export default function Navbar() {
  return (
    <div className='header'>
        <Link to="/"><img className="logoKasa" src={logo} alt="Logo de Kasa" /></Link>
        <nav>
        <Link className="navText" to="/"> Accueil </Link>
        <Link className="navText" to="/Propos"> A propos</Link>
    </nav>
    </div>
  )
}
