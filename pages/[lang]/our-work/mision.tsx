import MisionScreen from '@/components/Screens/MisionsScreen'
import client from '@/graphql/config'
import { getMisionWebToWeb, getPages } from '@/graphql/queries'
import { NewsOBject } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function misions(props: { localization: Localization; data_misions: NewsOBject[]; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()
  const [misions, setMisions] = useState<NewsOBject[]>()

  useEffect(() => {
    setDataCMS(props.data[props.localization.locale])
    setData(props.data)
    setMisions(props.data_misions)
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  return (
    <Layout title={props.localization.translations.misions}>
      <>
        <>
          {data && (
            <MisionScreen
              misions={misions as NewsOBject[]}
              photos={data.photos}
              mainPhoto={data.mainPhoto.key}
              dataCMS={dataCMS}
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
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'misions' } })) as { data: { getPages: any } })
    .data.getPages
  const data_misions = ((await client.query({ query: gql(getMisionWebToWeb), variables: { type: 'Mision' } })) as {
    data: { getMisionWebToWeb: any }
  }).data.getMisionWebToWeb
  return {
    props: {
      localization,
      data_misions,
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
