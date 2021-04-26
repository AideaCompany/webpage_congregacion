import client from '@/graphql/config'
import { getFraternityWeb, listFraternityWeb } from '@/graphql/queries'
import { iCountry, IFraternity } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import _ from 'underscore'
import Layout from '../../../components/Layout'
import FraternityScreen from '../../../components/Screens/FraternityScreen'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function index(props: { localization: Localization; fraternities: IFraternity[] }) {
  return (
    <Layout title={props.localization.translations.where}>
      <FraternityScreen fraternities={props.fraternities} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const fraternities = ((await client.query({ query: gql(getFraternityWeb), variables: { country: (ctx.params as ParsedUrlQuery).id } })) as {
    data: { getFraternityWeb: IFraternity[] }
  }).data.getFraternityWeb
  return {
    props: {
      fraternities,
      localization
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await client.cache.reset()
  const provinceContry = (await client.query({ query: gql(listFraternityWeb) })).data.listFraternityWeb as IFraternity[]
  const countries = _.uniq(provinceContry, x => {
    return (x.country as iCountry)._id
  })
  const pathsCountry = countries.map(e => e.country as iCountry)
  return {
    paths: pathsCountry.map(country => ['es', 'en'].map(lang => ({ params: { lang, id: country._id } }))).flat(),
    fallback: false
  }
}
