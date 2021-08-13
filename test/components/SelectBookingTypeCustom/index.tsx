import Container from '@components/atoms/Container'
import { Row, Col } from 'antd'
import React from 'react'
import styles from './styles.module.less'

export const SelectBookingTypeCustom = () => {
  return (
    <Container className={styles.container}>
      <h2>Chọn hình thức đặt khám</h2>
      <Row className={styles.rowType}>
        <Col xs={24} sm={12} md={12} xl={12} className={styles.colType}>
          <div className={styles.card}>
            <figure className={styles.cardImg}>
              <img
                src={'https://api-v2.medpro.com.vn:5000/st/feature/dv1.svg'}
                alt=''
              />
            </figure>
            <p>Đặt khám</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} xl={12} className={styles.colType}>
          <div className={styles.card}>
            <figure className={styles.cardImg}>
              <img
                src={'https://api-111.medpro.com.vn:5000/st/feature/covid.svg'}
                alt=''
              />
            </figure>
            <p>Tiêm Vacxin</p>
          </div>
        </Col>
      </Row>
      <div className={styles.btn}>Quay lại</div>
    </Container>
  )
}
