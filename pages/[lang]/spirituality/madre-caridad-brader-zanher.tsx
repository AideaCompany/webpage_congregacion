import MadreScreen from '@/components/Screens/MadreScreen'
import client from '@/graphql/config'
import { getPages, listBlogs } from '@/graphql/queries'
import { NewsOBject } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function madreCaridadBrader(props: { localization: Localization; data: any; blogs: NewsOBject[] }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [blogs, setBlogs] = useState<NewsOBject[]>()

  useEffect(() => {
    setDataCMS(props.data[props.localization.locale])
    setData(props.data)
    setBlogs(props.blogs)
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  return (
    <Layout title={props.localization.translations.madreCaridadBraderZanher}>
      <>
        <>
          {data && (
            <MadreScreen
              carousel={data.carousel}
              colors={data.colors}
              dataBlogs={blogs as NewsOBject[]}
              photos={data.photos}
              mainPhoto={data.mainPhoto.key}
              dataCMS={dataCMS}
              background={data.background}
              select_back={data.select_back}
            />
          )}
        </>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const data = (
    (await client.query({ query: gql(getPages), variables: { name: 'braderZanher' } })) as {
      data: { getPages: any }
    }
  ).data.getPages
  const blogs = ((await client.query({ query: gql(listBlogs) })) as { data: { listBlogs: NewsOBject[] } }).data.listBlogs
  return {
    props: {
      localization,
      data,
      blogs
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en', 'fr', 'de', 'it'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
