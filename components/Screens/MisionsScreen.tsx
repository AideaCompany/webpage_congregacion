import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'
// import TargetText from '../TargetText'

const MisionScreen = () => {
  // const { t } = useTranslation()

  const [data, setData] = useState<any[]>()

  useEffect(() => {
    var temp = []
    for (let k = 0; k < 10; k++) {
      temp.push(k)
    }
    setData(temp)
  }, [])

  return (
    <>
      <Header image={'/images/ourwork/hermanas.png'}>
        <>
          <div className="main__section">
            <div className="mision__container">
              <div className="carousel__mision">
                <Carousel>
                  {data?.map(e => (
                    <div>
                      <div className="item">
                        <div className="media">
                          <img src="/images/franciscan/dommie_carousel.png" alt="CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA" />
                        </div>
                        <div className="text">
                          <TargetText
                            title={'MISION'}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam,
                    excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at
                    perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut
                    veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis
                    in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus
                    sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="secondary__title">
                <h1>OBRAS DE MISIÓN</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MisionScreen
