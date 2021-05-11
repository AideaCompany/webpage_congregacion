import Layout from '../../../components/Layout'
import PerpetualScreen from '@/components/Screens/PerpetualScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'

import { useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import { getPages } from '@/graphql/queries'
import client from '@/graphql/config'

export default function perpetualAdoration(props: { localization: Localization; data: any }) {
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
    <Layout title={props.localization.translations.perpetualAdoration}>
      <>
        {data && (
          <PerpetualScreen
            background={data.background}
            select_back={data.select_back}
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
    (await client.query({ query: gql(getPages), variables: { name: 'perpetualAdoration' } })) as {
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
