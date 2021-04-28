import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

const AboutUsScreen = (props: PropsScreens) => {
  // const { t } = useTranslation()
  const { dataCMS } = props

  return (
    <>
      <Header image={props.mainPhoto}>
        <>
          <div className="main__section">
            <div className="video__about">
              <video src="" controls></video>
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: dataCMS?.title }}></div>
            </div>
          </div>
          <div className="main__section">
            <div className="text__history">
              <TargetText background={props.colors?.find(e => e.name === 'textAbout_ColorBack').color} text={props.dataCMS.textAbout} />
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default AboutUsScreen
