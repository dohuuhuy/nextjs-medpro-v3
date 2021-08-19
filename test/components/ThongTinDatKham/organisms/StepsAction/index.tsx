import { Button, Space } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export const StepsAction = (props: any) => {
  const { next, prev, steps, current, onClick } = props

  return (
    <Space className={styles.stepsAction} size={40}>
      {current > 0 && <Button onClick={prev}>Quay lại</Button>}

      {current < steps.length - 1 && (
        <Button type='primary' onClick={next}>
          Tiếp tục
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button type='primary' onClick={onClick}>
          Xác nhận
        </Button>
      )}
    </Space>
  )
}
