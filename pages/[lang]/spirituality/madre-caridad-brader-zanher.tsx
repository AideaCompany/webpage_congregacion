import Layout from '../../../components/Layout'
import MadreScreen from '@/components/Screens/MadreScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'

export default function madreCaridadBrader(props: { localization: Localization }) {
    return (
        <Layout title={props.localization.translations.madreCaridadBraderZanher}>
            <>
                <MadreScreen />
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
