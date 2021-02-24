//i18ns
import { fileType, NewsOBject, PropsMadreScreen } from '@/types/types'
import { Carousel } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
import Header from '../header'
import HeaderCard from '../HeaderCard'
import TargetText from '../TargetText'

const MadreScreen = (props: PropsMadreScreen) => {
  const { locale } = useTranslation()
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="half__card">
                <TargetText text={props?.dataCMS?.mainText} />
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
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{'Blog'}</h1>
              </div>
              <div className="blog__entries">
                <div className="container__carousel">
                  <Carousel>
                    {props.dataBlogs
                      .map((e, ie) => ie % 2 == 0 && [e, props.dataBlogs[ie + 1]])
                      .filter(e => e)
                      .map((ge, gi) => (
                        <div key={gi} className="item">
                          {(ge as NewsOBject[]).map((en, eni) => (
                            <div key={eni} className="entrada">
                              <HeaderCard
                                title={en[locale]?.title as string}
                                text={en[locale]?.description as string}
                                img={(en.image as fileType).key}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MadreScreen
