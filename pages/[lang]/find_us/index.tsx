import FindUsScreen from '@/components/Screens/FindUsScreen'
import client from '@/graphql/config'
import { listFraternityWeb } from '@/graphql/queries'
import { iCountry, IFraternity, Province, typeMapa } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import _ from 'underscore'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function index(props: { localization: Localization }) {
  const [country, setCountry] = useState<typeMapa[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await client.cache.reset()
    const fraternityCountry = (await client.query({ query: gql(listFraternityWeb) })).data.listFraternityWeb as IFraternity[]
    const countries = _.uniq(fraternityCountry, x => {
      return (x.country as iCountry)._id
    })

    const newCountries = countries.map(e => {
      return { country: e.country as iCountry, province: e.province as Province }
    })

    setCountry(newCountries)
  }
  return (
    <Layout title={props.localization.translations.where}>
      <FindUsScreen countries={country} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  await client.cache.reset()
  const localization = getLocalizationProps(ctx, 'auth')

  return {
    props: {
      localization
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['es', 'en', 'fr', 'de', 'it'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
