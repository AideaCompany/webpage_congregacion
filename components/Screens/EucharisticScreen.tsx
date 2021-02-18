//i18ns
import Header from '../header'
import { lorem_ipsum } from '../lorem_ipsum'

import TargetText from '../TargetText'

const EucharisticScreen = (props: PropsScreens) => {
    return (
        <>
            <Header image={props?.mainPhoto}>
                <>
                    <div className="main__section">
                        <div className="eucharistic__index">
                            <div className="secondary__title">
                                <h1>{props?.dataCMS?.}/h1>
                            </div>
                            <div className="half__card">
                                <TargetText text={lorem_ipsum} />
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default EucharisticScreen
