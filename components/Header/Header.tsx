import React from 'react'
//Antd
import { Button } from 'antd'
//next
import Image from 'next/image'
import useTranslation from '../../hooks/useTranslations'
import ChangeLanguage from './ChangeLanguage'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header__title">
        <h1>CONGREGRACIÓN DE FRANCISCANAS DE MARÍA INMACULADA</h1>
      </div>
      <img src="/images/header/firenze_santa.png"></img>
      <div className="header__layout"></div>
      <div className="header__btn">
        <Button size="large" className="header__btn-primary">
          <span> {t('vocationMinistry').toUpperCase()}</span>

          <Image width={40} height={40} src="/images/header/mass.svg"></Image>
        </Button>
        <Button size="large" className="header__btn-primary">
          <span>{t('vocationOrientation').toUpperCase()}</span>

          <Image width={40} height={40} src="/images/header/namaste.svg"></Image>
        </Button>
      </div>
      <ChangeLanguage />
    </header>
  )
}

export default Header
