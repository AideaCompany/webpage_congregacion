import { PropsBeFranciscan } from '@/types/types'
import { Carousel } from 'antd'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const FranciscanScreen = (props: PropsBeFranciscan) => {
  // const { t } = useTranslation()

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div dangerouslySetInnerHTML={{ __html: props.dataCMS.title }} className="secondary__title"></div>
              <div className="container__photos">
                <div className="container__carousel">
                  <Carousel>
                    {props.data.photos
                      .find((e: any) => e.name === 'gallery')
                      .photos.map((photos: any, i: number) => {
                        return (
                          <div key={i}>
                            <div className="item">
                              <img src={photos.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                            </div>
                          </div>
                        )
                      })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="franciscan__index">
              <div dangerouslySetInnerHTML={{ __html: props.dataCMS.contactTitle }} className="secondary__title"></div>
              <div className="card__holder">
                <TargetText
                  background={props.colors?.find(e => e.name === 'textContact_ColorBack').color}
                  text={props.dataCMS.textContact}
                />
                <TargetText
                  background={props.colors?.find(e => e.name === 'contact_ColorBack').color}
                  text={props.dataCMS.contact}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default FranciscanScreen
