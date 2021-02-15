import client from '@/graphql/config'
import { listProvinces } from '@/graphql/queries'
import { Province } from '@/types/types'
import { gql } from '@apollo/client'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import Header from '../header'

const ProvinceScreen = () => {
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
      <div className="main__section">
        <div className="province__container">
          <div className="secondary__title">
            <h1>PROVINCIAS</h1>
          </div>
          <div className="carousel__provinces">
            <Carousel autoplay={true} dotPosition="left">
              {itemsSlider?.map((e, i) => (
                <div key={i}>
                  <div className="item">
                    <div className="mask"></div>
                    <img src="/images/provinces/province.jpg" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                    <h1 className="title">{e.name}</h1>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default ProvinceScreen
