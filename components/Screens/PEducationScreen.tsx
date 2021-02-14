//i18ns
import Header from '../header'
import CardImage from '../CardImage'

const PEducationScreen = () => {
    return (
        <>
            <Header image={'/images/franciscan/franciscan.png'}>
                <>
                    <div className="main__section">
                        <div className="franciscan__index">
                            <div className="secondary__title">
                                <h1>FORMACIÓN PERMANENTE</h1>
                            </div>
                            <div className="half__card" style={{ width: '80%', margin: 'auto' }}>
                                <CardImage title="REFRAMI" img={'/images/fraternity/fraternity.png'} />
                                <CardImage title="MIFRAMI" />
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default PEducationScreen
