import ProvinceScreen from '@/components/Screens/ProvinceScreen'
import client from '@/graphql/config'
import { getFraternityWeb, listFraternityWeb } from '@/graphql/queries'
import { iCountry, IFraternity, Province } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import _ from 'underscore'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function index(props: { localization: Localization; provinces: Province[] }) {
  return (
    <Layout title={props.localization.translations.where}>
      <ProvinceScreen provinces={props.provinces} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')
  const fraternities = (
    (await client.query({
      query: gql(getFraternityWeb),
      variables: { country: (ctx.params as ParsedUrlQuery).id }
    })) as {
      data: { getFraternityWeb: IFraternity[] }
    }
  ).data.getFraternityWeb
  const provinces = fraternities.map(e => e.province)
  var uniqueProvince = _.uniq(provinces, x => (x as Province)._id)
  return {
    props: {
      provinces: uniqueProvince.reverse(),
      localization
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await client.cache.reset()
  const fraternityContry = (await client.query({ query: gql(listFraternityWeb) })).data.listFraternityWeb as IFraternity[]
  const countries = _.uniq(fraternityContry, x => {
    return (x.country as iCountry)?._id
  })
  const pathsCountry = countries.map(e => e.country as iCountry).filter(e => !!e)
  return {
    paths: pathsCountry
      .map(country => ['es', 'en', 'fr', 'de', 'it'].map(lang => ({ params: { lang, id: country._id } })))
      .flat(),
    fallback: false
  }
}
