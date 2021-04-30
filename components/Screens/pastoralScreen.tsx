//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const PastoralScreen = (props: PropsScreens) => {
  console.log(props.colors)
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
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PastoralScreen
