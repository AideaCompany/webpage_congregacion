import Layout from '../../../components/Layout'
import EuchSpiritualityScreen from '@/components/Screens/EuchSpiritualityScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'

export default function eucharisticSpirituality(props: { localization: Localization }) {
    return (
        <Layout title={props.localization.translations.eucharisticSpirituality}>
            <>
                <EuchSpiritualityScreen />
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
