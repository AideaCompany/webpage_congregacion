import React from 'react'
import { propsHeader } from '../types/types'
import ChangeLanguage from './ChangeLanguage'
import Footer from './Footer/Footer'

const Header = (props: propsHeader) => {
  //hooks
  // const { t } = useTranslation()

  return (
    <>
      {props.image && (
        <div className="background">
          <img src={props.image} className="background__image" alt={`CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA ${props.title}`} />
          {/* <div className="background__layout"></div> */}
        </div>
      )}

      <div className="body">
        <div className="body__children">{props.children}</div>
        <Footer />
        <div className="body__btn">
          <ChangeLanguage />
        </div>
      </div>
    </>
  )
}

export default Header
