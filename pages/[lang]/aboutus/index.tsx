import Layout from '../../../components/Layout'
import AboutUsScreen from '../../../components/Screens/AboutUsScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import { useState, useEffect } from 'react'
import client from '@/graphql/config'
import { gql } from '@apollo/client'
import { getPages } from '@/graphql/queries'

export default function aboutUs(props: { localization: Localization; data: any }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()

  useEffect(() => {
    setDataCMS(props.data[props.localization.locale])
    setData(props.data)
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  return (
    <Layout title={props.localization.translations.about}>
      <>
        {data && (
          <AboutUsScreen
            photos={data.photos}
            carousel={data.carousel}
            colors={data.colors}
            mainPhoto={data.mainPhoto.key}
            dataCMS={dataCMS}
          />
        )}
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  await client.cache.reset()
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'about' } })) as { data: { getPages: any } }).data
    .getPages
  return {
    props: {
      localization,
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
