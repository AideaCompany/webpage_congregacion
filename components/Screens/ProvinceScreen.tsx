import client from '@/graphql/config'
import { listProvinces } from '@/graphql/queries'
import { Province } from '@/types/types'
import { gql } from '@apollo/client'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import Header from '../header'

type itemsSliderType = {
  item: { title: string; _id: string; lastImpar?: boolean }[]
}

const ProvinceScreen = () => {
  //   const [provinces, setProvinces] = useState<Province[]>()
  const [itemsSlider, setItemsSlider] = useState<itemsSliderType[]>()
  //   const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  //functions

  const getData = async () => {
    try {
      await client.cache.reset()
      const res = (await client.query({ query: gql(listProvinces) })) as { data: { listProvinces: Province[] } }
      const sliderItems = []
      for (let k = 0; k < res.data.listProvinces.length; k += 2) {
        if (k !== res.data.listProvinces.length - 1) {
          sliderItems.push({
            item: [
              {
                title: res.data.listProvinces[k].name,
                _id: res.data.listProvinces[k]._id
              },
              {
                title: res.data.listProvinces[k + 1].name,
                _id: res.data.listProvinces[k + 1]._id
              }
            ]
          })
        } else if (k + 1 === res.data.listProvinces.length - 1) {
          sliderItems.push({
            item: [
              {
                title: res.data.listProvinces[k].name,
                _id: res.data.listProvinces[k]._id
              },
              {
                title: res.data.listProvinces[k + 1].name,
                _id: res.data.listProvinces[k + 1]._id
              }
            ]
          })
        } else {
          sliderItems.push({
            item: [
              {
                title: res.data.listProvinces[k].name,
                _id: res.data.listProvinces[k]._id,
                lastImpar: true
              }
            ]
          })
        }
      }
      setItemsSlider(sliderItems)
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
            <Carousel dotPosition="left">
              {itemsSlider?.map((e, i) => (
                <div key={i}>
                  <div className="item">
                    {e.item.map(item => (
                      <div key={item._id} className={item.lastImpar ? 'province__item2' : 'province__item'}>
                        <div className="mask"></div>
                        <img src="/images/provinces/province.jpg" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                        <h1 className="title">{item.title}</h1>
                      </div>
                    ))}
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
