//i18ns
import { PropsMadreScreen } from '@/types/types'
import React from 'react'
import Header from '../header'
import TargetText from '../TargetText'

const MadreScreen = (props: PropsMadreScreen) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="half__card half__card__madre">
                <TargetText
                  background={props.colors?.find(e => e.name === 'mainText_ColorBack').name}
                  text={props?.dataCMS?.mainText}
                />
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.tittleArticuleOne}</h1>
              </div>
              <div className="half__card">
                <div className="cont__img">
                  <img src={props.photos?.find(e => e.name === 'articulePhotoOne').photos[0].key} alt="" />
                </div>
                <TargetText text={props?.dataCMS?.articuleOne} />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MadreScreen
