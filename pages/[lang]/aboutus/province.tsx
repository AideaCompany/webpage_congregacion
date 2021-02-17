import Layout from '../../../components/Layout'
import ProvinceScreen from '../../../components/Screens/ProvinceScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import client from '@/graphql/config'
import { getPages } from '@/graphql/queries'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'

export default function Province(props: { localization: Localization }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  const getData = async () => {
    const res = (await client.query({ query: gql(getPages), variables: { name: 'province' } })) as { data: { getPages: any } }
    setDataCMS(res.data.getPages[props.localization.locale])
    setData(res.data.getPages)
  }
  return (
    <Layout title={'Inicio'}>
      <>
        <> {dataCMS && data && <ProvinceScreen mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  return {
    props: {
      localization
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
