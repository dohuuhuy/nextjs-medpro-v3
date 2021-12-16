import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.less'

export interface Loading {
  text?: string
  component?: boolean
  top?: boolean
  size?: 14 | 25 | 40 | 60 | undefined
  minHeight?: string
}

const Loading = ({
  text = 'Vui lòng chờ trong giây lát ...',
  component = false,
  top,
  size = 60,
  minHeight = '100'
}: Loading) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin={true} />

  return (
    <div
      style={{ minHeight: minHeight + 'vh' }}
      className={cx(
        component ? styles.componentLoading : styles.pageLoading,
        top && styles.top
      )}
    >
      <Spin indicator={antIcon} />
      {text !== '' && (
        <div className={styles.content}>
          <p className={styles.typing}>{text}</p>
        </div>
      )}
    </div>
  )
}

export default Loading
