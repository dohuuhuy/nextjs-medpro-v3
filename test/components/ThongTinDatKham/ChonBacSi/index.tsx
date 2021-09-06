import React from 'react'
// import styles from './styles.module.less'
import { Space, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const ChonBacSi = () => {
  const onChange = () => {
    console.log('Cần setting')
  }
  return (
    <div>
      <Space>
        <Input
          size='large'
          placeholder='Tìm nhanh chuyên khoa'
          autoFocus={true}
          prefix={<SearchOutlined />}
          allowClear={true}
          onChange={onChange}
        />
      </Space>
    </div>
  )
}
