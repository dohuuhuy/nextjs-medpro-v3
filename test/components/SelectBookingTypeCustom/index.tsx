import Container from '../Container'
import { Row, Col } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export interface Reserver {
  typeBooking: any
}

export const SelectBookingTypeCustom = (props: Reserver) => {
  console.log("props ", props)
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={24} sm={24} md={24} xl={24}>
          <h1>CHỌN HÌNH THỨC ĐẶT KHÁM</h1>
        </Col>
        <Col xs={24} sm={24} md={24} xl={24}>
          <ul>

          </ul>
        </Col>
      </Row>
      <div className={styles.btn}>Quay lại</div>
    </Container>
  )
}
