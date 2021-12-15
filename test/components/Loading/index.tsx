import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'

export interface Loading {
  text?: string
  component?: boolean
  top?: boolean
}

const Loading = ({
  text = 'Vui lòng chờ trong giây lát ...',
  component = false,
  top
}: Loading) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin={true} />

  return (
    <div
      className={cx(
        component ? styles.componentLoading : styles.pageLoading,
        top && styles.top
      )}
    >
      <Spin indicator={antIcon} />
      <div className={styles.content}>
        <p className={styles.typing}>{text}</p>
      </div>
    </div>
  )
}

export default Loading
