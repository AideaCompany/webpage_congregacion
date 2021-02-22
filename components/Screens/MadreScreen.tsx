//i18ns
import Header from '../header'
import { lorem_ipsum } from '../lorem_ipsum'

import TargetText from '../TargetText'
import HeaderCard from '../HeaderCard'
import React from 'react'
import { Carousel } from 'antd'
import { PropsScreens } from '@/types/types'

const MadreScreen = (props: PropsScreens) => {
  let entries = [0, 1, 2, 3].map(i => ({
    title: `Entrada ${i}`,
    cont: lorem_ipsum,
    img: '/images/spirituality/header.png'
  }))
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
                <TargetText text={props?.dataCMS?.title} />
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="half__card">
                <div className="cont__img">
                  <img src="/images/spirituality/madre2.png" alt="" />
                </div>
                <TargetText text={props?.dataCMS?.title} />
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="blog__entries">
                <div className="container__carousel">
                  {}
                  <Carousel>
                    {entries
                      .map((e, ie) => ie % 2 == 0 && [e, entries[ie + 1]])
                      .filter(e => e)
                      .map((ge, gi) => (
                        <div key={gi} className="item">
                          {(ge as any[]).map((en: any, eni: any) => (
                            <div key={eni} className="entrada">
                              <HeaderCard title={en.title} text={en.cont} img={en.img} />
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
