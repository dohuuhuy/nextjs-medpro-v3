/* eslint-disable no-console */
import { Col, Row } from 'antd'
import React, { useState } from 'react'
import Container from '../Container'
import { CardInfo } from './organisms/CardInfo'
import { CardConcise } from './organisms/cardInfoBooking'
import { StepsCustom } from './organisms/Step/indext'
import { StepsAction } from './organisms/StepsAction'
import styles from './styles.module.less'
import { handleStep } from './utils/handler'
import { Medthods } from './utils/interface'

export interface Props {
  info: any
  bookingTree: any
}

export const ThongTinDatKham = ({ info, bookingTree }: Props) => {
  const stepBooking = bookingTree?.path?.split('_') || []
  const [current, setcurrent] = useState(0)
  const [quickView, setquickView] = useState([])

  console.log('bookingTree :>> ', bookingTree)

  const next = () => {
    window.scrollTo(0, 0)
    setcurrent(current + 1)
  }

  const optional = (i: any) => {
    window.scrollTo(0, 0)
    setcurrent(i)
  }

  const prev = () => {
    window.scrollTo(0, 0)
    setcurrent(current - 1)
  }

  const medthods: Medthods = {
    current,
    stepBooking,
    next,
    prev,
    optional,
    bookingTree,
    quickView,
    setquickView,
    steps: null
  }

  const steps = handleStep(medthods)

  medthods.steps = steps

  return (
    <Container className={styles.BookingInformation}>
      <Row className={styles.rowName}>
        <Col className={styles.colName} xl={24} span={24}>
          <CardInfo info={info} />
        </Col>
      </Row>

      <Row className={styles.rowSteps}>
        <Col xl={24} xs='24' className={styles.colSteps}>
          <StepsCustom {...medthods} />
        </Col>
      </Row>

      <Row className={styles.rowContent}>
        <Col xl={7} lg={7} span={24} className={styles.colInfoBooking}>
          <CardConcise {...medthods} />
        </Col>

        <Col xl={17} lg={17} span={24} className={styles.colStepsContent}>
          <div className={styles.cardStepsContent}>
            <div className={styles.cardHeader}>
              Vui lòng {steps[current]?.title === 'Xác nhận' ? '' : 'chọn'}{' '}
              {steps[current]?.title}
            </div>
            <div className={styles.cardBody}>{steps[current].content}</div>
          </div>
        </Col>
      </Row>

      <Row className={styles.rowStepsAction}>
        <Col xl={24} xs='24' className={styles.colStepsAction}>
          <StepsAction {...medthods} />
        </Col>
      </Row>
    </Container>
  )
}
