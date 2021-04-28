//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const LayBranchScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index ">
              <div className="secondary__title">
                <h1>{props?.dataCMS.title}</h1>
              </div>
              <div className="img__card">
                <TargetText title={props.dataCMS.titleMiframi} text={props.dataCMS.mainText} />
                <div className="img__cont">
                  {props.photos && <img src={props.photos?.find(e => e.name === 'photoMiframi').photos[0].key} alt="" />}
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default LayBranchScreen
