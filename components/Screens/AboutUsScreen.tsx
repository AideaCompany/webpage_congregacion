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
              <div className="container__video">
                <video src={props.photos?.find(e => e.name === 'video').photos[0].key} controls></video>
              </div>
              <TargetText text={props.dataCMS.textAbout} />
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: dataCMS?.title }}></div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default AboutUsScreen
