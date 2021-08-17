import { Button, message } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export const StepsAction = (props: any) => {
  const { next, prev, steps, current } = props

  return (
    <div className={styles.stepsAction}>
      {current > 0 && <Button onClick={prev}>Quay lại</Button>}

      {current < steps.length - 1 && (
        <Button type='primary' style={{ marginLeft: '40px' }} onClick={next}>
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
    </div>
  )
}
