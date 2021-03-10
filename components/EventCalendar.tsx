import { fileType, IEvent } from '@/types/types'
import { Calendar, Modal } from 'antd'
import React, { useState } from 'react'

const dateCellRender = (data: IEvent[], val: any, setEvent: any, setModal: any) => {
  const events = data.filter((e: IEvent) => {
    const start = new Date(parseInt(e.date as string))
    return start.getDate() == val.date() && start.getMonth() == val.month() && start.getFullYear() == val.year()
  })
  return (
    <ul className="events">
      {events.map((item: any, i: any) => (
        <li
          key={i}
          onClick={_ => {
            setEvent(item), setModal(true)
          }}
        >
          <div className="eventCell">{item.title}</div>
        </li>
      ))}
    </ul>
  )
}

const EventCalendar = (props: { event: IEvent[] }) => {
  const [event, setEvent] = useState<IEvent>()
  const [modal, setModal] = useState(false)

  return (
    <div className="calendar__cont">
      <Calendar dateCellRender={val => dateCellRender(props.event, val, setEvent, setModal)} />
      {event && (
        <Modal centered title={event.title} visible={modal} onOk={_ => setModal(false)} onCancel={_ => setModal(false)}>
          <p>{event.descrpition}</p>
          {event.image && (
            <div className="img__modal">
              <img src={(event.image as fileType).key} />
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

export default React.memo(EventCalendar)
