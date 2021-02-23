import { capitalize } from 'fogg-utils'
import React from 'react'

export const News = (props: { title: string; description: string; img: string }) => {
  console.log(props)
  return (
    <div className="news__target">
      <div className="header__news">
        <h1 className="title__news title">{capitalize(props.title)}</h1>
      </div>
      <div className="body__news">
        <div className="summary__news">
          <p>{props.description}</p>
        </div>
        <div className="img__news">
          <img src={props.img} alt={`Congregación de Franciscanas de María Inmaculada ${props.title}`} />
        </div>
      </div>
    </div>
  )
}
