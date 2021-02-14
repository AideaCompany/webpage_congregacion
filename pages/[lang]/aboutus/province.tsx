import Layout from '../../../components/Layout'
import ProvinceScreen from '../../../components/Screens/ProvinceScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'

export default function Province(props: { localization: Localization }) {
  return (
    <Layout title={'Inicio'}>
      <>
        <ProvinceScreen />
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
