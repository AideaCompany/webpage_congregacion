import { capitalize } from 'fogg-utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const News = (props: { title: string; description: string; img: string; _id: string }) => {
  const router = useRouter()
  return (
    <Link href={{ pathname: '/[lang]/our-work/[news]', query: { lang: router.query.lang, news: props._id } }}>
      <a className="news__target">
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
      </a>
    </Link>
  )
}
