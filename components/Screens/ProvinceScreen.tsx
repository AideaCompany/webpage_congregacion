import { iCountry, Province } from '@/types/types'
import { capitalize } from 'fogg-utils'
import useTranslation from 'hooks/useTranslations'
import React from 'react'

import Header from '../header'
import TargetText from '../TargetText'

const ProvinceScreen = (props: { provinces: Province[] }) => {
  const { t } = useTranslation()

  const { provinces: itemsSlider } = props

  return (
    <Header>
      <>
        {itemsSlider?.map((e, i) => (
          <div key={i} className="main__section">
            <div className="province__container">
              <div className="secondary__title cardProvinces">
                <TargetText classname="provincesTarget" title={`<h2>${e.name as string}</h2>`}>
                  <>
                    <ul>
                      <li>
                        {t('country')}: {capitalize((e.country as iCountry).name)}
                      </li>
                      <li>
                        {t('city')}: {capitalize(e.city)}
                      </li>
                      <li>
                        {t('address')}: {capitalize(e.address)}
                      </li>
                      <li>
                        <a target="__blank" href={e.link}>
                          {t('webSite')}
                        </a>
                      </li>
                    </ul>
                  </>
                </TargetText>
              </div>
              <div className="carousel__provinces">
                <div>
                  <div className="item">
                    <div className="back"></div>
                    <img
                      src={e.photo?.key ? e.photo?.key : '/images/provinces/province.jpg'}
                      alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </Header>
  )
}

export default ProvinceScreen
