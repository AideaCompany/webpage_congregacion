import client from '@/graphql/config'
import { listProvinces } from '@/graphql/queries'
import { PropsScreens, Province } from '@/types/types'
import { gql } from '@apollo/client'

import React, { useEffect, useState } from 'react'
import Header from '../header'

const ProvinceScreen = (props: PropsScreens) => {
  //   const [provinces, setProvinces] = useState<Province[]>()
  const [itemsSlider, setItemsSlider] = useState<Province[]>()
  //   const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  //functions

  const getData = async () => {
    try {
      await client.cache.reset()
      const res = (await client.query({ query: gql(listProvinces) })) as { data: { listProvinces: Province[] } }
      setItemsSlider(res.data.listProvinces)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Header>
      <>
        {itemsSlider?.map((e, i) => (
          <div className="main__section">
            <div className="province__container">
              <div className="secondary__title">
                <h1>{e.name}</h1>
              </div>
              <div className="carousel__provinces">
                <div key={i}>
                  <div className="item">
                    <div className="mask"></div>
                    <img src="/images/provinces/province.jpg" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </Header>
  )
}

export default ProvinceScreen
