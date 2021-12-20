import { ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'

interface Props {
  className: any
}

export const CardFooter = ({ className = '' }: Props) => {
  return (
    <div className={cx(styles.cardFooter, className)}>
      <div className={styles.feature}>
        <Button
          size='middle'
          icon={<DeleteOutlined />}
          className={styles.delete}
        >
          Xóa
        </Button>
        <Button
          size='middle'
          icon={<DeleteOutlined />}
          className={styles.repair}
        >
          Sửa
        </Button>
      </div>
      <Button
        size='middle'
        icon={<ArrowRightOutlined />}
        className={styles.continue}
      >
        Đặt khám
      </Button>
    </div>
  )
}
