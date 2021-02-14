//i18ns
import Header from '../header'
import { lorem_ipsum } from '../lorem_ipsum'

import TargetText from '../TargetText'

const SaintScreen = (props: { title: string, img: string, background: string }) => {
    return (
        <>
            <Header image={props.background}>
                <>
                    <div className="main__section">
                        <div className="spirituality__index">
                            <div className="secondary__title">
                                <h1>{props.title}</h1>
                            </div>
                            <div className="img__card">
                                <TargetText text={lorem_ipsum} />
                                <div className="img__cont">
                                    <img src={props.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default SaintScreen
