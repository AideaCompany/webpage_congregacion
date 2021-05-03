import { Carousel } from 'antd'
import React from 'react'

const Gallery = ({ photos }: { photos?: any[] }) => {
  return (
    <Carousel autoplay={true}>
      {photos?.map((photo, i) => (
        <div key={i}></div>
      ))}
    </Carousel>
  )
}

export default React.memo(Gallery)
