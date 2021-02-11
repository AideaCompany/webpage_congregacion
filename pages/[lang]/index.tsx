import Layout from '../../components/Layout'
import Header from '../../components/HeaderIndex/Header'
import MainContent from '../../components/MainContent'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../providers/LenguageContext'
import { Localization } from '../../i18n/types'

export default function Home(props: { localization: Localization }) {
  return (
    <Layout title={'Inicio'}>
      <>
        <Header image={'firenze_santa'} title={'CONGREGRACIÓN DE FRANCISCANAS DE MARÍA INMACULADA'} />
        {/* <MainContent /> */}
      </>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
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
