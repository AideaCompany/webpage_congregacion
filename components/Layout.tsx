import React from 'react'
//next
import Head from 'next/head'
import { propsLayout } from '../types/types'
//Components
import Navigation from './Navigation'

const Layout = (props: propsLayout) => {
  //props
  const { children, title } = props

  return (
    <>
      <Head>
        <title>{`Francicanas de María Inmaculada  | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Congregación de Franciscanas de María Inmaculada" />
        <meta name="author" content="Aidea S.A.S." />
        <meta property="og:title" content="Francicanas de María Inmaculada" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Congregación de Franciscanas de María Inmaculada" />
      </Head>
      <main>
        <div className="mainContainer">
          <Navigation />
          {children}
          {/* <Footer /> */}
        </div>
      </main>
    </>
  )
}

export default Layout
