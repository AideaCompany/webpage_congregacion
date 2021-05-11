import Layout from '@/components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '@/providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import CarismaScreen from '@/components/Screens/carismaScreen'
import { useEffect, useState } from 'react'
import { getPages } from '@/graphql/queries'
import { gql } from '@apollo/client'
import client from '@/graphql/config'

export default function Carisma(props: { localization: Localization; data: any }) {
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
    <Layout title={'Inicio'}>
      <>
        {' '}
        {data && (
          <CarismaScreen
            carousel={data.carousel}
            photos={data.photos}
            colors={data.colors}
            mainPhoto={data.mainPhoto.key}
            dataCMS={dataCMS}
            background={data.background}
            select_back={data.select_back}
          />
        )}{' '}
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'ourCharisma' } })) as { data: { getPages: any } })
    .data.getPages
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
