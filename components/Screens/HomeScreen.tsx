import React from 'react'
import useTranslation from '../../hooks/useTranslations'
//components
import Header from '@/components/header'
import TargetText from '../TargetText'
//antd
import { Carousel } from 'antd'
import { News } from '../News'
import { fileType, PropsHomeScreen } from '@/types/types'
import Link from 'next/link'

const HomeScreen = (props: PropsHomeScreen) => {
  const { locale } = useTranslation()

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="main__title">
              <h1>{(props.dataCMS?.title as string).toUpperCase()}</h1>
            </div>
          </div>
          <div className="main__section">
            <div className="about__summary">
              <TargetText title={props.dataCMS?.titleUs} text={props.dataCMS?.textUs} />

              <div className="images">
                <div>
                  <div className="left__images">
                    <img src={'/images/index/hermana1.png'} />
                    <img src={'/images/index/hermana2.png'} />
                  </div>
                  <div className="right__images">
                    <img src={'/images/index/hermana3.png'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="places__summary">
              <div className="images__sedes">
                <div className="carousel__sedes">
                  <Carousel>
                    {props.photos
                      ?.find(e => e.name === 'photoOurHeadquarters')
                      .photos.map((photo: any, i: number) => (
                        <div key={i}>
                          <div className="item">
                            <img src={photo.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                          </div>
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
              <TargetText text={props.dataCMS?.textOurHeadquarters} title={props.dataCMS?.titleOurHeadquarters} />
            </div>
          </div>
          <div className="main__section">
            <div className="news__index">
              <News
                title={props.dataNews?.title as string}
                description={props.dataNews?.description as string}
                img={(props.dataNews?.image as fileType).key}
              />
              <Link href={{ pathname: '/[lang]/be-franciscan', query: { lang: locale } }}>
                <span className="link">Ir a noticias</span>
              </Link>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default HomeScreen
