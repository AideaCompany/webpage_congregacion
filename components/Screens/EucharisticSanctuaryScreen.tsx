import React from 'react'
//Antd
import { Button } from 'antd'
//next
import Image from 'next/image'
//i18n
import useTranslation from '../../hooks/useTranslations'
//components
import ChangeLanguage from '../ChangeLanguage'

const EucharisticSanctuaryScreen = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="background">
        <img src={`/images/body/firenze_santa.png`} className="background__image"></img>
        <div className="background__layout"></div>
      </div>
      <body className="bodyAbout">
        <Image width={1508} height={685} src="/images/rectangle.png" className="body__rect"></Image>
        <div className="body__content">
          <div className="body__content__tittle">
            <h1>SANTUARIO EUCARÍSTICO</h1>
          </div>
          <div className="body__content__btn">
            <Button size="large" className="body__content__btn-primary">
              <span> {t('vocationMinistry').toUpperCase()}</span>

              <Image width={40} height={40} src="/images/body/mass.svg"></Image>
            </Button>
            <Button size="large" className="body__content__btn-primary">
              <span>{t('vocationOrientation').toUpperCase()}</span>

              <Image width={40} height={40} src="/images/body/namaste.svg"></Image>
            </Button>
          </div>
          <ChangeLanguage />
        </div>
      </body>
    </>
  )
}

export default EucharisticSanctuaryScreen
