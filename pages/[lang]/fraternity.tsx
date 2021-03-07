import FraternityScreen from '@/components/Screens/franternityScreen'
import client from '@/graphql/config'
import { getFraternityWeb } from '@/graphql/queries'
import { IFraternity } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { Localization } from '../../i18n/types'
import { getLocalizationProps } from '../../providers/LenguageContext'

export default function index(props: { localization: Localization; fraternities: IFraternity[] }) {
  return (
    <Layout title={props.localization.translations.where}>
      <FraternityScreen fraternities={props.fraternities} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, 'auth')
  const fraternities = ((await client.query({ query: gql(getFraternityWeb) })) as { data: { getFraternityWeb: IFraternity[] } }).data.getFraternityWeb
  return {
    props: {
      fraternities,
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
