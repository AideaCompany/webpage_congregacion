import React from 'react'
//Ant
import { Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import useTranslation from '../../hooks/useTranslations'
const InputNewsLetter = () => {
  const { t } = useTranslation()
  return (
    <Input.Search
      size="large"
      style={{ width: '70%' }}
      placeholder={t('email')}
      enterButton={<EditOutlined style={{ color: 'rgba(255,255,255,1)' }} />}
    />
  )
}

export default InputNewsLetter
