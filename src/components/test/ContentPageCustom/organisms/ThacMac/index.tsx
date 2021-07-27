import { Col, Row } from 'antd'
import React from 'react'
import Container from '../../../Container'
import style from './styles.module.less'

export const ThacMacContent = ({ content }: any) => {
  if (!content || Object.keys(content).length < 1) {
    return <em>Lỗi không có content ...</em>
  }

  return (
    <Container className={style.ThacMacContent}>
      <Row className={style.rowThacMac}>
        <Col xl={6} className={style.colMenu}>
          giải đáp nhanh
        </Col>
        <Col className={style.colContentMenu}>collasp</Col>
      </Row>
    </Container>
  )
}
