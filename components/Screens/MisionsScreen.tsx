import { fileType, PropsMisionScreen } from '@/types/types'
import { Carousel } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'
// import TargetText from '../TargetText'

const MisionScreen = (props: PropsMisionScreen) => {
  const { locale } = useTranslation()
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="mision__container">
              <div className="carousel__mision">
                <Carousel>
                  {props.misions?.map(mision => (
                    <div key={mision._id}>
                      <div className="item">
                        <div className="media">
                          <img src={(mision.image as fileType).key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                        </div>
                        <div className="text_mision">
                          <TargetText classname="misionsTarget" title={mision[locale]?.title} text={mision[locale]?.description} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="secondary__title">
                <h1>{props.dataCMS.title}</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MisionScreen
