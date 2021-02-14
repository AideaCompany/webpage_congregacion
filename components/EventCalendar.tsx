import { Calendar, Modal } from 'antd'
import React, { useState } from 'react'

function onPanelChange(value: any, mode: any) {
    console.log(value.format('YYYY-MM-DD'), mode);
}

const dateCellRender = (data: any, val: any, setEvent, setModal) => {
    const events = data.filter(e => {
        const start = new Date(e.start)
        return start.getDate() == val.date() && start.getMonth() == val.month() && start.getFullYear() == val.year()
    })
    return (
        <ul className="events">
            {events.map((item, i) => (
                <li key={i} onClick={_ => { setEvent(item), setModal(true) }}>
                    <div className='eventCell'>{item.title}</div>
                </li>
            ))}
        </ul>
    );
}

const EventCalendar = (props: { events: [{ start: string, title: string, img: string, desc: string }] }) => {
    const [event, setEvent] = useState()
    const [modal, setModal] = useState(false)
    return (
        <div className="calendar__cont">
            <Calendar onPanelChange={onPanelChange} dateCellRender={val => dateCellRender(props.events, val, setEvent, setModal)} />
            {event && <Modal
                title={event.title}
                visible={modal}
                onOk={_ => setModal(false)}
                onCancel={_ => setModal(false)}
            >
                <p>{event.desc}</p>
                {event.img && <div className='img__modal'><img src={event.img} /></div>}
            </Modal>}
        </div>
    )
}

export default EventCalendar