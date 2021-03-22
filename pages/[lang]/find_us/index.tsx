import FindUsScreen from '@/components/Screens/FindUsScreen'
import client from '@/graphql/config'
import { listProvinces } from '@/graphql/queries'
import { iCountry, Province } from '@/types/types'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import _ from 'underscore'
import Layout from '../../../components/Layout'
import { Localization } from '../../../i18n/types'
import { getLocalizationProps } from '../../../providers/LenguageContext'

export default function index(props: { localization: Localization }) {
  const [country, setCountry] = useState<iCountry[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const provinceContry = (await client.query({ query: gql(listProvinces) })).data.listProvinces as Province[]

    const countries = _.uniq(provinceContry, x => {
      return (x.country as iCountry)._id
    })
    setCountry(countries.map(e => e.country as iCountry))
  }
  return (
    <Layout title={props.localization.translations.where}>
      <FindUsScreen countries={country as iCountry[]} />
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
    paths: ['es', 'en'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
