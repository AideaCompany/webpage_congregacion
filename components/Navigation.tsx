import React from 'react'
import useTranslation from '../hooks/useTranslations'

const Navigation = () => {
  const { t, locale } = useTranslation()
  return (
    <nav className="mainContainerNav">
      <ul className="navBar">
        <li>
          <a href="#">{t('index').toUpperCase()}</a>
        </li>
        <li className="active">
          <a href="/about">{t('about').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('where').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('ourWork').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('beFranciscan').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('spirituality').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('eucharisticSoul').toUpperCase()}</a>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
