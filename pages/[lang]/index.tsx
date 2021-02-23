import Layout from '../../components/Layout'
import HomeScreen from '../../components/Screens/HomeScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../providers/LenguageContext'
import { Localization } from '../../i18n/types'
import { useEffect, useState } from 'react'
import client from '@/graphql/config'
import { gql } from '@apollo/client'
import { getLastNews, getPages } from '@/graphql/queries'
import { INews } from '@/types/types'

export default function index(props: { localization: Localization; data_news: INews; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [news, setNews] = useState<INews>()

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
    <Layout title={props.localization.translations.index}>
      <>{dataCMS && data && <HomeScreen dataNews={news} photos={data.photos} mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  const data_news = ((await client.query({ query: gql(getLastNews) })) as { data: { getLastNews: INews } }).data.getLastNews
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'homePage' } })) as { data: { getPages: any } }).data.getPages

  return {
    props: {
      localization,
      data_news,
      data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
