import { Col, Row } from 'antd'
import React from 'react'
import Container from '../Container'
import styles from './less/stepper.module.less'
import { steps } from './utils'

export const Stepper = ({ data }: any) => {
  return (
    <Container fluid={true} className={styles.wrapper}>
      <Container className={styles.steps}>
        <Row className={styles.rowStep}>
          <Col span='24' className={styles.colStep}>
            <h2>Bước 1: Chọn chuyên khoa</h2>

            <ul className={styles.listStep}>
              {data.map((e: any, i: number) => {
                const w = (1 / steps.length) * 100
                return (
                  <li key={i} style={{ width: w + '%' }}>
                    {/* <hr className={styles.hrBe} /> */}
                    <button className={styles.btnIcon}>{e.icon()}</button>
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
