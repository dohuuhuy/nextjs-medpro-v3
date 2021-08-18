import Container from '@componentsTest/Container'
import React from 'react'
import styles from './styles.module.less'
import { Button } from 'antd'
import {
  DeleteOutlined,
  ArrowRightOutlined
} from '@ant-design/icons'

export const CardFooter = () => {
  return (
    <Container>
      <div className={styles.cardFooter}>
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
          size='large'
          icon={<ArrowRightOutlined />}
          className={styles.continue}
        >
          Tiếp tục
        </Button>
      </div>
    </Container>
  )
}
