import React from 'react'
//i18n
import Header from '../header'

const SanctuaryScreen = () => {
    return (
        <>
            <Header image={'/images/eucharistic/santuario.png'}>
                <>
                    <div className="main__section">
                        <div className="eucharistic__index">
                            <div className="video__about">
                                <video src="" controls></video>
                                <div className="secondary__title">
                                    <h1>SANTUARIO EUCARÍSTICO</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Header>
        </>
    )
}

export default SanctuaryScreen