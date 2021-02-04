import React from 'react'
//next
import Head from 'next/head'
import { propsLayout } from '../types'
//Components
import Navigation from './Navigation'
import Footer from './Footer/Footer'

const Layout = (props: propsLayout) => {
  //props
  const { children, title } = props
  return (
    <>
      <Head>
        <title>{`Francicanas de María Inmaculada  | ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mainContainer">
          <Navigation />
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Layout
