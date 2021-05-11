import { PropsNewsScreen } from '@/types/types'
import { getTime } from '@/utils/utils'
import { capitalize } from 'fogg-utils'
import React from 'react'
//i18n
import useTranslation from '../../hooks/useTranslations'
import Header from '../header'

// import TargetText from '../TargetText'

const NewsScreen = (props: PropsNewsScreen) => {
  const { locale } = useTranslation()

  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props.mainPhoto}>
        <>
          <div className="main__section">
            <div className="news__container">
              <div className="container__text">
                <img
                  src={props.dataNews.image.key}
                  alt={`CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA ${props.dataNews[locale]?.title}`}
                />
                <div className="content">
                  <h1 className="title mainTitle">{capitalize(props.dataNews[locale]?.title)}</h1>
                  <div dangerouslySetInnerHTML={{ __html: props.dataNews[locale]?.text as string }}></div>
                  <span>{getTime(parseInt(props.dataNews.date as string))}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default NewsScreen
