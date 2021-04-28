import client from '@/graphql/config'
import { getProvincesWeb } from '@/graphql/queries'
import { Province } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../components/Layout'
import ProvinceScreen from '../../../components/Screens/ProvinceScreen'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function ProvincePage(props: { localization: Localization; provinces: Province[] }) {
  return (
    <Layout title={props.localization.translations.provinces}>
      <ProvinceScreen provinces={props.provinces} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  await client.cache.reset()
  const provinces = ((await client.query({ query: gql(getProvincesWeb) })) as { data: { getProvincesWeb: Province[] } }).data.getProvincesWeb
  return {
    props: {
      localization,
      provinces
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
