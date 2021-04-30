//i18ns
import { PropsScreens } from '@/types/types'
import Header from '../header'
import TargetText from '../TargetText'

const juneradoScreen = (props: PropsScreens) => {
  console.log(props.dataCMS)
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="half__card">
                <TargetText
                  background={props.colors?.find(e => e.name === 'mainText_ColorBack').name}
                  text={props.dataCMS.mainText}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default juneradoScreen
