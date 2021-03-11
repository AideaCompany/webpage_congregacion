import client from '@/graphql/config'
import { listEvents } from '@/graphql/queries'
import { IEvent, PropsBeFranciscan } from '@/types/types'
import { capitalize } from '@/utils/utils'
import { gql } from '@apollo/client'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import CardSubtitle from '../CardSubtitle'
import EventCalendar from '../EventCalendar'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const FranciscanScreen = (props: PropsBeFranciscan) => {
  // const { t } = useTranslation()

  const [events, setEvents] = useState<IEvent[]>([])

  //effect
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const resEvents = (await client.query({ query: gql(listEvents) })) as { data: { listEvents: IEvent[] } }
      setEvents(resEvents.data.listEvents)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>{capitalize(props.dataCMS.title)}</h1>
              </div>
              <div className="container__photos">
                <div className="container__carousel">
                  <Carousel>
                    {props.data.photos
                      .find((e: any) => e.name === 'gallery')
                      .photos.map((photos: any, i: number) => {
                        return (
                          <div key={i}>
                            <div className="item">
                              <img src={photos.key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                            </div>
                          </div>
                        )
                      })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.titleEvents}</h1>
              </div>
              <div className="calendar">{events && <EventCalendar event={events} />}</div>
            </div>
          </div>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>{props.dataCMS.contactTitle}</h1>
              </div>
              <div className="card__holder">
                <TargetText text={props.dataCMS.textContact} />
                <CardSubtitle text={props.dataCMS.contact} />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default FranciscanScreen
