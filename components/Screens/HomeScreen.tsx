import React from 'react'
import useTranslation from '../../hooks/useTranslations'
//components
import Header from '@/components/header'
import TargetText from '../TargetText'
//antd
import { Carousel } from 'antd'
import { News } from '../News'

const HomeScreen = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header image={'/images/body/firenze_santa.png'}>
        <>
          <div className="main__section">
            <div className="main__title">
              <h1>CONGREGACIÓN DE FRANCISCANAS DE MARIA INMACULADA</h1>
            </div>
          </div>
          <div className="main__section">
            <div className="about__summary">
              <TargetText
                title="Nosotros"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam,
                    excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at
                    perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut
                    veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis
                    in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus
                    sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo."
              />

              <div className="images">
                <div>
                  <div className="left__images">
                    <img src={'/images/index/hermana1.png'} />
                    <img src={'/images/index/hermana2.png'} />
                  </div>
                  <div className="right__images">
                    <img src={'/images/index/hermana3.png'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="places__summary">
              <div className="images__sedes">
                <div className="carousel__sedes">
                  <Carousel>
                    <div>
                      <div className="item">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <div className="item">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <div className="item">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
              <TargetText
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi mollitia incidunt sed praesentium eos consequuntur. Earum tempore
                    numquam alias nihil harum nulla. Ea voluptatibus minima deserunt facere eius rerum molestias! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Nisi mollitia incidunt sed praesentium eos consequuntur. Earum tempore numquam alias nihil harum
                    nulla. Ea voluptatibus minima deserunt facere eius rerum molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                    mollitia incidunt sed praesentium eos consequuntur. Earum tempore numquam alias nihil harum nulla. Ea voluptatibus minima deserunt
                    facere eius rerum molestias!"
                title="Nuestras Sedes"
              />
            </div>
          </div>
          <div className="main__section">
            <div className="news__index">
              <News />
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default HomeScreen
