import { Row } from 'antd'
import React from 'react'
import Container from '../Container'
import style from './styles.module.less'

export const CopyRight = () => {
  return (
    <div className={style.copyRight}>
      <Container>
        <Row>
          <p className={style.textCopyRight}>
            © 2020 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH
          </p>
        </Row>
      </Container>
    </div>
  )
}
