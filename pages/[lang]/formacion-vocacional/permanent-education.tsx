import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import PEducationScreen from '@/components/Screens/PEducationScreen'

import { useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import { getPages } from '@/graphql/queries'
import client from '@/graphql/config'

export default function aspirantate(props: { localization: Localization; data: any }) {
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
    <Layout title={props.localization.translations.permanentEducation}>
      <>
        {data && (
          <PEducationScreen
            colors={data.colors}
            data={data}
            carousel={data.carousel}
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
  const data = (
    (await client.query({ query: gql(getPages), variables: { name: 'permanentEducation' } })) as {
      data: { getPages: any }
    }
  ).data.getPages
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
