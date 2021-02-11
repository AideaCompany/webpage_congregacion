import Layout from '../../components/Layout'
import MainContent from '../../components/MainContent'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../providers/LenguageContext'
import { Localization } from '../../i18n/types'
import useTranslation from '../../hooks/useTranslations'
import Header from '../../components/HeaderHistory/Header'

export default function Home(props: { localization: Localization }) {
  const { t } = useTranslation()
  return (
    <Layout title={'¿Quiénes somos?'}>
      <>
        <Header />
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
