import React from 'react'
import useTranslation from '../hooks/useTranslations'

const Navigation = () => {
  const { t, locale } = useTranslation()
  return (
    <nav className="mainContainerNav">
      <ul className="navBar">
        <li className="navBar--active">
          <a href="#">{t('index').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('about').toUpperCase()}</a>
          <ul className="navBar__subMenu">
            <li>
              <a href="#">{t('congregationHistory')}</a>
            </li>
            <li>
              <a href="#">{t('ourCharisma')}</a>
            </li>
            <li>
              <a href="#">{t('provinces')}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t('where').toUpperCase()}</a>
        </li>
        <li>
          <a href="#">{t('ourWork').toUpperCase()}</a>
          <ul className="navBar__subMenu">
            <li>
              <a href="#">{t('misions')}</a>
            </li>
            <li>
              <a href="#">{t('educational')}</a>
            </li>
            <li>
              <a href="#">{t('parochial')}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t('beFranciscan').toUpperCase()}</a>
          <ul className="navBar__subMenu">
            <li>
              <a href="#">{t('vocationMinistry')}</a>
            </li>
            <li>
              <a href="#">{t('aspirantate')}</a>
            </li>
            <li>
              <a href="#">{t('postulancy')}</a>
            </li>
            <li>
              <a href="#">{t('novitiate')}</a>
            </li>
            <li>
              <a href="#">{t('junerado')}</a>
            </li>
            <li>
              <a href="#">{t('permanentEducation')}</a>
            </li>
            <li>
              <a href="#">{t('layBranch')}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t('spirituality').toUpperCase()}</a>
          <ul className="navBar__subMenu">
            <li>
              <a href="#">{t('sanFranciscoDeAsis')}</a>
            </li>
            <li>
              <a href="#">{t('santaClaraDeAsis')}</a>
            </li>
            <li>
              <a href="#">{t('madreCaridadBraderZanher')}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t('eucharisticSoul').toUpperCase()}</a>
          <ul className="navBar__subMenu">
            <li>
              <a href="#">{t('eucharisticSpirituality')}</a>
            </li>
            <li>
              <a href="#">{t('perpetualAdoration')}</a>
            </li>
            <li>
              <a href="#">{t('santuario')}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
