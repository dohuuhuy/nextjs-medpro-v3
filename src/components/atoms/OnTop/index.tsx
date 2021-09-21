import { ArrowUpOutlined } from '@ant-design/icons'
import { BackTop } from 'antd'
import React from 'react'

export const OnTop = () => {
  return (
    <BackTop>
      <div
        style={{
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          backgroundColor: '#1088e9',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14
        }}
      >
        <ArrowUpOutlined />
      </div>
    </BackTop>
  )
}
