import { Col, Row, Space } from 'antd'
import { uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'

export const SelectBookingTypeCustom = (props: Reserver) => {
  const router = useRouter()
  const { site } = router.query

  const directRoute = () => {
    router.push(`/${site}/thong-tin-dat-kham`)
  }

  return (
    <Container className={styles.container}>
      <Row className={styles.rowTypeBooking}>
        <Col span='24' className={styles.colTitle}>
          <h2>Chọn hình thức đặt khám</h2>
        </Col>
        <Col span='24' className={styles.colTypeBooking}>
          <ul className={styles.listTypeBooking}>
            {props?.typeBooking?.map((e) => {
              return (
                <li key={uniqueId()} onClick={directRoute}>
                  <Space className={styles.typeBooking}>
                    <figure className={styles.icon}>
                      <img src={e?.image} alt='' />
                    </figure>
                    <p>{e?.name}</p>
                  </Space>
                </li>
              )
            })}
          </ul>
        </Col>
      </Row>

      <Row>
        <Col span='24' className='py-15 mx-15'>
          <hr />
        </Col>
        <Col span='24' className='mx-15'>
          <a className={styles.btn} onClick={() => router.back()}>
            Quay lại
          </a>
        </Col>
      </Row>
    </Container>
  )
}
export interface Reserver {
  typeBooking: typeBooking[]
}

interface typeBooking {
  image: string
  name: string
}
