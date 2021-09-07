import Container from '../Container'
import { Row, Col, Space } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import Image from 'next/image'
export interface Reserver {
  typeBooking: any[]
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
            {props.typeBooking.map(({ image, name }: any, index: any) => {
              const ImageUrl = image
              return (
                <li key={index + "id"}>
                  <div>
                    <figure>
                      <img
                        src={ImageUrl} alt="" />
                    </figure>
                    <p>{name}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>
      <div className={styles.btn}>Quay lại</div>
    </Container>
  )
}
