import client from '@/graphql/config'
import { listFraternity } from '@/graphql/queries'
import { IFraternity } from '@/types/types'
import { gql } from '@apollo/client'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
//i18n
import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'
// import TargetText from '../TargetText'

const FranciscanScreen = () => {
  const { t } = useTranslation()

  const [fraternities, setFraternities] = useState<IFraternity[]>()
  const [evenst, setEvenst] = useState<any[]>()

  //effect
  useEffect(() => {
    getData()
    var tempEvent = []
    for (let k = 0; k < 50; k++) {}
  }, [])

  const getData = async () => {
    try {
      const res = (await client.query({ query: gql(listFraternity) })) as { data: { listFraternity: IFraternity[] } }
      setFraternities(res.data.listFraternity)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header image={'/images/franciscan/franciscan.png'}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>BANER DE FOTOS</h1>
              </div>
              <div className="container__photos">
                <div className="container__carousel">
                  <Carousel>
                    {fraternities?.slice(0, 10).map(fraternity => (
                      <div>
                        <div className="item">
                          <img src="/images/franciscan/dommie_carousel.png" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>Enventos</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default FranciscanScreen
