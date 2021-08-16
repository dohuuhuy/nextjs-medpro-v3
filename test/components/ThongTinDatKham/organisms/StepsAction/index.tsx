import { Button, message } from 'antd'
import React from 'react'
import styles from './styles.module.less'

interface Props {
  next: any
  prev: any
  steps: any
  current: any
}

export const StepsAction = ({ next, prev, steps, current }: Props) => {
  return (
    <div className={styles.stepsAction}>
      {current < steps.length - 1 && (
        <Button type='primary' onClick={next}>
          Tiếp tục
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type='primary'
          onClick={() => message.success('Nhập thông tin đặt khám thành công!')}
        >
          Xác nhận
        </Button>
      )}
      {current > 0 && (
        <Button style={{ marginLeft: '40px' }} onClick={prev}>
          Quay lại
        </Button>
      )}
    </div>
  )
}
