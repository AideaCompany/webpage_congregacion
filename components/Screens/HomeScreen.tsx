import React from 'react'
//Antd
import { Button } from 'antd'
//next
import Image from 'next/image'
//i18n
import useTranslation from '../../hooks/useTranslations'
//components
import ChangeLanguage from '../ChangeLanguage'

const HomeScreen = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="background">
        <img src={`/images/body/firenze_santa.png`} className="background__image"></img>
        <div className="background__layout"></div>
      </div>
      <body className="body">
        <div className="body__title">
          <h1>CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA</h1>
        </div>
        <div className="body__btn">
          <Button size="large" className="body__btn-primary">
            <span> {t('vocationMinistry').toUpperCase()}</span>

            <Image width={40} height={40} src="/images/body/mass.svg"></Image>
          </Button>
          <Button size="large" className="body__btn-primary">
            <span>{t('vocationOrientation').toUpperCase()}</span>

            <Image width={40} height={40} src="/images/body/namaste.svg"></Image>
          </Button>
        </div>
        <ChangeLanguage />
      </body>
    </>
  )
}

export default HomeScreen
