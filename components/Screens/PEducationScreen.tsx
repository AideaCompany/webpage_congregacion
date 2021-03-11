//i18ns
import Header from '../header'
import { PropsScreens } from '@/types/types'
import TargetText from '../TargetText'

const PEducationScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="img__card">
                <TargetText text={props.dataCMS.text}>
                  <a target="__blank" href={props.dataCMS.link}>
                    Enlance Asambleas
                  </a>
                </TargetText>
                <div className="img__cont">{props.photos && <img src={props.photos?.find(e => e.name === 'photoOne').photos[0].key} alt="" />}</div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PEducationScreen
