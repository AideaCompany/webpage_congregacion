//i18ns
import { PropsMadreScreen } from '@/types/types'
import React from 'react'
import Gallery from '../Gallery'
import Header from '../header'
import TargetText from '../TargetText'

const MadreScreen = (props: PropsMadreScreen) => {
  console.log(props.carousel)

  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="img__card">
                <TargetText text={props.select_back === 'background' ? props.dataCMS.text_back : null} />
                <TargetText
                  // background={props.colors?.find(e => e.name === 'mainText_ColorBack').name}
                  text={props?.dataCMS?.mainText}
                />
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="spirituality__index">
              <div dangerouslySetInnerHTML={{ __html: props?.dataCMS?.tittleArticuleOne }} className="secondary__title"></div>
              <div className="img__card">
                <Gallery contain photos={props.carousel?.find(e => e.name === 'articulePhotoOne').carousel} />

                <TargetText
                  // background={props.colors?.find(e => e.name === 'ariculeOne_ColorBack').color}
                  text={props?.dataCMS?.articuleOne}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default MadreScreen
