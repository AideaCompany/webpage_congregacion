import { PropsScreens } from '@/types/types'
import React from 'react'
//i18n
import Header from '../header'

const PerpetualScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="eucharistic__index">
              <div className="video__about">
                <video src={props.dataCMS.video} controls></video>
                <div className="secondary__title">
                  <h1>{props?.dataCMS?.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PerpetualScreen
