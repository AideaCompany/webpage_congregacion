import { Carousel } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
import TargetText from './TargetText'

const Gallery = ({
  photos,
  contain,
  text_back,
  link
}: {
  photos?: any[]
  contain?: boolean
  text_back?: string
  link?: string
}) => {
  const styles: React.CSSProperties = {
    objectFit: contain ? 'contain' : 'cover'
  }
  const { locale } = useTranslation()

  return (
    <>
      <div className="gallery">
        <Carousel autoplay={true}>
          {photos?.map((photo, i) => (
            <div className="item" key={i}>
              {photo[locale] && (
                <div className="text">
                  <p>{photo[locale]}</p>
                </div>
              )}
              {photo.link ? (
                <div className="video">
                  <div className="iframe">
                    <iframe
                      src={photo.link}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <img
                  style={styles}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photo.photos?.key}`}
                  alt="congregación de franciscanas de maria inmaculada"
                />
              )}
            </div>
          ))}
        </Carousel>

        {text_back && <TargetText text={text_back} />}
      </div>
    </>
  )
}

export default React.memo(Gallery)
