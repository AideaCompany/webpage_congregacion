import client from '@/graphql/config'
import { getPages, listNews } from '@/graphql/queries'
import { NewsOBject } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import HomeScreen from '../../components/Screens/HomeScreen'
import { Localization } from '../../i18n/types'
import { getLocalizationProps } from '../../providers/LenguageContext'

export default function index(props: { localization: Localization; data_news: NewsOBject[]; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [news, setNews] = useState<NewsOBject[]>()

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
      <>
        {data && (
          <HomeScreen
            dataNews={news as NewsOBject[]}
            colors={data.colors}
            photos={data.photos}
            mainPhoto={data.mainPhoto.key}
            dataCMS={dataCMS}
          />
        )}
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const data_news = ((await client.query({ query: gql(listNews) })) as { data: { listNews: NewsOBject[] } }).data.listNews
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'homePage' } })) as { data: { getPages: any } })
    .data.getPages

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
    paths: ['es', 'en', 'fr', 'de', 'it'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
