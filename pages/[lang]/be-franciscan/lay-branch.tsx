import Layout from '../../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import LayBranchScreen from '@/components/Screens/LayBranchScreen'
import client from '@/graphql/config'
import { getPages } from '@/graphql/queries'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'

export default function aspirantate(props: { localization: Localization }) {
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
    const res = (await client.query({ query: gql(getPages), variables: { name: 'layBranch' } })) as { data: { getPages: any } }
    console.log(res.data.getPages)
    setDataCMS(res.data.getPages[props.localization.locale])
    setData(res.data.getPages)
  }
  return (
    <Layout title={props.localization.translations.layBranch}>
      <>{dataCMS && data && <LayBranchScreen photos={data.photos} mainPhoto={data.mainPhoto.key} dataCMS={dataCMS} />}</>
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
