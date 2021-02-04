import React from 'react'
import Contact from './Contact'
//components
import InputNewsLetter from './InputNewsLetter'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div>
          <h1>¿QUIERES RECIBIR LAS ULTIMAS NOTICIAS?</h1>
        </div>
        <div>
          <InputNewsLetter />
        </div>
      </div>
      <div className="contact">
        <SocialMedia />
        <Contact />
      </div>
    </footer>
  )
}

export default Footer
