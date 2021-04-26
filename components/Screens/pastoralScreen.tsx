//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const PastoralScreen = (props: PropsScreens) => {
  console.log(props.dataCMS)
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
              <div className="half__card">
                <TargetText title={props?.dataCMS?.titleOrientation} text={props?.dataCMS?.textOrientation} />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PastoralScreen
