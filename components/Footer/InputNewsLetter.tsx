import React from 'react'
//Ant
import { Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
const InputNewsLetter = () => {
  return (
    <Input.Search
      size="large"
      style={{ width: '70%' }}
      placeholder="Correo Electrónico"
      enterButton={<EditOutlined style={{ color: 'rgba(255,255,255,1)' }} />}
    />
  )
}

export default InputNewsLetter
