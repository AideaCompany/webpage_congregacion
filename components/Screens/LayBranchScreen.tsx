//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const LayBranchScreen = (props: PropsScreens) => {
  console.log(props.colors)

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index ">
              <div dangerouslySetInnerHTML={{ __html: props?.dataCMS.title }} className="secondary__title"></div>
              <div className="img__card">
                <TargetText
                  background={props.colors?.find(e => e.name === 'mainText_ColorBack').color}
                  title={props.dataCMS.titleMiframi}
                  text={props.dataCMS.mainText}
                />
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
