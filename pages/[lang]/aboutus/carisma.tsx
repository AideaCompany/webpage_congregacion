import Layout from '@/components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '@/providers/LenguageContext'
import { Localization } from '../../../i18n/types'
import CarismaScreen from '@/components/Screens/carismaScreen'

export default function Carisma(props: { localization: Localization }) {
  return (
    <Layout title={'Inicio'}>
      <>
        <CarismaScreen />
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
