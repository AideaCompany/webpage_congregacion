import { Carousel } from 'antd'
import React from 'react'

const Gallery = ({ photos }: { photos?: any[] }) => {
  console.log(photos)
  return (
    <div className="gallery">
      <Carousel autoplay={true}>
        {photos?.map((photo, i) => (
          <div className="item" key={i}>
            <img src={photo.key} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default React.memo(Gallery)
