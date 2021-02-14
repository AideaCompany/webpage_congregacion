//i18ns
import Header from '../header'
import { lorem_ipsum } from '../lorem_ipsum'

import TargetText from '../TargetText'

const PostulancyScreen = () => {
    return (
        <>
            <Header image={'/images/franciscan/franciscan.png'}>
                <>
                    <div className="main__section">
                        <div className="franciscan__index">
                            <div className="secondary__title">
                                <h1>POSTULANTADO</h1>
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

export default PostulancyScreen
