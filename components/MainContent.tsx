import Image from 'next/image'
import React from 'react'

const MainContent = () => {
  return (
    <div className="indexContentContainer">
      <div className="aboutUs">
        <div className="aboutUs__info">
          <h1>NOSTOROS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          </p>
        </div>
        <div className="aboutUs__images">
          <Image width={357} height={476} src="/images/index/hermana1.png" />
          <Image width={357} height={363} src="/images/index/hermana2.png" />
          <Image width={411} height={730} src="/images/index/hermana3.png" />
        </div>
      </div>

      <div className="our-headquarters">
        <div className="our-headquarters__images">
          <Image width={347} height={359} src="/images/index/rectangle.png" />
          <Image width={347} height={359} src="/images/index/rectangle.png" />
          <Image width={347} height={359} src="/images/index/rectangle.png" />
          <Image width={347} height={359} src="/images/index/rectangle.png" />
        </div>
        <div className="our-headquarters__info">
          <h1>NUESTRAS SEDES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.{' '}
          </p>
        </div>
      </div>

      <div className="lastNews">
        <h1>ÚLTIMAS NOTICIAS</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque </p>
        <Image width={388} height={317} src="/images/index/papa-francisco.png" />
      </div>
    </div>
  )
}

export default MainContent
