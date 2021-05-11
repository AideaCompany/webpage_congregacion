import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
import Header from '../header'
import TargetText from '../TargetText'

const PerpetualScreen = (props: PropsScreens) => {
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="container__franciscan">
                <div className="video__pastoral">
                  <div className="iframe__video">
                    <iframe
                      src={props.dataCMS.video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <TargetText text={props?.dataCMS?.mainText} />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PerpetualScreen
