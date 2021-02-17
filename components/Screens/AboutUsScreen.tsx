import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

const AboutUsScreen = (props: { dataCMS: any }) => {
  // const { t } = useTranslation()
  const { dataCMS } = props
  return (
    <>
      <Header image={'/images/body/firenze_santa.png'}>
        <>
          <div className="main__section">
            <div className="video__about">
              <video src="" controls></video>
              <div className="secondary__title">
                <h1>{dataCMS?.title}</h1>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="text__history">
              <TargetText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam,
                    excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at
                    perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut
                    veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum ea repellendus sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis
                    in. Repudiandae dolores at perspiciatis. Non, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea repellendus
                    sequi fugit, placeat aut veniam ducimus rem numquam, excepturi eius ab omnis in. Repudiandae dolores at perspiciatis. Non, illo."
              />
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default AboutUsScreen
