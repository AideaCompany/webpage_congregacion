//components
import Header from '@/components/header'
import { fileType, IdiomsType, PropsHomeScreen } from '@/types/types'
//antd
import { Carousel, List } from 'antd'
import React from 'react'
import useTranslation from '../../hooks/useTranslations'
import { News } from '../News'
import TargetText from '../TargetText'
import * as animationData from 'public/animation.json'
import Lottie from 'react-lottie'
import { useMediaQuery } from 'react-responsive'

const dataAnim = animationData as any
const HomeScreen = (props: PropsHomeScreen) => {
  const { t, locale } = useTranslation()

  const isMobile = useMediaQuery({
    query: '(max-width: 450px)'
  })
  const defaultOptions = {
    loop: false,
    autoplay: true,
    speed: 1,
    animationData: dataAnim.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section first__home">
            <div className="animation__home">
              <Lottie options={defaultOptions} height={!isMobile ? '100%' : '50%'} width={isMobile ? '100%' : '80%'} />
            </div>
          </div>
          <div className="main__section">
            <div className="about__summary">
              <TargetText title={props.dataCMS?.titleUs} text={props.dataCMS?.textUs} />
              <div className="images">
                <Carousel autoplay={true}>
                  {props.photos
                    ?.find(e => (e.name = 'photoUs'))
                    ?.photos.map((photo: any, i: number) => (
                      <div key={i}>
                        <div className="item">
                          <img src={photo?.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                        </div>
                      </div>
                    ))}
                </Carousel>
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
                      ?.photos?.map((photo: any, i: number) => (
                        <div key={i}>
                          <div className="item">
                            <img src={photo?.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
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
            <div className="news__container_index">
              <div className="container__news">
                <div className="secondary__title">
                  <h1>{t('lastNews')}</h1>
                </div>
                <div className="main__news">
                  <News
                    _id={props.dataNews[0]._id as string}
                    title={props.dataNews[0][locale as IdiomsType]?.title as string}
                    img={(props.dataNews[0].image as fileType).key}
                    description={props.dataNews[0][locale as IdiomsType]?.description as string}
                  />
                </div>
                <div className="news">
                  <List
                    size="default"
                    pagination={{ pageSize: 2, style: { width: '100%' }, showLessItems: true }}
                    dataSource={props.dataNews}
                    style={{ width: '100%' }}
                    renderItem={item => {
                      return (
                        <List.Item>
                          <News
                            _id={item._id as string}
                            title={item[locale as IdiomsType]?.title as string}
                            img={(item.image as fileType).key}
                            description={item[locale as IdiomsType]?.description as string}
                          />
                        </List.Item>
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default HomeScreen
