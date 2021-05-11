import { PropsScreens } from '@/types/types'
import React from 'react'
import Gallery from '../Gallery'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'
// import TargetText from '../TargetText'

const CarismaScreen = (props: PropsScreens) => {
  // const { t } = useTranslation()

  console.log(props.carousel)
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="carisma__container">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <Gallery photos={props.carousel?.find(e => e.name === 'gallery').carousel} />
              <div className="carisma__text">
                <TargetText
                  // background={props.colors?.find(e => e.name === 'mainText_ColorBack').color}
                  text={props.dataCMS.mainText}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default CarismaScreen
