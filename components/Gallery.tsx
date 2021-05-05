import { Carousel } from 'antd'
import React from 'react'

const Gallery = ({ photos, contain }: { photos?: any[]; contain?: boolean }) => {
  const styles: React.CSSProperties = {
    objectFit: contain ? 'contain' : 'cover'
  }
  console.log(photos)
  return (
    <div className="gallery">
      <Carousel autoplay={true}>
        {photos?.map((photo, i) => (
          <div className="item" key={i}>
            <img style={styles} src={photo.key} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default React.memo(Gallery)
