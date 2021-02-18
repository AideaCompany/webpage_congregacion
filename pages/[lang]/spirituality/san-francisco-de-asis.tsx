import Layout from '../../../components/Layout'
import SaintScreen from '@/components/Screens/SaintScreen'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getLocalizationProps } from '../../../providers/LenguageContext'
import { Localization } from '../../../i18n/types'

export default function sanFranciscoDeAsis(props: { localization: Localization }) {
  const [dataCMS, setDataCMS] = useState<any>()
  const [data, setData] = useState<any>()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (props.localization.locale && data) {
      setDataCMS(data[props.localization.locale])
    }
  }, [props.localization.locale])

  const getData = async () => {
    const res = (await client.query({ query: gql(getPages), variables: { name: '' } })) as { data: { getPages: any } }
    console.log(res.data.getPages)
    setDataCMS(res.data.getPages[props.localization.locale])
    setData(res.data.getPages)
  }
  return (
    <Layout title={props.localization.translations.sanFranciscoDeAsis}>
      <>
        <SaintScreen img="/images/spirituality/san-francisco-de-asis.png" title="SAN FRANCISCO DE ASÍS" background="/images/spirituality/index.png" />
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
