import { useRouter } from 'next/router'
import React from 'react'
import useTranslation from '../hooks/useTranslations'
import Link from 'next/link'

const Navigation = () => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <nav className="mainContainerNav">
      <ul className="navBar">
        <li className="navBar--active">
          <Link href={{ pathname: '/[lang]', query: { lang: router.query.lang } }}>
            <a>{t('index').toUpperCase()}</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/aboutus', query: { lang: router.query.lang } }}>
            <a>{t('about').toUpperCase()}</a>
          </Link>
          <ul className="navBar__subMenu">
            <li>
              <Link href={{ pathname: '/[lang]/aboutus/carisma', query: { lang: router.query.lang } }}>
                <a>{t('ourCharisma')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/aboutus/province', query: { lang: router.query.lang } }}>
                <a>{t('provinces')}</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/fraternity', query: { lang: router.query.lang } }}>
            <a>{t('where').toUpperCase()}</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/our-work', query: { lang: router.query.lang } }}>
            <a>{t('ourWork').toUpperCase()}</a>
          </Link>
          <ul className="navBar__subMenu">
            <li>
              <Link href={{ pathname: '/[lang]/our-work/mision', query: { lang: router.query.lang } }}>
                <a>{t('misions')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/our-work/educational', query: { lang: router.query.lang } }}>
                <a>{t('educational')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/our-work/parroquial', query: { lang: router.query.lang } }}>
                <a>{t('parochial')}</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/be-franciscan', query: { lang: router.query.lang } }}>
            <a>{t('beFranciscan').toUpperCase()}</a>
          </Link>
          <ul className="navBar__subMenu">
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/aspirantate', query: { lang: router.query.lang } }}>
                <a>{t('aspirantate')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/postulancy', query: { lang: router.query.lang } }}>
                <a>{t('postulancy')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/novitiate', query: { lang: router.query.lang } }}>
                <a>{t('novitiate')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/junerado', query: { lang: router.query.lang } }}>
                <a>{t('junerado')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/permanent-education', query: { lang: router.query.lang } }}>
                <a>{t('permanentEducation')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/be-franciscan/lay-branch', query: { lang: router.query.lang } }}>
                <a>{t('layBranch')}</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/spirituality', query: { lang: router.query.lang } }}>
            <a>{t('spirituality').toUpperCase()}</a>
          </Link>
          <ul className="navBar__subMenu">
            <li>
              <Link href={{ pathname: '/[lang]/spirituality/san-francisco-de-asis', query: { lang: router.query.lang } }}>
                <a>{t('sanFranciscoDeAsis')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/spirituality/santa-clara-de-asis', query: { lang: router.query.lang } }}>
                <a>{t('santaClaraDeAsis')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/spirituality/madre-caridad-brader-zanher', query: { lang: router.query.lang } }}>
                <a>{t('madreCaridadBraderZanher')}</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={{ pathname: '/[lang]/eucharistic-soul', query: { lang: router.query.lang } }}>
            <a>{t('eucharisticSoul').toUpperCase()}</a>
          </Link>
          <ul className="navBar__subMenu">
            <li>
              <Link href={{ pathname: '/[lang]/eucharistic-soul/eucharistic-spirituality', query: { lang: router.query.lang } }}>
                <a>{t('eucharisticSpirituality')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/eucharistic-soul/perpetual-adoration', query: { lang: router.query.lang } }}>
                <a>{t('perpetualAdoration')}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/[lang]/eucharistic-soul/santuario', query: { lang: router.query.lang } }}>
                <a>{t('santuario')}</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
