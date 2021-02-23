import client from '@/graphql/config'
import { listProvinces } from '@/graphql/queries'
import { Province } from '@/types/types'
import { gql } from '@apollo/client'

import React, { useEffect, useState } from 'react'
import Header from '../header'

const ProvinceScreen = () => {
  const [itemsSlider, setItemsSlider] = useState<Province[]>()

  useEffect(() => {
    getData()
  }, [])

  //functions

  const getData = async () => {
    try {
      await client.cache.reset()
      const res = (await client.query({ query: gql(listProvinces) })) as { data: { listProvinces: Province[] } }
      console.log(res)
      setItemsSlider(res.data.listProvinces)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Header>
      <>
        {itemsSlider?.map((e, i) => (
          <div key={i} className="main__section">
            <div className="province__container">
              <div className="secondary__title">
                <h1>{e.name}</h1>
              </div>
              <div className="carousel__provinces">
                <div>
                  <div className="item">
                    <div className="mask"></div>
                    <img
                      src={e.photo?.key ? e.photo?.key : '/images/provinces/province.jpg'}
                      alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA"
                    />
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
