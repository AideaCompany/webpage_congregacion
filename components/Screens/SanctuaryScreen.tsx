import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
import Header from '../header'

const SanctuaryScreen = (props: PropsScreens) => {
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="eucharistic__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="video__about_san">
                <video src="" controls></video>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default SanctuaryScreen
