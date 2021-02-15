import client from '@/graphql/config'
import { listFraternity } from '@/graphql/queries'
import { IFraternity } from '@/types/types'
import { gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

const FraternityScreen = () => {
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
      <Header>
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
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam,
                    excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at
                    perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut
                    veniam ducimus rem numquam"
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
