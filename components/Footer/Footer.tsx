import React from 'react'
import Contact from './Contact'
import SocialMedia from './SocialMedia'

const Footer = () => {
  // const { t } = useTranslation()
  return (
    <footer className="footer">
      {/* <div className="newsletter">
        <div>
          <h1>{t('newsletter').toUpperCase()}</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div>
          <InputNewsLetter />
        </div>
      </div> */}
      <div className="contact">
        <SocialMedia />
        <Contact />
      </div>
    </footer>
  )
}

export default Footer
