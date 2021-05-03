//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const PastoralScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="half__card">
                <TargetText
                  background={props.colors?.find(e => e.name === 'textOrientation_ColorBack').color}
                  title={props?.dataCMS?.titleOrientation}
                  text={props?.dataCMS?.textOrientation}
                />
                <div className="video__pastoral">
                  <div>
                    <iframe
                      src={props.dataCMS.linkVideo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PastoralScreen
