//i18ns
import Header from '../header'
import CardImage from '../CardImage'
import { PropsScreens } from '@/types/types'

const PEducationScreen = (props: PropsScreens) => {
    return (
        <>
            <Header image={props?.mainPhoto}>
                <>
                    <div className="main__section">
                        <div className="franciscan__index">
                            <div className="secondary__title">
                                <h1>{props?.dataCMS?.}</h1>
                            </div>
                            <div className="half__card" style={{ width: '80%', margin: 'auto' }}>
                                <CardImage title="REFRAMI" img={props?.photos?.find(e => e.name === "photoOne")} />
                                <CardImage title="MIFRAMI" img={props?.photos?.find(e => e.name === "photoTwo")} />
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default PEducationScreen
