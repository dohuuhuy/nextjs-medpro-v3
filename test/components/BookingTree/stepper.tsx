import Container from '../Container'
import React from 'react'
import styles from './less/stepper.module.less'
import { Col, Row } from 'antd'
import { steps } from './utils'

export const Stepper = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <Container className={styles.steps}>
        <Row className={styles.rowStep}>
          <Col span='24' className={styles.colStep}>
            <h2>Bước 1: Chọn chuyên khoa</h2>

            <ul className={styles.listStep}>
              {steps.map((e, i) => {
                return (
                  <li key={i}>
                    <button className={styles.btnIcon}>{e.icon}</button>
                    <hr />
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
