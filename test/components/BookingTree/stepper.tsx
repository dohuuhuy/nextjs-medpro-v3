import Container from '../Container'
import React from 'react'
import styles from './less/stepper.module.less'
import { Col, Row } from 'antd'
import { steps } from './utils'

export const Stepper = () => {
  return (
    <Container fluid={true} className={styles.wrapper}>
      <Container className={styles.steps}>
        <Row className={styles.rowStep}>
          <Col span='24' className={styles.colStep}>
            <h2>Bước 1: Chọn chuyên khoa</h2>

            <ul className={styles.listStep}>
              {steps.map((e, i: number) => {
                const w = (1 / steps.length) * 100
                return (
                  <li key={i} style={{ width: w + '%' }}>
                    {/* <hr className={styles.hrBe} /> */}
                    <button className={styles.btnIcon}>{e.icon}</button>
                    <hr className={styles.hrAf} />
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
