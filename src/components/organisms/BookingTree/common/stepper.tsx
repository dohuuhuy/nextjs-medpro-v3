import Container from '@componentsTest/Container'
import { Col, Row, Tooltip } from 'antd'
import React from 'react'
import styles from './../less/stepper.module.less'
import { checkActive, steps } from './utils'

export const Stepper = ({ data }: any) => {
  return (
    <Container fluid={true} className={styles.wrapper}>
      <Container className={styles.steps}>
        <Row className={styles.rowStep}>
          <Col span='24' className={styles.colStep}>
            <h2>Bước 1: Chọn chuyên khoa</h2>

            <ul className={styles.listStep}>
              {data.stepper?.map((v: any, i: number) => {
                const w = (1 / steps.length) * 100
                const active = checkActive(v.selected, {
                  keys: v.key,
                  state: data
                })
                  ? styles.active
                  : ''
                return (
                  <li key={i} style={{ width: w + '%' }} className={active}>
                    <Tooltip title={v.title} color={'#2db7f5'}>
                      <button className={styles.btnIcon}>{v.icon()}</button>
                    </Tooltip>
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
