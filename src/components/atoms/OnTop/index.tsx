import { ArrowUpOutlined } from '@ant-design/icons'
import { BackTop } from 'antd'
import React from 'react'

const styleBackTop: any = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14
}

export const OnTop = () => {
  return (
    <BackTop>
      <div style={styleBackTop}>
        <ArrowUpOutlined />
      </div>
    </BackTop>
  )
}
