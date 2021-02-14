import React from 'react'

const HeaderCard = (props: { title: string; text: string, img: string }) => {
    return (
        <div className="card__cont">
            <div className="header">
                <img src={props.img} alt="" />
            </div>
            <div className="contenido">
                <h1 className="subtitle">{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeaderCard
