import React from 'react'

const TargetText = (props: { title: string; img?: string }) => {
    return (
        <div className="card__image">
            <div>
                <h1 className="title">{props.title}</h1>
                {props.img && <img src={props.img} alt="#TODO SEO" />}
            </div>
        </div>
    )
}

export default TargetText