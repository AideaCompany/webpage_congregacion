import client from '@/graphql/config'
import { listFraternity } from '@/graphql/queries'
import { IFraternity, PropsScreens } from '@/types/types'
import { gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

const FraternityScreen = (props: PropsScreens) => {
  // const { t } = useTranslation()

  const [fraternities, setFraternities] = useState<IFraternity[]>()

  //effect
  useEffect(() => {
    getData()
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
      <Header image={props?.mainPhoto}>
        <>
          {fraternities?.slice(0, 5)?.map(fraternity => (
            <div className="main__section">
              <div className="fraternity__container">
                <div className="secondary__title">
                  <h1>{fraternity.name}</h1>
                </div>
                <div className="carousel__fraternity">
                  <div>
                    <div className="item">
                      <div className="mask"></div>
                      <img src="/images/fraternity/fraternity.png" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                      <div className="text__fraternity">
                        <TargetText
                          text={props?.dataCMS?.}
                        />
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
