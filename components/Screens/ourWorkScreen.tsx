import { PropsOurWorkScreen } from '@/types/types'
import React from 'react'
import Gallery from '../Gallery'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const OurWork = (props: PropsOurWorkScreen) => {
  console.log(props.carousel)
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="ourwork__container">
              <div className="container__news">
                <Gallery photos={props.carousel?.find(e => e.name === 'photoOurWork').carousel} />

                <TargetText text={props?.dataCMS?.textOurWork} />
              </div>

              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default OurWork
