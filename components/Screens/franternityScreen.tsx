import { IFraternity } from '@/types/types'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

const FraternityScreen = (props: { fraternities: IFraternity[] }) => {
  return (
    <>
      <Header>
        <>
          {props.fraternities?.map((fraternity, i) => (
            <div key={i} className="main__section">
              <div className="fraternity__container">
                <div className="secondary__title">
                  <h1>{fraternity.name}</h1>
                </div>
                <div className="carousel__fraternity">
                  <div>
                    <div className="item">
                      <div className="mask"></div>
                      <img src={fraternity.photo.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                      <div className="text__fraternity">
                        <TargetText text={fraternity.address} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      </Header>
    </>
  )
}

export default FraternityScreen
