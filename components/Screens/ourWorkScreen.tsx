import { fileType, PropsOurWorkScreen } from '@/types/types'
//antd
import { List } from 'antd'
import useTranslation from 'hooks/useTranslations'
import React from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'
import { News } from '../News'
import TargetText from '../TargetText'

// import TargetText from '../TargetText'

const OurWork = (props: PropsOurWorkScreen) => {
  const { locale } = useTranslation()

  console.log(props.dataCMS)
  return (
    <>
      <Header image={props?.mainPhoto}>
        <>
          <div className="main__section">
            <div className="ourwork__container">
              <div className="container__news">
                <div className="main__news">
                  <TargetText text={props?.dataCMS?.textOurWork} />
                </div>
                <div className="news">
                  <List
                    size="default"
                    pagination={{ pageSize: 2, style: { width: '100%' }, showLessItems: true, position: 'top' }}
                    dataSource={props.dataNews}
                    renderItem={item => {
                      return (
                        <List.Item>
                          <News
                            _id={item._id as string}
                            title={item[locale]?.title as string}
                            img={(item.image as fileType).key}
                            description={item[locale]?.description as string}
                          />
                        </List.Item>
                      )
                    }}
                  />
                </div>
              </div>
              <div className="secondary__title" dangerouslySetInnerHTML={{ __html: props.dataCMS.title }}></div>
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default OurWork
