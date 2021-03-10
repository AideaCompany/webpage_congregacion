import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
import Header from '../header'

const SanctuaryScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="eucharistic__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
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
