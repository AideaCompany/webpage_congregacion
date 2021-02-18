import React, { useEffect, useState } from 'react'
import { News } from '../News'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'

//antd
import { List } from 'antd'
import { PropsScreens } from '@/types/types'
// import TargetText from '../TargetText'

const OurWork = (props: PropsScreens) => {
  // const { t } = useTranslation()

  const [data, setData] = useState<any[]>()

  useEffect(() => {
    var temp = []
    for (let k = 0; k < 50; k++) {
      temp.push(k)
    }
    setData(temp)
  }, [])

  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="ourwork__container">
              <div className="container__news">
                <div className="main__news">
                  <News />
                </div>
                <div className="news">
                  <List
                    size="default"
                    pagination={{ pageSize: 2 }}
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <News />
                      </List.Item>
                    )}
                  />
                </div>
              </div>
              <div className="secondary__title">
                <h1>{props?.dataCMS?.}</h1>
              </div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default OurWork
