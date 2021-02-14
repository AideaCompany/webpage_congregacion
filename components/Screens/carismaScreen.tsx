import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
// import TargetText from '../TargetText'

const CarismaScreen = () => {
  // const { t } = useTranslation()

  return (
    <>
      <Header image={'/images/body/firenze_santa.png'}>
        <>
          <div className="main__section">
            <div className="carisma__container">
              <div></div>
              <div className="secondary__title">
                <h1>PERGAMINOS</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default CarismaScreen
