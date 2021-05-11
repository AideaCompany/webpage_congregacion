//i18ns
import Header from '../header'
import { PropsScreens } from '@/types/types'
import TargetText from '../TargetText'
import Gallery from '../Gallery'

const PEducationScreen = (props: PropsScreens) => {
  return (
    <>
      <Header color={props.background} select_back={props.select_back} image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="spirituality__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="img__card">
                <Gallery photos={props.carousel?.find(e => e.name === 'photoOne').carousel} />
                <TargetText
                  // background={props.colors?.find(e => e.name === 'text_ColorBack').color}
                  text={props.dataCMS.text}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PEducationScreen
