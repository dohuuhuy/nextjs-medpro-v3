import { CardFee } from '../CardFee'
import { Col, Row } from 'antd'
import cx from 'classnames'
import React from 'react'
import Container from '../Container'
import { Icon } from '../Icon'
import { Stepper } from './stepper'
import styles from './less/styles.module.less'
import { steps } from './utils'

export interface BookingTreeIF {
  [T: string]: any
}

export default function BookingTree() {
  const [id, setid] = React.useState(0)
  const [toggle, settoggle] = React.useState(true)

  const clickStep = (i: any) => {
    if (i !== id) {
      setid(i)
      settoggle(false)
    } else {
      if (toggle) {
        setid(i)
        settoggle(false)
      } else {
        setid(-1)
        settoggle(true)
      }
    }
  }

  const checkOut = (i: any) => {
    return Number(i) === Number(id) ? styles.out : styles.in
  }

  return (
    <React.Fragment>
      <Stepper />
      <Container className={styles.bookingTree}>
        <Row className={styles.rowBody}>
          <Col {...colLeft} className={styles.colLeft}>
            <ul className={styles.listTree}>
              {steps.map((v, i) => {
                return (
                  <li key={i}>
                    <div className={styles.card}>
                      <h3 onClick={() => clickStep(i)}>
                        {v.title} <Icon name='arrowDown' size='15' />
                      </h3>

                      <div
                        className={cx(
                          styles.input,
                          i === id ? styles.dnone : ''
                        )}
                        onClick={() => clickStep(i)}
                      >
                        {v.icon}
                        <span>{'Chọn ' + v.title.toLowerCase()}</span>
                      </div>

                      <div className={cx(styles.content, checkOut(i))}>
                        {v?.content}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col {...colRight} className={styles.colRight}>
            <CardFee />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const colLeft = {
  xl: 16,
  lg: 16,
  md: 16,
  sm: 24,
  xs: 24
}

const colRight = { xl: 8, lg: 8, md: 8, sm: 24, xs: 24 }
