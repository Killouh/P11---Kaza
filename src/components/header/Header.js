import React from 'react'
import {Link } from 'react-router-dom'
import './Header.css';

export default function Navbar() {
  return (
    <div className='header'>
        <img className="logoKasa" src='logo.png' alt="Logo de Kasa" />
        <nav>
        <Link className="navText" to="/"> Accueil </Link>
        <Link className="navText" to="/Propos"> A propos</Link>
    </nav>
    </div>
  )
}
