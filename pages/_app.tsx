import 'antd/dist/antd.css'
import '../styles/styles.scss'
import { useEffect } from 'react'
//Provider
import { getLocalizationProps, LanguageProvider } from '../providers/LenguageContext'
//next
import App from 'next/app'
import { AppProps } from 'next/dist/next-server/lib/router/router'

//i18n
import defaultStrings from '../i18n/locales/es'
import { Localization } from '../i18n/types'
import { getInitialLocale } from '../i18n/getInitialLocale'
import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/config'

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (router.pathname === '/') {
      router.push(`/${getInitialLocale()}`)
    }
  }, [router])

  //functions
  const getLenguaje = (lng: string): Localization => {
    var local: Localization
    if (lng) {
      local = getLocalizationProps({ params: { lang: lng } }, 'user') as Localization
    } else {
      local = {
        locale: 'es', // default lang
        translations: defaultStrings.common, // default translations TODO: what to do here?
        namespace: 'common'
      } as Localization
    }
    return local
  }

  return (
    <ApolloProvider client={client}>
      <LanguageProvider localization={getLenguaje(pageProps.lang)}>
        <Component {...pageProps} />
      </LanguageProvider>
    </ApolloProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  appProps.pageProps.lang = appContext.router.query.lang
  return { ...appProps }
}
