import client from '@/graphql/config'
import { getPages } from '@/graphql/queries'
import { gql } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import SocialMedia from './SocialMedia'

const Footer = () => {
  // const { t } = useTranslation()

  const [dataCMS, setDataCMS] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await client.query({ query: gql(getPages), variables: { name: 'footer' } })
    setDataCMS(data.getPages.es)
  }
  return (
    <footer className="footer">
      <div className="contact">
        <SocialMedia data={dataCMS} />
        <Contact data={dataCMS} />
      </div>
    </footer>
  )
}

export default React.memo(Footer)
