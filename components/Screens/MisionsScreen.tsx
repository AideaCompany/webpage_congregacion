import { PropsMisionScreen } from '@/types/types'
import { Carousel } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
import Gallery from '../Gallery'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'
// import TargetText from '../TargetText'

const MisionScreen = (props: PropsMisionScreen) => {
  const { locale } = useTranslation()
  console.log(props.misions)
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="mision__container">
              <div dangerouslySetInnerHTML={{ __html: props.dataCMS?.title }} className="secondary__title"></div>
              <div className="carousel__mision">
                <Carousel>
                  {props.misions?.map(mision => (
                    <div key={mision._id}>
                      <div className="item_carousel">
                        <div className="media">
                          <Gallery contain photos={mision.carousel?.find(e => e.name === 'gallery').carousel} />

                          {/* <img src={(mision.image as fileType).key} alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" /> */}
                        </div>
                        <div className="text_mision">
                          <div>
                            <TargetText
                              classname="misionsTarget"
                              title={mision[locale]?.title}
                              text={mision[locale]?.description}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MisionScreen
