import { PropsBeFranciscan } from '@/types/types'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const FranciscanScreen = (props: PropsBeFranciscan) => {
  // const { t } = useTranslation()

  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div dangerouslySetInnerHTML={{ __html: props.dataCMS.title }} className="secondary__title"></div>
              <div className="container__iframe">
                <div className="video">
                  <iframe
                    allowFullScreen
                    src={props.dataCMS.linkVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section">
            <div className="franciscan__index">
              <div dangerouslySetInnerHTML={{ __html: props.dataCMS.contactTitle }} className="secondary__title"></div>
              <div className="card__holder">
                <TargetText
                  // background={props.colors?.find(e => e.name === 'textContact_ColorBack').color}
                  text={props.dataCMS.textContact}
                />
                <TargetText
                  // background={props.colors?.find(e => e.name === 'contact_ColorBack').color}
                  text={props.dataCMS.contact}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default FranciscanScreen
