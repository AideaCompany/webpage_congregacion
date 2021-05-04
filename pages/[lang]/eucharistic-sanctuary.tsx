import Layout from '../../components/Layout'
import EucharisticSanctuaryScreen from '../../components/Screens/EucharisticSanctuaryScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../providers/LenguageContext'
import { Localization } from '../../i18n/types'

export default function eucharisticSanctuary(props: { localization: Localization }) {
  return (
    <Layout title={'Inicio'}>
      <>
        <EucharisticSanctuaryScreen />
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
    paths: ['es', 'en', 'fr', 'de', 'it'].map(lang => ({ params: { lang } })),
    fallback: false
  }
}
