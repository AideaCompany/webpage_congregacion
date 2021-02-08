import React from 'react'
import Link from 'next/Link'

const Navigation = () => {
  return (
    <nav className="mainContainerNav">
      <ul className="navBar">
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="/about">¿QUIÉNES SOMOS?</a>
        </li>
        <li>
          <a href="#">¿DÓNDE ESTAMOS?</a>
        </li>
        <li>
          <a href="#">¿QUÉ HACEMOS?</a>
        </li>
        <li>
          <a href="#">SER FRANCISCANA</a>
        </li>
        <li>
          <a href="#">ESPIRITUALIDAD</a>
        </li>
        <li>
          <a href="#">ALMA EUCARÍSTICA</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
