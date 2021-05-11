import { Carousel } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'

const Gallery = ({ photos, contain }: { photos?: any[]; contain?: boolean }) => {
  const styles: React.CSSProperties = {
    objectFit: contain ? 'contain' : 'cover'
  }
  const { locale } = useTranslation()
  return (
    <div className="gallery">
      <Carousel autoplay={true}>
        {photos?.map((photo, i) => (
          <div className="item" key={i}>
            {photo[locale] && (
              <div className="text">
                <p>{photo[locale]}</p>
              </div>
            )}
            <img
              style={styles}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photo.photos?.key}`}
              alt="congregación de franciscanas de maria inmaculada"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default React.memo(Gallery)
