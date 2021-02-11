import React from 'react'
//Antd
import { Button } from 'antd'
//next
import Image from 'next/image'
import { propsHeader } from '../../types'
import useTranslation from '../../hooks/useTranslations'
import ChangeLanguage from '../ChangeLanguage'

const Header = () => {
  const { t } = useTranslation()
  const image = 'firenze_santa'

  return (
    <header className="header">
      <div className="header__title">
        <h1>{t('congregationHistory')}</h1>
      </div>
      <img src={`/images/header/${image}.png`}></img>
      <div className="header__layout"></div>

      <div className="header__rect">
        <Image width={1762} height={800} src="/images/header/rectPlay.png" />
      </div>

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
