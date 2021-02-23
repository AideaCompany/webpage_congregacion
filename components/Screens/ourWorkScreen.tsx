import { fileType, PropsOurWorkScreen } from '@/types/types'
//antd
import { List } from 'antd'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import { News } from '../News'

// import TargetText from '../TargetText'

const OurWork = (props: PropsOurWorkScreen) => {
  // const { t } = useTranslation()

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="ourwork__container">
              <div className="container__news">
                <div className="main__news">
                  <News
                    title={props.dataNews[0].title as string}
                    img={(props.dataNews[0].image as fileType).key}
                    description={props.dataNews[0].description as string}
                  />
                </div>
                <div className="news">
                  <List
                    size="default"
                    pagination={{ pageSize: 2 }}
                    dataSource={props.dataNews}
                    renderItem={item => {
                      return (
                        <List.Item>
                          <News title={item.title as string} img={(item.image as fileType).key} description={item.description as string} />
                        </List.Item>
                      )
                    }}
                  />
                </div>
              </div>
              <div className="secondary__title">
                <h1>{props?.dataCMS?.title}</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default OurWork
