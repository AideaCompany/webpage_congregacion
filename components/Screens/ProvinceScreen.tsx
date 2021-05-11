import { Province } from '@/types/types'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
import Gallery from '../Gallery'
import Header from '../header'
import TargetText from '../TargetText'

const ProvinceScreen = (props: { provinces: Province[] }) => {
  const { locale } = useTranslation()

  const { provinces: itemsSlider } = props
  return (
    <Header>
      <>
        {itemsSlider?.map((e, i) => (
          <div key={i} className="main__section">
            <div className="province__container">
              {/* <div className="cardProvinces">
                <TargetText classname="provincesTarget" text={e[locale]?.text}></TargetText>
              </div> */}
              <div className="content">
                <Gallery photos={e?.carousel?.find(j => j.name === 'carousel')?.carousel}></Gallery>

                <TargetText classname="provincesTarget" text={e[locale]?.text}></TargetText>
              </div>
              <div className="back"></div>
              <img
                src={e.photo?.key ? e.photo?.key : '/images/provinces/province.jpg'}
                alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA"
              />
            </div>
          </div>
        ))}
      </>
    </Header>
  )
}

export default ProvinceScreen
