import React from 'react'
//i18n
import useTranslation from '../hooks/useTranslations'
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
          <div className="background__layout"></div>
        </div>
      )}

      <div className="body">
        <div className="body__children">{props.children}</div>
        <Footer />
        <div className="body__btn">
          {/* <Button size="large" className="body__btn-primary">
            <span> {t('vocationMinistry').toUpperCase()}</span>
            <Image width={40} height={40} src="/images/body/mass.svg"></Image>
          </Button>
          <Button size="large" className="body__btn-primary">
            <span>{t('vocationOrientation').toUpperCase()}</span>

            <Image width={40} height={40} src="/images/body/namaste.svg"></Image>
          </Button> */}
          <ChangeLanguage />
        </div>
      </div>
    </>
  )
}

export default Header
