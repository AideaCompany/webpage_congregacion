import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import OurWork from '@/components/Screens/ourWorkScreen'
import { useState, useEffect } from 'react'
import client from '@/graphql/config'
import { gql } from '@apollo/client'
import { getPages, listNews } from '@/graphql/queries'
import { INews } from '@/types/types'
export default function index(props: { localization: Localization; data_news: INews[]; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [news, setNews] = useState<INews[]>()
  useEffect(() => {
    setDataCMS(props.data[props.localization.locale])
    setData(props.data)
    setNews(props.data_news)
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  return (
    <Layout title={props.localization.translations.ourWork}>
      <>
        <>{dataCMS && data && <OurWork dataNews={news} photos={data.photos} mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'beFranciscan' } })) as { data: { getPages: any } }).data.getPages
  const data_news = ((await client.query({ query: gql(listNews) })) as { data: { listNews: INews[] } }).data.listNews
  return {
    props: {
      localization,
      data,
      data_news
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
