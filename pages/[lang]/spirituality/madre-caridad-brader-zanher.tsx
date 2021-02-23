import MadreScreen from '@/components/Screens/MadreScreen'
import client from '@/graphql/config'
import { getPages, listBlogs } from '@/graphql/queries'
import { INews } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function madreCaridadBrader(props: { localization: Localization; data: any; blogs: INews[] }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [blogs, setBlogs] = useState<INews[]>()

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
        <>{dataCMS && data && <MadreScreen dataBlogs={blogs as INews[]} photos={data.photos} mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'braderZanher' } })) as { data: { getPages: any } }).data.getPages
  const blogs = ((await client.query({ query: gql(listBlogs) })) as { data: { listBlogs: INews[] } }).data.listBlogs
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
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
