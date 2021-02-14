//i18ns
import Header from '../header'
import { lorem_ipsum } from '../lorem_ipsum'

import TargetText from '../TargetText'

const EuchSpiritualityScreen = () => {
    return (
        <>
            <Header image={'/images/eucharistic/index.png'}>
                <>
                    <div className="main__section">
                        <div className="eucharistic__index">
                            <div className="secondary__title">
                                <h1>ESPIRITUALIDAD EUCARÍSTICA</h1>
                            </div>
                            <div className="half__card">
                                <div className="cont__img">
                                    <img src="/images/eucharistic/espiritualidad.png" alt="" />
                                </div>
                                <TargetText text={lorem_ipsum} />
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default EuchSpiritualityScreen
