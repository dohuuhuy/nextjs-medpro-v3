import { Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import styles from './styles.module.less'

export const CopyRight = () => {
  return (
    <div className={styles.copyRight}>
      <Container>
        <Row>
          <p className={styles.textCopyRight}>
            © 2020 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH
          </p>
        </Row>
      </Container>
    </div>
  )
}
