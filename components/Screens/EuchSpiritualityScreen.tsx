//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const EuchSpiritualityScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="eucharistic__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="half__card">
                <div className="cont__img">
                  <img src={props.photos?.find(e => e.name === 'photoMain').photos[0].key} alt="" />
                </div>
                <TargetText text={props?.dataCMS?.mainText} />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default EuchSpiritualityScreen
