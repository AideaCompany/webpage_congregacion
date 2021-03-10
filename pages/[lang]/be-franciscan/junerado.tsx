import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import JuneradoScreen from '@/components/Screens/juneradoScreen'
import { useEffect, useState } from 'react'
import client from '@/graphql/config'
import { getPages } from '@/graphql/queries'
import { gql } from '@apollo/client'

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
    <Layout title={props.localization.translations.junerado}>
      <>
        <>{dataCMS && data && <JuneradoScreen photos={data.photos} mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>{' '}
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const data = ((await client.query({ query: gql(getPages), variables: { name: 'junerado' } })) as { data: { getPages: any } }).data.getPages
  return {
    props: {
      localization,
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
