import NewsScreen from '@/components/Screens/NewsScreen'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import client from '../../../graphql/config'
import { getIds, getNews, getPages } from '../../../graphql/queries'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { NewsOBject } from '../../../types/types'
export default function index(props: { localization: Localization; data_news: NewsOBject; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [news, setNews] = useState<NewsOBject>()
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
        <>{dataCMS && data && <NewsScreen mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} dataNews={news as NewsOBject} />}</>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'beFranciscan' } })) as { data: { getPages: any } }).data.getPages
  const data_news = ((await client.query({ query: gql(getNews), variables: { _id: { _id: ctx.params?.news as string } } })) as {
    data: { getNews: NewsOBject }
  }).data.getNews
  return {
    props: {
      localization,
      data,
      data_news
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await client.cache.reset()
  const _ids = ((await client.query({ query: gql(getIds) })) as { data: { getIds: string[] } }).data.getIds
  return {
    paths: _ids.map(news => ['es', 'en'].map(lang => ({ params: { lang, news } }))).flat(),
    fallback: false
  }
}
