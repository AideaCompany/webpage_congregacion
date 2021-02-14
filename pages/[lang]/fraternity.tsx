import Layout from '../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../providers/LenguageContext'
import { Localization } from '../../i18n/types'
import FraternityScreen from '@/components/Screens/franternityScreen'

export default function index(props: { localization: Localization }) {
  return (
    <Layout title={props.localization.translations.where}>
      <>
        <FraternityScreen />
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
