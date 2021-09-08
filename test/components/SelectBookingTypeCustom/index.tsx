import Container from '../Container'
import { Row, Col, Space, Button } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import { useRouter } from 'next/router'
export interface Reserver {
  typeBooking: any[]
}


export const SelectBookingTypeCustom = (props: Reserver) => {
  const router = useRouter()
  const { site } = router.query
  return (
    <Container className={styles.container}>
      <Row className={styles.rowTypeBooking}>
        <Col xl={24} className={styles.colTitle}>
          <h1>CHỌN HÌNH THỨC ĐẶT KHÁM</h1>
        </Col>
        <Col xl={24} className={styles.colTypeBooking}>
          <ul className={styles.listTypeBooking}>
            {props.typeBooking.map(({ image, name }: any, index: any) => {
              return (
                <li key={index + "id"} onClick={() => router.push(`/${site}/thong-tin-dat-kham`)}>
                  <Space className={styles.typeBooking}>
                    <Space className={styles.Icon}>
                      <img
                        src={image}
                        alt="" />
                    </Space>
                    <p>{name}</p>
                  </Space>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
      <div className={styles.btn} >
        <Button onClick={() => router.back()}>Quay lại</Button>
      </div>
    </Container>
  )
}
