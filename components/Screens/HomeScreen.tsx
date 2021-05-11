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
  const { locale } = useTranslation()

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
            <div className="news__container_index">
              <div className="container__news">
                <div dangerouslySetInnerHTML={{ __html: props.dataCMS.titleLastNews }} className="secondary__title"></div>
                <div className="main__news">
                  <News
                    _id={props.dataNews[0]._id as string}
                    title={props.dataNews[0][locale as IdiomsType]?.title as string}
                    img={(props.dataNews[0].image as fileType).key}
                    description={props.dataNews[0][locale as IdiomsType]?.description as string}
                    date={props.dataNews[0].date as string}
                  />
                </div>
                <div className="news">
                  <List
                    size="default"
                    pagination={{ pageSize: 2, style: { width: '100%' }, showLessItems: true }}
                    dataSource={isMobile ? props.dataNews : props.dataNews.slice(1, props.dataNews.length)}
                    style={{ width: '100%' }}
                    renderItem={item => {
                      return (
                        <>
                          <List.Item>
                            <News
                              _id={item._id as string}
                              title={item[locale as IdiomsType]?.title as string}
                              img={(item.image as fileType).key}
                              description={item[locale as IdiomsType]?.description as string}
                              date={item.date as string}
                            />
                          </List.Item>
                        </>
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="main__section">
            <div className="about__summary">
              <TargetText
                // background={props.colors?.find(e => e.name === 'textUs_ColorBack').color}
                title={props.dataCMS?.titleUs}
                text={props.dataCMS?.textUs}
              />
              <div className="images">
                <Carousel autoplay={true}>
                  {props.carousel
                    ?.find(e => (e.name = 'photoUs'))
                    ?.carousel.map((carousel: any, i: number) => (
                      <div key={i}>
                        <div className="item">
                          {carousel[locale] && (
                            <div className="text">
                              <p>{carousel[locale]}</p>
                            </div>
                          )}

                          <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${carousel.photos?.key}`}
                            alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA"
                          />
                        </div>
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default React.memo(HomeScreen)
