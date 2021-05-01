import { PropsOurWorkScreen } from '@/types/types'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const OurWork = (props: PropsOurWorkScreen) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="ourwork__container">
              <div className="container__news">
                <div className="main__news">
                  <TargetText
                    background={props.colors?.find(e => e.name === 'textOurWork_ColorBack').color}
                    text={props?.dataCMS?.textOurWork}
                  />
                </div>
                <div className="news">
                  <img src={props.photos?.find(e => e.name === 'photoOurWork').photos[0].key} alt="" />
                </div>
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
