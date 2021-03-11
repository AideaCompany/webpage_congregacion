import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
// import TargetText from '../TargetText'

const CarismaScreen = (props: PropsScreens) => {
  // const { t } = useTranslation()

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="carisma__container">
              <div></div>
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default CarismaScreen
