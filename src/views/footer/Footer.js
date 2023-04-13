import React from 'react'
import './Footer.css';
import logo from '../../assets/LOGO2.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img className="logoKasaFooter" src={logo} alt="Logo footer de Kasa" />
        <p className="legal">© 2020 Kasa. All rights reserved</p>

    </div>
  )
}
