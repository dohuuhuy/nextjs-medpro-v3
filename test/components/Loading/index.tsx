import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export interface Loading {
  text?: string
}

const Loading = ({ text = 'Vui lòng chờ trong giây lát ...' }: Loading) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin={true} />

  return (
    <div className={styles.containerLoading}>
      <Spin indicator={antIcon} />
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Loading
