//i18ns
import Header from '../header'
import { PropsScreens } from '@/types/types'
import TargetText from '../TargetText'

const PEducationScreen = (props: PropsScreens) => {
  console.log(props.colors)
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="img__card">
                <TargetText background={props.colors?.find(e => e.name === 'text_ColorBack').color} text={props.dataCMS.text}>
                  <a target="__blank" href={props.dataCMS.link}>
                    Enlance Asambleas
                  </a>
                </TargetText>
                <div className="img__cont">
                  {props.photos && <img src={props.photos?.find(e => e.name === 'photoOne').photos[0].key} alt="" />}
                </div>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PEducationScreen
