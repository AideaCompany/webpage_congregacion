//i18ns
import { PropsScreens } from '@/types/types'
import Gallery from '../Gallery'
import Header from '../header'
import TargetText from '../TargetText'

const PostulancyScreen = (props: PropsScreens) => {
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="franciscan__index">
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
              <div className="container__franciscan">
                <Gallery photos={props.carousel?.find(e => e.name === 'gallery').carousel} />
                <TargetText
                  // background={props.colors?.find(e => e.name === 'mainText_ColorBack').name}
                  text={props?.dataCMS?.mainText}
                />
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default PostulancyScreen
